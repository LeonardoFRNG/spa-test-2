import homeView from "../views/homeView";
import loginView from "../views/loginView";
import { login } from "../controllers/login.controller";
import notFound from "../views/notFound";

const routes = {
    "/": {
        view: homeView
    },
    "/login": {
        view: loginView,
        controller: login
    }
}

export default function renderRoute(){
    const container = document.getElementById("app")
    const user = JSON.parse(localStorage.getItem("user"))
    const path = window.location.pathname

    const route = routes[path] || ""

    if(!route){
        container.innerHTML = notFound()
        return
    }

    container.innerHTML = route.view()
    route?.controller()
}