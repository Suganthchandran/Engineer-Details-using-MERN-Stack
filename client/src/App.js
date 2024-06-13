import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Header } from './components/Header.js';
import { AdminDashboard } from './components/AdminDashboard.js';
import { AddData } from './components/AddData.js';
import {Routes,Route} from "react-router-dom"
import { EditData } from './components/EditData.js';
import { EngineerDetails } from './components/EngineerDetails.js';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' Component={AdminDashboard}/>
      <Route exact path='/add-data' Component={AddData}/>
      <Route exact path='/edit/:id' Component={EditData}/>
      <Route exact path='/view/:id' Component={EngineerDetails}/>
    </Routes>
    </>
  );
}

export default App;
