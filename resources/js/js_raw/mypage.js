//mypageのjs
//document.getElementByClassName()で取得した物は配列ではなく、HTMLCollectionオブジェクトである
//取得したものを配列にして変数に格納することでmapなどが使える

// let title_close = Array.prototype.slice.call(
//     document.getElementsByClassName("title-close")
// );

// //クリックした時に表示するtitle-openを最初は非表示にする
// let title_open = Array.prototype.slice.call(
//     document.getElementsByClassName("title-open")
// );

// let detail = Array.prototype.slice.call(
//     document.getElementsByClassName("detail")
// );

// //配列をmapで回して非表示にする。
// title_open = title_open.map(value => {
//     value.style.display = "none";
// });

// //詳細も最初は非表示
// detail = detail.map(value => {
//     value.style.display = "none";
// });

// var title_close = document.getElementsByClassName("title-close");
// var title_open = document.getElementsByClassName("title-open");
// var detail = document.getElementsByClassName("detail");
// console.log(title_close);

// //title-closeがクリックされたらtitle-openとdetailを表示し、title-closeは非表示にする
// for (var i = 0; i < title_close.length; i++) {
//     console.log(title_close[i]);
//     title_close[i].onclick = function() {
//         if (title_close[i].style.display === "block") {
//             title_close[i].style.display === "none";
//             title_open[i].style.display === "block";
//             detail[i].style.display === "block";
//         } else {
//             title_close[i].style.display === "block";
//             title_open[i].style.display === "none";
//             detail[i].style.display === "none";
//         }
//     };
// }

// //子要素の取得
// var eventChild = event.target.childNodes;
// //親要素の取得
// var eventParent = event.target.parentNodes;

//title-closeの取得
var title_close = document.getElementsByClassName("title-close");

//title-closeの要素分ループ
for (var i = 0; i < title_close.length; i++) {
    //各title-closeにイベントをつける
    title_close[i].addEventListener("click", function() {
        //次の要素を取得(title_open)
        var this_title_open = this.nextElementSibling;
        console.log(title_open);
        //さらに次の要素を取得
        var block_detail = this_title_open.nextElementSibling;
        console.log(block_detail);
        //title-closeを非表示にしてtitle-openとdetailを表示する
        this.style.display = "none";
        this_title_open.style.display = "block";
        block_detail.style.display = "block";
    });
}

//title-openの取得
var title_open = document.getElementsByClassName("title-open");

//title-openのループ
for (var i = 0; i < title_open.length; i++) {
    //各title-openにイベントをつける
    title_open[i].addEventListener("click", function() {
        //次の要素を取得(detail)
        var open_detail = this.nextElementSibling;
        console.log(open_detail);
        //前の要素の取得(title-close)
        var this_title_close = this.previousElementSibling;
        console.log(this_title_close);
        //title-openとdetailを非表示にして、title-closeを表示する
        this_title_close.style.display = "block";
        this.style.display = "none";
        open_detail.style.display = "none";
    });
}

//タグの削除ボタンを押した時の処理
var tag_btn = document.getElementsByClassName("del_tag");

for (var i = 0; i < tag_btn.length; i++) {
    tag_btn[i].addEventListener("click", function() {
        console.log(this);
        //クリックしたボタンのid(tagのidにしている)を取得
        var id = this.id * 1;
        if (
            window.confirm(
                "タグに関連しているbookmarkも消えますがよろしいですか？"
            )
        ) {
            location.href = "/mypage/tag/delete/" + id;
        } else {
            window.alert("キャンセルしました");
        }
    });
}

//ブックマークの編集と削除の処理
var edit_bookmark = document.getElementsByClassName("edit-bookmark");
var del_bookmark = document.getElementsByClassName("del-bookmark");

for (var i = 0; i < edit_bookmark.length; i++) {
    edit_bookmark[i].addEventListener("click", function() {
        //valueに入れていたidを取り出して変数に格納
        id = this.value * 1;
        location.href = "/mypage/bookmark/edit/" + id;
    });
}

for (var i = 0; i < del_bookmark.length; i++) {
    del_bookmark[i].addEventListener("click", function() {
        if (window.confirm("このbookmarkを削除してよろしいですか？")) {
            //valueに入れていたidを取り出して変数に格納
            id = this.value * 1;
            location.href = "/mypage/bookmark/delete/" + id;
        } else {
            window.alert("キャンセルしました");
        }
    });
}
