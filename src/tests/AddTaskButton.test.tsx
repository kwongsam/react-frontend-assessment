import { userEvent, render, screen } from "../utils/test-utils";
import { AddTaskButton } from "../components/AddTaskButton";

describe("Add Task", () => {
  // TODO: Step 2
  it.skip("triggers the onClick handler when clicked", async () => {
    const mockOnClick = vi.fn();
    render(<AddTaskButton toggleModal={mockOnClick} />);

    await userEvent.click(screen.getByText("Add Task"));
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
