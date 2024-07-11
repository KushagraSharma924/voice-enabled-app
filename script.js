let map;
let recognition;

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    initializeMap();

    // Initialize the speech recognition
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = function (event) {
            const result = event.results[0][0].transcript.toLowerCase();
            console.log('Recognized result:', result);

            handleVoiceCommand(result);
        };

        recognition.onerror = function (event) {
            console.error('Speech recognition error', event);
        };

        recognition.onend = function () {
            console.log('Speech recognition service disconnected');
           
            startVoiceSearch();
        };
    } else {
        alert('Speech recognition not supported in this browser.');
    }
});

function initializeMap() {
    map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

async function startVoiceSearch() {
    if (!recognition) {
        console.error('Speech recognition is not initialized.');
        return;
    }

    recognition.start();
    console.log('Listening for voice commands...');

    setTimeout(() => {
        if (recognition) {
            recognition.stop();
            console.log('Stopped listening due to timeout.');
        }
    }, 30000); // Stop listening after 30 seconds
}

function handleVoiceCommand(command) {
    if (command.startsWith('left to')) {
        const destination = command.replace('left to ', '').trim();
        if (destination) {
            navigateTo(destination);
        } else {
            console.log('No destination provided.');
        }
    } else if (command.startsWith('show weather of')) {
        const location = command.replace('show weather of ', '').trim();
        if (location) {
            showWeatherOfLocation(location);
        } else {
            console.log('No location provided.');
        }
    }
}

async function navigateTo(destination) {
    if (!map) {
        alert('Map is not initialized');
        return;
    }

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                map.setView([lat, lon], 13);
                L.marker([lat, lon]).addTo(map);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Geocode was not successful.');
        });
}

async function showWeatherOfLocation(location) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                showWeather(lat, lon);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Geocode was not successful.');
        });
}

async function showWeather(lat, lon) {
    const apiKey = '4f6ba3987835b8631fae760151f32675'; // OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Network response was not ok. Status: ${response.status} - ${response.statusText}`);
            throw new Error('Network response was not ok');
        }

        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            throw new Error('Failed to parse JSON');
        }

        console.log(data); 

        if (data.weather && data.weather[0] && data.main) {
            const weatherInfo = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
            alert(weatherInfo);
        } else {
            throw new Error('Unexpected data structure from weather API');
        }
    } catch (error) {
        console.error('Fetch error: ', error);
        alert('Failed to fetch weather information.');
    }
}

// Attach event listeners
document.getElementById('voice-search').addEventListener('click', startVoiceSearch);
document.getElementById('left-button').addEventListener('click', () => handleVoiceCommand('left'));
document.getElementById('weather-button').addEventListener('click', () => handleVoiceCommand('weather'));
