import React, { useState } from "react";
import {
  useGetAstronomyQuery,
  useGetWeatherForecastQuery,
} from "../service/weatherApi";
import { getWeatherEmoji } from "../utils/helpers";

const Weather = () => {
  const days = 3;

  const {
    data: weatherData,
    isFetching,
    error,
  } = useGetWeatherForecastQuery("Kathmandu", days);

  if (isFetching)
    return (
      <div className=" h-screen flex justify-center items-center bg-slate-800 text-white text-3xl">
        Fetching data from api...
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;
  if (!weatherData) return <p>No data available</p>;

  if (!isFetching) {
    var emoji = getWeatherEmoji(
      weatherData.forecast.forecastday[0].day.condition.text
    );
  }

  console.log(weatherData);
  return (
    <div className=" flex h-screen mx-auto items-center justify-center bg-slate-800">
      <div className="main-banner flex  h-[30%] mt-8 ">
        <div className="flex flex-col w-1/2 justify-between">
          <div className="location font-bold text-white text-4xl font-serif">
            {weatherData.location.name} <br /> {weatherData.location.country}
          </div>
          <div className="temperature text-white text-6xl font-serif">
            {weatherData.current.temp_c} <sup>o</sup>C
          </div>
          <div className="flex items-center text-white gap-12">
            <div className=" text-2xl">
              speed 💨{" "}
              <span className=" text-2xl font-sans ">
                {weatherData.current.wind_kph}kmph
              </span>
            </div>
            <div className="text-2xl">
              direction 🧭 :
              <span className=" text-2xl font-sans ">
                {weatherData.current.wind_dir}
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 text-[150px]">{emoji}</div>
      </div>
    </div>
  );
};

export default Weather;
