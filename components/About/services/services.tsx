import Image from 'next/image'

export interface ServicesI {
  title:string,
  description:string,
  imageUrl: string
}

export const SERVICES:ServicesI[] = [
  {
    title: '🤖 Chatbots Inteligentes:',
    description: `Eleva la interacción con tus clientes mediante chatbots inteligentes y personalizados. Desde la
    generación de leads hasta el soporte al cliente, nuestros chatbots mejoran la eficiencia y la
    satisfacción del usuario`,
    imageUrl: 'images/services/chatbot.svg'
  },
  {
    title: '🌐 Desarrollo Web:',
    description: `Diseñamos y desarrollamos sitios web atractivos y funcionales. Cada página web es una
    expresión única de tu marca, diseñada para atraer, retener y convertir visitantes.`,
    imageUrl: 'images/services/desa_web.svg'
  },
  {
    title: '👨‍💻 Desarrollo de Sistemas:',
    description: `Construimos sistemas robustos y escalables que impulsan la eficiencia operativa. Desde
    sistemas de gestión hasta plataformas personalizadas, te ofrecemos soluciones adaptadas a
    tus necesidades.`,
    imageUrl: 'images/services/desa_sys.svg'
  },
  {
    title: '📈 Gestión de Proyectos de Software:',
    description: `Simplificamos el ciclo de vida de desarrollo de software. Nuestro equipo experimentado se
    encarga de la gestión de proyectos para garantizar entregas puntuales y resultados
    excepcionales.`,
    imageUrl: 'images/services/desa_projects.svg'
  },{
    title: '🚀 Servicios TI Personalizados:',
    description: `¿Tienes una idea única? Aceptamos el desafío. Ofrecemos servicios personalizados para
    satisfacer tus necesidades específicas y superar tus expectativas.`,
    imageUrl: 'images/services/per_service.svg'
  }
]
