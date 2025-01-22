import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

const mockData = {
  name: "nameTest",
  labelText: "labelTest",
  placeholder: "placeholderTest",
  value: "1234",
  onChange: () => {},
  required: false,
};

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name={mockData.name}
      labelText={mockData.labelText}
      placeholder={mockData.placeholder}
    />
  );
  const inputPlaceholder = screen.getByLabelText(mockData.labelText);
  expect(inputPlaceholder).toHaveAttribute("placeholder", mockData.placeholder);
  expect(inputPlaceholder).toHaveAttribute("name", mockData.name);
});

test("calls callback on every user input", async () => {
  const handleInputOnChange = jest.fn();
  const user = userEvent.setup();
  render(
    <Input
      name={mockData.name}
      labelText={mockData.labelText}
      onChange={handleInputOnChange}
    />
  );
  const input = screen.getByLabelText(mockData.labelText);
  await user.type(input, "test");
  expect(handleInputOnChange).toHaveBeenCalledTimes(4);
});
