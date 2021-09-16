import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Post from "./Post";

test("renders post component", () => {
  const post = {
    id: 1,
    userId: 1,
    title: "AutoFi post",
    body: "body",
  };
  const { getByText } = render(
    <Provider store={store}>
      <Post post={post} />
    </Provider>
  );

  expect(getByText(/AutoFi/i)).toBeInTheDocument();
});
