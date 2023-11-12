import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="First number"
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Second number"
      />
      <div className="flex justify-between mb-2">
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => setOperator(op)}
            className={`w-1/4 text-center py-2 rounded ${operator === op ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {op}
          </button>
        ))}
      </div>
      <button onClick={calculate} className="w-full py-2 bg-green-500 text-white rounded">
        Calculate
      </button>
      {result && (
        <div className="mt-2">
          <strong>Result: </strong> {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;