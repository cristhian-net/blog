import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Posts from "./Posts";

const posts = [
  {
    id: 1,
    userId: 1,
    title: "AutoFi post",
    body: "body",
  },
];
jest.mock("./posts.service", () => ({
  getAllPosts: async () => posts,
}));

test("renders posts component", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );
  await waitFor(() => screen.getByText(/AutoFi post/i));
  expect(getByText(/AutoFi post/i)).toBeInTheDocument();
});
