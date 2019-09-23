import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "./App";
import {render,wait,cleanup} from '@testing-library/react';
import { Provider } from "react-redux";
import allReducers from "./store/reducer";
import { createStore } from "redux";

afterEach(cleanup);
configure({ adapter: new Adapter() });
const store = createStore(allReducers);

test("Unknown routes should be navigated to a 404 page", async () => {
  jest.setTimeout(30000);
  const fourzerofour = '404!'
  const {getByText}  = render(
    <Provider store={store}>
    <MemoryRouter initialEntries={["/sddsdweq"]}>
      <App />
    </MemoryRouter></Provider>
  );
  await wait(()=>expect(getByText(fourzerofour)).toBeDefined())
});

test("Default routes to be navigated to home page", async () => {
  jest.setTimeout(30000);
  const hometext = 'HOME'
  const {getByText}  = render(
      <Provider store={store}>
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter></Provider>
  );
  await wait(()=>expect(getByText(hometext)).toBeDefined());
});

