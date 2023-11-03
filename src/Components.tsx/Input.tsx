/** @format */

import React from "react";

export default function Input(props: { setInput: Function; input: string }) {
  return (
    <div>
      <input
        value={props.input}
        onChange={(event) => {
          let a = event.target.value;
          props.setInput(a);
        }}
        type="text"
        placeholder=""
        className=" text-right bg-slate-300 text-3xl w-72 h-16"
      />
    </div>
  );
}
