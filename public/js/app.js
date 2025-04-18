


let db = []
let user_ = {}

let log = []

class Signup{
    constructor(name,email,age,password,repassword){
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.repassword = repassword

                


    }
}


console.log("-------db------")
console.log(db)



function HomePage() {
    alert("Hello " +user_.name+ " welcome to your account....")
    Home_PageList()
    
}



function signup() {
    let user_name = prompt("UserName")
    let user_email = prompt("User Email")
    let user_age = prompt("User Age")
    let user_password = prompt("User Password")
    let user_repassword = prompt("Repassword") 
    
    
    user_["name"] = user_name
    user_["email"] = user_email
    user_["age"] = user_age
    user_["password"] = user_password
    user_["repassword"] = user_repassword 
    //user_["money"] = Math.floor(Math.random() * (1000 - 300)) + 300
    user_["money"] = 1000
    user_["loan"] = false




    //let user = new Signup(user_name,user_email,user_age,user_password,user_repassword)
    
    console.log("-------------ss")
    //console.log(user)
    //db.push(user)
    alert("user Created Successfully")
    console.log("---------> done ")
    //console.log(user);
    
    Welcome_Message()

   
}

function Histories() {

    if (log != "")
    {
        alert(log)
        for (logs of log){
            console.log(logs)
        }
    }
    else{alert("There Nothing in the history for now")}
    Home_PageList()
    
}

function deposit() {

    let msg = parseInt(prompt("How Much You Wanna Deposit To Your Money "))
    if (msg <= user_.money && msg <= 1000)
    {
        user_.money += msg
        log.push("You Deposit " + msg) 
        alert(log)
        Home_PageList()
    }else{
        alert("wrong you don't have enough money , maximum deposit is 1000")
        Home_PageList()
    }

    
}

function Withdraw() {
    let msg = prompt("Enter How much Money You wanna Withdraw From Your Money ")

    if(msg <= user_.money && user_.money >= msg)
    {
        user_.money -= msg
        alert("- you withdraw " + msg+ " from your account \n\n- now you have " + user_.money + " in your money" )
        log.push("You Withdraw "+msg)
        alert(log)
        Home_PageList()
    }
    else{
        alert("You dont have enough money")
        Home_PageList()
        
    }

}

function Loan() {



    // 100 x 20% // 100
    let check = confirm("Are You sure ")

    if (check)
    {
        user_.loan = true
        let loan = user_.money * 20 / 100
        user_.money += loan
        alert("You receive "+ loan) 
    
        //let lose = 1000 * 10 / 100

        Home_PageList()
    }
    else(Home_PageList)

    
}


function Invest() {
    let cal = 1000 * 120 / 100
    alert(cal)
    Home_PageList()

    
}
function login() {


    let user_email = prompt("Email")
    let user_password = prompt("Password") 
    console.log("here-----------")
    //console.log(db)

    //let check_if = db.includes(user_email)
    //alert(db)
    //alert(check_if)
    if(user_email == user_.email && user_password == user_.password)
    {
        alert("Login Successfully...")

        alert("Checking the loan")
        if (user_.loan == true)
        {
            let lose = user_.money * 10 / 100 
            user_.money -= lose
            alert("You lose " + lose )
            HomePage()
        }
        else{alert("There No loan")
            HomePage()
        }
        HomePage()


    }else{
        alert("Wrong Email / Password")
        Welcome_Message()
    }

    
}


function Pass_change() {
    let get_user = prompt("Please Enter Your Email")
    if (user_.email == get_user)
    {
        new_pass = prompt("Enter Your New Password")

        user_.password = new_pass
        alert("Password Updated , Try To Login Again")
        Welcome_Message()
    }
    else{
        alert("Wrong Email")
        Welcome_Message()
    }
}



function Home_PageList() {
    let options = ["1 - Logout","2 - Withdraw Money","3 - Deposit Money","4 - Take a Loan","5 - Invest","6 - History"]

    let welcome_prompt = prompt("Hello " +user_.name +  " Welcome To Your Account \n\nYour Money : "+user_.money+"\n\n> Options\n\n" + options.join("\n"))
    if (welcome_prompt == 1){
        welcome_prompt = "Logout"
        Welcome_Message()
    }
    else if (welcome_prompt == 2)
    {
        welcome_prompt = "Withdraw Money"
        Withdraw()
        

    }
    else if (welcome_prompt == 3)
    {
        welcome_prompt = "Deposit Money"
        deposit()

    }

    else if (welcome_prompt == 4)
    {
        welcome_prompt = "Take a Loan"
        Loan()

    }

    else if (welcome_prompt == 5)
        {
            welcome_prompt = "Invest"
            Invest()
    
        }

    else if (welcome_prompt == 6)
        {
            welcome_prompt = "History"
            Histories()
    
        }
    else{
        alert("Please Choose Something From The List")
        Home_PageList()
    }
    return welcome_prompt
}



function Welcome_Message() {
    let options = ["1 - sign up","2 - login","3 - changing the password","4 - exit"]

    let welcome_prompt = prompt("> Hello Choose Something Please \n" + options.join("\n"))
    if (welcome_prompt == 4){
        welcome_prompt = "exit"
    }
    else if (welcome_prompt == 1)
    {
        welcome_prompt = "sign up"
        signup()
        

    }
    else if (welcome_prompt == 2)
    {
        welcome_prompt = "login"
        login()

    }

    else if (welcome_prompt == 3)
    {
        welcome_prompt = "changing the password"
        Pass_change()

    }
    else{
        alert("Please Choose Something From The List")
        Welcome_Message()
    }
    return welcome_prompt
}


msg = Welcome_Message()