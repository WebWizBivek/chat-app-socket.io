import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SocketProvider from "./providers/socketProvider.jsx";
import UserProvider from "./providers/userProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import Chat from "./layouts/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import File from "./File.jsx";
import { OtherUserProvider } from "./providers/otherUserProvider.jsx";

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
    path: "/dashboard",
    Component: Chat,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/upload",
    Component: File,
  },
]);

createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <OtherUserProvider>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </OtherUserProvider>
  </SocketProvider>
);
