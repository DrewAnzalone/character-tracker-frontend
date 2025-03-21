import { Link } from 'react-router';

const EquipList = (props) => {
  return (
    <>
      {props.equips.map(equip =>
        <Link onClick={() => props.handleSelect(equip)} key={equip._id} to={`/equips/${equip._id}`}>
          {/* <tr> */}
          <h2>{equip.name}</h2>
          <p>
            {`${equip.type} with +${equip.statValue} ${equip.statModify}`}
          </p>
          {/* </tr> */}
        </Link>
      )}
    </>
  );
}

export default EquipList;
