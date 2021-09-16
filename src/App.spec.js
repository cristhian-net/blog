import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders AutoFi quote", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/BUILD TRUST. MAINTAIN CONTROL./i)).toBeInTheDocument();
});
