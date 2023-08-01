import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';

import Dashboard from "./Components/Dashboard/Dashboard";
import Adddata from "./Components/Adddata/Adddata";
import Updatedata from "./Components/Updatedata/Updatedata";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={ <Dashboard/> } />
              <Route path={'/adddata'} element={ <Adddata/> } />
              <Route path={'/updatedata/:id'} element={ <Updatedata/> } />
          </Routes>
      </>
  );
}

export default App;
