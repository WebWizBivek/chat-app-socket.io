import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SocketProvider from "./providers/socketProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import JoinRoom from "./pages/JoinRoom.jsx";
import Room from "./components/rOOM.JSX";
import Chat from "./layouts/Chat.jsx";
import Profile from "./pages/Profile.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/join",
    Component: JoinRoom,
  },
  {
    path: "/room",
    Component: Room,
  },
  {
    path: "/dashboard",
    Component: Chat,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);

createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <RouterProvider router={router}></RouterProvider>
  </SocketProvider>
);
