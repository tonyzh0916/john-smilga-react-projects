import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlter, list}) => {

  useEffect(()=>{
    const timeout =setTimeout(()=>{
      removeAlter();
    },3000)
    return ()=>clearTimeout(timeout);
  },[list])
  return (
  <p className={`alter alert-${type}`}>{msg}</p>
    )
}

export default Alert
