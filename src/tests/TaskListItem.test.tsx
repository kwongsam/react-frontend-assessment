import { TaskListItem } from "../components/TaskListItem";
import { screen, makeRandomDateString, makeRandomTaskText, render } from "../utils/test-utils";

describe("TaskListItem", () => {  
  // TODO: Step 3  
  it.skip("correctly renders a Task List Item", () => {    
    const randomDate = makeRandomDateString();    
    const randomTaskText = makeRandomTaskText();    
    
    render(<TaskListItem title={randomTaskText} date={randomDate} />);    
    
    expect(screen.getByText(randomTaskText));    
    expect(screen.getByText(randomDate));  
  });
});
