let breakfastImages = ["rotation1", "rotation2", "rotation3"];
let lunchImages = ["rotation1", "rotation2", "rotation3", "rotation4"];
let currentLineup = [];
let curFolder = "";

let curImage = 0;

let displayImage = document.getElementById("menu");

setInterval(() => {
    let curTime = new Date();
    formattedTime = formatTime(curTime);
    if(formattedTime < 1030){
        currentLineup = breakfastImages;
        curFolder = "breakfast";
    } else {
        currentLineup = lunchImages;
        curFolder = "lunch";
    }
    curImage = curImage < currentLineup.length ? curImage + 1 : 1;
    displayImage.src = `res/${curFolder}/rotation${curImage}.png`
}, 1*1000)

function formatTime(date){
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    if(minutes.length == 1){
        minutes = "0" + minutes;
    }
    return parseInt(hours + minutes);
}