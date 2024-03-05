import React, { useState } from 'react'

export default function TextForm(props) {
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert('Remove Extra Spaces','success');
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy Your Text','success');
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Your Text Change into Uppercase','success');
}
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Your Text Change into Lowercase','success');
}
    const handleLoClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Your Text is Clear','success');

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h2 className='mb-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3"style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 >your text summary</h2>
                <p> {text.split(" ").filter((e1)=>{return e1.length!==0}).length} word and {text.length} characters</p>
                <p>{0.008 * text.split.length} minutes are read</p>
                <h2 >preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
            <div className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#1c224a' : 'white' ,color :props.mode==='dark'?'white':'black'}} >
                <h3 >What is Textutils</h3>
                <p>TextUtils is a simple and user-friendly text manipulation tool built with React. It allows you to easily convert text to uppercase, lowercase, and remove spaces.</p>
            </div>
        </>
    )
}
TextForm.defaultProps = {
    heading: "enter the text here",

}