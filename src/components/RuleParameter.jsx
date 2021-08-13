import React from 'react';

import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

const RuleParameter = ({ paramId, lastId, id, arrParams, addParam, removeParam, rules, addRule, removeRule }) => {

  const isParamsLastValue = (arrParams, pid) => {
    if(arrParams[arrParams.length - 1] === pid){
      return true;
    }else{
      return false;
    }
  }

  const isIdLastValueInRules = (arrRules, idValue) => {
    const rulesValues = [...arrRules];

    if(rulesValues[rulesValues.length - 1] === idValue){
      return true;
    }else{
      return false;
    }
  }

  const isIdTheOnlyValueInRules = (arrRules) => {

    const rulesValues = [...arrRules];

    if(rulesValues.length <= 1){
      return false;
    }else{
      return true;
    }
  }

  return (
    <div className="container__parameter">
      <input
        type="text"
        id="inputParameter"
        name="firstname"
        placeholder="Insert Parameter"
        
      />
      <div className="btnParameter" onClick={() => addParam()}>
        {isParamsLastValue ? (<h4 className="txt__ruleParameter" style={{color: 'blue'}}>add rule</h4>) : (<h4 className="txt__ruleParameter" style={{color: 'red'}}>add rule</h4>)} 
      </div>
      <div className="container__parameter-controls">
        {(isIdTheOnlyValueInRules(rules)) && (<RemoveCircleOutline
          onClick={() => removeRule(id)}
          style={{ color: 'grey' }}
        />)}
        
        {( isIdLastValueInRules(rules, id) ) && (<AddCircleOutline onClick={() => addRule()} />)}
        
      </div>
    </div>
  );
};

export default RuleParameter;
