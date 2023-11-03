/** @format */

import React, { ReactNode } from "react";

export default function Button(props: {
  data: ReactNode;
  // input: string;
  setInput: Function;
  // setOutPut?: Function;
  // ouput : string;
  style : string;
}) {
  return (
    <div
      onClick={() => {
        // let d1 = props.input + props.data
        // props.setInput(d1);
        // let ans = d1.replaceAll("x","*").replaceAll("÷","/")

        // props.setOutPut && props.setOutPut(eval(ans));
        props.setInput((input: string) => input + props.data); 
      }}
      className={`${props.style} `}>
      {props.data}
    </div>
  );
}
