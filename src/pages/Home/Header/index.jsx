import React, { useEffect, useState } from 'react'
import './styles.css'
import CustomButton from '../../../components/CustomButton'
import model_one from '../../../assets/model1.png'
import model_two from '../../../assets/model2.png'

export default function Header() {
  const [model, setModel] = useState(null);
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  useEffect(() => {
    setModel(model_one)
    setName("Carolina Castro")
    setStack("Desenvolvedora Front-end");
  }, [])

  useEffect(() => {
    if (model === model_one) {
      setTimeout(() => {
        setModel(model_two);
        setName("Luan Bastos")
        setStack("Analísta de Dados");
        return
      }, [8000])
    } else if (model === model_two) {
      setTimeout(() => {
        setModel(model_one);
        setName("Carolina Castro")
        setStack("Desenvolvedora Front-end");
        return
      }, [16000])
    }
  }, [model])

  return (
    <header className='header-container'>
      <section className="header-info">
        <h1 className='header-title'>
          Encontre talentos,<br />
          <span>transforme sua empresa!</span>
        </h1>
        <p className='header-text'>
          O <span>Con3kta é um banco de talentos</span>,<br />
          onde você encontra jovens Programadores Cariocas.
        </p>
        <CustomButton text="Encontrar Talentos" />
        <p className='header-text'>Quantidade de membros: <span>3.102</span></p>
      </section>
      <section className="header-creative">
        <img src={model} alt="Header Creative" className='header-model-image' />
        <div className="header-profile-info">
          <h2>{name}</h2>
          <h3>{stack}</h3>
        </div>
      </section>
    </header>
  )
}
