// import {
//   render,
//   screen,
//   fireEvent,
//   waitFor,
// } from "@testing-library/react";
// import BookingPage from "./components/BookingPage/BookingPage";
// import { BrowserRouter } from "react-router-dom";

// const MockBookingPage = () => {
//   return (
//     <BrowserRouter>
//       <BookingPage />
//     </BrowserRouter>
//   );
// };

// describe("Revervation form", () => {
//   test("Renders the BookingForm main heading", () => {
//     render(<MockBookingPage />);
//     const headingElement = screen.getByText("Your reservation details");
//     expect(headingElement).toBeInTheDocument();
//   });
//   test("Renders the BookingForm headings", () => {
//     render(<MockBookingPage />);
//     const headingElements = screen.getAllByLabelText(/./);
//     console.log(headingElements);
//     expect(headingElements.length).toBe(5);
//   });

//   test("Returns the initial value for a time input for today's date", async () => {
//     render(<MockBookingPage />);
//     const optionElements = await screen.findAllByTestId(/time-/i);
//     expect(optionElements.length).toBeGreaterThan(0);
//   });

//   test("updateTimes: Returns different times based on given date", async () => {
//     render(<MockBookingPage />);
//     const dateSelectElement = screen.getByLabelText(/Date/);
//     fireEvent.change(dateSelectElement, {
//       target: { value: "2024-02-16" },
//     });
//     await waitFor(() => {
//       const optionElements = screen.getAllByTestId(/time-/i);
//       const optionValues = optionElements.map((option) => option.textContent);
//       expect(optionValues).toStrictEqual([
//         "12:00",
//         "13:00",
//         "15:00",
//         "18:30",
//         "19:00",
//       ]);
//     });
//   });

//   test("Error message appears after wrong email input", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Your E-mail/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: "qwerty" },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.getByText(/Invalid E-mail format./i);
//       expect(message).toBeInTheDocument();
//     });
//   });

//   test("Error message appears after wrong number input", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Number of guests/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: -5 },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.getByText(
//         /The number of guests must be greater than 0./i
//       );
//       expect(message).toBeInTheDocument();
//     });
//   });

//   test("Error message appears after wrong date input", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Date/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: "2024-01-01" },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.getByText(/Invalid date entry./i);
//       expect(message).toBeInTheDocument();
//     });
//   });

//   test("Error message appears when the time wasn't selected after focus", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Available times/i);
//     fireEvent.focus(input);
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.getByText(/Time must be selected from the list./i);
//       expect(message).toBeInTheDocument();
//     });
//   });

//   test("Error message appears when the occasion wasn't selected after focus", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Occasion/i);
//     fireEvent.focus(input);
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.getByText(
//         /Occasion must be selected from the list./i
//       );
//       expect(message).toBeInTheDocument();
//     });
//   });

//   test("No errors when the number is within boundaries", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Number of guests/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: 5 },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.queryByText(
//         /The number of guests must be greater than 0./i
//       );
//       expect(message).not.toBeInTheDocument();
//     });
//   });

//   test("No errors when the email is valid", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Your E-mail/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: "example@email.com" },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.queryByText(/Invalid E-mail format./i);
//       expect(message).not.toBeInTheDocument();
//     });
//   });

//   test("No errors when the date is correct", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Date/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: new Date().toISOString().split("T")[0] },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.queryByText(/Invalid date entry./i);
//       expect(message).not.toBeInTheDocument();
//     });
//   });

//   test("No errors when the time is selected", async () => {
//     render(<MockBookingPage />);
//     const timeInput = screen.getByLabelText(/Available times/i);
//     const dateInput = screen.getByLabelText(/Date/i);
//     fireEvent.change(dateInput, {
//       target: { value: "2024-02-14" },
//     });
//     await waitFor(() => {
//       const timeValue = screen.getByTestId(/time-0/i);
//       fireEvent.focus(timeInput);
//       fireEvent.change(timeInput, {
//         target: { value: timeValue.value },
//       });
//       fireEvent.blur(timeInput);

//       const message = screen.queryByText(
//         /Time must be selected from the list./i
//       );
//       expect(message).not.toBeInTheDocument();
//     });
//   });

//   test("No errors when the occasion was selected after focus", async () => {
//     render(<MockBookingPage />);
//     const input = screen.getByLabelText(/Occasion/i);
//     fireEvent.focus(input);
//     fireEvent.change(input, {
//       target: { value: "birthday" },
//     });
//     fireEvent.blur(input);
//     await waitFor(() => {
//       const message = screen.queryByText(
//         /Occasion must be selected from the list./i
//       );
//       expect(message).not.toBeInTheDocument();
//     });
//   });
  
// });
