# WeatherApp

## Description
WeatherApp is a simple web application that displays weather forecasts for cities around the world.  
The frontend is built using plain HTML and CSS, while the backend (API calls) uses vanilla JavaScript.  
It fetches weather data from the WeatherStack API.

## Features
- Enter a city name to get the current weather information.
- Global coverage — works for cities worldwide.
- Lightweight, clean, and user-friendly interface.
- Easy to install and run (no heavy dependencies).

## Technologies
- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- API: WeatherStack

## Installation & Setup
1. Clone the repository:  
   ```bash
   git clone https://github.com/lucinho17/WeatherApp.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd WeatherApp
   ```  
3. Open `index.html` in your browser (or run a simple local server, e.g., `python -m http.server`).  
4. Insert your WeatherStack API key in the code (in `main.js` or equivalent).  
5. Enter a city name in the app and view the results.

## Project Structure
```
WeatherApp/
│
├── index.html        – main HTML file  
├── main.js           – JavaScript logic for fetching and displaying data  
├── css/              – directory containing styles  
│   └── style.css     – main stylesheet  
├── .vscode/          – VS Code settings (if any)  
└── README.md         – this documentation  
```

## Usage
1. Enter a city name and press “Enter” or click the search button.  
2. The app sends a request to the WeatherStack API.  
3. The response is displayed with relevant data (temperature, conditions, icon, etc.).  
4. In case of an error (unknown city or API issue), an error message is shown.

## API & License
- Uses the WeatherStack API. Check their usage limits and terms of service.  
- Note: Free plans may have request limits.  
- This project is open source — feel free to adapt it.  
- (Add license type here, e.g., MIT, GPL…)

## Contributing
If you’d like to contribute (fix bugs, add features, improve UI), feel free to fork the repo, make changes, and submit a pull request.  


