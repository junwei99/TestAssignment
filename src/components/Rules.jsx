import { Rule } from './';
import { useState } from 'react';

const Rules = () => {
  const [rules, setRules] = useState([1]);

  const addRule = () => {
    setRules([...rules, 1]);
  };

  const removeRule = (index) => {
    let rulesValues = [];

    rulesValues = rules.filter((rule, i) => {
      console.log('i =' + i);
      return i !== index;
    });

    // rulesValues
    //   .slice(0, index - 1)
    //   .concat(rulesValues.slice(index, rulesValues.length));

    console.log('rulesValues : ' + rulesValues);

    setRules([rulesValues]);
  };

  return (
    <>
      {rules.map((rule, index) => (
        <Rule
          key={index}
          id={index}
          addRule={addRule}
          removeRule={removeRule}
        />
      ))}
    </>
  );
};

export default Rules;
