import { Form } from "./types/form.type"

export async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const formValues : Form = {
    email: formData.get('email').toString(),
    name: formData.get('name').toString(),
    message: formData.get('message').toString()
  }
  console.log(formValues)
}