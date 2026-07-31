"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/temple-front.webp"
        alt="Maa Mansa Devi Mandir"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(88,37,0,0.65))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/logo.png"
            alt="Temple Logo"
            width={120}
            height={120}
          />

          <Typography
            sx={{
              color: "#FFD54F",
              mt: 3,
              fontSize: { xs: "1.4rem", md: "2rem" },
              fontWeight: "bold",
            }}
          >
            🕉️ ॐ जय माँ मनसा देवी ॐ
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontWeight: 800,
              mt: 2,
              fontSize: { xs: "2.5rem", md: "4.8rem" },
            }}
          >
            Maa Mansa Devi Mandir
          </Typography>

          <Typography
            sx={{
              color: "#FFE082",
              mt: 2,
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            A Sacred Place of Faith & Devotion
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              mt: 2,
              fontSize: "1.2rem",
            }}
          >
            Bara Gaon, Uttar Pradesh
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            mt={5}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e65100",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: "bold",
              }}
            >
              🙏 Plan Your Visit
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#FFD54F",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
              }}
            >
              📸 View Gallery
            </Button>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}