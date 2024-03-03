import { Box, SxProps } from "@mui/material";
import { FunctionComponent } from "react";

interface ParallaxProps {
  path: string;
}

const sx: SxProps = {
  /* Set a specific height */
  minHeight: 480,
  width: "100%",
  /* Create the parallax scrolling effect */
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const Parallax: FunctionComponent<ParallaxProps> = ({ path }) => (
  <Box sx={{ backgroundImage: `url(${path})`, ...sx }}></Box>
);
