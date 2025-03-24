import { useState, useEffect } from 'react'
import Select from 'react-select'

const blankSheet = {
  name: '',
  level: 0,
  class: '',
  baseHP: 0,
  baseAtk: 0,
  baseDef: 0,
  baseMagic: 0,
  equips: [],
};

const SheetForm = (props) => {
  const sheet = props.sheet;
  const [formData, setFormData] = useState(blankSheet);

  useEffect(() => {
    const setEditSheet = async () => {
      const currEquips = props.equips.map(e => {
        if (sheet.equips.find(eq => eq._id.toString() === e._id.toString())) {
          return { value: e._id, label: e.name };
        }
      });

      const newFormData = {
        name: sheet.name,
        level: sheet.level,
        class: sheet.class,
        baseHP: sheet.baseHP,
        baseAtk: sheet.baseAtk,
        baseDef: sheet.baseDef,
        baseMagic: sheet.baseMagic,
        equips: currEquips,
      };
      setFormData(newFormData);
    }
    if (sheet) {
      setEditSheet();
    } else {
      return () => setFormData(blankSheet);
    }
  }, [sheet, props.equips]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  const handleMultiSelect = (selected) => {
    setFormData({ ...formData, equips: selected });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    formData.equips = formData.equips.map((e) => e.value);
    if (sheet) {
      props.handleUpdateSheet(formData, sheet._id);
      // TODO update sheet
    } else {
      props.handleAddSheet(formData);
    }
  }

  const equipOptions = props.equips.map((equip) => (
    { value: equip._id, label: equip.name }
  ));

  return (
    <main>
      <h1>{sheet ? 'Edit Sheet' : 'New Sheet'}</h1>
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
        <label htmlFor='level-input'>Level</label>
        <input
          required
          type='number'
          name='level'
          id='level-input'
          value={formData.level}
          onChange={handleChange}
        />
        <label htmlFor='class-input'>Class</label>
        <input
          required
          type='text'
          name='class'
          id='class-input'
          value={formData.class}
          onChange={handleChange}
        />
        <label htmlFor='baseHP-input'>baseHP</label>
        <input
          required
          type='number'
          name='baseHP'
          id='baseHP-input'
          value={formData.baseHP}
          onChange={handleChange}
        />
        <label htmlFor='baseAtk-input'>baseAtk</label>
        <input
          required
          type='number'
          name='baseAtk'
          id='baseAtk-input'
          value={formData.baseAtk}
          onChange={handleChange}
        />
        <label htmlFor='baseDef-input'>baseDef</label>
        <input
          required
          type='number'
          name='baseDef'
          id='baseDef-input'
          value={formData.baseDef}
          onChange={handleChange}
        />
        <label htmlFor='baseMagic-input'>baseMagic</label>
        <input
          required
          type='number'
          name='baseMagic'
          id='baseMagic-input'
          value={formData.baseMagic}
          onChange={handleChange}
        />
        <label htmlFor='equips-input'>Equipment
          <Select
            closeMenuOnSelect={false}
            isClearable={true}
            isSearchable={true}
            isMulti={true}
            options={equipOptions}
            onChange={handleMultiSelect}
            value={formData.equips}
          />
        </label>
        <button type='submit'>{sheet ? 'Update Sheet' : 'Add Sheet'}</button>
      </form>
    </main>
  )
}

export default SheetForm
