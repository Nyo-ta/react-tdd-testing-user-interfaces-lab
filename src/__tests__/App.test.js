import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});
test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/samuel nyota/i); // Change to match your alt text
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining(".jpg")); // or .png etc
});
test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 2, name: /about me/i });
  expect(heading).toBeInTheDocument();
});
test("displays a paragraph with a short biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/web developer|software engineer/i);
  expect(paragraph).toBeInTheDocument();
});
test("includes a link to GitHub with correct href", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("includes a link to LinkedIn with correct href", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
