import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import CommentsLoader from "./CommentsLoader";

test("renders comments loader", () => {
  const { getByText } = render(
    <Provider store={store}>
      <CommentsLoader />
    </Provider>
  );

  expect(getByText(/Loading/i)).toBeInTheDocument();
});
