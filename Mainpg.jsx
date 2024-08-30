export function Main(){
  return(
      <div className="container">
<div class='fixed flex h-[65px] w-[1500px] ml-[18px] rounded-3xl backdrop-blur-sm b cursor-pointer z-10'>
    <h4 className="absolute w-[60px] h-[30px] flex justify-center mt-5 hover:bg-black  hover:text-white rounded-lg">Logo</h4>
  <div class=' ml-[500px] absolute flex mt-5 gap-10'>
 <h4 class=' w-[50px] z-50 hover:bg-black  hover:text-white rounded-lg  ml-[20px] flex justify-center h-[30px]cursor-pointer'>A</h4>
 <h4 class=' w-[50px] hover:bg-black  hover:text-white rounded-lg  ml-[20px] flex justify-center h-[30px]cursor-pointer'>B</h4>
 <h4 class='w-[50px] hover:bg-black  hover:text-white rounded-lg  ml-[20px] flex justify-center h-[30px] cursor-pointer'>A</h4>
 <h4 class=' w-[50px] hover:bg-black  hover:text-white rounded-lg  ml-[20px] flex justify-center h-[30px] cursor-pointer'>A</h4>
 </div>
 <div class=' absolute m-[10px] ml-[1400px] w-[50px] hover:bg-black  hover:text-white rounded-lg flex justify-center h-[30px] pointer-events-auto cursor-pointer'>
  <h4>Login</h4>
 </div>
</div>
<div class=' absolute w-[1500px] h-[1600px] bg-[#7fffd4] mt-[80px] ml-[18px] rounded-[30px] z-0'>
  <div>
<h1 class='font-Lora font-medium text-7xl ml-[500px] mt-[30px] '>Your money is <br /> where you are<area shape="" coords="" href="" alt="" /></h1>
<p class='ml-[517px] mt-[10px] text-xl'>Spend save and manage your money bank account</p>
 <p class='absolute ml-[575px] text-xl'>your phone is free when your account</p>
 <button className="bg-white rounded-[30px] h-14 w-48 shadow-xl mt-[50px] ml-[640px] text-3xl hover:bg-black hover:text-white cursor-pointer">Buy</button>
</div>
</div>
</div>
  )
}