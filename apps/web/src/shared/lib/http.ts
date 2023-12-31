import axios from "axios";
import config from "./config";

export default axios.create({
  baseURL: config.apiUrl,
  timeout: 3000,
  //   headers: { "X-Custom-Header": "foobar" },
});
