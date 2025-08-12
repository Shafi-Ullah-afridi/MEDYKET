import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'

//API to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" })
        }
        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for user login

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User does not exist' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
//API to get user Profile data
const getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await userModel.findById(userId).select('-password')
        res.json({ success: true, userData })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}
//API to Update User Profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.userId; // ✅ Use ID from auth middleware
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    // Validate required fields
    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" });
    }

    // Parse address only if it's provided
    let parsedAddress = address;
    try {
      if (address && typeof address === 'string') {
        parsedAddress = JSON.parse(address);
      }
    } catch (err) {
      return res.json({ success: false, message: "Invalid address format" });
    }

    // Update basic user info
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: parsedAddress,
      dob,
      gender,
    });

    // If an image was uploaded, upload and update the image URL
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: 'image',
      });
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}
//API to book appintment
const  bookAppointment = async (req,res) =>{
  
  try{
    const { docId,slotDate,slotTime}=req.body
    const userId = req.userId 
     const docData = await doctorModel.findById(docId).select('-password')

     if(!docData.available){
      return res.json({success:false,message:'Doctor not available'})
     }
 let slots_booked = docData.slots_booked || {};


     //checking for slot availablity
     if(slots_booked[slotDate]){
      if(slots_booked[slotDate].includes(slotTime)){
        return res.json({success:false,message:'Slot not available'})
      }
      else{
        slots_booked[slotDate].push(slotTime)
      }
     }else{
      slots_booked[slotDate]= []
      slots_booked[slotDate].push(slotTime)
     }

     const userData = await userModel.findById(userId).select('-password')
     delete docData.slots_booked

     const appintmentData = {
      userId,
      docId,
      userData,
      docData,
      amount:docData.fees,
      slotTime,
      slotDate,
      date:Date.now()
     }
     const newAppintment = new appointmentModel(appintmentData)
     await newAppintment.save()

     // save new slots data in docData
     await doctorModel.findByIdAndUpdate(docId,{slots_booked})
     res.json({success:true,message:'Appointment Booked'})
  }
  catch(error)
  {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
//Api to get user appointment for frontent my-appointments page

const listAppointment = async (req,res) =>{

  try{
    const userId = req.userId;
    const appointments = await appointmentModel.find({userId})
    res.json({success:true,appointments})

  }catch(error){
     console.log(error)
    res.json({success:false,message:error.message})
  }
}

// API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const userId = req.userId; // from auth middleware

    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    // Verify appointment belongs to user
    if (appointmentData.userId.toString() !== userId) {
      return res.status(403).json({ success: false, message: 'Unauthorized action' });
    }

    // Cancel appointment
    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    // Release doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    if (!doctorData) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    let slots_booked = doctorData.slots_booked || {};

    if (slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);
    }

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: 'Appointment cancelled successfully' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { registerUser, loginUser, getProfile ,updateProfile,bookAppointment,listAppointment,cancelAppointment}