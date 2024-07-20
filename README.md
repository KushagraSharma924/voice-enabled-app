# Voice-Enabled Map Application

This project is a voice-enabled map application that allows users to interact with a map using voice commands. The application is built using Leaflet.js for mapping, Web Speech API for speech recognition, and OpenWeatherMap API for real-time weather updates. It provides hands-free geospatial navigation and can find nearby points of interest (POIs) within a 5 km radius.

## Features

- **Navigate to Location**: Say "navigate to [location]" to move the map to the specified location.
- **Show Weather of Location**: Say "show weather of [location]" to get the current weather of the specified location.
- **Zoom In and Zoom Out**: Say "zoom in" or "zoom out" to adjust the map zoom level.
- **Move Map**: Say "move left" or "move right" to pan the map.
- **Find Nearby POIs**: Say "show [amenity] near me" to find nearby points of interest within a 5 km radius.

## Common Amenities

You can use the following amenities in your voice commands:
- restaurants
- cafes
- hospitals
- pharmacies
- schools
- atms
- banks
- gas stations / petrol pumps
- supermarkets
- parks
- police stations
- post offices
- libraries
- hotels
- gyms

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/voice-enabled-map.git
    cd voice-enabled-map
    ```

2. Open `index.html` in your browser.

3. Use the start and stop buttons to control the speech recognition service.

4. Issue voice commands as listed above to interact with the map.

## Requirements

- Leaflet.js
- Web Speech API
- OpenWeatherMap API (Sign up to get your free API key)

## Setup

1. Replace `YOUR_API_KEY` in the `script.js` file with your actual OpenWeatherMap API key.

## License

This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [OpenWeatherMap](https://openweathermap.org/)

