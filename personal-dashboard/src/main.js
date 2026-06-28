let count = 0;

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  const status = document.querySelector("#status");

  btn.addEventListener("click", () => {
    count++;
    status.textContent = "CLICKED " + count + " TIMES 🔥";
  });

  console.log("TAURI JS LOADED ✔");
});
