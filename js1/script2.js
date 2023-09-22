function logout() {
    window.location.href="/DemoJavaScript2023/pages/index.html";
    window.history.pushState(null, null, "index.html");
}
//adding event listener
document.getElementById("logout").addEventListener("click", logout);