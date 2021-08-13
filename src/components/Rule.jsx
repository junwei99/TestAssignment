import React from 'react';
import { DropdownSelect, RuleParameter } from './';

const Rule = ({ id, addRule, removeRule }) => {
  return (
    <div className="container__rule">
      <div className="container__rule-item">
        <DropdownSelect />
        <DropdownSelect />
        <RuleParameter id={id} addRule={addRule} removeRule={removeRule} />
      </div>
    </div>
  );
};

export default Rule;
