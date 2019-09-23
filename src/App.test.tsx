import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "./App";
import {render,wait,cleanup} from '@testing-library/react';
const Home = React.lazy(() => import("./pages/home"));
const Fourzerofour = React.lazy(() => import("./pages/fourzerofour"));

afterEach(cleanup);
configure({ adapter: new Adapter() });

test("Unknown routes should be navigated to a 404 page", async () => {
  const fourzerofour = '404!'
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
    <MemoryRouter initialEntries={["/sddsdweq"]}>
      <App />
    </MemoryRouter></React.Suspense>
  );
  await wait(()=>expect(getByText(fourzerofour)).toBeDefined())
});

test("Default routes to be navigated to home page", async () => {
  const hometext = 'HOME'
  const {getByText}  = render(
    <React.Suspense fallback="...loading">
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter></React.Suspense>
  );
  await wait(()=>expect(getByText(hometext)).toBeDefined())
});
