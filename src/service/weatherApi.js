import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const weatherApiHeaders = {
  "x-rapidapi-host": import.meta.env.VITE_REACT_APP_WEATHER_API_HOST,
  "x-rapidapi-key": import.meta.env.VITE_REACT_APP_WEATHER_API_KEY,
};

const createRequest = (url) => ({ url, headers: weatherApiHeaders });

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_WEATHER_API_URL,
  }),
  endpoints: (builder) => ({
    getAstronomy: builder.query({
      query: (city) => createRequest(`/astronomy.json?q=${city}`),
    }),
    getWeatherForecast: builder.query({
      query: (city, days) =>
        createRequest(`/forecast.json?q=${city}&days=${days}`),
    }),
  }),
});

export const { useGetWeatherForecastQuery, useGetAstronomyQuery } = weatherApi;
