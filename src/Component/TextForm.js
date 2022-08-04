import React, {useState} from 'react'

export default function TextForm(props) {

    const handleChange = (event) => {setText(event.target.value)}
    const handleUpClick = () => {setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!","success")}
    const handleLowClick = () => {setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success")}
    const handleClearScreen = () => {setText('');
        props.showAlert("Screen is cleared!","success")}
    const handleCopy = () => {
        // let textBoxElement = document.getElementById('myBox');
        // textBoxElement.select();
        //navigator.clipboard.writeText(textBoxElement.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!","success")
    }
    const handleExtraSpace = () => {
        let textArray = text.split(/[ ]+/);   
        setText(textArray.join(' '));
        props.showAlert("Extra spaces are removed!","success")
    }

  const[ text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleChange} id='myBox' rows='8'></textarea>
        </div>
        <button disabled={text.length===0} style={{borderColor:'currentColor'}} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> Convert to UpperCase</button>
        <button disabled={text.length===0} style={{borderColor:'currentColor'}} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}> Convert to LowerCase</button>
        <button disabled={text.length===0} style={{borderColor:'currentColor'}} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy text</button>
        <button disabled={text.length===0} style={{borderColor:'currentColor'}} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}> remove ExtraSpaces</button>
        <button disabled={text.length===0} style={{borderColor:'currentColor'}} className='btn btn-primary mx-1 my-1' onClick={handleClearScreen}> Clear Screen</button>
    </div>
    <div className='container my-3'>
        <h3>Your text summarry:</h3>
        <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters are used.</p>
        <p>It's approx {.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} min reads.</p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
        {/* <p>{
            document.getElementById('myBox') === null? 0:
            text.trim() === ''? 0:text.trim().split(/[ ]+/).length} words and {text.length} characters are used.
        </p>
        <p>It's approx {.008 * text.trim().split('').length} min reads.</p> */}
    </div>
    </>
  )
}
