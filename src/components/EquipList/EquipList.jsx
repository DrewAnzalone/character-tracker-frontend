import { Link } from 'react-router';

const EquipList = (props) => {
return (
    <main>
      {props.equips.map((equip) => (
        <Link key={equip._id} to={`/equips/${equip._id}`}>
          <article>
            <header>
            <h2>{equip.name}</h2>
            <p>
                {`${equip.type} with +${equip.statValue} ${equip.statModify}`} 
            </p>
            </header>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default EquipList;
