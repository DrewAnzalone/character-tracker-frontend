import { useContext, useEffect, useState } from 'react';
import { Navigate, Routes, Route } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SheetDetails from './components/SheetDetails/SheetDetails';
import SheetList from './components/SheetList/SheetList'

import * as sheetService from './services/sheetService';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  const [sheets, setSheets] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (sheet) => {
    setSelected(sheet)
  }

  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const fetchedSheets = await sheetService.index();
        if (fetchedSheets.err) {
          throw new Error(fetchedSheets.err);
        }
        setSheets(fetchedSheets);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSheets();
  }, []);

  return (
    <>
      <NavBar/>
      <Routes> 
        <Route path='/' element={user ? <Navigate to={"/sheets"}/> : <Landing />} />
        <Route path='/sheets' element={<SheetList sheets={sheets} handleSelect={handleSelect}/>} />
        <Route path='/sheets/:sheetId' element={<SheetDetails sheet={selected} />} />
        <Route path='/equips' element={<Dashboard />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
