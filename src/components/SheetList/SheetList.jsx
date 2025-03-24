import { Link } from 'react-router';
import styles from '/src/components/SheetList/sheetlist.module.css'
import * as images from '../../assets';

const SheetList = (props) => {
  return (
    <>
      <Link to='/sheets/new' onClick={() => props.handleSelect(null)}>Create Sheet</Link>
      {props.sheets.map(sheet => {
        const stats = { baseHP: sheet.baseHP, baseAtk: sheet.baseAtk, baseDef: sheet.baseDef, baseMagic: sheet.baseMagic }
        sheet.equips.forEach(equip => {
          stats[equip.statModify] += equip.statValue;
        });

        return <Link onClick={() => props.handleSelect(sheet)} key={sheet._id} to={`/sheets/${sheet._id}`}>
          <div className={styles.div}>
            <h3 className={styles.h3}>{sheet.name}</h3>
            <img src={images.Character} alt="" />
            <h3 className={styles.h3}>Level {sheet.level} {sheet.class}</h3>
            <ul className={styles.ul} >
              <li className={styles.li} >HP: {stats.baseHP}</li>
              <li className={styles.li}>Atk: {stats.baseAtk}</li>
              <li className={styles.li}>Def: {stats.baseDef}</li>
              <li className={styles.li}>Magic: {stats.baseMagic}</li>
            </ul>
            <p className={styles.p}>Equipment: {sheet.equips.length}</p>
          </div>
        </Link>;
      }
      )}
    </>
  )
};

export default SheetList
