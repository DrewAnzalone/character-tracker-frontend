import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import styles from '/src/components/EquipList/table.module.css'
import * as images from '../../assets';

const imageFiles = {
  "Armor": images.Armor,
  "Axe": images.Axe,
  "Bow": images.Bow,
  "Dagger": images.Dagger,
  "Flail": images.Flail,
  "Hammer": images.Hammer,
  "Mace": images.Mace,
  "Nunchucks": images.Nunchucks,
  "Shield": images.Shield,
  "Shortsword": images.Shortsword,
  "Spear": images.Spear,
  "Staff": images.Staff,
  "Sword": images.Sword,
  "Two-hand": images.TwoHand,
  "XBow": images.XBow,
};

const EquipList = (props) => {
  const { user } = useContext(UserContext);

  return (
    <div className='margin'>
      {user ? <button className={styles.button}><Link to='/equips/new'>New Equip</Link></button> : null}
      <table className={styles.table}>
        <tbody>
          <tr>
            <th></th>
            <th>Equip Name</th>
            <th>Equip Type</th>
            <th>Equip Stats</th>
            <th>Delete?</th>
          </tr>
          {props.equips.map(equip =>
            <tr key={equip._id}>
              <td onClick={() => props.handleSelect(equip)} className={styles.centered}><img src={imageFiles[equip.type]} alt="Weapon glyph" /></td>
              <td onClick={() => props.handleSelect(equip)}>{equip.name}</td>
              <td onClick={() => props.handleSelect(equip)}>{equip.type}</td>
              <td onClick={() => props.handleSelect(equip)}>{`+${equip.statValue} ${equip.statModify}`}</td>
              <td><button onClick={() => props.handleDeleteEquip(equip._id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EquipList;
