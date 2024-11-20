// ページデータを管理
const pages = {
    home: {
        title: "About us",
        content: "<p>私たちは福岡大学薬学部の3年生です。昨年度から課題解決型プロジェクト「ふくやくプロジェクト」を行っており、その活動の一環で、田川市の地域医療の特性や過疎問題について調査し、田川市の活性化にむけて
            何ができるかを考え、活動しています。この手作りブログでは、私たちの日々の活動の様子をお届けしていきます♪</p>",
    },
    report1: {
        title: "初めての活動報告@2024年9月",
        content: "<p>9月5日(木),6日</p>",
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
