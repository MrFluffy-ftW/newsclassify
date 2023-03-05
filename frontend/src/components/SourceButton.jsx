import React from "react";

const SourceButton = ({ link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <button className="button-source" onClick={handleClick}>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <span>Source</span>
    </button>
  );
};

export default SourceButton;
