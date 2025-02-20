import React from 'react'
import Services from '../components/services/Services'
import PatientReviewSlider from '../components/patientReviewSlider/PatientReviewSlider'
import ImageSlider from '../components/imageSlider/ImageSlider'
import ServiceSection from '../components/servicesSection/ServiceSection'
import FAQSection from '../components/FaqSection/FAQSection'
import CTABanner from '../components/CTABanner/CTABanner'

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <PatientReviewSlider />
      <ServiceSection />
      <CTABanner />
      <FAQSection />
      <ImageSlider />
    </div>
  )
}

export default ServicesPage