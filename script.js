// ページデータを管理
const pages = {
    main: {
        title: "About us",
        content: "<p>私たちは福岡大学薬学部の3年生です。昨年度から課題解決型プロジェクト「ふくやくプロジェクト」を行っており、その活動の一環で、田川市の地域医療の特性や過疎問題について調査し、田川市の活性化にむけて何ができるかを考え、活動しています。この手作りブログでは、私たちの日々の活動の様子をお届けしていきます♪</p>",
    },
    aoba: {
        title: "あおば薬局",
        content: "<p>9月5日(木),6日(金)の2日間にわたって、</p>",
    },
    koei: {
        title: "ドラッグコーエイ",
        content: "<p>イベントの詳細はこちらです。ぜひご参加ください！</p>",
    },
    hospital: {
        title: "田川市立病院",
        content: "<p>田川市の観光スポットをご紹介します。ぜひ訪れてみてください！</p>",
    },
    yakusindo:{
        title:"薬心堂",
        content: "<p>薬心堂での活動</p>",
    },
    center:{
        title:"保健センター/急患センター",
        content: "<p>保健センターでの活動を紹介</p>"
    }
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
