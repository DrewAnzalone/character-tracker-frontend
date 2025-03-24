// import { Link } from 'react-router';

const EquipList = (props) => {
  return (
    <>
      {props.equips.map(equip =>
        <div key={equip._id} onClick={() => props.handleSelect(equip)}>
          <table>
            <tbody>
            <tr>
              <th>Equip Name</th>
              <th>Equip Type</th>
              <th>Equip Stats</th>            
            </tr>
            <tr>
                <td>{equip.name}</td>
                <td>{equip.type}</td>
                <td>{`+${equip.statValue} ${equip.statModify}`}</td>
            </tr>
          </tbody>
          </table>

        </div>
      )}
    </>
  );
}

export default EquipList;
