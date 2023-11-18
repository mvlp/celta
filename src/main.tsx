import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import IndexNavbar from './components/navbar/IndexNavbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexNavbar/>
  </React.StrictMode>,
)
