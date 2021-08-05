const MENU_ITEMS = document.querySelector(".menu_type");
const MAIN = document.querySelector('#main_img1');
let now = 1;



// メインボタンクリックでメニュー表示
MAIN.addEventListener('click', () => {
    MENU_ITEMS.style.display = "inline-block";
});

// メニュー
document.querySelector("#m1").addEventListener("click", () => {
    now = 1;
    if (now == 1) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_futsuu.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

document.querySelector("#m2").addEventListener("click", () => {
    now = 2;
    if (now == 2) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_kaisoku.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

document.querySelector("#m3").addEventListener("click", () => {
    now = 3;
    if (now == 3) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_kankuu.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

document.querySelector("#m4").addEventListener("click", () => {
    now = 4;
    if (now == 4) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_shinkaisoku.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

document.querySelector("#m5").addEventListener("click", () => {
    now = 5;
    if (now == 5) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_tanbaji.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

document.querySelector("#m6").addEventListener("click", () => {
    now = 6;
    if (now == 6) {
        MAIN.style.backgroundImage = `url(https://memo0618.jp/jr_navi_sim/images/img_tokkyuu.png)`;
        MENU_ITEMS.style.display = "none";
    };
});

//閉じる
document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.menu_type').style.display = 'none';
});
