import ErrorImg from "../../../public/assets/undraw_page-not-found_6wni.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";

export default function NotFound() {
    return (
        <>
            <Header/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                }}
            >
                <Box
                    component="img"
                    src={ErrorImg}
                    alt="404 Illustration"
                    sx={{
                        width: "50%",
                        height: "50%",
                        mb: 3,
                        
                        filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.15))"
                    }}
                />
            </div>
            <Footer/>
        </>
    );
}
