import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: "Random User Generator",
    });

    expect(heading).toBeInTheDocument();
  });
});
