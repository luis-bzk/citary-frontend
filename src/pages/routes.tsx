import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  );
}
