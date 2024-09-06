import { RiDashboardHorizontalFill } from "react-icons/ri";
import React from 'react';
import ImageSlider from "./Slide.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../src/assets/companylogo1.png';
import { SiOxygen } from "react-icons/si";
import { FaTemperatureLow } from "react-icons/fa";
import { CiGps } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { MdBloodtype } from "react-icons/md";
import { TbBrandSugarizer } from "react-icons/tb";
import {
  LineChart,
  Line,
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
const slide=[
  {
    name:'ECG',
    about1:`An Electrocardiogram (ECG or EKG) is a medical test that records the electrical activity `,
    about2:`of the heart over a period of time. It is a non-invasive and painless procedure`,
    about3:` used to detect heart problems and monitor the heart's health.`
  },
  {
    name:'BPM',
    about1:`BPM stands for Beats Per Minute and is a measurement used to express the tempo or`,
    about2:`speed of rhythm,particularly in music and heart rate monitoring. It quantifies`,
    about3:`     the number of beats or the pulses occurring in one minute.`
  },
  {
    name:'OXYGEN',
    about1:`Oxygen measurement typically refers to the assessment of the amount of oxygen in`,
    about2:`the blood or the surrounding environment. The most common methods for`,
    about3:` measuring oxygen levels are blood oxygen saturation (SpO₂).`,
    // about4:`and arterial blood gas analysis for medical purposes,`,
    // about5:` using oxygen sensors for environmental monitoring.`
  },
  {
    name:'TEMPERATURE',
    about1:`Temperature measurement determines the degree of heat or cold using tools like `,
    about2:` thermometers ( digital, infrared ) or sensors. It is the crucial in healthcare ,`,
    about3:` weather forecasting, cooking, and various scientific applications.`,
    // about4:` is, and it plays a crucial role in a wide range of fields, `,
    // about5:`including medicine, engineering, and scientific research.`
  },
  {
    name:'GLUCOSE',
    about1:`Glucose measurement determines blood sugar levels using glucometers, continuous `,
    about2:`glucose monitors,crucial for managing diabetes,detecting hypoglycemia, `,
    about3:`ensuring effective glucose control to prevent complications.`,
    // about4:` guides treatment, and ensures effective diabetes management, `,
    // about5:`with advancements in non-invasive techniques emerging.`
  },
  {
    name:'GPS',
    about1:`The Global Positioning System (GPS) is a satellite-based navigation system  that`,
    about2:` provides location, speed, and time data to GPS receivers anywhere`,
    about3:`on Earth, using signals from at least four satellites. `
  },
]
export const Dash = () =>{
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return(
  <div>
    <div class='flex absolute w-[200px] h-[695px] bg-black text-white shadow-2xl shadow-black '>
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
      {/* <div class='   h-[295px] bg-cyan-200 border-2 border-black ml-[200px] -z-10'>
      </div> */}
        <div class='ml-[210px] w-[1300px] shadow-2xl shadow-black'>
    <Slider {...settings} class='bg-black'>
      {slide.map((d) => (
      <div class='flex h-[270px] mt-2  bg-black text-white shadow-2xl shadow-black justify-center text-3xl font-semibold'>
        <div class=' flex absolute justify-center text-5xl mt-[50px] ml-[780px] underline'>
          {d.name}
        </div>
      <div class='absolute ml-[60px] mt-4'>
 <LineChart width={350} height={250} data={data}>
  <CartesianGrid></CartesianGrid>
  <XAxis  dataKey='month'></XAxis>
  {/* <YAxis></YAxis> */}
  <Tooltip ></Tooltip>
  {/* <Legend></Legend> */}
  <Line type="monotone" dataKey="checking" stroke="green"></Line>
  <Line type="monotone" dataKey="savings" stroke="red"></Line>
 </LineChart>
</div>
        <div class='text-xl ml-[510px] mt-[130px]'>{d.about1}</div>
        <div class='text-xl ml-[555px]  '>{d.about2}</div>
        <div class='text-xl ml-[617px]'>{d.about3}</div>
      </div>
    ))}
    </Slider>
     </div>
      {/* <div class='flex absolute w-[400px] h-[250px] border-2 border-black ml-[470px] mt-32  bg-indigo-400 justify-center text-3xl font-semibold'>Blood Pressure</div>
      <div class='flex absolute w-[400px] h-[250px] border-2 border-black ml-[900px] mt-32  bg-indigo-400 justify-center text-3xl font-semibold'>Glucose level</div>
      <div class=' absolute w-[400px] h-[250px] border-2 border-black ml-[270px] mt-[400px]  bg-indigo-400 flex justify-center text-3xl font-semibold'> Water level</div>
      <div class=' absolute w-[400px] h-[250px] border-2 border-black ml-[700px] mt-[400px]  bg-indigo-400 flex justify-center text-3xl font-semibold'>Heart Beat</div> */}
       <div class='absolute w-[1300px] h-[400px] ml-[210px] mt-2 shadow-2xl shadow-black bg-black text-white'>
        <h1 class='flex justify-center text-4xl font-bold underline'>FINANCIAL</h1>
        <div class='ml-[40px] mt-[20px]'>
 <LineChart width={1200} height={350} data={data}>
  <CartesianGrid></CartesianGrid>
  <XAxis  dataKey='month'></XAxis>
  <Tooltip ></Tooltip>
  <Line type="monotone" dataKey="checking" stroke="green"></Line>
  <Line type="monotone" dataKey="savings" stroke="red"></Line>
 </LineChart>
 </div>
</div>
  {/* <YAxis></YAxis> */}
  {/* <Legend></Legend> */}
      </div>
  )
}