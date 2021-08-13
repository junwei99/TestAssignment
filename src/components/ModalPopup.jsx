import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { TextField, Rules, DropdownSelect } from './';

const ModalPopup = ({ open, onClose }) => {
  return (
    <>
      <Dialog
        className="dialogModal"
        open={open}
        onClose={onClose}
        aria-labelledby="Rule Building Form"
        fullWidth
        maxWidth="md"
      >
        <div className="form__rule">
          <div className="container__form">
            <h1>Add Revenue Group</h1>
            <h3>Revenue Group Title</h3>
            <TextField />
            <div className="container__conditions">
              <h4>If</h4>
              <DropdownSelect />
              <h4>of the below conditions are met.</h4>
            </div>
          </div>
          <Rules />
          <div className="container__form">
            <div className="container__conditions">
              <h4>then revenue is</h4>
              <input
                type="number"
                id="fname"
                name="firstname"
                placeholder="Enter Number"
                style={{ width: '150px', marginLeft: '10px' }}
              />
              <h4 style={{ marginLeft: '10px' }}>%</h4>
            </div>

            <div className="container__buttons">
              <button className="btn btn__confirm">Confirm</button>
              <button className="btn btn__cancel" onClick={() => onClose()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ModalPopup;
