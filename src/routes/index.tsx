import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { DetailMovie } from "../pages/DetailMovie";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/card/:id" element={<DetailMovie />} />
    </Routes>
  );
};
