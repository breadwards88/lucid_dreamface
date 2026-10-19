import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

/*export default function App() {
  return {
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={}>
          <Route index element = {<Home />}></Route>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  }
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
