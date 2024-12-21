const qrImg = document.querySelector('.qr-code img');
const qrInput =document.querySelector('.main input');
const genBtn = document.querySelector('.main button');


genBtn.addEventListener('click', () => {
  let qrValue = qrInput.value.trim();
  
  if(qrValue){
    genBtn.innerHTML = 'Generating...';
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
      qrImg.style.display = "block";
      qrImg.style.margin = "0 auto";
      genBtn.innerText = "Generate QR Code";
      qrInput.value = "";
  });
  }
});