import Footer from "@/_components/Footer";
import HeroComponent from "@/_components/HeroComponent";
import GridSection from "@/_components/GridSection";
// import { Box } from "@mui/system";

const SmileGalleries = () => {
  return (
    <>
      {/* <Box sx={{ height: "100vh", width: "100vw" }}> */}
      <HeroComponent
        pcBg="/bgsmilepc.webp"
        mobileBg="/mobsmile.webp"
        title="Gallery of Happy Smiles"
        titleMob="Gallery of Happy Smiles"
        description="See the difference a confident smile can make. My Smiling Gallery showcases real transformations of patients who trusted me with their dental care."
        descriptionMob="See the difference a confident smile can make. My Smiling Gallery showcases real transformations of patients who trusted Dr Syed Qasim with their dental care."
      />
      {/* </Box> */}

      <GridSection />
      <Footer />
    </>
  );
};
export default SmileGalleries;
