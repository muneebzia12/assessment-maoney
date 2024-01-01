const CurrencyIntro = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div className="row">
        <p className="crossborder-desc">
          {"real-time exchange rate"?.toUpperCase()}
        </p>
        <p className="heading" style={{fontFamily:'light'}}>Effortlessly Convert </p>
        <p className="heading trans-h" style={{fontFamily:'light'}}>Currency</p>
        <div style={{ margin: "2rem 0.6rem" }}>
          <div className="intro-desc" style={{fontFamily:'light'}}>
            Convert your currency from Pounds to Naira or Naira to Dollars.
            Convert
            <p style={{fontFamily:'light'}}>
              Currency Anytime, Anywhere with FinanceFast's Seamless and
              Efficient Service.
            </p>
          </div>

          <div className="intro-desc-mob" style={{fontFamily:'light'}}>
            Convert your currency from Pounds to Naira or Naira to
            <p>Dollars. Convert Currency Anytime </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyIntro;
