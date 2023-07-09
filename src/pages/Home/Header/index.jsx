import React, { useEffect, useState } from 'react'
import './styles.css'
import CustomButton from '../../../components/CustomButton'
import model_one from '../../../assets/model1.png'
import model_two from '../../../assets/model2.png'

export default function Header() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    setModel(model_one)
  }, [])

  useEffect(() => {
    if(model === model_one){
      setTimeout(() => {
        setModel(model_two);
        return
      }, [8000])
    }else if(model === model_two){
      setTimeout(() => {
        setModel(model_one);
        return
      }, [16000])
    }
  }, [model])

  return (
    <header className='header-container'>
      <section className="header-info">
        <h1 className='header-title'>
          Good training<br />
          <span>transforms mindsets</span>
        </h1>
        <p className='header-text'>
          We <span>guarantee good training</span>.<br />
          Access our hand-picked training experts on-demand.
        </p>
        <CustomButton text="Book a demo" />
        <p className='header-text'>Quantidade de membros: <span>3.102</span></p>
      </section>
      <section className="header-creative">
        <img src={model} alt="Header Creative" className='header-model-image' />
      </section>
    </header>
  )
}
