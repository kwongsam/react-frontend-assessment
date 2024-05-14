import { render, screen, userEvent } from "../utils/test-utils";
import App from "../App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  // TODO: Step 1
  it("renders the app name", () => {
    expect(screen.getByText("Task Tracker"));
  });

  describe("Conditional rendering", () => {
    // TODO: Step 12
    it.skip("hides the `Add Task` button when 'Add Task' is clicked", async () => {
      await userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
    });

    // TODO: Step 13
    it.skip("opens the TaskModal when 'Add Task' is clicked", async () => {
      await userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Task Title")).toBeInTheDocument();
    });

    // TODO: Step 14
    it.skip("closes the modal and reveals the `Add Task` button when task is submitted", async () => {
      await userEvent.click(screen.getByText("Add Task"));
      await userEvent.type(screen.getByLabelText("Task Title"), "Test Title");
      await userEvent.click(screen.getByText("Submit"));

      expect(screen.queryByText("Task Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Add Task")).toBeInTheDocument();
    });
  });

  describe("Happy path integration test", () => {
    // TODO: Step 15
    it.skip("should successfully add tasks to the list", async () => {
      await userEvent.click(screen.getByText("Add Task"));
      await userEvent.type(screen.getByLabelText("Task Title"), "AddedTask1");
      await userEvent.click(screen.getByText("Submit"));

      expect(screen.getByText("AddedTask1")).toBeInTheDocument();
    });
  });
});
