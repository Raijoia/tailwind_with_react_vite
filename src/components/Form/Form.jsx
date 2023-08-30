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
      <input required type="text" placeholder="Insira seu nome..." className="alura-input" />
      <input required type="email" placeholder="Insira seu email..." className="alura-input" />
      <button type="submit" className="alura-button">Seguir</button>
    </form>
  )
}
