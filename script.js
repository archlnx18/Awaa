document.getElementById("yes-button").addEventListener("click", function() {
  document.getElementById("app-content").style.display = "none";
  document.getElementById("success-screen").style.display = "flex";
  const music = document.getElementById("background-music");
  const newMusic = new Audio("success-music.mp3"); 
  newMusic.play(); 
  music.pause(); 
});

document.getElementById("no-button").addEventListener("click", function() {
  const rejectionMessages = [
    "Yakin banget?",
    "Becanda kan?",
    "Pikirin lagi!",
    "Oh no!"
  ];
  const randomMessage = rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];
  document.getElementById("no-button").innerText = randomMessage;
  document.getElementById("proposal-gif").src = "madBear.gif";
  const music = document.getElementById("background-music");
  music.play(); 
});

function updateTime() {
  const currentDate = new Date();
  const startDate = new Date('2024-11-02T23:00:00');  
  const elapsedTime = new Date(currentDate - startDate);

  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = elapsedTime.getUTCHours();
  const minutes = elapsedTime.getUTCMinutes();
  const seconds = elapsedTime.getUTCSeconds();

  const timeString = ` ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik kita resmi bareng..`;
  document.getElementById("current-time").textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();