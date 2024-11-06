document.getElementById("text2").addEventListener("click", function () {
  document.getElementById("text1").classList.add("hidden");
  document.getElementById("text2").classList.add("hidden");
  document.getElementById("move1").classList.add("hidden");

  document.getElementById("move2").classList.add("shrink");
});

const imageGroups = document.querySelectorAll(".image-group");

imageGroups.forEach((group) => {
  const thumbnail = group.querySelector(".thumbnail");
  const track = group.querySelector(".track");

  group.addEventListener("mouseenter", () => {
    thumbnail.style.opacity = "0";
    track.style.transform = "translate(-50%, -50%) scale(1)";
    track.style.opacity = "1";
  });

  group.addEventListener("mouseleave", () => {
    setTimeout(() => {
      thumbnail.style.opacity = "1";
      track.style.transform = "translate(-50%, -50%) scale(0)";
      track.style.opacity = "0";
    }, 2000);
  });
});

document.body.addEventListener("click", function () {
  document.body.classList.add("page-transition");

  setTimeout(function () {
    window.location.href = "page2.html";
  }, 3000);
});

document.body.addEventListener("click", function () {
  document.body.classList.add("page-transition");
});
