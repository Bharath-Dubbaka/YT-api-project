import axios from "axios";
const KEY = "AIzaSyCtBncA6afN3jQUEXGq22yV8_nulzg0haI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  },
});
