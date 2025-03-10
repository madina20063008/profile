import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "../redux/actions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch(); 

  return (
    <div>
      <h2>Hello</h2>
      <button className="border" onClick={() => dispatch(incrementAction())}>+</button>
      <span>{count}</span>
      <button className="border" onClick={() => dispatch(decrementAction())}>-</button>
    </div>
  );
};


