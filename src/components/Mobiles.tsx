import Mobs from "../assets/svgs/mobs.svg";
const Mobiles = () => {
  const divStyle = {
    backgroundImage: `url(${Mobs})`,
  };
  return (
    // <div className="mobs-wrappers">
    <img className="mobs-wrapper" src={Mobs} style={{}} />
    // </div>a
  );
};

export default Mobiles;
