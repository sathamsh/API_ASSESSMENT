import { endpoints } from "../service/endpoints";
const axios = require("axios");

export const GET = async (endpoint: endpoints | string): Promise<any> => {
  return await axios({
    method: "get",
    url: endpoint,
  });
};

export const POST = async (
  endpoint: endpoints | string,
  payload: string | object
): Promise<any> => {
  return await axios({
    method: "post",
    url: endpoint,
    data: payload,
  });
};

export const PUT = async (
  endpoint: endpoints | string,
  userId: string | number,
  payload: string | object
): Promise<any> => {
  return await axios({
    method: "put",
    url: endpoint + "/" + userId,
    data: payload,
  });
};
