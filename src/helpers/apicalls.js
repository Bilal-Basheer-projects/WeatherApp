import axios from 'axios';
import API from '../constants/API.js';
const fetchWeatherData = async (data) => {
    try {
      const response = await axios.get(
        `${API.BASE_URL}lat=${data.latitude}&lon=${data.longitude}&appid=${API.API_KEY}&units=metric`
      );
        return response?.data;
    } catch (error) {
      console.error(error);
    }
  };

const fetchLocationSuggestions = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API.GOOGLE_PLACES_API_KEY}&language=en`
      );
  
      const { results } = response.data;
      if (results && results.length > 0) {
        // Extract city name from results
        const addressComponents = results[0].address_components;
        let cityName = null;
        for (let component of addressComponents) {
          if (component.types.includes('locality')) {
            cityName = component.long_name;
            break;
          }
        }
        return cityName;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
      return null;
    }
  };
export default {
  fetchWeatherData,
};
