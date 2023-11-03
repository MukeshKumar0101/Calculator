import React from 'react'

export default function Output(props:{
    output : string;
    setOutPut : Function;
}) {
  return (
    <div>
      <div  className='h-10 w-72 bg-slate-300 text-right'>{props.output}</div>
    </div>
  )
}
