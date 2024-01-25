import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img data-cy="about-image-2"
                src="images/about/about-image-2.svg"
                alt="about image"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Servicios Principales"
                mb="44px"
              />
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  1. Chatbots Inteligentes:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Eleva la interacción con tus clientes mediante chatbots inteligentes y personalizados. Desde la
                  generación de leads hasta el soporte al cliente, nuestros chatbots mejoran la eficiencia y la
                  satisfacción del usuario.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  2. Desarrollo Web:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Diseñamos y desarrollamos sitios web atractivos y funcionales. Cada página web es una
                  expresión única de tu marca, diseñada para atraer, retener y convertir visitantes.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  3. Desarrollo de Sistemas:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Construimos sistemas robustos y escalables que impulsan la eficiencia operativa. Desde
                  sistemas de gestión hasta plataformas personalizadas, te ofrecemos soluciones adaptadas a
                  tus necesidades.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  4. Gestión de Proyectos de Software:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Simplificamos el ciclo de vida de desarrollo de software. Nuestro equipo experimentado se
                  encarga de la gestión de proyectos para garantizar entregas puntuales y resultados
                  excepcionales.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  5. Servicios TI Personalizados:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ¿Tienes una idea única? Aceptamos el desafío. Ofrecemos servicios personalizados para
                  satisfacer tus necesidades específicas y superar tus expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
