import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getStorageData } from "../service/asyncStorage";

const API_BASE_URL = "localhost://3000";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: async (headers) => {
    const data = await getStorageData("token");
    if (data) {
      headers.set("Authorization", `Bearer ${data}`);
    }
    return headers;
  },
});
