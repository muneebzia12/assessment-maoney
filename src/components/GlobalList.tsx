import * as React from "react";


export default function GlobalList() {
  const lists = [
    "Lorem Ipsum has been the industry's standard dummy text",
    "ince the 1500s, when an unknown printer took a galley",
    "scrambled it to make a type specimen book. It has survived",
    "Lack of transparency",
    "years old. Richard McClintock, a Latin professor ",
    "The standard chunk of Lorem Ipsum used since the 1500s",
    "The standard chunk of Lorem Ipsum used since the 1500s",
    "Contrary to popular belief, Lorem Ipsum is not simply ",
    "FastFinance app from your iOS of Android store.",
  ];
  return (
    <div style={{ padding: "10px" }}>
      {lists?.map((items?: any) => {
        return (
          <div className="list-items">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#3A3A3A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span style={{ marginLeft: "1rem", textAlign: "left", fontFamily:'light' }}>
              {items}
            </span>
          </div>
        );
      })}
    </div>
  );
}
