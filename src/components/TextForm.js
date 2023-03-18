import React,{useState} from 'react'

export default function TextForm(pro) {
    const [text,setText]=useState('Enter text Here');
    const handleUpperCase = ()=>{
        setText(text.toUpperCase())
        // console.log("Clickecd Upper Case");
        pro.showAlert("Convert To Upper Case","success")
    }
    const handleOnchange = (e)=>{
        console.log("handleOnchange");
        setText(e.target.value);
    }
    const handleLowerCase =()=>{
        setText(text.toLowerCase())
        pro.showAlert("Convert To Lower Case","success")
    }
    const handleClrCase = ()=>{
        setText("")
        pro.showAlert("Clear Text","success")
    }
    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
      pro.showAlert("copied Text","success")
    }
   
  return (
    <div style={{color:pro.mode ==='light' ? 'black' : 'white'}}>
        <h1> {pro.heading}</h1>
<div className="mb-3">
  <textarea value={text} className="form-control" onChange={handleOnchange} id="textform" rows="3" style={{backgroundColor:pro.mode ==='light' ? 'white' : 'grey',color:pro.mode ==='light' ? 'black' : 'white'}}></textarea>
</div>
<button className='btn btn-primary mx-2 mt-1'onClick={handleUpperCase}>Text To UpperCase</button>
<button className='btn btn-primary mx-2 mt-1'onClick={handleLowerCase}>Text To LowerCase</button>
<button className='btn btn-primary mx-2 mt-1'onClick={handleClrCase}>Clear Text</button>
<button className='btn btn-primary mx-2 mt-1'onClick={handleCopy}>Copy Text</button>
<div className='container'>
    <h1>Your Text Summery</h1>
   <p> {text.split(/\s+/).filter((e)=>{return e.length !==0}).length} Words {text.length} Characters </p>
   <p> {0.008 * text.split(" ").length} Minutes To read </p>
</div>
    </div>
  )
}
