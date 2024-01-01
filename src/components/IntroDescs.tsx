
const IntroDescs = ({
  upperDesc,
  lowerDesc,
}: {
  upperDesc?: { web?: string; mob?: string };
  lowerDesc?: { web?: string; mob?: string };
}) => {
  return (
    <div className="row">
      <div>
        <div className="intro-desc">
          {upperDesc?.web ?? null}
          <p>{lowerDesc?.web ?? null}</p>
        </div>

        <div className="intro-desc-mob">
          {upperDesc?.mob ?? null}
          <p>{lowerDesc?.mob ?? null} </p>
        </div>
      </div>
    </div>
  );
};

export default IntroDescs;
