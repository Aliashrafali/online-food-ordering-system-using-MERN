import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './admin/adminPanel';
import PagenotFound from './PagenotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='*' element={<PagenotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
