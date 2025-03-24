import { Link } from 'react-router';
import styles from '/src/components/EquipList/table.module.css'

const EquipList = (props) => {
  return (
    <>
    <li><Link to='/equips/new'>New Equip</Link></li>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Equip Name</th>
            <th>Equip Type</th>
            <th>Equip Stats</th>
            <th>Delete?</th>
          </tr>
          {props.equips.map(equip =>
              <tr key={equip._id}>
                <td onClick={() => props.handleSelect(equip)}>{equip.name}</td>
                <td>{equip.type}</td>
                <td>{`+${equip.statValue} ${equip.statModify}`}</td>
                <td><button onClick={() => props.handleDeleteEquip(equip._id)}>Delete</button></td>
              </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default EquipList;
