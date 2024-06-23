import { SignedIn, SignedOut } from "@clerk/nextjs";
import siteData from "@/data/appData";
import { Button, Stack, Typography } from "@mui/material";
import "cropperjs/dist/cropper.css";
import React from "react";
import { Camera } from "@mui/icons-material";

export default function Home() {
  const { name } = siteData;
  return (
    <Stack
      width="100%"
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography component="h1" variant="h4">
        Welcome to {name}
      </Typography>
      <SignedOut>
        <Typography marginY={2} variant="body1" component="p">
          You need to be logged in to use this feature.
        </Typography>
        <Button disabled href="/upload/image" variant="contained">
          <Camera style={{ marginRight: "1rem" }} />
          Image Detect
        </Button>
      </SignedOut>
      <SignedIn>
        <Button href="/upload/image" variant="contained">
          <Camera style={{ marginRight: "1rem" }} />
          Image Detect
        </Button>
      </SignedIn>
    </Stack>
  );
}
