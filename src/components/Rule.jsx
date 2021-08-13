import React from 'react';
import {useState} from 'react';
import { RuleParameter } from './';

const Rule = ({ lastId, id, rules, addRule, removeRule }) => {
  const [params, setParams] = useState([0]);
  const [lastParamsId, setLastParamsId] = useState(1);

  const addParam = () => {
    setLastParamsId(lastParamsId + 1);
    setParams([...params, lastParamsId + 1]); 
    console.log('params after add: ' + params);
  };

  const removeParam = (id) => {
    let rulesValues = [...params];

    const filteredRules = rulesValues.filter((rule) => {
      return rule !== id
    })

    setParams(filteredRules);
  };

  return (
    <div className="container__rule">
      <div className="container__rule-item">
      <div className="custom-select" style={{ width: '150px' }}>
                <select>
                  <option value="0">aff_sub</option>
                  <option value="1">aff_sub2</option>
                  <option value="2">aff_sub3</option>
                  <option value="3">aff_sub4</option>
                </select>
              </div>
       <div className="custom-select" style={{ width: '150px' }}>
                <select>
                  <option value="0">is</option>
                  <option value="1">not</option>
                  <option value="2">match</option>
                </select>
        </div>
        <div className="container__rule-parameter">
          {params.map((param, index) => (
            <RuleParameter  key={param}
            paramId={param} lastId={lastId} id={id} arrParams={params} addParam={addParam} removeParam={removeParam} rules={rules}addRule={addRule} removeRule={removeRule} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rule;
