import React, { useState } from 'react';
import { useNameStore } from '../../Store/Store';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

   const { names, addName } = useNameStore();

  const handleAdd = () => {
    if (inputValue.trim()) {
      addName(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2> Список   имен</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите имя..."
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
          
        ))}
        
      </ul>
       
    </div>
  );
};

export default HomePage;