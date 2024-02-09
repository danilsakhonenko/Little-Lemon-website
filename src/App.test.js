import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { BrowserRouter } from "react-router-dom";


const MockBookingPage = () => {
  return (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
};



describe("Revervation form", () => {
  test("Renders the BookingForm main heading", () => {
    render(<MockBookingPage />);
    const headingElement = screen.getByText("Your reservation details");
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders the BookingForm headings", () => {
    render(<MockBookingPage />);
    const headingElements = screen.getAllByLabelText(/./);
    expect(headingElements.length).toBe(4);
  });

  test("Returns the initial value for a time input for today's date", async () => {
    render(<MockBookingPage />);
    const optionElements = await screen.findAllByTestId(/time-/i);
    expect(optionElements.length).toBeGreaterThan(0);
  });

  test("updateTimes: Returns different times based on given date", async () => {
    render(<MockBookingPage />);
    const dateSelectElement = screen.getByLabelText(/Date/);
    const element = await screen.findByTestId(/time-0/i);
    fireEvent.change(dateSelectElement, {
      target: { value: "2024-02-16" },
    });
    const optionElements = await screen.findAllByTestId(/time-/i);
    const optionValues = optionElements.map((option) => option.textContent);
    expect(optionValues).toStrictEqual([
      "12:00",
      "13:00",
      "15:00",
      "18:30",
      "19:00",
    ]);
  },);

  test("User can submit the form", async() =>  {
    render(<MockBookingPage/>)
    fireEvent.change(screen.getByLabelText(/Number of guests/), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/Date/), {
      target: { value: "2024-02-16" },
    });
    fireEvent.change(screen.getByLabelText(/Available Times/), {
      target: { value: "15:00" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/), {
      target: { value: "birthday" },
    });
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});
