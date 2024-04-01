'use client'

import SectionTitle from "../Common/SectionTitle";
import { videos } from './videos';
import VideoList from './VideoList';


const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Chatbot:"
          subtitle="Descubre el potencial de la IA en tu negocio"
          paragraph="Conectamos tu empresa con la IA para gestionar tus conexiones entre tus agentes y
          tus clientes en tiempo real."
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-row space-x-12 justify-center">
          {<VideoList videos={videos}></VideoList>}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
