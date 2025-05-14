import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import style from './App.module.css'


function App() {
  return (
    <>
      <nav className={style.menu}>
        <p><a href='#s1'>Apresentações</a></p>
        <p><a href='#s2'>Tecnologias</a></p>
        <p><a href='#s3'>Projetos</a></p>
        <p><a href='#s4'>Contato</a></p>
      </nav>
      <main>
        <section className={style.s1} id='s1'>
          <h1>Apresentações</h1>
        </section>
        <section className={style.s2} id='s2'>
          <h1>Tecnologias</h1>
        </section>
        <section className={style.s3} id='s3'>
          <h1>Projetos</h1>
        </section>
        <section className={style.s4} id='s4'>
          <h1><Contato></Contato></h1>
        </section>
      </main>
    </>
  )
}

export default App
