const btn = document.getElementById("btn");
const video = document.getElementById("video");

async function selectMedia() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = media;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    // Throwing Error
    console.log("There is an error", error);
  }
}

btn.addEventListener("click", async () => {
  button.disabled = true;

  await video.requestPictureInPicture();

  button.disabled = false;
});

// Call the function
selectMedia();
