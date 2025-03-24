// import { Link } from 'react-router';

const EquipList = (props) => {
  return (
    <>
      {props.equips.map(equip =>
        <div key={equip._id} onClick={() => props.handleSelect(equip)}>
          {/* <tr> */}
          <h2>{equip.name}</h2>
          <p>
            {`${equip.type} with +${equip.statValue} ${equip.statModify}`}
          </p>
          {/* </tr> */}
        </div>
      )}
    </>
  );
}

export default EquipList;
