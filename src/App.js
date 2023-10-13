import React, { lazy, Suspense, useState } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));

function App() {
  const [state, setState] = useState('before click');
  const click = () => setState('afterClick'); 
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Demo home page</div>
      <div className="container">State: {state}</div>
      <Footer date={"2023"} click={click}/>
    </div>
  );
}

export default App;