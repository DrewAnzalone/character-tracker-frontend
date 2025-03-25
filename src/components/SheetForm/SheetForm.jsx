import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import Select from 'react-select'
import styles from '/src/components/SheetForm/sheetform.module.css'

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
  const navigate = useNavigate();
  const sheet = props.sheet;
  const [formData, setFormData] = useState(blankSheet);

  useEffect(() => {
    const setEditSheet = async () => {
      const currEquips = sheet.equips.map(e => ({ value: e._id, label: e.name }));

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
    } else {
      props.handleAddSheet(formData);
    }
  }

  const equipOptions = props.equips.map((equip) => (
    { value: equip._id, label: equip.name }
  ));

  return (
    <div className="margin">
      <button className={styles.button} onClick={() => navigate(-1)}>Back</button>
      <div className={styles.container}>
        <h1>{sheet ? 'Edit Sheet' : 'New Sheet'}</h1>
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
          <label htmlFor='level-input'>Level</label>
          <input className={styles.input}
            required
            type='number'
            name='level'
            id='level-input'
            value={formData.level}
            onChange={handleChange}
          />
          <label htmlFor='class-input'>Class</label>
          <input className={styles.input}
            required
            type='text'
            name='class'
            id='class-input'
            value={formData.class}
            onChange={handleChange}
          />
          <label htmlFor='baseHP-input'>baseHP</label>
          <input className={styles.input}
            required
            type='number'
            name='baseHP'
            id='baseHP-input'
            value={formData.baseHP}
            onChange={handleChange}
          />
          <label htmlFor='baseAtk-input'>baseAtk</label>
          <input className={styles.input}
            required
            type='number'
            name='baseAtk'
            id='baseAtk-input'
            value={formData.baseAtk}
            onChange={handleChange}
          />
          <label htmlFor='baseDef-input'>baseDef</label>
          <input className={styles.input}
            required
            type='number'
            name='baseDef'
            id='baseDef-input'
            value={formData.baseDef}
            onChange={handleChange}
          />
          <label htmlFor='baseMagic-input'>baseMagic</label>
          <input className={styles.input}
            required
            type='number'
            name='baseMagic'
            id='baseMagic-input'
            value={formData.baseMagic}
            onChange={handleChange}
          />
          <label htmlFor='equips-input' className={styles.equip}>Equipment
            <Select
              isClearable={true}
              isSearchable={true}
              isMulti={true}
              options={equipOptions}
              onChange={handleMultiSelect}
              value={formData.equips}
            />
          </label>
          <button type='submit' className={styles.button}>{sheet ? 'Update Sheet' : 'Add Sheet'}</button>
        </form>
      </div>
    </div>
  )
}

export default SheetForm
