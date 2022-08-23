import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ToDoListFram.css";
import T0DoListItems from "./T0DoListItems";

const ToDoListFram = () => {
  const [addItems, addNewItems] = useState("");
  const [showItems, showNewItems] = useState([]);

  const addInputHandler = (event) => {
    addNewItems(event.target.value);
  };

  const buttonHandler = () => {
    showNewItems((oldItems) => {
      return [addItems, ...oldItems];
    });
    addNewItems("");
  };

  const deletItemsHandler = (id) => {
    showNewItems((oldItems) => {
      return oldItems.filter((curElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-4 mx-auto">
            <div className="card shadow border">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="top__div">
                  <h1 className="mt-2"> ToDoList </h1>
                  <div className="main__input">
                    <input
                      type="text"
                      value={addItems}
                      onChange={addInputHandler}
                      placeholder="Add Item..."
                    />
                    <button onClick={buttonHandler}> + </button>
                  </div>
                </div>
                <div className="all-text__add">
                  <div className="card" id="card-2">
                    <ol>
                      {showItems.map((curValue, index) => {
                        return (
                          <T0DoListItems
                            list={curValue}
                            key={index}
                            id={index}
                            onSelect={deletItemsHandler}
                          />
                        );
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoListFram;
