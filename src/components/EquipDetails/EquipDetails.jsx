import { Navigate, useContext } from "react-router";
import { UserContext } from '../../contexts/UserContext';


const EquipDetail = (props) => {
  const { user } = useContext(UserContext);

    if (!props.equip) {
    console.log("No equip selected");
    return <Navigate to={"/equips"} />;
  }

  return (
    <header>
      <h2>{props.equip.name}</h2>
      <p>
        {`${props.equip.type} with +${props.equip.statValue} ${props.equip.statModify}`}
      </p>

    {equip.author._id === user._id && (
      <>
        <button onClick={() => props.handleDeleteEquip(equipId)}>
            Delete
        </button>
      </>
    )}
  </header>
  );
};

export default EquipDetail;
