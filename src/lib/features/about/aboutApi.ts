import { getBaseUrl } from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const aboutApi = createApi({
    reducerPath: "aboutApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/abouts`,
        credentials: "include",
    }),
    tagTypes:["Abouts"],
    endpoints:(builder)=>({}),
});


export const {} = aboutApi;
export default aboutApi;