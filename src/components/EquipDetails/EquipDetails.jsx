import { Navigate } from "react-router";

const EquipDetail = (props) => {
  if (!props.equip) {
    console.log("No equip selected");
    return <Navigate to={"/equips"} />;
  }

  return (
    <>
      <h2>{props.equip.name}</h2>
      <p>
        {`${props.equip.type} with +${props.equip.statValue} ${props.equip.statModify}`}
      </p>
    </>
  );
};

export default EquipDetail;
