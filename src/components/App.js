import Habits from "./Habits";
import Login from "./Login";
import Signin from "./Signin";
import Today from "./Today";


import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
   

    return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/habits" element={<Habits />} />
                        <Route path="/today" element={<Today />} />
                    </Routes>
                </BrowserRouter>
    )
}