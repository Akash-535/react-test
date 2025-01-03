import React, { useState } from 'react'

const OtherTask = () => {
    // Add
    const [numberOne, setNumberOne] = useState()
    const [numberTwo, setNumberTwo] = useState()
    const [add, setAdd] = useState(0)
  
    const addNumbers = () => {
      setAdd(numberOne + numberTwo)
    }
    // Table
  const TABLE = []
  for (let i = 1; i <= 10; i++) {
    TABLE.push(
      <p key={i}>
        2 * {i} = {2 * i}
      </p>
    )
  }
//   Star Print 
  let patternSize = 5;
  const pattern = [];
  for (let i = 0; i < patternSize; i++) {
    let line = "";
    for (let j = 0; j < patternSize; j++) {
      line += "*";
    }
    pattern.push(<div key={i}>{line}</div>)
  }
  
  return (
    <>
    {/* Table Print */}
    <div className='flex items-center justify-center flex-col'>
    <h2 className='text-center text-2xl font-bold pb-5'>Print table of 2</h2>
    <p className='text-xl'>{TABLE}</p>
  </div>

  {/* Print Star Mathod */}
<div className='text-center'>
    <p className='text-center text-2xl font-bold py-5'>Star</p>
    {pattern}</div>

    {/* Function */}
    <div className='flex items-center justify-center py-[60px] max-lg:py-10 flex-col'>
      <div className='max-w-[1140px] px-4 mx-auto'>
        <div className='flex flex-wrap items-center md:justify-center gap-4'>
          <input
            className='py-3 px-3 rounded-lg border border-black outline-none !placeholder-black font-semibold'
            value={numberOne}
            placeholder='0'
            type='number'
            onChange={(e) => setNumberOne(Number(e.target.value))}
          />
          <input
            className='py-3 px-3 rounded-lg border border-black outline-none !placeholder-black font-semibold'
            value={numberTwo}
            placeholder='0'
            type='number'
            onChange={(e) => setNumberTwo(Number(e.target.value))}
          />
          <button
            onClick={addNumbers}
            className='py-3 px-3 border border-green bg-green-400 rounded-lg font-semibold'
          >
            Add
          </button>
        </div>
        <p className='text-2xl font-bold text-green-500 max-md:text-xl text-center pt-5'>
          Answer = {add}
        </p>
      </div>
    </div>
  </>
  )
}

export default OtherTask