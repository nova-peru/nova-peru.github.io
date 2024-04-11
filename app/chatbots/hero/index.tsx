import Image from 'next/image';

import TextSwiper from '@/components/ui/TextSwiper';

const TEXTS = ['IA', 'Flujos', 'Superpoderes'];

export default function Hero() {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="flex space-x-12">
          <div className="flex-1">
            <div className="mb-10 mr-3 inline-flex items-center justify-center rounded-sm bg-primary bg-opacity-10 px-4 py-2 text-body-color">
              Chatbots
            </div>

            <div className="mb-10 mr-3 inline-flex items-center justify-center rounded-sm bg-primary bg-opacity-10 px-4 py-2 text-body-color">
              Meta
            </div>

            <div className="mb-10 mr-3 inline-flex items-center justify-center rounded-sm bg-primary bg-opacity-10 px-4 py-2 text-body-color">
              IA
            </div>

            <h1 className="text-3xl md:text-3xl lg:text-8xl">
              Libera el potencial de tus ventas con un Chatbot con
              <TextSwiper textArr={TEXTS} delay={3000} />
            </h1>

            <p className="mt-4 text-base md:mt-12 lg:mt-12 lg:text-2xl">
              Fomenta relaciones significativas y de alto valor entre tu empresa
              y tus clientes.
            </p>

            <div className="mt-4 flex flex-col space-y-2 md:mt-12 md:flex-row md:space-x-2 md:space-y-0">
              <a
                href="#pricing"
                className="rounded-md bg-body-color px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              >
                Ver Planes
              </a>

              <a
                href="/chatbot-business-onboard"
                target="_blank"
                className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              >
                Ver muestra interactiva
              </a>
            </div>
          </div>
          <div className="hidden max-w-xl md:block">
            <Image
              src={'images/chatbots/wsp.webp'}
              alt="Chatbot Whastapp"
              className="h-full w-full object-cover"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
