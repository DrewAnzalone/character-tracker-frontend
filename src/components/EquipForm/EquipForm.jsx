import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import styles from '/src/components/EquipForm/equipform.module.css'

const EquipForm = (props) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Armor',
    statModify: 'baseHP',
    statValue: 0,
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("hello")
    if (user) {
      console.log("valid")
      props.handleAddEquip(formData);
    }
  };


  return (
    <div className="margin">
      <button className={styles.button} onClick={() => navigate(-1)}>Back</button>
      <div className={styles.container}>
        <h1>New Equipment</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor='name-input'>Name</label>
          <input className={styles.input}
            required
            type='text'
            name='name'
            id='name-input'
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor='type-input'>Type</label>
          <select className={styles.select}
            required
            name='type'
            id='type-input'
            value={formData.type}
            onChange={handleChange}
          >
            <option value='Armor'>Armor</option>
            <option value='Axe'>Axe</option>
            <option value='Bow'>Bow</option>
            <option value='Dagger'>Dagger</option>
            <option value='Flail'>Flail</option>
            <option value='Hammer'>Hammer</option>
            <option value='Mace'>Mace</option>
            <option value='Nunchucks'>Nunchucks</option>
            <option value='Shield'>Shield</option>
            <option value='Shortsword'>Shortsword</option>
            <option value='Spear'>Spear</option>
            <option value='Staff'>Staff</option>
            <option value='Sword'>Sword</option>
            <option value='Two-hand'>Two-hand</option>
            <option value='XBow'>XBow</option>
          </select>
          <label htmlFor='category-statModify'>Stat Modifier</label>
          <select className={styles.select}
            required
            name='statModify'
            id='statModify-input'
            value={formData.statModify}
            onChange={handleChange}
          >
            <option value='baseHP'>baseHP</option>
            <option value='baseAtk'>baseAtk</option>
            <option value='baseDef'>baseDef</option>
            <option value='baseMagic'>baseMagic</option>
          </select>
          <label htmlFor='statValue-input'>Stat Value</label>
          <input className={styles.input}
            type='number'
            name='statValue'
            id='name-input'
            value={formData.statValue}
            onChange={handleChange}
          />
          <button type='submit' className={`${user ? '' : 'disabled'} ${styles.button}`} disabled={!user}>Add Equip</button>
        </form>
      </div>
    </div>
  );
};

export default EquipForm;
