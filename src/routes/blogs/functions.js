import {route} from 'preact-router';
function nextPage(currPage ,totalPage, url){

        if(currPage == totalPage-1){
                alert("this is the last page!");
                return;
            }
        var destPage = Number(currPage)+1;
        var destUrl = url.concat(destPage.toString());
        console.log(destUrl);
        route(destUrl);    
    
}

function prePage(currPage , url){

        if(currPage == 0){
            alert("this is the first page!");
            return;
        }
        var destPage = Number(currPage)-1;
        var destUrl = url.concat(destPage.toString());
        console.log(destUrl);
        route(destUrl);    
}

function toPage(destPage, totalPage , url){
        if(destPage < 0 || destPage >= totalPage){
            alert("page "+destPage+" isn't exist!");
            return;
        }
        var destUrl = url.concat(destPage.toString());
        console.log(destUrl);
        route(destUrl);    
}


export {nextPage , prePage, toPage};