import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as equipService from '../../services/equipService';

const EquipDetail = (props) => {
    const [equip, setEquip] = useState(null);

    const { equipId } = useParams();
    if(!equip) return <main>Loading...</main>;

useEffect(() => {
    const fetchEquip = async () => {
        const equipData = await equipService.show(equipId);
        setEquip(equipData);
    };
    fetchEquip();
}, [equipId]);


return (
    <main>
      <section>
        <header>
        <h2>{equip.name}</h2>
            <p>
             {`${equip.type} with +${equip.statValue} ${equip.statModify}`} 
            </p>
        </header>
      </section>
      <section>
      </section>
    </main>
  );
  };
  
  export default EquipDetail;
  