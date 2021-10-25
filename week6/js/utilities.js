export default class Utilities {
    constructor(content = "", id = Date.now(), completed = false) {
        this.content = content;
        this.id = id;
        this.completed = completed;
    }
    completeTask() {
        this.completed = !this.completed;
    }

    // Creating the task element
    createElement(requireTask, removeTheItem) {
        let element = document.createElement("div");
        element.classList.add("task");

        // Checkbox container uses a label tag. Creates a classlist too.
        let check = document.createElement("label");
        check.classList.add("checkbox-container");
        
        // Checkbox uses input tag. completeTask() completes a task. requireTask() makes it not complete
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("click", (event) => {
            this.completeTask();
            requireTask();
        });
        this.completed ? checkbox.setAttribute("checked", "true") : "";
        
        // Create the checkbox and checkmark that is clicked on to complete a task
        let checkmark = document.createElement("span");
        checkmark.classList.add("check-checkmark");
        check.appendChild(checkbox);
        check.appendChild(checkmark);
        
        // Create the name of task
        let name = document.createElement("div");
        name.classList.add("taskname");
        name.innerHTML = this.content;
        
        // Create the button & Remove it when clicked
        let button = document.createElement("button");
        button.classList.add("taskremove");
        button.innerHTML = 	"\u274C";
        button.addEventListener("click", (event) => removeTheItem(this));

        // Add everything into the task block
        element.appendChild(check);
        element.appendChild(name);
        element.appendChild(button);
        
        // return the task block
        return element;
    }
}