import homeIndex from "../pages/home/home.index.ts";
import noPageFoundIndex from "../pages/noPageFound/noPageFound.index.ts";
import { login } from "../pages/user/login.example.ts";
import { logout } from "../pages/user/logout.example.ts";
import { register } from "../pages/user/register.example.ts";
import { Todo } from "../pages/todo/wrapper.todo.ts";
import { CreateTodo } from "../pages/todo/create.todo.ts";
import { TodoList } from "../pages/todo/list.todo.ts";
type RouteParams = {
  /**
   * This is a path for route url
   */
  path: any;
  /**
   * This is a label for the route as a name
   */
  linkLabel?: string;
  /**
   * This is the content that route renders
   */
  content: any;
  /**
   * If path needs to be authenticated. ie. true, false
   */
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  {
    path: "/",
    linkLabel: "Home",
    content: homeIndex,
  },
  {
    path: "/login",
    linkLabel: "Login",
    content: login,
  },
  {
    path: "/register",
    linkLabel: "Signup",
    content: register,
  },
  {
    path: "/logout",
    linkLabel: "Signup",
    content: logout,
  },
  {
    path: "/todo-create",
    linkLabel: "Todo",
    content: CreateTodo,
    isAuthenticated: true,
  },
  {
    path: "/todo",
    linkLabel: "Todo",
    content: Todo,
    isAuthenticated: true,
  },
  {
    path: "/todo-list",
    linkLabel: "Todo",
    content: TodoList,
    isAuthenticated: true,
  },
  {
    path: "/404",
    linkLabel: "404",
    content: noPageFoundIndex,
  },
];

export default routes;
