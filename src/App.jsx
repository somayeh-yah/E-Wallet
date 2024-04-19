import { createBrowserRouter, RouterProvider } from "react-router-dom"; // är en funktion som tillåter oss att definera våra routes/path i denna applikation
// import { Provider } from "react-redux";
import "./App.css";

import HomePage from "./pages/HomePage";
import CardFormPage from "./pages/CardFormPage";

//Här kallar vi och skickar vi med en array med olika object där varje objekt representerar våra routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/addCard", element: <CardFormPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
