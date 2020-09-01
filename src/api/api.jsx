import axios from "axios";

export const getData = async (options) => {
  try {
    const res = await axios(options);
    // console.log(res.data['results'])
    return res;
  } catch (error) {
    console.log(error);
  }
};
