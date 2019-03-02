let mailData = [
    {
        from : "David James",
        date : "2018-01-05",
        title : "qwerqwer",
        text : "asdfsadfadfsdf",
        tag : "sales",
        img : "red",
    },{
        from : "1452",
        date : "2018-01-08",
        title : "gsdbjdksfk",
        text : "adkeikdiekdj djfhskjdfskf akdhfdsafls",
        tag : "",
        img : "blue",
    },
    {
        from : "urjnffjemd",
        date : "2018-02-26",
        title : 'sdjfsdf',
        text : "Dfsfds sdfs sadfadfsdf",
        tag : "",
        img : "salmon",
    },{
        from : "David James",
        date : "2018-03-02",
        title : "sjflksjdflk sdfsf",
        text : "asdfsadfadfsdf",
        tag : "marketing",
        img : "red",
    },
    {
        from : "uejdf James",
        date : "2018-04-09",
        title : "qwerqwer",
        text : "asdfsadfadfsdf",
        tag : "sales",
        img : "black",
    },{
        from : "olkfnjlffkf",
        date : "2018-05-14",
        title : "gsdbjdksfk",
        text : "adkeikdiekdj djfhskjdfskf akdhfdsafls",
        tag : "",
        img : "yellow",
    },
    {
        from : "dikcj",
        date : "2018-06-20",
        title : 'sdjfsdf',
        text : "Dfsfds sdfs sadfadfsdf",
        tag : "frontend",
        img : "green",
    },{
        from : "David James",
        date : "2018-03-02",
        title : "sjflksjdflk sdfsf",
        text : "asdfsadfadfsdf",
        tag : "design",
        img : "red",
    },
]


// 사이드 바 클릭 이벤트 리스너 등록
let clickSidebarIndex = document.querySelector(".sidebar-list");
let sidebarFlag = false;
let currentContent = 'index-inbox';
let theContent = document.getElementById('content');
clickSidebarIndex.addEventListener('click',function(e){
    if(sidebarFlag) document.querySelector(".selected-list-index").className = "list-index";
    document.getElementById(e.target.id).className = "selected-list-index";
    sidebarFlag = true;

    currentContent = e.target.id;
    let theContentContainer = document.getElementById('content-container');
    let theIndexTitle = document.getElementById('index-title');
    
    console.log(theContent);
    theContentContainer.removeChild(document.getElementById('content'));
    switch(currentContent){
        case 'index-home' :
            let home = document.createElement("div");
            home.setAttribute("id","content");
            home.textContent = "jkdsl";
            theContentContainer.appendChild(home);
            break;
        case 'index-customers' :
            let customers = document.createElement("div");
            customers.setAttribute("id","content");
            customers.textContent = "customers";
            theContentContainer.appendChild(customers);
            break;
        case 'index-inbox' :
            theContentContainer.appendChild(theContent);
            break;
        case 'index-settings' :
            let settings = document.createElement("div");
            settings.setAttribute("id","content");
            settings.textContent = "settings";
            theContentContainer.appendChild(settings);
            break;
    }
});

// 태그 수 카운트
let numTag = {};
for(let i in mailData){
    let tag = mailData[i].tag;
    numTag[tag] = numTag[tag]? numTag[tag]+1 : 1;
}
document.getElementById('number-sales').textContent = numTag.sales;
document.getElementById('number-marketing').textContent = numTag.marketing;
document.getElementById('number-design').textContent = numTag.design;
document.getElementById('number-frontend').textContent = numTag.frontend;


// 메일 리스트 
for(let i in mailData){
    let mailContent = document.createElement("li");
    mailContent.setAttribute("class","message-content");
    mailContent.setAttribute("id",i);

    let mailTag = document.createElement("div");
    mailTag.setAttribute("class","mail-tag-list");
    mailTag.setAttribute("id",i+"Tag");

    document.getElementById("message-list").appendChild(mailContent);
    mailContent.appendChild(mailTag);

    let tagColor = document.getElementById(i+"Tag");
    console.log(tagColor);
    switch(mailData[i].tag){
        case "sales" : 
            tagColor.className += '-sales';
            break;
        case "marketing" :
            tagColor.className += '-marketing';
            break;
        case "design" :
            tagColor.className += '-design';
            break;
        case "frontend" :
            tagColor.className += '-frontend';
            break;
    }
    console.log(tagColor.className);

    let container = document.createElement("div");
    mailContent.appendChild(container);
    container.style.display = 'inline-block';
    container.style.position = 'relative';

    let mailName = document.createElement("span");
    mailName.setAttribute("class","name");
    mailName.textContent = mailData[i].from;

    let mailDate = document.createElement("span");
    mailDate.setAttribute("class","date");
    mailDate.textContent = mailData[i].date;

    let mailTitle = document.createElement("div");
    mailTitle.setAttribute("class","title");
    mailTitle.textContent = mailData[i].title;

    
    container.appendChild(mailName);
    container.appendChild(mailTitle);
    mailContent.appendChild(mailDate);

    
}

// 메일 리스트 클릭 이벤트 리스너
let selectMessageContent = document.querySelector('#message-list');
let messageFlag = false;
selectMessageContent.addEventListener('click', function(e) {
    if(messageFlag) document.querySelector(".selected-message-content").className = "message-content";
    document.getElementById(e.target.id).className = "selected-message-content";
    messageFlag = true;

    let theUserBox = document.getElementById("user");
    let theUpperBox = document.querySelector("#user .upper-box");
    let theLowerBox = document.querySelector("#user .lower-box");

    theUserBox.removeChild(theUpperBox);
    theUserBox.removeChild(theLowerBox);

    let upperBox = document.createElement("div");
    upperBox.setAttribute("class", "upper-box");
    
    if(mailData[e.target.id].tag !== ''){
        let theTag = document.createElement("div");
        theTag.setAttribute("id", mailData[e.target.id].tag);
        theTag.textContent = mailData[e.target.id].tag;
        upperBox.appendChild(theTag);
    }

    let theTitle = document.createElement("span");
    theTitle.setAttribute("id","title");
    theTitle.textContent = mailData[e.target.id].title;
    upperBox.appendChild(theTitle);

    theUserBox.appendChild(upperBox);
    
    let lowerBox = document.createElement("div");
    lowerBox.setAttribute("class", "lower-box");

    let theImg = document.createElement("div");
    theImg.setAttribute("id","img");
    theImg.style.backgroundColor = mailData[e.target.id].img;
    lowerBox.appendChild(theImg);

    let theName = document.createElement("span");
    theName.setAttribute("id","name");
    theName.textContent = mailData[e.target.id].from;
    lowerBox.appendChild(theName);

    let theDate = document.createElement("span");
    theDate.setAttribute("id","date");
    theDate.textContent = mailData[e.target.id].date;
    lowerBox.appendChild(theDate);

    let to = document.createElement("div");
    to.setAttribute("id","to");
    to.textContent = "to me";
    lowerBox.appendChild(to);

    theUserBox.appendChild(lowerBox);
    
    let theTextBox = document.getElementById("text");
    let theTextContent = document.querySelector("#text #content");
    theTextBox.removeChild(theTextContent);
    
    let theText = document.createElement("p");
    theText.setAttribute("id","content");
    theText.textContent = mailData[e.target.id].text;

    theTextBox.appendChild(theText);
});


// 메일 리스트 검색
function filterIt(arr, searchKey){
    return arr.filter(function(obj){
        return Object.keys(obj).some(function(key){
            return obj[key].includes(searchKey);
        })
    });
}

console.log(filterIt(mailData, 'david'));