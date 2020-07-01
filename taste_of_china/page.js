//Pagination
var currentPage = 1;
var pageRange = [1, 2, 3, 4];
pageOperation(currentPage);

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}
function pageOperation(currentPage) {
    let remainPage = pageRange;
    remainPage = arrayRemove(remainPage, currentPage);
    for (ele of remainPage) {
        if (
            document
                .getElementById("page" + ele.toString())
                .classList.contains("page-active")
        ) {
            document
                .getElementById("page" + ele.toString())
                .classList.remove("page-active");
        }
        if (
            document
                .getElementById("pagination" + ele.toString())
                .classList.contains("pagination-active")
        ) {
            document
                .getElementById("pagination" + ele.toString())
                .classList.remove("pagination-active");
        }
    }
    var currentPageID = document.getElementById(
        "page" + currentPage.toString()
    );
    var currentPaginationID = document.getElementById(
        "pagination" + currentPage.toString()
    );
    console.log(currentPaginationID);
    currentPageID.classList.add("page-active");
    currentPaginationID.classList.add("pagination-active");
}
function previousPage() {
    currentPage -= 1;
    if (currentPage == 0) {
        currentPage = 4;
    }
    pageOperation(currentPage);
}
function nextPage() {
    currentPage += 1;
    if (currentPage == 5) {
        currentPage = 1;
    }
    pageOperation(currentPage);
}
function pageOne() {
    currentPage = 1;
    pageOperation(currentPage);
}
function pageTwo() {
    currentPage = 2;
    pageOperation(currentPage);
}
function pageThree() {
    currentPage = 3;
    pageOperation(currentPage);
}
function pageFour() {
    currentPage = 4;
    pageOperation(currentPage);
}
