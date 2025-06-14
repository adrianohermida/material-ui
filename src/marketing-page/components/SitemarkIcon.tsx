import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

// Justice scale icon with gradient
function LawdeskIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <defs>
        <linearGradient
          id="lawdeskGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#1976d2", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#42a5f5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#4caf50", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Base */}
      <rect x="11" y="18" width="2" height="4" fill="url(#lawdeskGradient)" />
      <rect x="8" y="21" width="8" height="1" fill="url(#lawdeskGradient)" />

      {/* Main pole */}
      <rect x="11.5" y="8" width="1" height="10" fill="url(#lawdeskGradient)" />

      {/* Horizontal bar */}
      <rect x="6" y="8" width="12" height="1" fill="url(#lawdeskGradient)" />

      {/* Left scale */}
      <path
        d="M6 9 L10 9 L9 12 L7 12 Z"
        fill="url(#lawdeskGradient)"
        opacity="0.8"
      />
      <circle cx="8" cy="8.5" r="0.5" fill="url(#lawdeskGradient)" />
      <path
        d="M7.5 9 L8.5 9 L8.5 10"
        stroke="url(#lawdeskGradient)"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Right scale */}
      <path
        d="M14 9 L18 9 L17 12 L15 12 Z"
        fill="url(#lawdeskGradient)"
        opacity="0.8"
      />
      <circle cx="16" cy="8.5" r="0.5" fill="url(#lawdeskGradient)" />
      <path
        d="M15.5 9 L16.5 9 L16.5 10"
        stroke="url(#lawdeskGradient)"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Top details */}
      <circle
        cx="12"
        cy="6"
        r="1.5"
        fill="url(#lawdeskGradient)"
        opacity="0.6"
      />
      <path
        d="M10.5 4 L13.5 4 L13 6 L11 6 Z"
        fill="url(#lawdeskGradient)"
        opacity="0.7"
      />
    </SvgIcon>
  );
}

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 70%, #4caf50 90%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  fontSize: "1.5rem",
  marginLeft: theme.spacing(1),
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  letterSpacing: "-0.02em",
}));

const Tagline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.75rem",
  fontWeight: 500,
  marginLeft: theme.spacing(0.5),
  marginTop: theme.spacing(0.2),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function SitemarkIcon() {
  const handleClick = () => {
    // If we're on the home page, scroll to top
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If we're on another page, navigate to home
      window.location.href = "/";
    }
  };

  return (
    <LogoContainer onClick={handleClick}>
      <LawdeskIcon
        sx={{
          width: 32,
          height: 32,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <LogoText component="span">Lawdesk</LogoText>
        <Tagline component="span">CRM Jurídico Inteligente</Tagline>
      </Box>
    </LogoContainer>
  );
}
