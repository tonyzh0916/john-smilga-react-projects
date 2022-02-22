import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article>
          <h1>kdfalkkdjfakjdfalkjdflkasjflkdjflkd</h1>
          <p>
            sdfhasidhfasdfuhdfhdhfuu dhfashf dhfdaihjdhkaj
            fhadsfhuue diiuuuiiiiiosfjh
            hjfdahf
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className="phone-img" alt="phone"/>
        </article>
      </div>
    </section>
    )
}

export default Hero
