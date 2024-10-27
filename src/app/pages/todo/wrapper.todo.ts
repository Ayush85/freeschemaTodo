// src/app/pages/todo/wrapper.todo.ts

import { StatefulWidget } from "../../default/StatefulWidget";
import { navBar } from "../home/home.service";
import { CreateTodo } from "./create.todo";
import { TodoList } from "./list.todo";
import "./todo.style.css";

export class Todo extends StatefulWidget {
  /**
   * Mounts child widgets to the DOM elements.
   */
  mountChildWidgets() {
    const widget1 = this.getElementById("widget1");
    const widget2 = this.getElementById("widget2");
    const creating = new CreateTodo();
    const listing = new TodoList();

    if (widget1) {
      this.childWidgets.push(creating);
      creating.mount(widget1);
    }

    if (widget2) {
      listing.dataChange((value: any) => {
        this.UpdateChildData(value, creating);
      });
      this.childWidgets.push(listing);
      listing.mount(widget2);
    }
  }

  /**
   * Returns the HTML structure for the Todo component.
   * @returns {string} HTML string
   */
  getHtml(): string {
    return `
        <nav class="nav">
            ${navBar()}
        </nav>
        <div class="flex-container">
            <div id="widget1"></div>
        </div>
        <div class="flex-container">
            <div id="widget2"></div>
        </div>
        `;
  }
}
