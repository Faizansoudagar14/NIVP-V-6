

window.onload = function () {
    document.getElementById('myMenu').style.display = 'none';
}

var text = document.getElementById("myMenu").innerHTML;
function myFunction() {
    if (document.getElementById("mySearch").value.trim().length == 0) {
        document.getElementById('myMenu').style.display = 'none';
        return;
    }
    document.getElementById('subQuery').style.display = "none";
    document.getElementById('myMenu').style.display = "block";
    var arrDis = [];
    document.getElementById("myMenu").innerHTML = text;
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    for (i = 0; i < li.length; i++) {
        arrDis.push(li[i].style.display == 'none');
    }
    if (arrDis.includes(true) && !arrDis.includes(false)) {
        document.getElementById('subQuery').style.display = 'block';
    }
}
function search(e) {
    let searched = document.getElementById("mySearch").value.trim();
    if (searched.length < 3) {
        swal({
            title: "Your search does not meet the minimum allowed highlight search size of 3 characters. Please try again with a longer search to highlight your search.",
            text: "",
            icon: "warning",
            button: "OK",
        });
        return;
    }
    if (searched !== "") {
        let text = document.getElementById("myMenu").innerHTML;
        let re = new RegExp(searched, "gi"); // search for all instances
        let newText = text.replace(re, `<mark>${searched}</mark>`);
        document.getElementById("myMenu").innerHTML = newText;
    }

}



