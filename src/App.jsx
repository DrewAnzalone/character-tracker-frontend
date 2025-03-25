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
import SheetDetails from './components/SheetDetails/SheetDetails.jsx';
import SheetList from './components/SheetList/SheetList.jsx';
import SheetForm from './components/SheetForm/SheetForm.jsx';
import EquipModal from './components/EquipModal/EquipModal.jsx';

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

  const handleAddSheet = async (sheetFormData) => {
    const newSheet = await sheetService.create(sheetFormData);
    setSheets([...sheets, newSheet]);
    setSelected(newSheet);
    navigate(`/sheets/${newSheet._id}`)
  }

  const handleAddEquip = async (equipFormData) => {
    const newEquip = await equipService.create(equipFormData);
    setEquips([...equips, newEquip]);
    setSelectedEquip(newEquip);
    navigate(`/equips`);
  }

  const handleUpdateSheet = async (sheetFormData, sheetId) => {
    const updatedSheet = await sheetService.update(sheetFormData, sheetId);
    const newSheets = sheets.map(sheet => sheetId === sheet._id ? updatedSheet : sheet);
    setSheets(newSheets);
    setSelected(updatedSheet);
    navigate(`/sheets/${sheetId}`)
  }

  const handleDeleteSheet = async (sheetId) => {
    const deletedSheet = await sheetService.deleteSheet(sheetId);
    setSheets(sheets.filter(sheet => sheet._id !== deletedSheet._id));
    setSelected(null);
    navigate('/sheets');
  }

  const handleDeleteEquip = async (equipId) => {
    const deletedEquip = await equipService.deleteEquip(equipId);
    setEquips(equips.filter(equip => equip._id !== deletedEquip._id));
    setModalActive(false);
    navigate('/equips');
  };

  const toggleModal = (equip) => {
    setModalActive(!modalActive);
    setSelectedEquip(equip);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Navigate to={"/sheets"} /> : <Landing />} />
        <Route path='/sheets' element={!user ? <Navigate to={"/"} /> : <SheetList sheets={sheets} handleSelect={sheet => setSelected(sheet)} />} />
        <Route path='/sheets/new' element={<SheetForm sheet={selected} handleAddSheet={handleAddSheet} handleUpdateSheet={handleUpdateSheet} equips={equips} />} />
        <Route path='/sheets/:sheetId' element={<SheetDetails sheet={selected} handleSelect={toggleModal} handleDeleteSheet={handleDeleteSheet} />} />
        <Route path='/sheets/:sheetId/edit' element={<SheetForm sheet={selected} handleAddSheet={handleAddSheet} handleUpdateSheet={handleUpdateSheet} equips={equips} />} />
        <Route path='/equips' element={<EquipList equips={equips} handleSelect={toggleModal} handleDeleteEquip={handleDeleteEquip} />} />
        <Route path='/equips/new' element={<EquipForm handleAddEquip={handleAddEquip} />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
      {/* {modalActive && <h1> modal active </h1>} */}
      {modalActive && <EquipModal equip={selectedEquip} handleModal={toggleModal} />}
    </>
  );
};

export default App;
