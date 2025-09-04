import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Tamagochi from './components/Tamagochi';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tamagochi />
    </>
  );
}

export default App;
