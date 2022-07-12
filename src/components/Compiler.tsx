import CSS from 'csstype';
import {Button, Input} from "reactstrap";
import React, {useState} from "react";

import Nase from "./Nase";

const divStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: '5%',
  marginLeft: '55px',
  marginRight: '55px',
}

const textareaStyle = {
  marginLeft: '10px',
  marginRight: '10px',
  height: '40vh'
}

const buttonStyle = {
  marginTop: '10%',
  marginBottom: '10%'
}

function Compiler() {
  const [curNase, setCurNase] = useState('nase-normal.jpg');

  const files = ['nase-normal.jpg', 'nase-angry.jpg', 'nase-happy.jpg'];
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * files.length);
    const item = files[randomIndex];
    console.log(item);
    setCurNase(item);
  }

  return (
    <>
      <Nase imgName={curNase}/>
      <div style={divStyle}>
        <Input
          id="code"
          name="code"
          type="textarea"
          style={textareaStyle}
        />
        <Button
          size="lg"
          style={buttonStyle}
          onClick={randomImage}
        >
          compile
        </Button>
        <Input
          id="result"
          name="result"
          type="textarea"
          style={textareaStyle}
        />
      </div>
    </>

  )
}

export default Compiler;