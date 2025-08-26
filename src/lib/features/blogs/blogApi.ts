import { getBaseUrl } from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/blogs`,
        credentials: "include",
    }),
    tagTypes:["Blogs"],
    endpoints:(builder)=>({}),
});


export const {} = blogApi;
export default blogApi;