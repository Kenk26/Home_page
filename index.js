function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(); 

        Number.prototype.pad =function(digits){
            for(var n = this.toString(); n.length < digits; n=0 + n);
            return n;
        }

        var months = ["Jan", "Feb", "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
        var week = [ "Sun", "Mon" , "Tues" , "Wed" , "Thur" , "Fri" , "Sat"];
        var ids = ["day" , "month" , "date" , "year" , "hour" , "min" , "sec"];
        var values = [week[dname] , months[mo] , dnum.pad(2) , yr , hou.pad(2) , min.pad(2) , sec.pad(2)];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()" , 1);
}

const toggleSidebar = () => document.body.classList.toggle("open");

const toggleMenu = () => document.body.classList.toggle("open");

const off = () => document.body.classList.remove("open");

