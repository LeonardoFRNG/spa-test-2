export function login(){
    const form = document.getElementById("loginForm")
    form.addEventListener("submit", async (event)=>{
        event.preventDefault()
        const username = document.getElementById("username").value.trim()
        const password = document.getElementById("password").value.trim()

        if(!username || !password){
            alert("usuario y contraseña son requeridos")
            return
        }
        
        const user = await validateLogin(username, password)
        console.log(user);
        
        if(!user.length){
            alert("usuario o contraseña invalidos")
            return
        }
        localStorage.setItem("user", JSON.stringify(user[0]))
        window.location="/"
    })
}

async function validateLogin(username, password){
    const request = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
    const data = await request.json()
    return data
}