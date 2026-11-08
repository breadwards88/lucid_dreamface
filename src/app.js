import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout  from './Layout';
import Home from './pages/home/Home';
import WakingDreams from './pages/wakingdreams/WakingDreams';
import SlumberDreams from './pages/slumberdreams/SlumberDreams'
import DreamGoals from './pages/dreamsgoals/DreamsGoals'
import LackofDreams from './pages/lackofdreams/LackofDreams'
import Dreamboard from './pages/dreamboard/Dreamboard'

//<Route path="about" element={<About />}/>

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<Home />}/>
          <Route path="waking" element={<WakingDreams />}/>
          <Route path="slumberndreams" element={<SlumberDreams />}/>
          <Route path="dreamvgoal" element={<DreamGoals />}/>
          <Route path="lackdream" element={<LackofDreams />}/>
          <Route path="dreamboard" element={<Dreamboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
