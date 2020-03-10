var addForm = document.getElementById("addTagForm");

addForm.style.display = "none";

document.getElementById("tag-add").onclick = function() {
    console.log("click");
    //フォームを表示しているかのflgをスイッチする
    if (addForm.style.display === "none") {
        addForm.style.display = "block";
    } else {
        addForm.style.display = "none";
    }
};

document.getElementById("cancel").onclick = function() {
    console.log("cancel click");
    if (addForm.style.display === "block") {
        addForm.style.display = "none";
    }
};
