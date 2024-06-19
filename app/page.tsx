"use client";
import siteData from "@/data/appData";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import React, { LegacyRef, ReactHTMLElement, useRef } from "react";

export default function Home() {
  const { testImages } = siteData;
  const [currentCrop, setCurrentCrop] = React.useState<
    HTMLCanvasElement | undefined
  >(undefined);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [currentSave, setCurrentSave] = React.useState<undefined | string>(
    undefined,
  );
  const canvasRef = useRef(null);
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{siteData.name}</h1>
      <div
        style={{
          alignSelf: "center",
          border: "1px solid grey",
          marginTop: "1rem",
          borderRadius: "0.25rem",
          padding: "0.5rem 1rem",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Crop The Ingredients
        </h2>
        <Cropper
          // src={testImages.daiya}
          src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentSave && (
            <img
              style={{
                border: "1px solid red",
              }}
              src={currentSave}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              alignSelf: "center",
              border: "1px solid grey",
              fontWeight: "bold",
              marginTop: "1rem",
              borderRadius: "0.25rem",
              padding: "0.5rem 1rem",
            }}
            onClick={handleOnSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
