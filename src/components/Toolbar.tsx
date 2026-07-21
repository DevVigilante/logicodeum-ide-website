import AppBar from "@mui/material/AppBar";
import MToolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../assets/20260711_114655.png";

export default function Toolbar() {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <MToolbar>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              mr: 2
            }}
          />
  
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Logicodeum IDE
          </Typography>
        </MToolbar>
      </AppBar>
      <MToolbar/>
    </>
  );
}