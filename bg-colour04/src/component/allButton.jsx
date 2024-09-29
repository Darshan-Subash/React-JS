import React from 'react'
import Button from './Button';
function AllButton({setColor}) {
  return (
    <div className='flex flex-wrap bottom-10 fixed  inset-x-0 px-2 justify-center'>
     <div className='bg-white flex flex-wrap justify-center gap-3 shadow-xl rounded-full px-3 py-2'>
      <Button colour="black" bgColour="bg-black" setColor={setColor}></Button>
      <Button colour="green" bgColour="bg-green-800" setColor={setColor}></Button>
      <Button colour="blue" bgColour="bg-blue-800" setColor={setColor}></Button>
      <Button colour="yellow" bgColour="bg-yellow-500" setColor={setColor}></Button>
      <Button colour="red" bgColour="bg-red-700" setColor={setColor}></Button>
      </div>
      
    </div>
  )
}

export default AllButton
