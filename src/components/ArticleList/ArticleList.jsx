import data from '../../../articles.json'

export default function ArticleList() {
  return (
    <div className='mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3'>
      {data.map(dados => <p key={dados.id}>{dados.title}</p>)}
    </div>
  )
}
