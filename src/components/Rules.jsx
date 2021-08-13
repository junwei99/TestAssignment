import { Rule } from './';
import { useState } from 'react';

const Rules = () => {
  const [rules, setRules] = useState([0]);
  const [id, setId] = useState(1);

  const addRule = () => {
    setId(id + 1);
    setRules([...rules, id + 1]); 
    console.log('rules after add: ' + rules);
  };

  const removeRule = (id) => {
    let rulesValues = [...rules];

    const filteredRules = rulesValues.filter((rule) => {
      return rule !== id
    })

    setRules(filteredRules);

    console.log('rulesValues' + rulesValues)
    console.log('filteredRules' + filteredRules)
  };

  return (
    <>
      {rules.map((rule, index) => (
        <Rule
          lastId = {id}
          key={rule}
          id={rule}
          rules = {rules}
          addRule={addRule}
          removeRule={removeRule}
        />
      ))}
    </>
  );
};

export default Rules;
