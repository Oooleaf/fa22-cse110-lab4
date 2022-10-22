function timeScope(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
//print time every second
setInterval(timeScope, 1000);