import { Link, Navigate, useNavigate } from "react-router";
import * as images from '../../assets';

import styles from '/src/components/SheetDetails/sheetdetails.module.css'

const SheetDetails = (props) => {
  const navigate = useNavigate();

  if (!props.sheet) {
    return <Navigate to={"/"} />;
  }

  const stats = {
    baseHP: props.sheet.baseHP,
    baseAtk: props.sheet.baseAtk,
    baseDef: props.sheet.baseDef,
    baseMagic: props.sheet.baseMagic
  };

  props.sheet.equips.forEach(equip => {
    stats[equip.statModify] += equip.statValue;
  });

  const {
    name: name,
    level: level,
    class: sheetClass,
    equips: equips
  } = props.sheet;

  return (
    <>
      <button className={`margin ${styles.button}`} onClick={() => navigate(-1)}>Back</button>
      <div className={`margin ${styles.container}`}>
        <div className={styles.sheetCard}>
          <h1 className={styles.h1}>{name}</h1>
          <div className={styles.imgcontainer}>
            <img src={images.Character} alt="Character placeholder" className={styles.img} />
          </div>
          <h2 className={styles.h2}>Level {level} {sheetClass}</h2>
          <ul className={styles.statsList}>
            <li className={styles.itemStat}>HP: {stats.baseHP}</li>
            <li className={styles.itemStat}>Atk: {stats.baseAtk}</li>
            <li className={styles.itemStat}>Def: {stats.baseDef}</li>
            <li className={styles.itemStat}>Magic: {stats.baseMagic}</li>
          </ul>
        </div>

        <div>
          {equips.map(equip =>
            <div key={equip._id} className={styles.equipItem} onClick={() => props.handleSelect(equip)}>
              <p>{equip.name}</p>
            </div>
          )}
        </div>

        <div>
          <button className={styles.button}>
            <Link to={`/sheets/${props.sheet._id}/edit`} className={styles.link}>Edit Sheet</Link>
          </button>
          <button className={styles.button} onClick={() => props.handleDeleteSheet(props.sheet._id)}>Delete</button>
        </div>
      </div>
    </>
  );

}

export default SheetDetails;
