import { Link } from 'react-router';

const EquipList = (props) => {
  return (
    <>
      {props.equips.map(equip =>
        <Link onClick={() => props.handleSelect(equip)} key={equip._id} to={`/equips/${equip._id}`}>
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

        </Link>
      )}
    </>
  );
}

export default EquipList;