// AboutUspage.tsx
import Footer from "@/_components/Footer";
import HeroComponent from "@/_components/HeroComponent";
import DoctorDetailPage from "./_sections/DoctorDetail";
// import Referralform from "../for-dentists/_sections/Referralform";
// import DoctorSection from "@/_components/DoctorSection";
// import girl2 from "@/_assets/pngs/girl2.png";

export default function AboutUspage() {
  return (
    <>
      <HeroComponent
        pcBg="/bgaboutpc.webp"
        mobileBg="/mobabout.webp"
        title="Dedicated to Your Smile"
        titleMob="Dedicated to Your Smile"
        description="My practice is built on trust, comfort, and a genuine passion for helping people achieve excellent oral health."
        descriptionMob="My practice is built on trust, comfort, and a genuine passion for helping people achieve excellent oral health."
      />
      <DoctorDetailPage />
      {/* <Referralform /> */}
      {/* <DoctorSectio/> */}
      <Footer />
    </>
  );
}
