const joinMeeting = require('./join');
const { links, routine } = require('./config');
const classes = routine[new Date().getDay()];
const times = [
    new Date().setHours(8,5,0,0),
    new Date().setHours(9,0,0,0),
    new Date().setHours(10,10,0,0),
    new Date().setHours(11,16,0,0)
]
if(new Date().getDay() == 0) times = [];

function timeDifference(time){
    return (time - new Date().getTime());
}

times.forEach((i,x) => {
    let timeUntil = timeDifference(i);
    if(timeUntil<=0) return;
    console.log(timeUntil/1000)
    setTimeout(() => {
        joinMeeting(links[classes[x]], timeDifference(i+40*60000));
    }, timeUntil)
})