import {useState} from 'react'

const SheetForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    class: '',
    baseHP: '',
    baseAtk: '',
    baseDef: '',
    baseMagic: '',
  })

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddSheet(formData)
  }

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
          <label htmlFor='level-input'>Level</label>
          <input
            required
            type='text'
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
          <button type='submit'>Add Sheet</button>
      </form>
    </main>
  )
}

export default SheetForm
