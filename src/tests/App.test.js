<<<<<<< HEAD:src/App.test.js
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
=======
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import App from '../App';
>>>>>>> 019e3881aa99a25e185cd34c1d999ecd19c2292f:src/tests/App.test.js

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
