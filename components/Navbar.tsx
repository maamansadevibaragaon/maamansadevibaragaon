"use client";

import Link from "next/link";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(40,20,0,0.55)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image
            src="/images/logo.png"
            alt="Maa Mansa Devi"
            width={50}
            height={50}
          />

          <Typography
            variant="h6"
            sx={{
              color: "#FFD54F",
              fontWeight: "bold",
            }}
          >
            Maa Mansa Devi Mandir
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>

          <Button color="inherit">About</Button>

          <Button color="inherit">Gallery</Button>

          <Button color="inherit">Aarti</Button>

          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}