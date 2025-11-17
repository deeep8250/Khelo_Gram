import React from 'react'

const SignIn = () => {
  
   const handleSubmit = (e) => {
    e.preventDefault();
   
    // TODO: Send data to backend/Firebase/etc.
  };
  
  
  return (
    <form onSubmit={handleSubmit}  className='flex flex-col p-8 gap-10'>

     <input placeholder='Username' required className='h-20 w-full  bg-gray-200 rounded-2xl text-2xl  p-10'/>
     <input placeholder='Password' required className='h-20 w-full bg-gray-200 rounded-2xl text-2xl p-10'/>
      <button className='bg-black text-amber-50 text-4xl ww-200  p-4 rounded-2xl'>Sign In</button>
    </form>
  )
}

export default SignIn