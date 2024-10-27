import mainViewClass from "../../default/mainView.class";
import { checkLogin, navBar } from "./home.service";
import "./home.style.css";

export default class extends mainViewClass {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    const isLoggedIn = await checkLogin();
    let buttonsHTML = "";
    if (isLoggedIn) {
      buttonsHTML = `
      <router-link href="/logout">Logout</router-link>
      `;
    } else {
      buttonsHTML = `
        <router-link href="/register">Sign Up</router-link>
        <router-link href="/login">Login</router-link>
      `;
    }
    return `
      <div class="home-container">
      <nav class="nav">
      ${navBar()}
      </nav>

        <main class="main">
          <h1>Todo App
          </h1>
          <div id="widget1"></div>
          <p>Start managing your tasks efficiently with our intuitive interface. Add, edit, and delete tasks with ease, and keep track of your progress in real-time.</p>
          <div class="btn-group">
            ${buttonsHTML}
          </div>
        </main>
      </div>
    `;
  }
}
