// ページデータを管理
const pages = {
    home: {
        title: "About us",
        content: "<p>私たちは福岡大学薬学部の3年生です</p>",
    },
    report1: {
        title: "初めての活動報告",
        content: "<p>田川市での活動を始めました！多くの人に支えられています。</p>",
    },
    event: {
        title: "イベント開催！",
        content: "<p>イベントの詳細はこちらです。ぜひご参加ください！</p>",
    },
    tourism: {
        title: "地域の魅力",
        content: "<p>田川市の観光スポットをご紹介します。ぜひ訪れてみてください！</p>",
    },
};

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
