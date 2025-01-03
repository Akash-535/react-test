import React from 'react'

const OtherTask = () => {
  const TABLE = []
  for (let i = 1; i <= 10; i++) {
    TABLE.push(
      <p key={i}>
        2 * {i} = {2 * i}
      </p>
    )
  }
  
  return (
    <>
    {/* Table Print */}
    <div className='flex items-center justify-center flex-col'>
    <h2 className='text-center text-2xl font-bold pb-5'>Print table of 2</h2>
    <p className='text-xl'>{TABLE}</p>
  </div>
  {/* Function */}

  </>
  )
}

export default OtherTask