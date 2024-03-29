import * as React from "react";

export default function CurrencyList() {
  const lists = [
    {
      heading: "Turkish Lira",
      desc: `340 to ₺1 + ₦2,500 hidden conversion fee `,
    },
    {
      heading: "China Yuan",
      desc: `340 to ₺1 + ₦2,500 hidden conversion fee `,
    },
    {
      heading: "United States",
      desc: `340 to ₺1 + ₦2,500 hidden conversion fee `,
    },
    {
      heading: "South Korea Won",
      desc: `340 to ₺1 + ₦2,500 hidden conversion fee `,
    },
    {
      heading: "South Africa Rand",
      desc: `340 to ₺1 + ₦2,500 hidden conversion fee `,
    },
  ];
  return (
    <div style={{ padding: "10px" }}>
      {lists?.map((items?: any) => {
        return (
          <div className="clist-items">
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#563ACC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "light",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 11.25H12.75V5.25H13.5C14.2949 5.25247 15.0565 5.56934 15.6186 6.13141C16.1807 6.69349 16.4975 7.45511 16.5 8.25C16.5 8.44891 16.579 8.63968 16.7197 8.78033C16.8603 8.92098 17.0511 9 17.25 9C17.4489 9 17.6397 8.92098 17.7803 8.78033C17.921 8.63968 18 8.44891 18 8.25C18 7.05653 17.5259 5.91193 16.682 5.06802C15.8381 4.22411 14.6935 3.75 13.5 3.75H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3.75H10.125C8.93153 3.75 7.78693 4.22411 6.94302 5.06802C6.09911 5.91193 5.625 7.05653 5.625 8.25C5.625 9.44347 6.09911 10.5881 6.94302 11.432C7.78693 12.2759 8.93153 12.75 10.125 12.75H11.25V18.75H9.75C8.95511 18.7475 8.19349 18.4307 7.63141 17.8686C7.06934 17.3065 6.75247 16.5449 6.75 15.75C6.75 15.5511 6.67098 15.3603 6.53033 15.2197C6.38968 15.079 6.19891 15 6 15C5.80109 15 5.61032 15.079 5.46967 15.2197C5.32902 15.3603 5.25 15.5511 5.25 15.75C5.25 16.9435 5.72411 18.0881 6.56802 18.932C7.41193 19.7759 8.55653 20.25 9.75 20.25H11.25V21.75C11.25 21.9489 11.329 22.1397 11.4697 22.2803C11.6103 22.421 11.8011 22.5 12 22.5C12.1989 22.5 12.3897 22.421 12.5303 22.2803C12.671 22.1397 12.75 21.9489 12.75 21.75V20.25H14.25C15.4435 20.25 16.5881 19.7759 17.432 18.932C18.2759 18.0881 18.75 16.9435 18.75 15.75C18.75 14.5565 18.2759 13.4119 17.432 12.568C16.5881 11.7241 15.4435 11.25 14.25 11.25ZM11.25 11.25H10.125C9.32935 11.25 8.56629 10.9339 8.00368 10.3713C7.44107 9.80871 7.125 9.04565 7.125 8.25C7.125 7.45435 7.44107 6.69129 8.00368 6.12868C8.56629 5.56607 9.32935 5.25 10.125 5.25H11.25V11.25ZM14.25 18.75H12.75V12.75H14.25C15.0456 12.75 15.8087 13.0661 16.3713 13.6287C16.9339 14.1913 17.25 14.9544 17.25 15.75C17.25 16.5456 16.9339 17.3087 16.3713 17.8713C15.8087 18.4339 15.0456 18.75 14.25 18.75Z"
                  fill="white"
                />
              </svg>
            </div>

            <span
              style={{
                marginLeft: "1rem",
                textAlign: "left",
                fontFamily: "light",
              }}
            >
              <div style={{fontFamily:'light'}} className="cr-heading">{items?.heading}</div>
              <div style={{fontFamily:'light'}}  className="cr-desc">{items?.desc}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
}
