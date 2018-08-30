//Je cache les deux div selectable par defaut

document.getElementById('zoneCache1').style.display = "none";
document.getElementById('zoneCache2').style.display = "none";

//J'enlève la couleur blue autour les boutons par defaut

var cible1 = document.getElementById("cible1");
var cible2 = document.getElementById("cible2");
cible1.classList.remove("selected");
cible2.classList.remove("selected");

//faire apparaître la zone b2b

function b2b()
{
    var cible2 = document.getElementById("cible2");
    cible2.classList.remove("selected");
    var x = document.getElementById('zoneCache1');
    var y = document.getElementById('zoneCache2');
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
        y.style.display = "none";
    }
}

//faire apparaître la zone b2c

function b2c()
{
    var cible1 = document.getElementById("cible1");
    cible1.classList.remove("selected");
    var x = document.getElementById('zoneCache1');
    var y = document.getElementById('zoneCache2');
    if (y.style.display === "block")
    {
        y.style.display = "none";
    }
    else
    {
        y.style.display = "block";
        x.style.display = "none";
    }
}

//je compte les mots dans l'input

function count()
{

    i = 0;
    while (i<2)
    {
        var total=document.getElementById("text"+i).value;
        total=total.replace(/(^\s*)|(\s*$)/gi,"");
        total=total.replace(/[ ]{2,}/gi," ");
        total=total.replace(/\n /,"\n");
        document.getElementById("total"+i).innerHTML=(123-total.split(' ').length) +" mots";

        if ((123-total.split(' ').length) < 0)
        {
            document.getElementById("total"+i).style.color = "#ff0000";
        }
        else
        {
            document.getElementById("total"+i).style.color = "#0000ff";
        }
        if (total=document.getElementById("text"+i).value == '')
        {
            document.getElementById("total"+i).innerHTML='123 mots';
        }
        i++;
    }
}

//je garde le bouton du cible selectionné lorsqu'on choisi une sous-classe et j'éteins l'autre

function select()
{
    var cible1 = document.getElementById("cible1");
    var cible2 = document.getElementById("cible2");
    cible1.classList.add("selected");
    cible2.classList.remove("selected");           
}

//je garde le bouton du cible selectionné lorsqu'on choisi une sous-classe et j'éteins l'autre

function select2()
{
    var cible1 = document.getElementById("cible1");
    var cible2 = document.getElementById("cible2");
    cible2.classList.add("selected");
    cible1.classList.remove("selected");           
}

 
