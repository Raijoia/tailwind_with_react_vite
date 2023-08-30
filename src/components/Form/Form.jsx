import Input from "../Input/Input"

export default function Form({ onSubmit }) {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }
  return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-10">
      <Input required type="text" placeholder="Insira seu nome..."  />
      <Input required type="email" placeholder="Insira seu email..." />
      <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none">Seguir</button>
    </form>
  )
}
