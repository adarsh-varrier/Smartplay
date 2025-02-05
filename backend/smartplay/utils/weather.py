# utils/weather.py
import requests
from django.conf import settings

def get_weather_data(location):
    api_key = settings.OPENWEATHER_API_KEY
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": location,   # The location (city name)
        "appid": api_key,  # Your API Key
        "units": "metric",  # For Celsius temperature
    }
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        return response.json()
    else:
        return None
