import React from "react";
import CARD_2 from "../../assets/images/Screenshot 2025-06-26 152637.png";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">MyPaisaFlow</h2>
        {children}
      </div>

      <div className="hidden md:flex flex-col items-center justify-center w-[45vw] max-h-screen overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-800 relative p-6 box-border">
        {/* Abstract Shapes - adjusted size & position */}
        <div className="absolute top-4 left-4 w-24 h-24 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-32 h-32 bg-indigo-400 rounded-lg rotate-45 opacity-30 animate-bounce"></div>
        <div className="absolute top-[20%] right-[20%] w-20 h-20 bg-pink-300 rounded-xl opacity-30"></div>

        <div className="z-10 flex flex-col items-center justify-center text-white text-center px-4">
          <h3 className="text-3xl font-bold mb-4 leading-tight">
            Master Your Money, Master Your Life.
          </h3>
          <p className="text-base mb-6 opacity-90 max-w-md">
            Effortlessly track your income and expenses to achieve your
            financial goals with confidence.
          </p>

          <StatsInfoCard
            icon={<FaMoneyBillTrendUp />}
            label="Total Funds Managed"
            value="1,250,000"
            color="bg-white text-indigo-700"
            textColor="text-gray-900"
          />
        </div>

        {/* Image with size limit */}
        <img
          src={CARD_2}
          alt="Financial Card"
          className="w-80 lg:w-[95%] max-w-lg mt-8 z-10 rounded-2xl shadow-2xl shadow-black/30 transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color, textColor }) => {
  return (
    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-xl shadow-indigo-900/20 border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <div
        className={`w-14 h-14 flex items-center justify-center text-3xl ${color} rounded-full flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h6
          className={`text-sm ${textColor || "text-gray-600"} mb-1 font-medium`}
        >
          {label}
        </h6>
        <span className={`text-2xl font-bold ${textColor || "text-gray-900"}`}>
          ₹{value}
        </span>
      </div>
    </div>
  );
};
