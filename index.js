const joinMeeting = require('./join');
const { links, routine, times} = require('./config');
const classes = routine[new Date().getDay()];
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
