import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "./App";
import {render,wait,cleanup} from '@testing-library/react';
import { Provider } from "react-redux";
const Home = React.lazy(() => import("./pages/home"));
const Fourzerofour = React.lazy(() => import("./pages/fourzerofour"));
import allReducers from "./store/reducer";
import { createStore } from "redux";

afterEach(cleanup);
configure({ adapter: new Adapter() });
const store = createStore(allReducers);

test("Unknown routes should be navigated to a 404 page", async () => {
  const fourzerofour = '404!'
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
    <Provider store={store}>
    <MemoryRouter initialEntries={["/sddsdweq"]}>
      <App />
    </MemoryRouter></Provider></React.Suspense>
  );
  await wait(()=>expect(getByText(fourzerofour)).toBeDefined())
});

test("Default routes to be navigated to home page", async () => {
  const hometext = 'HOME'
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
      <Provider store={store}>
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter></Provider></React.Suspense>
  );
  await wait(()=>expect(getByText(hometext)).toBeDefined());
});

test("Header is displayed on all pages", async () => {
  const headertext = "+"
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
      <Provider store={store}>
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter></Provider></React.Suspense>
  );
  await wait(()=>expect(getByText(headertext)).toBeDefined());
});
