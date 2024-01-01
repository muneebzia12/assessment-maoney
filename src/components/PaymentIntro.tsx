const PaymentIntro = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div className="row">
        <p className="crossborder-desc">Cross-Border Transactions</p>
        <p className="heading" style={{ fontFamily: "medium" }}>
          Say Goodbye to International{" "}
        </p>
        <p className="heading trans-h" style={{ fontFamily: "medium" }}>
          Payment Hassles
        </p>
        <div style={{ margin: "2rem 0.6rem" }}>
          <div className="intro-desc">
            Start your journey to hassle free Cross-Border Payments by
            downloading the
            <p>FastFinance app from your iOS of Android store.</p>
          </div>

          <div className="intro-desc-mob">
            Start your journey to hassle free Cross-Border
            <p>Payments with FastFinance. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntro;
