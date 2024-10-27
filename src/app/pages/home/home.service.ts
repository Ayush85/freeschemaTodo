import { getLocalStorageData } from "../user/login.service";

export function navBar() {
  return `
    <div class="navbar">
      <a href="/" class="header-logo">
        <img src="./images/freeschema-logo.png" alt="freeschema logo">
        <h1>Todo App</h1>
      </a>
      <div class="header-links">
        <a href="/todo">Tasks</a>
        <a href="https://github.com/Ayush85/freeschemaTodo">Docs</a>
        ${
          localStorage?.getItem("profile")
            ? `<a href="/logout">Logout</a>`
            : `<a href="/login">Login</a>`
        }
      </div>
    </div>
  `;
}

export async function checkLogin() {
  const profileData: any = await getLocalStorageData();

  if (profileData?.token && profileData?.userId) {
    return true;
  } else {
    return false;
  }
}
