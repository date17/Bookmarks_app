//全てのページに共通すること
//大元のラベル
let label = {
    bookmark: document.getElementById("label-bookmark"),
    tag: document.getElementById("label-tag"),
    user: document.getElementById("label-user"),
    other: document.getElementById("label-other")
};
//詳細のラベル
let detail = {
    bookmark: [
        document.getElementById("label-bookmark-detail"),
        {
            add: document.getElementById("bookmark-add")
        }
    ],
    tag: [
        document.getElementById("label-tag-detail"),
        {
            add: document.getElementById("tag-add")
        }
    ],
    user: [
        document.getElementById("label-user-detail"),
        {
            detail: document.getElementById("user-detail"),
            logout: document.getElementById("user-logout"),
            retire: document.getElementById("user-retire")
        }
    ],
    other: [
        document.getElementById("label-other-detail"),
        {
            common: document.getElementById("other-common")
        }
    ]
};

//クリックしたかのフラグ
let flg = {
    bookmark: false,
    tag: false,
    user: false,
    other: false
};

document.getElementById("bookmark-open").style.display = "none";
document.getElementById("tag-open").style.display = "none";
document.getElementById("user-open").style.display = "none";
document.getElementById("other-open").style.display = "none";

//初めはdetailは全て非表示にしておく
displayNone(detail.bookmark[0]);
displayNone(detail.tag[0]);
displayNone(detail.user[0]);
displayNone(detail.other[0]);

//クリックによりフラグの真偽値を変えて、子エレメントの表示非表示を切り替える
label.bookmark.onclick = function() {
    flg.bookmark = !flg.bookmark;
    if (flg.bookmark === true) {
        document.getElementById("bookmark-close").style.display = "none";
        document.getElementById("bookmark-open").style.display = "block";
        displayBlock(detail.bookmark[0]);
    } else {
        document.getElementById("bookmark-close").style.display = "block";
        document.getElementById("bookmark-open").style.display = "none";
        displayNone(detail.bookmark[0]);
    }
};
label.tag.onclick = function() {
    flg.tag = !flg.tag;
    if (flg.tag === true) {
        document.getElementById("tag-close").style.display = "none";
        document.getElementById("tag-open").style.display = "block";
        displayBlock(detail.tag[0]);
    } else {
        document.getElementById("tag-close").style.display = "block";
        document.getElementById("tag-open").style.display = "none";
        displayNone(detail.tag[0]);
    }
};
label.user.onclick = function() {
    flg.user = !flg.user;
    if (flg.user === true) {
        document.getElementById("user-close").style.display = "none";
        document.getElementById("user-open").style.display = "block";
        displayBlock(detail.user[0]);
    } else {
        document.getElementById("user-close").style.display = "block";
        document.getElementById("user-open").style.display = "none";
        displayNone(detail.user[0]);
    }
};
label.other.onclick = function() {
    flg.other = !flg.other;
    if (flg.other === true) {
        document.getElementById("other-close").style.display = "none";
        document.getElementById("other-open").style.display = "block";
        displayBlock(detail.other[0]);
    } else {
        document.getElementById("other-close").style.display = "block";
        document.getElementById("other-open").style.display = "none";
        displayNone(detail.other[0]);
    }
};
//非表示にする関数
function displayNone(tag) {
    tag.style.display = "none";
}

//表示にする関数
function displayBlock(tag) {
    tag.style.display = "block";
}

//回転する関数
function rotateTag(tag, deg) {
    tag.style.transform = "rotate(" + deg + "deg)";
}
