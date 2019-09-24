
# React-Sample

**(Include Project link if required //HERE// )**

## Abstract

<-- Placeholder for project abstract //HERE// -->

## Installation

Kindly do an `npm install` at the root directory of the application. This will install the necessary dependencies for the application. 

```
npm install 
```

The following are the major libraries that are used in front-end.
- React v16.9.0
- Material-UI v0.20.2
- Jest 
- react-testing-library
- enzyme

## Serving Locally

Once the packages have been installed you may serve application locally using `npm start` on the root directory of the application. Following is the port the application runs on

`react-sample` :  [http://localhost:3000](http://localhost:3000)

### Scripts

`npm run start` - Serves the app locally on [http://localhost:3000](http://localhost:3000)

`npm run test` - Runs the test scrips on the specific application

`npm run build` - Builds a minified version of the frontend application. It bundles and minifies React in production mode and optimizes the build for the best performance.

## Architecture

A high level architecture of the application can be found below
<-- Placeholder for Project Architecture Diagram //HERE// -->

### Code Splitting

Code Splitting is a must-have for any front-end application due to the performance benefits it offers. Sending the application in chunks improves the load times of the application by a great margin. Code splitting has been thoroughly followed in the entire application

### Typescript

Typescript is prefered over the regular javascript due to the advantages such as
- Great tooling support with IntelliSense
- Optional static typing (the key here is optional)
- Ahead-Of-Time type checking
- Type Inference, which gives some of the benefits of types, without actually using them

## Testing

Testing is engrained in almost every component in the application. All component folders have a **[component].test.ts** which contains the set of unit tests specific to the perticular component. Running `npm test` runs all the .test files across all components.

### Support for Older Browsers

The application is supported in browsers from IE 11 and greater. Polyfills have been installed to aid with the compatibility.

### React Router

Routing is enabled through react-router v4. All the routes in the application are managed in a single file called **routes.ts** which could be found at [`src/routes.ts`](./src/routes.ts)

### React Suspense

React suspense has been used to help us manage the loading state of our code-split application. Suspense suspends rendering and automatically displays the fallback which is the Loader component in our case until the components chunks are available in the dom.

### Functional Components

Most of the components in the application are stateless functional components. Hooks have been used if state is demanded in component.

## Deployment
<--could change //HERE// -->
- The application has been deployed on Netlify.
- Continuous Integration has been enabled and is currently synced with the repo [https://github.com/dhirajsriram/react-sample](https://github.com/dhirajsriram/react-sample)

## Description

The application works on a single page, Following are the views that the application works on
<--Placeholder to list all views //HERE// -->

### Describe Individual Pages here

<-- Describe Individual Pages //HERE// -->

## Design

### Folder structure

The application was designed to be as granular as possible in terms of functionality. Separation of concerns was the goal while designing the project. The general rule of thumb was to have the return statements to be as minimal as possbile. The folder structure of the application is as follows

```
├── public
├── node_modules
├── package.json
├── README.md
└── src
    ├── [**common**](./src/common)
    ├── [**pages**](./src/pages)
    ├── [**scss**](./src/scss)
    ├── [**store**](./src/store)
    ├── App.tsx
    ├── App.test.tsx
    ├── index.tsx
    └── logo.svg
```

[`src/common`](./src/common) - Contains all the shared components such as error, Search, menu, map, etc

[`src/pages`](./src/pages) - The different pages of the application are placed here. At present, the app runs on a single page **Home**

[`src/assets`](./src/assets) - Images necessary for the application are present here.

### UX Design

The application strongly follows a Material design approach. Elements shown to users represent life-like materials like paper which is something that a user can connect with very easily.

The application was designed with a map in mind. The Map on the left represents a canvas of a map and the markers on the right represent the marking made on the canvas.

## Error Handling

The application handles errors gracefully. The application checks for the response status. If the status is not 200 an Error component is shown to the user with the corresponding error message.

## Future Implementation

<-- Future prospects //HERE// -->

