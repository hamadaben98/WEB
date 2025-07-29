let video = document.getElementById('webcam');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let selectedSticker = null;

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

function takePhoto() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  if (selectedSticker) {
    ctx.drawImage(selectedSticker, 200, 100, 200, 200); // fixed position
  }
}

function selectSticker(img) {
  document.querySelectorAll('.stickers img').forEach(el => el.classList.remove('selected'));
  img.classList.add('selected');
  selectedSticker = new Image();
  selectedSticker.src = img.src;
}

function downloadPhoto() {
  const link = document.createElement('a');
  link.download = 'montage.png';
  link.href = canvas.toDataURL();
  link.click();
}