# Voice-Enabled Map Application

This is a Voice-Enabled Map Application that allows users to interact with a map using voice commands. The application leverages Leaflet.js for mapping and webkitSpeechRecognition for speech recognition. Users can navigate to different locations and get weather information for specific places using voice commands.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Voice Commands](#voice-commands)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Interactive Map:** Display a map with zoom and pan capabilities.
- **Voice Commands:** Control the map using voice commands to navigate to locations and fetch weather information.
- **Weather Information:** Get real-time weather updates for any location.
- **User-Friendly Interface:** Simple and intuitive interface for easy interaction.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the web page.
- **JavaScript**: For adding functionality.
- **Leaflet.js**: For interactive maps.
- **OpenWeatherMap API**: For fetching weather information.
- **webkitSpeechRecognition**: For speech recognition.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/voice-enabled-map-application.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd voice-enabled-map-application
    ```

3. **Open `index.html` in your browser:**

    You can simply double-click on the `index.html` file, or use a local web server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for better development experience.

## Usage

1. **Start the application:**

    Open `index.html` in your preferred web browser.

2. **Interact with the map:**

    Use the control buttons to start voice search or click the buttons directly.

3. **Voice Commands:**

    - **"Left to [destination]":** Navigate to the specified destination.
    - **"Show weather of [location]":** Display weather information for the specified location.

## Voice Commands

- **Navigation:**
    - Say "Left to [destination]" to navigate to a specific place. For example, "Left to New York".
  
- **Weather Information:**
    - Say "Show weather of [location]" to get the weather for a specific location. For example, "Show weather of London".

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes, improvements, or new features.

1. **Fork the repository:**

    Click the "Fork" button at the top-right corner of this repository.

2. **Clone your forked repository:**

    ```bash
    git clone https://github.com/your-username/voice-enabled-map-application.git
    ```

3. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

5. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Open a pull request:**

    Go to your repository on GitHub and open a pull request.

## License

This project is licensed under the GNU v2.0 License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Leaflet.js](https://leafletjs.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [webkitSpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
