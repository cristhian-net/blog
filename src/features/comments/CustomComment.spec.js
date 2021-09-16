import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import CustomComment from "./CustomComment";

test("renders custom commment", () => {
  const comment = {
    postId: 1,
    id: 1,
    name: "Cristhian",
    email: "valenciacristhian47@gmail.com",
    body: "body",
  };
  const { getByText } = render(
    <Provider store={store}>
      <CustomComment comment={comment} />
    </Provider>
  );

  expect(getByText(/Cristhian/i)).toBeInTheDocument();
});
