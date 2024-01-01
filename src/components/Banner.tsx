import ban from "../assets/svgs/apps-banner.svg";
import banSm from "../assets/svgs/banner-sm.svg";

import useIsMobile from "./useIsMobile";

const Banner = () => {
  const { isMobile } = useIsMobile();
  return (
    <img
      src={isMobile ? banSm : ban}
      alt="abc"
      height={370}
      style={{ minWidth: "100vw", maxWidth: "-webkit-fill-available" }}
    />
  );
};

export default Banner;
