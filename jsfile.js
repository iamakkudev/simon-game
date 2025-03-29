let scores =[];
let gamesq=[];
let usersq=[];
let colors=["pink","yellow","green","blue"];

let start= false;
let levle= 0;

let h3 = document.querySelector("h3")

document.addEventListener("keypress",function(){
    if(start==false)
    {
        start=true;

        levelup();
    }
})


function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },300)
}
function levelup(){
    usersq = []
    levle++;
    h3.innerText = `level ${levle}`
    let cnum = Math.floor(Math.random()*3)
    let boxcolor = colors[cnum]
    let boxbtn = document.querySelector(`.${boxcolor}`)
    gamesq.push(boxcolor)
    btnflash(boxbtn)
}


function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
        btn.classList.remove("userflash")
    },100)
}
let allbtns = document.querySelectorAll('.box')
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress)
}
function btnpress(){
    let btn = this;
    userflash(btn);

    Usercolor = btn.getAttribute('id')
    usersq.push(Usercolor)
     checkans(usersq.length-1)
}

function checkans(idx){
    if(usersq[idx]===gamesq[idx])
    {
        if(usersq.length==gamesq.length)
            setTimeout(levelup,1000)
    }
    else{
        h3.innerHTML = `Game is over! Your score was <b>${levle}</b> <br>press any key to restart.`
        document.querySelector('body').style.backgroundColor='darkred'
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor='white'
        },200)
        scores.push(levle);
        let high = Math.max(...scores);
        document.querySelector('span').innerText=`${high}`
        reset()
    }
}
function reset(){
    start=false;
    gamesq=[]
    usersq=[]
    levle=0
}




