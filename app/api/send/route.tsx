export const dynamic = "force-static";
import { checkoutFormSchema } from '@/schemas/form.schema';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL
const toEmail = process.env.TO_EMAIL


export async function POST(req: Request) {
  const { email, message, name } = await req.json();
  const companyName = "Nova"
  const parsedForm = checkoutFormSchema.safeParse({ email, message, name })
  if (parsedForm.success === false) {
    return NextResponse.json(parsedForm.error, {
      status: 422
    })
  }
  const subject = `${name} ${message.slice(0, 10)}`
  try {
    const { data } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{`My name is ${name}`}</h1>
          <p>Thank you for contacting us : {companyName}</p>
          <p>Message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}