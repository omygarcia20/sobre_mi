import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavBar from './components/navbar/navbar';
import Body from './components/body/body';

function App() {

  return (
    <>
      <NavBar />
      <Body />
    </>
  )
}

export default App