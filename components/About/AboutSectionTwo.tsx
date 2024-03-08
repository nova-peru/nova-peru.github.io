import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import ServiceBox from "./services/ServiceBox";

const AboutSectionTwo = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="-mx-4 flex flex-wrap items-center">
            <ServiceBox></ServiceBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;