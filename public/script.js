let length = 0;
let abbr = {
    'f':'Friends',
    'l':'Lovers',
    'a':'Affectionate',
    'm':'Marriage',
    'e':'Enemies',
    's':'Sisters'
};

function getId(elm)
{
    return document.getElementById(elm);
}

/* get the names */
let yourName = getId('name1');
let bf_Gf = getId('name2');
let okButton = getId('ok');
let clearButton = getId('clear');
let outputName1 = getId('name1_Output');
let outputGF_BFName = getId('name2_Output');
let rltionship = getId('relationShip');


function length_After_LettersRemoved(name1,name2)
{/* 
    console.log(name1,name2) */
    name1.forEach((v,i)=>{
        if(name2.indexOf(v) != -1)
        {
            index = name2.indexOf(v);
            name1[i] = '/';
            name2[index] = '/';            
        }
    })
    /* console.log(name1,name2) */
    //filter the array just remove 'o' this character
    name1 = name1.filter((v)=>
    {
        return v != '/';
    })
    name2 = name2.filter((v)=>{
        return v != '/';
    })
    //total length
    return name1.length + name2.length;
}

/* flames process begin*/
function flames()
{
    let arry = ['f','l','a','m','e','s'],count = 0, removedIndex = 0;
    for(let i = 0; i < arry.length; i++)
    {
        count++;
        if(arry.length == 1)
        {
            break;
        }
        /* console.log(count," index ",i) */
        if(count == length)
        {
            $('#'+arry[i]).fadeOut(2000);
            /* console.log(arry[i]); */
            arry[i] = '/';
            removedIndex = i;
            /* console.log(removedIndex) */
            arry = arry.filter((v)=>{return v != '/'});
            /* console.log(arry); */
            if(removedIndex == arry.length)
            {
                /* console.log(removedIndex,arry.length) */
                i = -1;
                count = 0;
            }
            else
            {
                i = removedIndex;
                count = 1;
            }
        }

        if(i == arry.length-1)
        {
            i = -1;
        } 
    }
    return arry[0];
}

//display a message on 'your relationship is'
function rltnshipMsg(rltn)
{
    let msg;
    switch(rltn)
    {
        case 'Marriage':
            msg = '<span>👫</span>'+' Your Both Going To Marraiage '+'<span>💑</span';
            break;
        case 'Friends':
            msg = '<span>👫</span>'+' Your Both Are Friends '+'<span>👭</span> <span>👬</span>';
            break;
        case 'Lovers':
            msg = '<span>😍</span> <span>💘</span> '+' Your Both Are Lovers '+'<span>💏</span> <span>💞</span>';
            break;
        case 'Enemies':
            msg = '<span>😈</span>'+' Your Both Are Enemies '+'<span>👿</span>';
            break;
        case 'Affectionate':
            msg = '<span>💖</span>'+' Your Both Are Affectionate '+'<span>👫</span>';
            break;
        case 'Sisters':
            msg = '<span>👭</span>'+' Your Both Are Sisters '+'<span>👫</span>'
            break;

    }
    rltionship.innerHTML = msg;
}

//display the output, here process begin
function display(nme1,nme2)
{
    //take smallest name length
    if(nme1.length < nme2.length)
    {
        length = length_After_LettersRemoved(nme1,nme2);
        /* console.log(abbr[flames()]);   */ 
        rltnshipMsg(abbr[flames()]);
    }
    if(nme1.length > nme2.length)
    {
        length = length_After_LettersRemoved(nme2,nme1);
        /* console.log(abbr[flames()]); */
        rltnshipMsg(abbr[flames()]);
    }
    /* if both names length same */
    if(nme1.length == nme2.length)
    {
        if(nme1.join('') == nme2.join(''))
        {
            rltionship.innerText = 'Sorry Both Names Are Same';
        }
        else{
            length = length_After_LettersRemoved(nme1,nme2);
            /* console.log(abbr[flames()]); */
            rltnshipMsg(abbr[flames()]);
        }
    }
}

function fadeinElements()
{
    for(let x in abbr)
    {
        $('#'+x).fadeIn(2000);
    }
    //
    outputName1.innerText = 'your name';
    outputGF_BFName.innerText = 'GF/BF name';
    rltionship.innerText = 'Your Both RelationShip';
}

okButton.addEventListener('click', () => {

    fadeinElements();
    
    /* check values enter or not */
    if(yourName.value != '' && bf_Gf.value != '')
    {
        //display names
        outputName1.innerText = yourName.value;
        outputGF_BFName.innerText = bf_Gf.value;

        //process
        nm1 = yourName.value.toLowerCase().trim().split('');
        nm2= bf_Gf.value.toLowerCase().trim().split('');
        display(nm1,nm2);
    }
    else{
        if(yourName.value =='' && bf_Gf.value =='')
        {
            alert('enter names');
            yourName.focus();
            fadeinElements();
        }
        else if(yourName.value =='')
        {
            alert('enter your name');
            yourName.focus();
            fadeinElements();
        }
        else if(bf_Gf.value =='')
        {
            alert('enter BF/GF name');
            bf_Gf.focus();
            fadeinElements();
        }
    }
})

clearButton.addEventListener('click', () => {
    yourName.value = '';
    bf_Gf.value = '';

    fadeinElements();
})