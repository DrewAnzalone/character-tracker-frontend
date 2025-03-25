import { Link, Navigate, useNavigate } from "react-router";
import * as images from '../../assets';

import styles from '/src/components/SheetDetails/sheetdetails.module.css'

const SheetDetails = (props) => {
  const navigate = useNavigate();

  if (!props.sheet) {
    return <Navigate to={"/"} />;
  }

  const stats = { baseHP: props.sheet.baseHP, baseAtk: props.sheet.baseAtk, baseDef: props.sheet.baseDef, baseMagic: props.sheet.baseMagic }
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
      <button className={styles.button} onClick={() => navigate(-1)}>Back</button>
      <div>
        <h1>{name}</h1>
        <div>
        <img src={images.Character} alt="Character placeholder" />
      </div>
        <h2>Level {level} {sheetClass}</h2>
        <ul>
          <li>HP: {stats.baseHP}</li>
          <li>Atk: {stats.baseAtk}</li>
          <li>Def: {stats.baseDef}</li>
          <li>Magic: {stats.baseMagic}</li>
        </ul>
      </div>
      <div>
        {equips.map(equip =>
          <div
            key={equip._id}
            onClick={() => props.handleSelect(equip)}
          >
            <p>{equip.name}</p>
          </div>
        )}
      </div>
      <button className={styles.button}><Link to={`/sheets/${props.sheet._id}/edit`}>Edit Sheet</Link></button>
      <button className={styles.button} onClick={() => props.handleDeleteSheet(props.sheet._id)}>Delete</button>
    </>
  );
}

export default SheetDetails;
