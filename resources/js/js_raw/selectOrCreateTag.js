var selectTagForm = document.getElementById("selectTagForm");
var createTagForm = document.getElementById("createTagForm");

selectTagForm.style.display = "none";
createTagForm.style.display = "none";

console.log(document.getElementById("tag_check").value);

document.getElementById("selectTag").onclick = function() {
    console.log("click select");
    createTagForm.style.display = "none";
    selectTagForm.style.display = "block";
    document.getElementById("tag_check").value = "select";

    console.log(document.getElementById("tag_check").value);
};

document.getElementById("createTag").onclick = function() {
    console.log("click create");
    selectTagForm.style.display = "none";
    createTagForm.style.display = "block";
    document.getElementById("tag_check").value = "create";

    console.log(document.getElementById("tag_check").value);
};
