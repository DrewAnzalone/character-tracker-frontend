import { useContext, useEffect, useState } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router';
// import { Link } from 'react-router';

import NavBar from './components/NavBar/NavBar.jsx';
import SignUpForm from './components/SignUpForm/SignUpForm.jsx';
import SignInForm from './components/SignInForm/SignInForm.jsx';
import Landing from './components/Landing/Landing.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import EquipList from './components/EquipList/EquipList.jsx';
// import EquipDetails from './components/EquipDetails/EquipDetails.jsx';
import EquipForm from './components/EquipForm/EquipForm.jsx';
import SheetDetails from './components/SheetDetails/SheetDetails';
import SheetList from './components/SheetList/SheetList'

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
  const [modalActive, setModalActive] = useState(false);

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

  const handleAddEquip = async (equipFormData) => {
    const newEquip = await equipService.create(equipFormData);
    setEquips([newEquip, ...equips]);
    setSelectedEquip(newEquip);
    navigate(`/equips${newEquip._id}`);
  }

  const handleDeleteEquip = async (equipId) => {
    const deleteEquip = await equipService.deleteEquip(equipId);
    setEquips(equips.filter((equip) => equip._id !== deleteEquip));
    navigate('/equips');
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Navigate to={"/sheets"} /> : <Landing />} />
        <Route path='/sheets' element={!user ? <Navigate to={"/"} /> : <SheetList sheets={sheets} handleSelect={(sheet) => setSelected(sheet)} />} />
        <Route path='/sheets/*' element={<SheetDetails sheet={selected} />} />
        <Route path='/equips' element={<EquipList equips={equips} handleSelect={toggleModal} handleDeleteEquip={handleDeleteEquip} />} />
        <Route path='/equips/new' element={<EquipForm handleAddEquip={handleAddEquip} />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
      {modalActive && <h1> modal active </h1>}
      {modalActive && <EquipModal equip={selectedEquip} handleModal={toggleModal} />}
    </>
  );
};

export default App;
