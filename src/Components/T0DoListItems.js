import React from "react";

const T0DoListItems = (props) => {
  return (
    <>
      <div className="delet__btn">
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li> {props.list} </li>
      </div>
    </>
  );
};

export default T0DoListItems;
