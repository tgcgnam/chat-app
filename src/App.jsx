import Login from "./components/LoginPage/LoginPage";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ChatRoom />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
