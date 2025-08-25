const login = document.querySelector(".login");
const second = document.querySelector(".second");
const wait = document.querySelector(".wait")
function check(e){
    var user = document.querySelector(".user").value;
    var email = document.querySelector(".email").value;
    if(user.length !=0 && email!= ""){
        console.log("Sucess");
        alert("Success!");
        second.classList.add("art")
        var user2 = document.querySelector(".user").value;
        let split_user2 = user2.split(" ");
        let soz = "";
        for(let elem of split_user2){
            soz+=elem.charAt(0);
        }
        console.log(soz);
        
        wait.insertAdjacentText("afterbegin", user);
    }
    else{
        alert("Pelase fill the gaps correctly!")
        console.log("Pelase fill the gaps correctly!");
        e.preventDefault()
    }
}
login.addEventListener("click", check);

function add(){
    let me = document.querySelectorAll("a");
    for(let item of me){
        item.classList.add("roboto-uniquifier")
    }
}
add()