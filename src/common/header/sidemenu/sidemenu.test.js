import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "../../../App";
import {render,wait,cleanup, waitForElement, fireEvent, getByText} from '@testing-library/react';
import { Provider } from "react-redux";
import allReducers from "../../../store/reducer";
import { createStore } from "redux";

afterEach(cleanup);
configure({ adapter: new Adapter() });
const store = createStore(allReducers);
function TestBed () {
  return (
<Provider store={store}>
    <MemoryRouter initialEntries={["/asdasd"]}>
      <App />
    </MemoryRouter></Provider>
  )
}

test("Clicking on the home link takes us to the Home Page", async () => {
  jest.setTimeout(30000);
  const Menu = 'menu';
  const Home='HOME';
  const {getByLabelText,getByText}  = render(
    <TestBed/>
  );
  await wait(()=> {fireEvent.click(getByLabelText(Menu))});
  await wait(()=> {fireEvent.click(getByText(/Home/))});
  await wait(()=> expect(getByText(Home)).toBeDefined());
});