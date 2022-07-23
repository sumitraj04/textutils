import React, {useState} from 'react'

export default function TextForm(props) {

    const handleChange = (event) => {setText(event.target.value)}
    const handleUpClick = () => {setText(text.toUpperCase())}
    const handleLowClick = () => {setText(text.toLowerCase())}
    const handleClearScreen = () => {setText('')}
    const handleCopy = () => {
        let textBoxElement = document.getElementById('myBox');
        textBoxElement.select();
        navigator.clipboard.writeText(textBoxElement.value);
    }
    const handleExtraSpace = () => {
        let textArray = text.split(/[ ]+/);   
        setText(textArray.join(' '))
    }

  const[ text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleChange} id='myBox' rows='8'></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}> Conert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}> Conert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}> Copy text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpace}> remove WhiteSpaces</button>
        <button className='btn btn-primary mx-1' onClick={handleClearScreen}> Clear Screen</button>
    </div>
    <div className='container my-3'>
        <h3>Your text summarry:</h3>
        <p>{
            document.getElementById('myBox') === null? 0:
            text.trim() === ''? 0:text.trim().split(/[ ]+/).length} words and {text.length} characters are used.
        </p>
        <p>It's approx {.008 * text.trim().split('').length} min reads.</p>
    </div>
    </>
  )
}
