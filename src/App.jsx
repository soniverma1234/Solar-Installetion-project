import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import ProjectsPage from "@/pages/ProjectsPage.jsx";
import ServicesPage from "@/pages/ServicesPage.jsx";
import Contact from "@/pages/Contact.jsx";
import NotFound from "@/pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;