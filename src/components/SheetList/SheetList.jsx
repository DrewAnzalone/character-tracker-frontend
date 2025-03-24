import { Link } from 'react-router';
import styles from '/src/components/SheetList/sheetlist.module.css'

const SheetList = (props) => {
  return (
    <>
      <Link to='/sheets/new' onClick={() => props.handleSelect(null)}>Create Sheet</Link>
      {props.sheets.map(sheet =>
        <Link onClick={() => props.handleSelect(sheet)} key={sheet._id} to={`/sheets/${sheet._id}`}>
          <div className={styles.div}>
          <h3 className={styles.h3}>{sheet.name}</h3>
          {/* Possible picture In future */}
          <h3 className={styles.h3}>Level {sheet.level} {sheet.class}</h3>
          <ul className={styles.ul} >
            <li className={styles.li} >HP: {sheet.baseHP}</li>
            <li className={styles.li}>Atk: {sheet.baseAtk}</li>
            <li className={styles.li}>Def: {sheet.baseDef}</li>
            <li className={styles.li}>Magic: {sheet.baseMagic}</li>
          </ul>
          <p className={styles.p}>Equipment: {sheet.equips.length}</p>
          </div>
        </Link>
      )}
    </>
  )
};

export default SheetList
