import HeroComponent from "@/_components/HeroComponent";
// import DentalServices from "./_sections/DentalServices";
import Footer from "@/_components/Footer";
import DoctorServicesPage from "@/app/services/_sections/DoctorServices";

export default function Services() {
  return (
    <>
      <HeroComponent
        pcBg="/bgservicepc.webp"
        mobileBg="/mobservies.webp"
        title="Your Smile, my Priority"
        titleMob="Your Smile, my Priority"
        description="Discover a full range of modern dental services designed to keep your smile healthy, confident, and beautiful. "
        descriptionMob="Discover a full range of modern dental services designed to keep your smile healthy, confident, and beautiful."
      />
      {/* <DentalServices /> */}
      <DoctorServicesPage />
      <Footer />
    </>
  );
}
