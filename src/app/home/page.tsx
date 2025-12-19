import { Box } from "@mui/material";
import DoctorJourney from "./_sections/DentalJourney";
import DentalServiceshome from "./_sections/DentalServiceshome";
import Testimonials from "./_sections/Testimonials";
import pngs from "@/_assets/pngs";
import DentalSlider from "./_sections/DentalSlider";
import Myproudsmiles from "./_sections/Myproudsmiles";
import Syedqasim from "./_sections/Syedqasim";
import RedefiningYourSmile from "./_sections/RedefiningYourSmile";
import HeroHome from "./_sections/HeroHome";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <HeroHome />
      </Box>
      {/* <MainSection /> */}
      <RedefiningYourSmile />
      <Syedqasim
        title="meet dr. syed qasim"
        description="With a reputation for clinical excellence and patient-centered care, Dr. Syed Qasim brings years of experience and a compassionate approach to dentistry. His commitment to continuous learning and modern techniques ensures every patient receives the highest standard of treatment in a welcoming and comfortable environment. From routine check-ups to advanced dental procedures, Dr. Qasim takes the time to understand each patient's needs, helping them achieve lasting oral health and confident smiles."
        bgColor="#010C0D"
        image={pngs.meetdr}
        imageLeft={true}
      />

      <DentalServiceshome />
      <DentalSlider />
      <Myproudsmiles />
      <Testimonials />
      <DoctorJourney />
      <Footer />
    </>
  );
}
