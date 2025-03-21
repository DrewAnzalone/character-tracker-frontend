import {useState, useEffect} from 'react'
import {useParams} from 'react-router'

import * as sheetService from '../../services/sheetService'

const SheetForm = (props) => {
  const {sheetId} = useParams()
  const [formData, setFormData] = useState({
    name: '',
    level: 0,
    class: '',
    baseHP: 0,
    baseAtk: 0,
    baseDef: 0,
    baseMagic: 0,
  })

  useEffect(() => {
    const fetchSheet = async () => {
      const sheetData = await sheetService.show(sheetId)
      setFormData(sheetData)
    }
    if (sheetId) fetchSheet()

    return () => setFormData({
      name: '', 
      level: 0, 
      class: '', 
      baseHP: 0, 
      baseAtk: 0,
      baseDef: 0,
      baseMagic: 0
    })
  }, [sheetId])

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (sheetId) {
      props.handleUpdateSheet(sheetId, formData)
    } else {
    props.handleAddSheet(formData)
    }
  }

  return (
    <main>
      <h1>{sheetId ? 'Edit Sheet' : 'New Sheet'}</h1>
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
          <button type='submit'>{sheetId ? 'Update Sheet' : 'Add Sheet'}</button>
      </form>
    </main>
  )
}

export default SheetForm
