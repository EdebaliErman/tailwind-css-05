import React, { useState } from 'react'
import ColorChange from '../colorChange/colorChange'

const img = 'https://media.discordapp.net/attachments/1128915338881400894/1128919109158064338/charlotte_quinn_Angela_Barrett_David_Lachepelle_Beatnik_fashion_9b5114c4-045a-489d-84e4-4bff23bbfb83.png?width=671&height=671'
const name = 'Angelina Connell'
const info = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. PageMaker including versions of Lorem Ipsum.`
function Card() {
  const [cardBg, setCardBg] = useState()
  const [cardText, setCardText] = useState()

  return (
    <div className={`Card bg-gradient-to-br ${cardBg} ${cardText}`}>
      <ColorChange
        bg={setCardBg}
        textColor={setCardText}
      />
      <div className='card-contents'>
        <img src={img} alt='img' />
        <div className='card-contents-text'>
          <h1>{name}</h1>
          <hr className='m-2  shadow-3xl right-4 w-24 absolute shadow-hr text-hr ' />
          <hr className={`m-2  shadow-3xl left-42 w-28 absolute shadow-hr text-hr `}/>
          <p >{info}</p>
          <button className={cardBg}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Card
