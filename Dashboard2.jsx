import { RiDashboardHorizontalFill } from "react-icons/ri";
import React from "react";
import logo from "../src/assets/companylogo1.png";
import { SiOxygen } from "react-icons/si";
import { FaTemperatureLow } from "react-icons/fa";
import { CiGps } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { MdBloodtype } from "react-icons/md";
import { TbBrandSugarizer } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi"; // Import the chat icon
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Sample data for different charts
const ecgData = [
  { time: "10:00", value: 70 },
  { time: "10:30", value: 90 },
  { time: "11:00", value: 80 },
  { time: "11:30", value: 85 },
  { time: "12:00", value: 75 },
];

const bpmData = [
  { time: "10:00", bpm: 60 },
  { time: "10:30", bpm: 72 },
  { time: "11:00", bpm: 65 },
  { time: "11:30", bpm: 70 },
  { time: "12:00", bpm: 68 },
];

const sleepData = [
  { day: "Mon", hours: 7 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 7 },
];

const oxygenData = [
  { time: "10:00", oxygen: 98 },
  { time: "10:30", oxygen: 96 },
  { time: "11:00", oxygen: 95 },
  { time: "11:30", oxygen: 94 },
  { time: "12:00", oxygen: 97 },
];

const glucoseData = [
  { time: "10:00", glucose: 110 },
  { time: "10:30", glucose: 120 },
  { time: "11:00", glucose: 130 },
  { time: "11:30", glucose: 125 },
  { time: "12:00", glucose: 115 },
];

const temperatureData = [
  { time: "10:00", temp: 98.6 },
  { time: "10:30", temp: 99.1 },
  { time: "11:00", temp: 98.7 },
  { time: "11:30", temp: 99.0 },
  { time: "12:00", temp: 98.9 },
];

export const Dash = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white relative">
      {/* Sidebar */}
      <div className="fixed w-[200px] h-[100vh] bg-sky-950 text-white shadow-2xl shadow-sky-950 flex flex-col items-center py-4">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full mb-8 border-4 border-white shadow-lg shadow-sky-500"
          />
        </div>
        <ul className="space-y-8 text-lg">
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <GrMoney className="mr-3" />
            Dashboard
          </li>
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <MdBloodtype className="mr-3" />
            Vitals
          </li>
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <SiOxygen className="mr-3" />
            Labs Report
          </li>
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <FaTemperatureLow className="mr-3" />
            Doctor Consultant
          </li>
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <TbBrandSugarizer className="mr-3" />
            Financial Tip
          </li>
          <li className="flex items-center pl-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">
            <CiGps className="mr-3" />
            AI Chat
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-[220px] p-10 flex flex-wrap gap-10">
        {/* ECG Chart - Line Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-sky-500 border-2 border-sky-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">ECG</h1>
          <LineChart width={320} height={250} data={ecgData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="skyblue" strokeWidth={2} />
          </LineChart>
        </div>

        {/* BPM Chart - Area Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-pink-500 border-2 border-pink-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">BPM</h1>
          <AreaChart width={320} height={250} data={bpmData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Area type="monotone" dataKey="bpm" stroke="lightcoral" fill="lightcoral" />
          </AreaChart>
        </div>

        {/* Sleep Chart - Line Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-purple-500 border-2 border-purple-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">SLEEP</h1>
          <LineChart width={320} height={250} data={sleepData}>
            <XAxis dataKey="day" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="mediumpurple" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Oxygen Chart - Bar Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-green-500 border-2 border-green-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">OXYGEN</h1>
          <BarChart width={320} height={250} data={oxygenData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="oxygen" fill="lightgreen" />
          </BarChart>
        </div>

        {/* Glucose Chart - Line Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-orange-500 border-2 border-orange-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">GLUCOSE</h1>
          <LineChart width={320} height={250} data={glucoseData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="glucose" stroke="orange" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Temperature Chart - Bar Chart */}
        <div className="chart-container hover:shadow-lg hover:shadow-red-500 border-2 border-red-500 rounded-lg p-2 transition duration-300">
          <h1 className="chart-title text-center text-xl mb-2">TEMPERATURE</h1>
          <BarChart width={320} height={250} data={temperatureData}>
            <XAxis dataKey="time" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="temp" fill="red" />
          </BarChart>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 bg-sky-600 p-4 rounded-full shadow-lg hover:bg-sky-700 transition duration-300 cursor-pointer">
        <FiMessageCircle className="text-white text-2xl" />
      </div>
    </div>
  );
};
  