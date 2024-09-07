import { RiDashboardHorizontalFill } from "react-icons/ri";
import React from 'react';
import logo from '../src/assets/companylogo1.png';
import { SiOxygen } from "react-icons/si";
import { FaTemperatureLow } from "react-icons/fa";
import { CiGps } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { MdBloodtype } from "react-icons/md";
import { TbBrandSugarizer } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
} from 'recharts';


const data=[
  {
    month: 'Sun',
    savings: 100,
    checking: 700,
  },
  {
    month: 'Mon',
    savings: 400,
    checking: 1000,
  },
  {
    month: 'Tues',
    savings: 200,
    checking: 800,
  },
  {
    month: 'thurs',
    savings: 600,
    checking: 1300,
  },
  {
    month: 'fri',
    savings: 800,
    checking:1600
  },
];

export const Dash=()=>{
  return (
    <div>
    <div class='flex absolute w-[200px] h-[695px]  bg-sky-950 text-white shadow-2xl shadow-sky-950 '>
      <div class=''>
      <img  src={logo} alt="" className="absolute size-28" />
      </div>
      <ul>
      <li className="relative flex items-center text-center pl-6 mt-[180px] text-xl   font-medium rounded-3xl hover:border-2 ml-8 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <GrMoney className="absolute left-0" />
            FINANCE</li>
            <li className="relative flex items-center pl-6 mt-[50px] text-xl ml-8 font-medium  rounded-3xl hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <MdBloodtype className="absolute left-0" />
            BPM</li>
            <li className="relative flex items-center pl-6 mt-[50px] text-xl ml-8 font-medium rounded-3xl hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <SiOxygen className="absolute left-0" />
            OXYGEN</li>
            <li className="relative flex items-center pl-6 mt-[50px] text-xl ml-8 font-medium rounded-3xl hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <FaTemperatureLow className="absolute left-0" />
            TEMPERATURE</li>
            <li className="relative flex items-center pl-6 mt-[50px] text-xl ml-8 font-medium rounded-3xl hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <TbBrandSugarizer className="absolute left-0" />
            GLUCOSE</li>
            <li className="relative flex items-center pl-6 mt-[50px] text-xl ml-8 font-medium rounded-3xl hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white ">
            <CiGps className="absolute left-0" />
            GPS</li>
      
      </ul>
    </div>
    <div className=" flex flex-wrap ml-[300px] gap-10 absolute mt-6 ">
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-36 text-4xl font-bold text underline text-white">ECG</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="[#sky-950]"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-36 text-4xl font-bold text underline text-white">BPM</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="white"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-36 text-4xl font-bold text underline text-white">SLEEP</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="white"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-28 text-4xl font-bold text underline text-white">OXYGEN</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="white"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-28 text-4xl font-bold text underline text-white">GLUCOSE</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="white"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      <div className=" w-[350px] h-[300px] bg-sky-950 shadow-2xl shadow-sky-950"> <h1 className="flex absolute ml-20 text-3xl font-bold text underline text-white">TEMPERATURE</h1>
      <BarChart width={350} height={270} data={data} className="-ml-2 mt-8">
  {/* <CartesianGrid></CartesianGrid> */}
  <XAxis dataKey="month" className="text-xl"></XAxis>
  <YAxis className="text-xl"></YAxis>
  <Tooltip color="black"></Tooltip>
  {/* <Legend></Legend> */}
  <Bar
    type="monotone"
    dataKey="savings"
    stroke="black"
    fill="white"
    strokeWidth={1}  // Reduced stroke width here
  ></Bar>
</BarChart>
      </div>
      </div>
    </div>
    
  )
}