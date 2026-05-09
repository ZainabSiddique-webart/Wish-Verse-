window.goToSection = function () {
  const sec = document.getElementById("message");

  sec.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

function showPopup(msg, x, y) {
  const box = document.createElement("div");

  box.innerText = msg;

  box.style.position = "absolute";
  box.style.left = x + "px";
  box.style.top = y + "px";

  // 💥 BUBBLE STYLE
  box.style.padding = "14px 18px";
  box.style.borderRadius = "999px";
  box.style.background = "linear-gradient(135deg, #ffb6d5, #c084fc)";
  box.style.color = "#fff";

  // 💥 FONT (Chewy vibe)
  box.style.fontFamily = "'Chewy', cursive";
  box.style.fontSize = "18px";
  box.style.fontWeight = "500";

  box.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
  box.style.backdropFilter = "blur(10px)";
  box.style.pointerEvents = "none";
  box.style.zIndex = "9999";

  // 💥 POP ANIMATION
  box.style.transform = "translate(-50%, -50%) scale(0)";
  box.style.opacity = "0";
  box.style.transition = "transform 0.45s cubic-bezier(0.2, 1.4, 0.3, 1), opacity 0.3s ease";

  document.body.appendChild(box);

  requestAnimationFrame(() => {
    box.style.transform = "translate(-50%, -50%) scale(1)";
    box.style.opacity = "1";
  });

  // 💥 LONGER LIFETIME (you asked timing)
  setTimeout(() => {
    box.style.transform = "translate(-50%, -50%) scale(0.8)";
    box.style.opacity = "0";
  }, 1600);

  setTimeout(() => box.remove(), 1900);
}

/* =========================
   GLOBAL INTERACTION SYSTEM
========================= */

let opacity = 0.2;

document.addEventListener("click", (e) => {
if (e.target.closest(".sec3")) return;
  // 1. RIPPLE
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = e.pageX + "px";
  ripple.style.top = e.pageY + "px";
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);

  // 2. POPUP
  const messages = [
    "OoOo interact krrhy 👀",
    "motayyyy",
    "keep exploring sheikh sahab",
    "BAD TOUCH NAI KREN"
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];
  showPopup(msg, e.pageX, e.pageY);

});
let totalFlowers = 0;
let openedFlowers = 0;
let allFlowersDone = false;
let videoEnded = false;
let popupShown = false;

document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startGameBtn");
  const gameArea = document.getElementById("gameArea");

  startBtn.addEventListener("click", () => {
document.getElementById("blur").classList.add("disabled");
    // reveal game area
    gameArea.classList.remove("hidden");

    // optional: smooth scroll into game
    gameArea.scrollIntoView({ behavior: "smooth" });

    // remove start button after use
    startBtn.style.display = "none";

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const flowers = document.querySelectorAll(".flower");
  const box = document.getElementById("revealBox");
totalFlowers = flowers.length;
  flowers.forEach((flower) => {

    flower.addEventListener("click", (event) => {
if (flower.classList.contains("used")) return;

flower.classList.add("used");
openedFlowers++;

if (openedFlowers === totalFlowers) {
  allFlowersDone = true;
  triggerCompletionCheck();
}
      
      const type = flower.dataset.type;
      const content = flower.dataset.content;

      // TEXT REVEAL
      
      if (type === "text") {
  showPopup(content, event.clientX, event.clientY);
}
      

      // IMAGE REVEAL
      else if (type === "image") {
        box.innerHTML = `<img src="${content}" style="max-width:300px;border-radius:12px;">`;
      }

      // VIDEO REVEAL
      else if (type === "video") {
        box.innerHTML = `
  <video id="mainVideo" controls style="max-width:250px;border-radius:12px;">
    <source src="${content}" type="video/mp4">
  </video>
<button id="endVideoBtn" class="end-video-btn">End Video </button>
`;
      }
 let popupText;

if (type === "text") {
  popupText = content;
} 
else if (type === "image") {
  popupText = "okayyy bachaaa?";
} 
else if (type === "video") {
  popupText = "hehe yeyyieee";
}

showPopup(popupText, event.clientX, event.clientY);
    });

  });

});document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "endVideoBtn") {

    const video = document.getElementById("mainVideo");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    // 💥 IMPORTANT FIX: remove UI
    const box = document.getElementById("revealBox");
    box.innerHTML = "";

    videoEnded = true;

    triggerCompletionCheck();
  }
});


function triggerCompletionCheck() {
  if (!allFlowersDone || !videoEnded) return;

  setTimeout(() => {
    showFinalPopup();
  }, 10000);
}
function showFinalPopup() {
  const box = document.createElement("div");

  box.innerText = "yeyiee!!just a lil smthh, hope it was funnn ♥";

  box.style.position = "fixed";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.padding = "25px 30px";
  box.style.borderRadius = "25px";
  box.style.background = "linear-gradient(135deg, #c5467c, #b0c0e2)";
  box.style.color = "white";
  box.style.fontFamily = "'Chewy', cursive";
  box.style.fontSize = "22px";
  box.style.zIndex = "99999";
  box.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";

  document.body.appendChild(box);

  setTimeout(() => box.remove(), 10000);
}

/*window.addEventListener("scroll", () => {
  const rect = finalSection.getBoundingClientRect();

  if (!popupShown && rect.top < window.innerHeight * 0.7) {
    popup.classList.remove("hidden");
    popupShown = true;
  }
});
*/

document.addEventListener("DOMContentLoaded", () => {

  const sendBtn = document.getElementById("sendMailBtn");
  const openBtn = document.getElementById("openFormBtn");
  const popup = document.getElementById("finalInputPopup");

  // OPEN POPUP
  openBtn.addEventListener("click", () => {
    popup.classList.add("active");
    openBtn.style.display = "none";
  });

  // CLOSE POPUP (click outside)
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
      openBtn.style.display = "inline-block";
    }
  });

  // SEND MAIL
  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("userName").value;
    const message = document.getElementById("finalInput").value;

    if (!message.trim()) {
      alert("at least write something 😭");
      return;
    }

    const email = "zaynabsiddique008@gmail.com";
    const subject = "Final Take 💌";
    const body = `Name: ${name || "anonymous"}\n\nMessage:\n${message}`;

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

});
