import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  DataContextProvider,
  StateContextProvider,
  ServiceConntextProvider,
  RouterPaths,
} from "./utils";
import { CustomNavbar, Footer } from "./components";
import { Home, Register, Login, ErrorPage, PageNotFound } from "./pages";

function App(): JSX.Element {
  return (
    <StateContextProvider>
      <DataContextProvider>
        <ServiceConntextProvider>
          <BrowserRouter>
            <div className="main-container">
              <div className="content-container">
                <CustomNavbar />
                <Routes>
                  <Route
                    path={`${RouterPaths.Default.path}`}
                    element={<Home />}
                  />
                  <Route
                    path={`${RouterPaths.Register.path}`}
                    element={<Register />}
                  />
                  <Route
                    path={`${RouterPaths.Login.path}`}
                    element={<Login />}
                  />
                  <Route
                    path={`${RouterPaths.Error.path}`}
                    element={<ErrorPage />}
                  />
                  <Route path={`*`} element={<PageNotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ServiceConntextProvider>
      </DataContextProvider>
    </StateContextProvider>
  );
}

export default App;
