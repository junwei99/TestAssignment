import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { TextField, Rule, DropdownSelect } from './';

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
          <Rule />
        </div>
      </Dialog>
    </>
  );
};

export default ModalPopup;
