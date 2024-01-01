const QuestionIntro = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div className="row">
        <p className="crossborder-desc">{"FAQ’S"?.toUpperCase()}</p>
        <p style={{fontFamily: "light"}} className="heading">Got questions?</p>
      </div>
      <div style={{ margin: "1rem 0.6rem" }}>
        <div className="intro-desc" style={{fontFamily: "light"}}>
          Get the answers to your questions about FastFinance.
        </div>
        <div className="intro-desc-mob" style={{fontFamily: "light"}}>
          Get the answers to your questions about FastFinance.
        </div>
      </div>
    </div>
  );
};

export default QuestionIntro;
