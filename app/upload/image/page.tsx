"use client";
import siteData from "@/data/appData";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import React, { useRef } from "react";
import daiya from "/public/DaiyaMacNCheeze.jpeg";
import { Box, Button, Paper, Stack, Typography, Divider } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Home() {
  const [processedData, setProcessedData] = React.useState<unknown | string>();
  const [currentCrop, setCurrentCrop] = React.useState<
    HTMLCanvasElement | undefined
  >(undefined);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [currentSave, setCurrentSave] = React.useState<undefined | string>(
    undefined,
  );
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    setCurrentCrop(cropper?.getCroppedCanvas());
    setCurrentSave(cropper?.getCroppedCanvas().toDataURL());
    console.log(cropper?.getCroppedCanvas().toDataURL());
    console.log(cropper?.getCroppedCanvas());
    console.log(cropper?.getData());
  };

  const handleOnSaveClick = () => {
    console.log("CROP: ", currentCrop);
    console.log("SAVE: ", currentSave);
    console.log("handle save");
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Paper
        style={{
          alignSelf: "center",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
        }}
      >
        <Typography component="h2" variant="h4">
          Scan Ingredients
        </Typography>
        <Cropper
          src={daiya.src}
          style={{ height: 400, width: "100%" }}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          background={false}
          zoomable={true}
          viewMode={1}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
          }}
        >
          {currentSave && (
            <img
              alt="image preview"
              style={{
                border: "1px solid red",
              }}
              src={currentSave}
            />
          )}
        </Box>
        <Stack flex="row" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
            }}
            onClick={handleOnSaveClick}
          >
            Save
          </Button>
          <Divider />
        </Stack>
      </Paper>
    </main>
  );
}
