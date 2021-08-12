import React from 'react';
import { DropdownSelect, RuleParameter } from './';

const Rule = () => {
  return (
    <div className="container__rule">
      <div className="container__rule-item">
        <DropdownSelect />
        <DropdownSelect />
        <RuleParameter />
      </div>
    </div>
  );
};

export default Rule;
