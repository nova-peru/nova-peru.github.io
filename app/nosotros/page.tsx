import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
//import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Nosotros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
