import React from 'react'

function ColorChange({ bg, textColor }) {

  return (
    <div className='colorChange'>
      <SectionColor
        color={"bg-red"}
        colorFrom={"from-red"}
        text={"Red ❤️"}
        textColor={textColor}
        changeBg={bg}
        colorText={'text-redText'}
      />
      <SectionColor
        color={"bg-blue"}
        text={"Blue 💙"}
        colorFrom={"from-blue"}
        changeBg={bg}
        colorText={'text-text'}
        textColor={textColor}
      />
      <SectionColor
        color={"bg-yellow"}
        textColor={textColor}
        colorFrom={"from-yellow"}
        text={"Yellow 💛"}
        changeBg={bg}
        colorText={'text-yellowText'}
      />
      <SectionColor
        color={"bg-black"}
        changeBg={bg}
        textColor={textColor}
        colorText={'text-text'}
        colorFrom={"from-black"}
        text={"Black 🖤 "} />
      <SectionColor
        color={"bg-none"}
        text={"🚫"}
        colorFrom={"from-none"}
        changeBg={bg}
        colorText={'text-text'}
        textColor={textColor}
      />
    </div>
  )
}

const SectionColor = ({ color, text, changeBg, colorFrom, textColor, colorText }) => {
  const handleChange = () => {
    if (color !== "bg-none") {

      changeBg(`${colorFrom} to-toColor`)
      textColor(colorText)
    }
    else{
      changeBg(`${colorFrom} to-none`)
    }
    textColor(colorText)
  }
  return <div
    onClick={() => handleChange()}
    className={`sectionColor group ${color}`}>
    <span className={`tooltip group-hover:scale-100 shadow-3xl shadow-black ${color}`}>{text}</span>
  </div>
}

export default ColorChange
