import { Link } from 'react-router';

const SheetList = (props) => {
  return (
    <>
      <Link to='/sheets/new'>Create Sheet</Link>
      {props.sheets.map(sheet =>
        <Link onClick={() => props.handleSelect(sheet)} key={sheet._id} to={`/sheets/${sheet._id}`}>
          <h3>{sheet.name}</h3>
          {/* Possible picture In future */}
          <h3>Level {sheet.level} {sheet.class}</h3>
          <ul>
            <li>HP: {sheet.baseHP}</li>
            <li>Atk: {sheet.baseAtk}</li>
            <li>Def: {sheet.baseDef}</li>
            <li>Magic: {sheet.baseMagic}</li>
          </ul>
          <p>Equipment: {sheet.equips.length}</p>
        </Link>
      )}
    </>
  )
};

export default SheetList
