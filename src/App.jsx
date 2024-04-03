import './App.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatBot from 'react-simple-chatbot'

import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/" element={<HomePage />} />

        </Routes>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hola, con que pregunta del censo te podemos ayudar hoy?',
              trigger: '2',
              // end: true,
            },
            {
              id: '2',
              user: true,
              trigger: '3',
              // end: true,
            },
            {
              id: '3',
              message: "{previousValue}",
              end: true,
            }
          ]}
        />
      </div>
    </>
  )
}

export default App;
