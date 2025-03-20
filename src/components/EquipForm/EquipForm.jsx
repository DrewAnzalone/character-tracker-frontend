import { useState } from 'react';

const EquipForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    types: '',
    statModify: '',
    statValue: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddHoot(formData);
  };


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name-input'>Name</label>
        <input
          required
          type='text'
          name='name'
          id='name-input'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='types-input'>Types</label>
        <select
          required
          name='types'
          id='types-input'
          value={formData.types}
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
        <select
          required
          name='statModify'
          id='statModify-input'
          value={formData.statModify}
          onChange={handleChange}
        >
          <option value='baseHp'>baseHp</option>
          <option value='baseAtk'>baseAtk</option>
          <option value='baseDef'>baseDef</option>
          <option value='baseMagic'>baseMagic</option>
        </select>
        <label htmlFor='statValue-input'>Stat Value</label>
        <input
          type='number'
          name='statValue'
          id='name-input'
          value={formData.statValue}
          onChange={handleChange}
        />
        <button type='submit'>SUBMIT</button>
      </form>
    </main>
  );
};

export default EquipForm;
