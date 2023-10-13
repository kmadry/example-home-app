import React, { lazy, Suspense, useState } from 'react'; // Must be imported for webpack to work
import Button from '@mui/material/Button';
import styles from './App.module.css';
import './App.css';
import './MuiClassNameSetup';


const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));

function App() {
  const [state, setState] = useState('before click');
  const click = () => setState('afterClick');
  console.log(styles);

  return (
    <div className={styles.App}>
      <Button variant="contained">Klik</Button>
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