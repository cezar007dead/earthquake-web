import axios from "axios";

let get = () => {
  const config = {
    url: process.env.REACT_APP_API_ENDPOINT,
    method: "GET",
    // crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};
export { get };