import './EquipModal.css';
import * as images from '../../assets';

const imageFiles = {
  "Armor": images.Armor,
  "Axe": images.Axe,
  "Bow": images.Bow,
  "Dagger": images.Dagger,
  "Flail": images.Flail,
  "Hammer": images.Hammer,
  "Mace": images.Mace,
  "Nunchucks": images.Nunchucks,
  "Shield": images.Shield,
  "Shortsword": images.Shortsword,
  "Spear": images.Spear,
  "Staff": images.Staff,
  "Sword": images.Sword,
  "Two-hand": images.TwoHand,
  "XBow": images.XBow,
};

const EquipModal = (props) => {

  return (
    <div
      className="modal-wrapper"
      onClick={props.handleModal}
    >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
      >
        <div>
          <img src={imageFiles[props.equip.type]} alt="Weapon glyph" />
        </div>
        <div>
          <h2>{props.equip.name}</h2>
          <p>{`+${props.equip.statValue} ${props.equip.statModify}`}</p>
        </div>
      </div>
    </div>
  );
}

export default EquipModal;
