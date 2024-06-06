import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AddTaskModal } from "../components/AddTaskModal";
import { userEvent } from "../utils/test-utils";

describe("Add Task Modal", () => {
  let mockOnSubmit: () => void;
  let mockCloseModal: () => void;

  beforeEach(() => {
    mockOnSubmit = vi.fn();
    mockCloseModal = vi.fn();
    render(
      <AddTaskModal onSubmit={mockOnSubmit} closeModal={mockCloseModal} />
    );
  });

  // TODO: Step 6
  it.skip("allows a user to fill in a task title in the Task Title input", async () => {
    const inputElement = screen.getByLabelText(
      "Task Title"
    ) as HTMLInputElement;

    await userEvent.type(inputElement, "Testing");

    expect(inputElement).toHaveValue("Testing");
  });

  // TODO: Step 7
  it.skip('disables the submit button if required fields are not filled', async () => {
    expect(screen.getByText('Submit')).toBeDisabled()
  });

  // TODO: Step 8
  it.skip('enables submit button if required fields are provided', async () => {
    const titleInput = screen.getByLabelText('Task Title') as HTMLInputElement

    await userEvent.type(titleInput, 'Test Title')

    expect(titleInput.value).toEqual('Test Title')
    expect(screen.getByText('Submit')).not.toBeDisabled()
  })

  // TODO: Step 9
  it.skip("calls onSubmit with the proper input values when Submit is clicked", async () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    await userEvent.type(titleInput, "Test Title");
    await userEvent.click(screen.getByText("Submit"));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: "Test Title",
      date: new Date().toDateString()
    });
  });

  // TODO: Step 10
  it.skip("clears the task title field when submit is clicked", async () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    await userEvent.type(titleInput, "Test Title");
    await userEvent.click(screen.getByText("Submit"));

    expect(titleInput.value).toEqual("");
  });

  // TODO: Step 11
  it.skip("calls closeModal when the 'Cancel' button is clicked", async () => {
    await userEvent.click(screen.getByText("Cancel"));

    waitFor(() => expect(mockCloseModal).toHaveBeenCalled());
  });
});
