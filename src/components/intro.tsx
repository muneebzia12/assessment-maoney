const styles = {
  headerText: { fontFamily: "medium" },
};
const Intro = () => {
  return (
    <>
      <div className="row">
        <p style={styles.headerText} className="heading">
          Simplify Your International{" "}
        </p>
        <p style={styles.headerText} className="heading trans-h">
          Transactions with
          <span className="grad-heading">
            <p
              className="purple-heading"
              style={{ display: "inherit", fontFamily: "medium" }}
            >
              One Platform
            </p>
          </span>
        </p>
        <div>
          <div className="intro-desc" style={{ fontFamily: "medium" }}>
            Say Goodbye to the Hassles of Traditional Money Transfers.
            FinanceFast allows
            <p>
              you effortlessly transfer money anywhere in the world with
              confidence and ease.
            </p>
          </div>

          <div className="intro-desc-mob" style={{ fontFamily: "medium" }}>
            Say Goodbye to the Hassles of Traditional Money
            <p>Transfers. Effortlessly transfer with ease. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
