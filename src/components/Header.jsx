import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../public/assets/ic_launcher_monochrome.png";

export default function Header() {
    const theme = useTheme();
    const navigate = useNavigate();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Terms and Conditions", path: "/m/terms-and-conditions.html" },
        { label: "Privacy Policy", path: "/m/privacy-policy.html" }
    ];
    return (
        <>
            <AppBar
                position="sticky"
                color="transparent"
                elevation={0}
                sx={{
                    backdropFilter: "blur(20px)",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    borderBottom: "1px solid rgba(0,0,0,0.08)"
                }}
            >
                <Toolbar>
                    {/* Logo + Title */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            flexGrow: 1
                        }}
                    >
                        <Box
                            component="img"
                            src={Logo}
                            alt="Logicodium IDE"
                            sx={{
                                width: 38,
                                height: 38,
                                transform: "scale(2)",
                                transformOrigin: "center"
                            }}
                        />

                        <Typography variant="h6" fontWeight={700} noWrap>
                            Logicodium IDE
                        </Typography>
                    </Box>

                    {mobile ? (
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            {navItems.map(item => (
                                <Button color="inherit" onClick={() => navigate(item.path)}>{item.label}</Button>
                            ))}
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 260 }}>
                    <List>
                        {navItems.map(item => (
                            <ListItemButton
                                key={item}
                                onClick={() => {
                                    setOpen(false);
                                    navigate(item.path);
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
