const weatherEmojis = {
  rainy: "🌧️",
  cloudy: "☁️",
  "partly cloudy": "🌤️",
  clear: "☀️",
  stormy: "⛈️",
  snowy: "❄️",
  foggy: "🌁",
  sunny: "☀️",
};

export const getWeatherEmoji = (description) => {
  const weatherDescription = description.toLowerCase();

  for (const [key, emoji] of Object.entries(weatherEmojis)) {
    if (weatherDescription.includes(key)) {
      return emoji;
    } else {
      return "🌧️";
    }
  }
};
