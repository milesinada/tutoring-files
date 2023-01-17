import axios from "axios";

var catalog = [];

class DataService {
  async getCatalog() {
    //create http request to retrieve data from server
    // to retrieve dtaa from the server
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    console.log("Test", response.data);
    return response.data;

    //return mock data
    // return catalog;
  }

  async getWeather(lat, lon) {
    let apiKey = "0459f161af58f2d0ea424dd1a5429543";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    let response = await axios.get(url);
    return response.data;
  }

  registerProduct() {}
}

export default DataService;
