import {Link} from 'react-router';

const SheetList = (props) => {
  return (
    <main>
      <Link /*to={/sheets/new}*/>Create Sheet</Link>
      {props.sheets.map((sheet) => (
        <Link onClick={props.handleSelect} key={sheet._id} to={`/sheets/${sheet._id}`}>
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
      ))}
      {console.log(props.select)}
    </main>
  )
};

export default SheetList