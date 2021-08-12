import React from 'react';
import { TextField } from './';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

const RuleParameter = () => {
  return (
    <div className="container__parameter">
      <TextField />
      <div className="container__parameter-controls">
        <RemoveCircleOutline style={{ color: 'grey' }} />
        <AddCircleOutline />
      </div>
    </div>
  );
};

export default RuleParameter;
