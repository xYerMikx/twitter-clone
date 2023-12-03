import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "@/constants/routes"

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element: Element }) => <Route key={path} path={path} element={<Element />} />)}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
