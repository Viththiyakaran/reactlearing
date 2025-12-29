import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import JSX from "./basics/JSX.jsx";
import Conditional from "./rendering/Conditional.jsx";
import Loading from "./rendering/Loading.jsx";
import LoadingLangepage from "./practice/LoadingLandpage.jsx";
import LoginPractice from "./practice/LoginPractice.jsx";
import TodoApp from "./practice/TodoAppPractice.jsx";
import WorkWithApi from "./practice/WorkWithApi.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />

    {/* <JSX /> */}
    {/* <Conditional /> */}
    {/* <Loading /> */}
    {/* <LoadingLangepage /> */}
    {/* <LoginPractice /> */}

    {/* <TodoApp /> */}

    {/* <WorkWithApi /> */}
  </BrowserRouter>
);
