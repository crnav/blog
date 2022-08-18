
var reallyDocumentTitle;
document.addEventListener('visibilitychange', function (event) {
    debugger
    if (event.target.hidden || event.target.webkitHidden) {
        reallyDocumentTitle = document.title
        document.title = '皮皮虾，快回来！'
    } else {
        document.title = reallyDocumentTitle
    }
}, false);
