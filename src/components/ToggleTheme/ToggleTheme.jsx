import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'

export default function ToggleTheme() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList

  // quando o systempreference retornar true (theme dark no sistema do usuário) adiciona o theme dark na página 
  useEffect(() => {
    systemPreference && pageClasses.add("dark")
  })

  // quando clicar, colocar o class dark no root da página 
  const toggle = () => {
    pageClasses.toggle('dark')
  }

  return (
      <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle} />
        <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle} />
      </div>
  )
}
