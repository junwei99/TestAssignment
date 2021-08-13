import React from 'react';
import { useState } from 'react';
import { ModalPopup } from './components';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <h1>Please click the button below to view the modal : </h1>
      <button className="btnOpenModal" onClick={() => handleClickOpen()}>
        <p>Open Modal</p>
      </button>
      <br/><br/>
      <p>Project completed by : Low Jun Wei </p>
      <div className="container__social">
        <a href="https://github.com/junwei99" target="_blank">Github</a>
        <a href="mailto:https://github.com/junwei99" target="_blank"> lowjunwei1999@gmail.com</a>
        <a href="https://www.linkedin.com/in/junwei-low/" target="_blank">LinkedIn</a>
      </div>
      
      <ModalPopup open={open} onClose={handleClickClose} />
    </div>
  );
}

export default App;
