import React from "react";
const Home = React.lazy(() => import("./pages/home"));

const routes:Object[] = [
    {
        path: '/',
        component: Home
    },

]


export default routes;