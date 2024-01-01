import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

const TelInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (value?: any) => {
    setValue(value);
  };

  return (
    <div className="tel-wrapper">
      <MuiTelInput
        defaultCountry="PK"
        onChange={handleChange}
        value={value}
      ></MuiTelInput>
      <span style={{fontFamily:'normal'}} className="download-btn download-btn-space">Download Now</span>
    </div>
  );
};

export default TelInput;
