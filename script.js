// ページ切り替え処理
document.querySelectorAll("button[data-page]").forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<h2>${pages[page].title}</h2>${pages[page].content}`;
        toggleMenu(); // メニューを閉じる
    });
});

// ハンバーガーメニューの開閉
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}
