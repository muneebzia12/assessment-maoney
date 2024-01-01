import Mobs from "../assets/svgs/clients.svg";
import MobsSm from "../assets/svgs/client-sm.svg";
import useIsMobile from "./useIsMobile";

const AllCliens = () => {
  const { isMobile } = useIsMobile();

  return (
    <img
      alt="abc"
      className="mobs-wrappers"
      src={isMobile ? MobsSm : Mobs}
      style={{ width: "-webkit-fill-available" }}
    />
  );
};

export default AllCliens;
