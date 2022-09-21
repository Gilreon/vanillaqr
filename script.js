const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qrCode img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value

    if(!qrValue) return;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}&bgcolor=4a4e69 `;
  
    wrapper.classList.add("active");
});