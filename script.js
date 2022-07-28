let msg=""
function save(){
    // e.preventDefault();
    let date = document.getElementById('date').value;
    let title = document.getElementById('title').value;
    let des = document.getElementById('des').value;
    let l = (localStorage.length)+1;
    localStorage.setItem(l, JSON.stringify({"date":date,"title":title,"des":des}));
    msg="Day Log added Successfully!!";
}
document.getElementById("save").onsubmit = save;
function diary(){
    let l = (localStorage.length);
    s=""
    if(l>0){
        let c='<div class="list"><ul id="button"></ul></div><div class="display"><center><h1 style="font-weight: 400; color: grey;">Select Daylog file</h1></center></div>'
        document.getElementsByClassName("content")[0].innerHTML = c;
        for(i=l;i>0;i--){
            s=s+"<li onclick='display("+i+")' id="+i+">"+JSON.parse(localStorage.getItem(i)).title+"</li>";
        }
        document.getElementById("button").innerHTML=s;
    }
    else{
        let c = '<center><h1 style="font-weight: 400; color: grey;">No Daylog file</h1></center>';
        document.getElementsByClassName("content")[0].innerHTML=c;
    }
}
function display(a){
    let len = (localStorage.length);
    let l='<div class="item"><p><b>Title : </b><span id="get_title" style="color: grey;"></span></p><p><b>Date : </b><span id="get_date" style="color: grey;"></span></p></div><p style="margin: 10px;"><b>Description : </b><br><br><span id="get_des" style="color: grey; font-family:cursive;"></span></p>'
    document.getElementsByClassName("display")[0].innerHTML=l;
    document.getElementById("get_date").innerHTML=JSON.parse(localStorage.getItem(a)).date;
    document.getElementById("get_title").innerHTML=JSON.parse(localStorage.getItem(a)).title;
    document.getElementById("get_des").innerHTML=JSON.parse(localStorage.getItem(a)).des;
    for(i=1;i<=len;i++){
        if(i==a){
            document.getElementById(i).style.backgroundColor = "white";
            document.getElementById(i).style.borderTop = "2px solid";
            document.getElementById(i).style.borderBottom = "2px solid";
            document.getElementById(i).style.marginBottom = "3px";
            document.getElementById(i).style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        }
        else{
            document.getElementById(i).style.backgroundColor = "#b3b7bb";
            document.getElementById(i).style.border = "0px solid";
            document.getElementById(i).style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px 0px"
        }
    }
}