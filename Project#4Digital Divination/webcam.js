document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('webcam');

    // Prompt the user for permission, get the video stream
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
    }).catch(err => {
        console.error("An error occurred: " + err);
    });
});

var seconds = 10;
var secondsElement = document.getElementById('seconds');
document.getElementById('countdown').style.display = 'none';

function updateCountdown() {
    if(seconds <= 5) {
        document.getElementById('countdown').style.display = 'block';
        secondsElement.textContent = seconds; 
    }

    if(seconds <= 0) {
        window.location.href = "Page4.html";
    } else {
        seconds--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();
