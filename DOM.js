let selectSidebar = document.querySelector('.sidebar-list');
selectSidebar.addEventListener('click', function(event) {
    document.getElementsByClassName('list-index-selected').className = 'list-index';
    document.getElementById(event.target.id).className = "list-index-selected";
});

let selectMessageContent = document.querySelector('message-list');
selectMessageContent.addEventListener('click', function(event) {
    document.getElementById(event.target.id).className = "message-list-selected";
});