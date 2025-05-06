
const targetdate=new Date("January 1 , 2026 00:00:00").getTime();
const countdown=setInterval(function() {
    const now=new Date().getTime();
    const gap = targetdate-now;

    const second=1000;
    const minute= second*60;
    const hour=minute*60;
    const day=hour*24;

    if(gap>0)
    {
        const days=Math.floor(gap/day);
        const hours=Math.floor((gap%day)/hour);
        const minutes=Math.floor((gap%hour)/minute);
        const seconds=Math.floor((gap%minute)/second);

        document.getElementById("days").innerText=days;
        document.getElementById("hours").innerText=hours;
        document.getElementById("minutes").innerText=minutes;
        document.getElementById("seconds").innerText=seconds;
    }
    else
    {
        clearInterval(countdown);
        document.getElementById("timer").style.display = "none";
        document.getElementById("message").innerText = " The event has started!";
    }
}, 1000);