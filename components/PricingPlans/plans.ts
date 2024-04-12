type Plan = {
  name: string;
  subtitle?: string;
  customPrice?: string;
  monthlyPrice?: string;
  anualPrice?: string;
  features: Array<{
    label: string;
    active: boolean;
  }>;
};

const plans: Plan[] = [
  {
    name: 'Emprendedor',
    subtitle: 'Lleva al siguiente nivel tu emprendimiento o negocio.',
    monthlyPrice: '99',
    anualPrice: '89',
    features: [
      {
        label: 'Diseño e Implementación*',
        active: true,
      },
      {
        label: 'Hasta 3 flujos conversacionales',
        active: true,
      },
      {
        label: '1 Integración externa',
        active: true,
      },
      {
        label: 'Hasta 3 actualizaciones por mes',
        active: true,
      },
      {
        label: 'Soporte Técnico',
        active: true,
      },
    ],
  },
  {
    name: 'Profesional',
    subtitle:
      'Perfecto para empresas de tamaño medio que buscan dar el gran salto.',
    monthlyPrice: '499',
    anualPrice: '479',
    features: [
      {
        label: 'Diseño e Implementación*',
        active: true,
      },
      {
        label: 'Hasta 5 flujos conversacionales',
        active: true,
      },
      {
        label: '3 Integraciones externas',
        active: true,
      },
      {
        label: 'Hasta 5 actualizaciones por mes',
        active: true,
      },
      {
        label: 'Soporte Técnico',
        active: true,
      },
    ],
  },
  {
    name: 'Business',
    subtitle: 'Estás preparado para dar la gran batalla a tus grandes rivales.',
    monthlyPrice: '1000',
    anualPrice: '950',
    features: [
      {
        label: 'Diseño e Implementación*',
        active: true,
      },
      {
        label: 'Hasta 8 flujos conversacionales',
        active: true,
      },
      {
        label: '8 Integraciones externas',
        active: true,
      },
      {
        label: 'Hasta 8 actualizaciones por mes',
        active: true,
      },
      {
        label: 'Soporte Técnico',
        active: true,
      },
    ],
  },
  {
    name: 'Pro',

    subtitle:
      'Múltiples Chatbots para múltiples productos y gran volumen de clientes.',
    monthlyPrice: '2000',
    anualPrice: '1800',
    features: [
      {
        label: 'Diseño e Implementación*',
        active: true,
      },
      {
        label: 'Hasta 8 flujos conversacionales',
        active: true,
      },
      {
        label: '8 Integraciones externas',
        active: true,
      },
      {
        label: 'Hasta 8 actualizaciones por mes',
        active: true,
      },
      {
        label: 'Soporte Técnico',
        active: true,
      },
    ],
  },
  {
    name: 'Platinum',
    subtitle:
      'Múltiples Chatbots para múltiples productos y gran volumen de clientes.',
    customPrice: 'Conversemos',
    features: [
      {
        label: 'Diseño e Implementación*',
        active: true,
      },
      {
        label: 'Flujos conversacionales ilimitados',
        active: true,
      },
      {
        label: 'Integraciones ilimitadas',
        active: true,
      },
      {
        label: 'Actualizaciones ilimitadas',
        active: true,
      },
      {
        label: 'Soporte Técnico',
        active: true,
      },
    ],
  },
];

export default plans;
