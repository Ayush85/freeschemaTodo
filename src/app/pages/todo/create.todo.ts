import {
  CreateTheConnectionLocal,
  LocalSyncData,
  MakeTheInstanceConceptLocal,
  PatcherStructure,
  PRIVATE,
  UpdateComposition,
} from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import "./todo.style.css";
import { getLocalUserId } from "../user/login.service";

// Create a todo
export class CreateTodo extends StatefulWidget {
  /**
   * Adds event listeners to the form elements.
   */
  addEvents(): void {
    const userId: number = getLocalUserId();
    const order: number = 1;
    const isCompleted: boolean = false;
    const todo = this.getElementById("todo") as HTMLInputElement;
    const id = this.getElementById("id") as HTMLInputElement;

    // Populate form fields if data is available
    if (this.data) {
      todo.value = this.data.todo;
      id.value = this.data.id;
    }

    const submitButton = this.getElementById("submit");
    if (submitButton) {
      submitButton.onclick = async (ev: Event) => {
        ev.preventDefault();

        if (id.value) {
          // Update existing todo
          const patcherStructure: PatcherStructure = {
            compositionId: Number(id.value),
            patchObject: {
              todo: todo.value,
              isCompleted: isCompleted,
            },
            userId: 0,
            sessionId: 0,
            accessId: 0,
            ofTheCompositionId: 0,
          };
          UpdateComposition(patcherStructure);
        } else {
          // Create new todo
          try {
            const mainConcept = await MakeTheInstanceConceptLocal(
              "the_todo",
              "",
              true,
              userId,
              PRIVATE
            );
            const concept = await MakeTheInstanceConceptLocal(
              "todo",
              todo.value,
              false,
              userId,
              PRIVATE
            );
            await CreateTheConnectionLocal(
              mainConcept.id,
              concept.id,
              mainConcept.id,
              order,
              "",
              userId
            );
            LocalSyncData.SyncDataOnline();
          } catch (error) {
            console.error("Error creating todo:", error);
          }
        }

        console.log("Submit button clicked");
      };
    }
  }

  /**
   * Returns the HTML structure of the todo creation form.
   * @returns {string} HTML string
   */
  getHtml(): string {
    return `
      <div class="container">
        <form>
          <div>
            <input type="number" id="id" hidden>
            <div class="formbody">
              <input type="text" id="todo" placeholder="Write your todo here">
              <button class="btn btn-primary" id="submit" type="submit" style="display: inline-block; margin-left: 10px;">Submit</button>
            </div>
          </div>
        </form>
      </div>`;
  }
}
