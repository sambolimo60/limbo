const showModal = () => {
  document.getElementById("check-id-modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

const hideModal = () => {
  document.getElementById("check-id-modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Show modal on click of button or link
document.getElementById("check-id-button").addEventListener("click", showModal);

// Hide modal on click of close button or overlay
document.getElementById("close-modal-button").addEventListener("click", hideModal);
document.getElementById("overlay").addEventListener("click", hideModal);
