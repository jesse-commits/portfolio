class Time {
    constructor(){
        this.getTime()
    }

 getTime(){
    let time = document.getElementById("time")

    let today = new Date()
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let d = dayArray[today.getDay()]
    let mo = monthArray[today.getMonth()]
    let day = today.getUTCDate()
    let y = today.getFullYear()
    
        function checkTime(i){
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

    //Add 0 in front of numbers < 10
    m = checkTime(m)
    s = checkTime(s)
    day = checkTime(day)
    
    let ourTime = `<article class="time__article">
                        <h1 class="general-content--large">${h}:${m}:${s}</h1>
                        <span class="general-content--dark">${d}</span>
                        <span class="general-content--dark"> ${mo} ${day-1}, ${y}</span>
                    </article>`
    
        time.innerHTML = ourTime

    let me = this

    let t = setTimeout(function(){me.getTime()},500)
    
 }

}
 
 export default Time