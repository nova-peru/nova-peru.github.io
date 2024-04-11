const BASE_URL = 'https://wa.me';
const CONTACT_NUMBER = '+51993157087';
const BASE_MESSAGE = 'Hola Novaworks! Quisiera información sobre Chatbots.';

export function buildWspLinkWithPlan(planName: string) {
  return `${BASE_URL}/${CONTACT_NUMBER}?text=${BASE_MESSAGE} Plan elegido: ${planName}`;
}
