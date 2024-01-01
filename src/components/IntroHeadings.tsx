import TelInput from "./TelInput";

const IntroHeadings = ({
  isGrad = false,
  upperHead,
  lowerHead,
}: {
  upperHead?: { web?: string; mob?: string };
  lowerHead?: { web?: string; mob?: string };
  isGrad?: boolean;
}) => {
  return (
    <div className="row">
      <p className="heading">{upperHead?.web} </p>
      <p className="heading trans-h">
        {lowerHead?.web}
        {isGrad ? (
          <span className="grad-heading">
            <p className="purple-heading" style={{ display: "inherit" }}>
              One Platform
            </p>
          </span>
        ) : null}
      </p>
      <div>
        <div className="intro-desc">
          {upperHead?.web ?? null}
          <p>{lowerHead?.web ?? null}</p>
        </div>

        <div className="intro-desc-mob">
          {upperHead?.mob ?? null}
          <p>{lowerHead?.mob ?? null} </p>
        </div>
      </div>
    </div>
  );
};

export default IntroHeadings;
