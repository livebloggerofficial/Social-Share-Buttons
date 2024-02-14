const facebookBtn = document.querySelector(
  ".social-share-container .facebook-btn"
);

const twitterBtn = document.querySelector(
  ".social-share-container .twitter-btn"
);

const whatsAppBtn = document.querySelector(
  ".social-share-container .whatsapp-btn"
);

const telegramBtn = document.querySelector(
  ".social-share-container .telegram-btn"
);

const shareBtn = document.querySelector(".social-share-container .share-btn");
const toast = document.querySelector(".toast");

const url = encodeURIComponent(window.location.href);
const title = encodeURIComponent(document.title);

const shareLink = window.location.href;

facebookBtn.href = `https://www.facebook.com/sharer.php?u=${url}`;
twitterBtn.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
whatsAppBtn.href = `https://api.whatsapp.com/send?text=${title}:${url}`;
telegramBtn.href = `https://t.me/share/url?url=${url}&text=${title}`;

const displayToast = (message) => {
  toast.textContent = message;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
};

shareBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard
    .writeText(shareLink)
    .then(() => {
      displayToast("Link copied");
    })
    .catch(() => displayToast("Error copying link"));
});
