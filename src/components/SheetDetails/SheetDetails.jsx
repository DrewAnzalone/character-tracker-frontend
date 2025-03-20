// import { Link, Navigate, useParams } from "react-router";
import { Link, Navigate } from "react-router";

const SheetDetails = (props) => {
  // const { sheet } = useParams();
  if (!props.sheet) {
    return <Navigate to={"/"} />;
  }

  const {
    name: name,
    level: level,
    class: sheetClass,
    baseHP: baseHP,
    baseAtk: baseAtk,
    baseDef: baseDef,
    baseMagic: baseMagic,
    equips: equips
  } = props.sheet;

  return (
    <>
      <div>
        <img src="https://kbhgames.com/wp-content/uploads/2021/12/fnf-animation-vs-animator-the-chosen-one.jpg" alt="the chosen one" />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>Level {level} {sheetClass}</h2>
        <ul>
          <li>HP: {baseHP}</li>
          <li>Atk: {baseAtk}</li>
          <li>Def: {baseDef}</li>
          <li>Magic: {baseMagic}</li>
        </ul>
      </div>
      <div>
        {equips.map(equip =>
          <Link
            key={equip._id}
            to={`/sheets/${props.sheet._id}/${equip._id}`}
          >
            <p>{equip.name}</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default SheetDetails;
