export function Main(){
  return(
 < div class=' flex flex-row justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
  <div class="  w-[500px] h-[550px] border-2 border-black bg-sky-600">
    <h1 class='text-6xl font-semibold flex justify-center mt-20'>Welcome</h1>
    <h1 class='flex justify-center  mt-6 text-3xl'>Enter your information <br /> for further process</h1>
  </div>
  <div class='w-[500px] h-[550px] bg-white border-2 border-black'>
  <h6 class='  flex justify-center mt-7 text-5xl underline '>Registration</h6>
 <input class='w-76 h-10  border-2 border-black mt-16 ml-7  text-center rounded-lg ' type="" placeholder='Enter your first name' />
 <input class='w-76 h-10  border-2 border-black mt-16 ml-7  text-center rounded-lg ' type="" placeholder='Enter your last name' />
 <input class='absolute w-[395px] h-10  border-2 border-black mt-36 -ml-[396px]  text-center rounded-lg ' type="" placeholder='Enter your email'/>
 <input class='absolute w-[395px] h-10  border-2 border-black mt-56 -ml-[396px]  text-center rounded-lg ' type="" placeholder='Enter your number' />
 <input class='absolute w-[395px] h-10  border-2 border-black mt-[300px] -ml-[396px]  text-center rounded-lg ' type="" placeholder='Enter your address' />
 <button class='absolute w-48 h-10  border-2 border-black mt-[380px] -ml-[290px] text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 '>Submit</button>
  </div>
  </div>
  )
}