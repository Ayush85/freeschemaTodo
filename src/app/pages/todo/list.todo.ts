// src/app/pages/todo/list.todo.ts
import {
  DeleteConceptById,
  GetCompositionListListener,
  NORMAL,
  PatcherStructure,
  UpdateComposition,
} from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import { getLocalUserId } from "../user/login.service";
import "./todo.style.css";

export class TodoList extends StatefulWidget {
  todos: any[] = [];
  inpage: number = 10;
  page: number = 1;
  linker: string = "console_folder_s";

  // Lifecycle method called after the component is mounted
  widgetDidMount(): void {
    const userId: number = getLocalUserId();
    GetCompositionListListener(
      "the_todo",
      userId,
      this.inpage,
      this.page,
      NORMAL
    ).subscribe((output: any) => {
      // Sort todos so that completed tasks are at the end
      this.todos = output.sort((a: any) =>
        a.the_todo.is_completed === "false" ? 1 : -1
      );
      this.render();
    });
  }

  // Method to add event listeners to the DOM elements
  addEvents() {
    const tableElement = this.getElementById("mainBody");
    if (tableElement && this.todos.length > 0) {
      this.todos.reverse();
      this.todos.forEach((todoItem) => {
        const id = todoItem.the_todo.id;
        if (id) {
          const row = document.createElement("tr");
          const col1 = document.createElement("td");
          const col2 = document.createElement("td");
          const col3 = document.createElement("td");
          const col4 = document.createElement("td");

          const todo = document.createElement("span");
          todo.innerHTML = todoItem.the_todo.todo;

          const edit = this.createButton("Edit", id, "btn btn-primary");
          const del = this.createButton("Delete", id, "btn btn-primary");
          const complete = this.createCheckbox(
            id,
            todoItem.the_todo.is_completed === "true"
          );

          // Delete button event
          del.onclick = () => {
            if (id) {
              DeleteConceptById(id).then(() => {
                console.log("Todo deleted");
              });
            }
          };

          // Complete checkbox event
          complete.onclick = () => {
            todoItem.the_todo.is_completed = complete.checked;
            const patcherStructure: PatcherStructure = new PatcherStructure();
            patcherStructure.compositionId = Number(complete.id);
            patcherStructure.patchObject = {
              todo: todo.innerHTML,
              is_completed: complete.checked,
            };
            UpdateComposition(patcherStructure);
          };

          // Edit button event
          edit.onclick = () => {
            this.data = {
              id: edit.id,
              todo: todo.innerHTML,
            };
            this.notify();
          };

          col1.append(todo);
          col2.append(del);
          col3.append(edit);
          col4.append(complete);

          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3);
          row.appendChild(col4);
          tableElement.append(row);
        }
      });
    }
  }

  // Helper method to create a button element
  createButton(text: string, id: string, className: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.setAttribute("class", className);
    button.id = id;
    button.innerHTML = text;
    return button;
  }

  // Helper method to create a checkbox element
  createCheckbox(id: string, checked: boolean): HTMLInputElement {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input");
    checkbox.id = id;
    checkbox.checked = checked;
    return checkbox;
  }

  // Method to return the HTML structure of the component
  getHtml(): string {
    return `
      <div>
        <table>
          <thead>
            <tr>
              <th>Todos</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody id="mainBody"></tbody>
        </table>
      </div>`;
  }
}
