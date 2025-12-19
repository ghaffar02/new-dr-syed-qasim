import ContactUsSection from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import HeroComponent from "@/_components/HeroComponent";

export default function ContactUs() {
  return (
    <>
      <HeroComponent
        pcBg="/bgcontactpc.webp"
        mobileBg="/mobcontact.webp"
        title="Connect With Dr Syed Qasim"
        descriptionMob="I am here to answer your questions, schedule appointments, and provide the support you need for your dental care."
        titleMob="Connect With me"
        description="I am here to answer your questions, schedule appointments, and provide the support you need for your dental care."
      />
      <ContactUsSection />
      <Footer />
    </>
  );
}
