import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Discord from "./components/Discord";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../theme.css";

import { Box } from "@mui/material";
import Logo from  "../../../public/assets/undraw_online-community_3o0l.svg"; // your logo

export default function Home() {
    return (
        <div
            className="light"
            style={{
                background: "linear-gradient(to right, #f8f9ff, #ffffff)"
            }}
        >
            <Header/>
            <HeroSection />
            <FeaturesSection />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "24px",
                    maxWidth: "1200px",
                    margin: "auto",
                    marginBottom: "1em"
                }}
            >
                <Discord />
            </Box>
            <Footer />
        </div>
    );
}
