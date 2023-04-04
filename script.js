var pageNo=[".container",".pageOne",".pageTwo",".skills",".pageThree",".pageFour",".final"];
let iname=[];
let deg=[];
let grade=[];
let skills=[];
let exp=[];
var pageCount=0;
var eduCount=0;
var skillCount=0;
function start(){
    $(pageNo[a]).hide();
    a++;
    $(pageNo[a]).show();
}
a=0;
function nextPage(){
    $(pageNo[a]).hide();
    a++;
    $(pageNo[a]).show();
    if(a==pageNo.length-1){
        $(pageNo[a]).hide();
        $('.resume').show();
    }
}

function addEdu(){
    try{
        iname[eduCount]=document.forms['form1']['iname'].value;
        deg[eduCount]=document.forms['form1']['deg'].value;
        grade[eduCount]=document.forms['form1']['grade'].value;
    }
    catch{
        console.log('ERROR OCCURED');
    }
    eduCount++;
    // console.log(eduCount);
    // console.log(iname[eduCount]);
    // console.log(deg[eduCount]);
    // console.log(grade[eduCount]);
    $('.form2')[0].reset();
}

function addProject(){
    $('.form3')[0].reset();
    $('textarea').val('');
} 
function addExp(){
    $('.form4')[0].reset();
    $('textarea').val('');
}
function addSkill(){
    $('.sform')[0].reset();
}