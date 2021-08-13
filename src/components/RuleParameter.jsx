import React from 'react';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

const RuleParameter = ({ id, addRule, removeRule }) => {
  return (
    <div className="container__parameter">
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Insert Parameter"
      />
      <div className="container__parameter-controls">
        <RemoveCircleOutline
          onClick={() => removeRule(id)}
          style={{ color: 'grey' }}
        />
        <AddCircleOutline onClick={() => addRule()} />
      </div>
    </div>
  );
};

export default RuleParameter;
