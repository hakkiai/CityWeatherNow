# Weather App

Welcome to the **Weather App**! This simple web application allows users to search for the current weather in any city worldwide. It fetches real-time weather data using the Tomorrow.io API and displays key weather details like temperature, humidity, wind speed, and more.

## ✨ Features

- **Search by City Name**: Enter any city name to get real-time weather details
- **Temperature & Conditions**: Displays current temperature and weather condition
- **Additional Weather Details**: Includes humidity, wind speed, and cloud cover
- **Error Handling**: Shows user-friendly messages for invalid city names or API issues
- **Clean UI & Responsive Design**: Simple, modern, and mobile-friendly interface

## 📁 Project Structure

```
Weather-App/
│── index.html      # Main HTML file
│── styles.css      # Styling for the app
│── script.js       # JavaScript for fetching and displaying weather data
│── README.md       # Project documentation
```

## 🚀 How It Works

1. **User Input**: Enter a city name in the search bar and click the "Search" button
2. **Fetching Data**: The app first gets the latitude and longitude of the city using the Nominatim API
3. **Weather API Call**: The obtained coordinates are used to fetch real-time weather data from Tomorrow.io
4. **Displaying Weather**: The app shows temperature, weather conditions, and other details
5. **Error Handling**: If the city isn't found or there's an issue fetching data, an error message is displayed

## 🛠️ Technologies Used

- **HTML**: Structure of the app
- **CSS**: Styling and UI design
- **JavaScript**: Handling API calls and user interactions
- **Tomorrow.io API**: Fetching real-time weather data
- **Nominatim API**: Getting city coordinates

## 📜 Code Explanation

### 1️⃣ index.html (Structure)
- Contains the input box, search button, and a section to display weather information
- Uses a `<div>` to dynamically show errors and weather details

### 2️⃣ styles.css (Styling)
- Adds a gradient background with a card-style weather display
- Buttons and input fields have smooth transitions for better user experience
- Uses `display: none;` to hide elements until they are needed

### 3️⃣ script.js (Functionality)
- Listens for the **Search** button click or **Enter** key press
- Uses **async/await** to fetch city coordinates and weather data
- Handles errors and updates the UI dynamically with JavaScript
- Uses an object to map weather codes to human-readable conditions

## 📸 Final Look

<img width="439" alt="image" src="https://github.com/user-attachments/assets/154888cf-6274-47f5-95f4-bfb33900465b" />


## 🤝 Contributing

Feel free to modify or improve this project! If you have suggestions, open an issue or create a pull request.

## 🎯 Final Thoughts

This weather app is a simple but powerful example of working with APIs in JavaScript. It's a great starting point for beginners and can be expanded further with more weather details, a better UI, or even a forecast feature!

Happy coding! 🚀🌤️
