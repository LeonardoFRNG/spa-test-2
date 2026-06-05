export default function loginView(){
    return `<div class="min-h-screen w-full grid grid-cols-2">
        <div class="col-span-1 grid place-items-center">
          <form id="loginForm" class="p-5 bg-gray-300">
            <input type="text" id="username" placeholder="jhon.doe" required>
            <input type="password" id="password" placeholder="*******" required>
            <button class="p-3 bg-indigo-300">Login</button>
          </form>
        </div>
      </div>
`
}