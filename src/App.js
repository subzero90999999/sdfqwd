
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNameStore } from './Store/Store';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPages/CartPages';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';


function App() {
  const [newName, setNewName] = useState('');
  const { names, addName, removeName } = useNameStore();

  const handleAddName = () => {
    if (newName.trim()) {
      addName({
        id: Date.now(),
        name: newName.trim()
      });
      setNewName('');
    }
  };

  return (
    <BrowserRouter>
      <Header />


      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <section style={{
          marginBottom: '30px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h2>Список имён</h2>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Введите имя"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddName()}
              style={{
                padding: '10px',
                flex: 1,
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
            <button
              onClick={handleAddName}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Добавить
            </button>
          </div>

          <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
            Всего имён: <span style={{ color: '#007bff' }}>{names.length}</span>
          </p>

          {names.length === 0 ? (
            <p style={{ color: '#999', fontStyle: 'italic' }}>Имён нет. Добавьте первое имя!</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {names.map((item, index) => (
                <li
                  key={item.id}
                  style={{
                    padding: '12px',
                    marginBottom: '8px',
                    backgroundColor: 'white',
                    borderLeft: '4px solid #007bff',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <span>{item.name}</span>
                  <button
                    onClick={() => removeName(index)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          )}


        </section>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/categorypage' element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
