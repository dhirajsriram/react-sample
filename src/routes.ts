import React from "react";
const Home = React.lazy(() => import("./pages/home"));
const Fourzerofour = React.lazy(() => import("./pages/fourzerofour"));

const routes:Object[] = [
    {
        path: '/:id',
        component: Fourzerofour
    },
    {
        path: '/',
        component: Home
    }

]


export default routes;