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
      <button className="btnOpenModal" onClick={() => handleClickOpen()}>
        Open Modal
      </button>
      <ModalPopup open={open} onClose={handleClickClose} />
    </div>
  );
}

export default App;
