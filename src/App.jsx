import { useContext, useEffect, useState } from 'react';
import { Navigate, Routes, Route, Link, useNavigate } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import EquipList from './components/EquipList/EquipList.jsx';
import EquipDetails from './components/EquipDetails/EquipDetails.jsx';
import EquipForm from './components/EquipForm/EquipForm.jsx';
import SheetDetails from './components/SheetDetails/SheetDetails';
import SheetList from './components/SheetList/SheetList'
import SheetForm from './components/SheetForm/SheetForm'

import * as sheetService from './services/sheetService';
import * as equipService from './services/equipService.js'

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [sheets, setSheets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [equips, setEquips] = useState([])
  const [selectedEquip, setSelectedEquip] = useState(null);

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
  }, [user]);

  useEffect(() => {
    const fetchEquips = async () => {
      try {
        const fetchedEquips = await equipService.index();
        if (fetchedEquips.err) {
          throw new Error(fetchedEquips.err);
        }
        setEquips(fetchedEquips);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEquips();
  }, []);

  const handleAddSheet = async (sheetFormData) => {
    const newSheet = await sheetService.create(sheetFormData);
    setSheets([newSheet, ...sheets]);
    setSelected(newSheet);
    navigate(`/sheets/${newSheet._id}`)
  }

  const handleAddEquip = async (equipFormData) => {
    const newEquip = await equipService.create(equipFormData);
    setEquips([newEquip, ...equips]);
    setSelectedEquip(newEquip);
    navigate(`/equips/${newEquip._id}`);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Navigate to={"/sheets"} /> : <Landing />} />
        <Route path='/sheets' element={!user ? <Navigate to={"/"} /> : <SheetList sheets={sheets} handleSelect={(sheet) => setSelected(sheet)} />} />
        <Route path='/sheets/*' element={<SheetDetails sheet={selected} />} />
        <Route path='/sheets/new' element={<SheetForm handleAddSheet={handleAddSheet} />} />
        <Route path='/equips' element={<EquipList equips={equips} handleSelect={(equip) => setSelectedEquip(equip)} />} />
        <Route path='/equips/:equipId' element={<EquipDetails equip={selectedEquip} />} />
        <Route path='/equips/new' element={<EquipForm handleAddEquip={handleAddEquip} />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
