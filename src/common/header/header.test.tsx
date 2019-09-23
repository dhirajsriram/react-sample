import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "../../App";
import {render,wait,cleanup, fireEvent} from '@testing-library/react';
import { Provider } from "react-redux";
import allReducers from "../../store/reducer";
import { createStore } from "redux";

afterEach(cleanup);
configure({ adapter: new Adapter() });
const store = createStore(allReducers);

test("Testing redux increment", async () => {
    const minus = '-';
    const {getByText}  = render(
      <React.Suspense fallback="...loading">
      <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter></Provider></React.Suspense>
    );
    await wait(()=> fireEvent.click(getByText(minus)));
    await wait(()=> expect(getByText("-1")).toBeDefined());
  });

test("Testing redux increment", async () => {
  const plus = '+';
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
    <Provider store={store}>
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter></Provider></React.Suspense>
  );
  await wait(()=> fireEvent.click(getByText(plus)));
  await wait(()=> expect(getByText("0")).toBeDefined());
});




