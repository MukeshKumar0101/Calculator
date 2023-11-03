/** @format */

import React, { useEffect, useState } from "react";
import Button from "./Components.tsx/Button";
import Input from "./Components.tsx/Input";
import Output from "./Components.tsx/Output";
import { BsFillBackspaceFill } from "React-icons/bs";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutPut] = useState("");

  useEffect(() => {
    try {
      let ans = input.replaceAll("x", "*").replaceAll("÷", "/");

      setOutPut(eval(ans));
      
    } catch (error) {
      console.log(error);
    }
  }, [input]);

  function addsymbol(d1: string) {
    let b = input[input.length - 1];
    let isInt = Number.isInteger(parseInt(b));
    console.log(isInt);
    if (isInt) {
      setInput(d1);
    }
  }

  alert;
  return (
    <div className="bg-black/50">
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-5 border-2 border-black px-2 py-2 bg-slate-100">
        <div className="space-y-2">
          <Input setInput={setInput} input={input} />
          <Output setOutPut={setOutPut} output={output} />
        </div>
        <div className="flex gap-8 ">
          <Button
            setInput={setInput}
            //  input={input}
            data={"√"} style="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center text-white"
          />
          <Button
            setInput={setInput}
            //  input={input}
            data={"π"} style="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center text-white"
          />
          <Button
            setInput={setInput}
            //  input={input}
            data={"^"} style="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center text-white"
          />
          <Button
            setInput={setInput}
            //  input={input}
            data={"!"} style="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center text-white"
          />
          <Button
            setInput={setInput}
            //  input={input}
            data={"˅"} style="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center text-white"
          />
        </div>
        <div className="flex gap-8">
          <Button
            setInput={() => {
              setInput("");
              setOutPut("");
            }}
            // input={input}
            data={"AC"} style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
          />
          <Button style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            data={"( )"} 
          />
          <Button style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            //  input={input}
            data={"%"}
          />
          <Button style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={(d1: string) => {
              // let b = input[input.length - 1];
              // let isInt = Number.isInteger(parseInt(b));
              // console.log(isInt);
              // if (isInt) {
              //   setInput(d1);
              // }
              addsymbol(d1);
            }}
            // input={input}
            data={"÷"}
          />
        </div>
        <div className="flex gap-8">
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"7"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"8"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"9"}
          />
          <Button style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={(d1: string) => {
              // let b = input[input.length - 1];
              // let isInt = Number.isInteger(parseInt(b));
              // console.log(isInt);
              // if (isInt) {
              //   setInput(d1);
              // }
              addsymbol(d1);
            }}
            // input={input}
            // setOutPut={setOutPut}
            data={"x"}
          />
        </div>
        <div className="flex gap-8">
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"4"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"5"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"6"}
          />
          <Button  style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={(d1: string) => {
              // let b = input[input.length - 1];
              // let isInt = Number.isInteger(parseInt(b));
              // console.log(isInt);
              // if (isInt) {
              //   setInput(d1);
              // }
              addsymbol(d1);
            }}
            // input={input}
            // setOutPut={setOutPut}
            data={"-"}
          />
        </div>
        <div className="flex gap-8">
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"1"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"2"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"3"}
          />
          <Button  style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={(d1: string) => {
              // let b = input[input.length - 1];
              // let isInt = Number.isInteger(parseInt(b));
              // console.log(isInt);
              // if (isInt) {
              //   setInput(d1);
              // }
              addsymbol(d1);
            }}
            // input={input}
            data={"+"}
          />
        </div>
        <div className="flex gap-8">
          <Button style="bg-gray-500 h-10 w-12 rounded-lg  flex justify-center items-center text-white"
            setInput={setInput}
            // input={input}
            // setOutPut={setOutPut}
            data={"0"}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={setInput}
            //  input={input}
            data={"."}
          />
          <Button style="bg-gray-500 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            data={<BsFillBackspaceFill />}
            setInput={() => {
              let h = input.substring(0, input.length - 1);
              setInput(h);
              h = h.replaceAll("x", "*");
              setOutPut(eval(h));
            }}
            // input={input}
          />
          <Button style="bg-purple-800 h-10 w-12 rounded-lg flex justify-center items-center text-white"
            setInput={() => {
              let a1 = input.replaceAll("x","*").replaceAll("÷","/")
              setInput(   eval(a1));
              setOutPut(eval(output));
              setOutPut('');
            }}
            
        
            // input={input}
            data={"="}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
