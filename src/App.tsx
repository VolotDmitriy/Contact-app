import './App.css';
import MainWindow from "./Pages/AllContactPage/MainWindow.tsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage/ProfilePage.tsx";
import ArrayContext from "./ContextElement/ArrayContext.tsx";
import AddNewContactPage from "./Pages/AddNewContactPage/AddNewContactPage.tsx";
import AddUserContext from "./ContextElement/AddUserContext.tsx";

function App() {

  return (
      <Router>
          <ArrayContext>
              <AddUserContext>
              <Routes>
                  <Route path='/' element={<MainWindow/>}/>
                  <Route path="/profile/:userId" element={<ProfilePage/>}/>
                  <Route path="/add_profile" element={<AddNewContactPage/>}/>
                  <Route path='*' element={<MainWindow/>}/>
              </Routes>
              </AddUserContext>
          </ArrayContext>
      </Router>
  )
}

export default App;
