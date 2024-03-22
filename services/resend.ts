import { ContactForm } from "@/components/Contact/types";


const API_URL = process.env.NEXT_PUBLIC_RESEND

export const fetchResend = async (form:ContactForm) => {
  const body = JSON.stringify(form)
  const response = await fetch(API_URL,{body, method: 'POST'})
  return response
}