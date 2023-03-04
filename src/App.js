import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useParams } from "react-router-dom";
import Search from "./Components/Search";
import Card from "./Components/Card";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";

function App() {
  const params = useParams();
  const router = createBrowserRouter([
    { path: "/", element: <Search />, errorElement: <ErrorPage /> },
    { path: `/weather/:searchPlace`, element: <Card /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
