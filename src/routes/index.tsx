import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { DetailMovie } from "../pages/DetailMovie";
import { SearchPage } from "../pages/SearchPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/card/:id" element={<DetailMovie />} />
    </Routes>
  );
};
