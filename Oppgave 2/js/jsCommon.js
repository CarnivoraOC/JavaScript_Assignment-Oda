//Dette scriptet holder alle cookie-relaterte funksjoner som ikke må initieres automatisk på en side

var days = 7;
var produktArray = [0, 0, 0, 0]; 
var tittel = ["fotball", "basketball", "tennisball", "volleyball"];
var bilde = ["bilder/fotball.jpeg", "bilder/basketball.jpeg", "bilder/tennisball.jpeg", "bilder/volleyball.jpeg"];
var pris = ["299 kr", "499 kr", "49 kr", "399 kr"];
var newProductArray = [];
var totalsum = 0;
var antVarer = 0;

function slettCookie(){ //Sletter cookien og kaller på resetAlle().
    var d = new Date();
    d.setDate(d.getDate() - days);
    var expires = ";expires="+d;
    var value = arrayToString();  
    document.cookie = "Produkt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    resetAlle();
}

function resetAlle(){ //Resetter totalsum, produkter i arrayet fra handlekurven og antall varer og oppdaterer siden.
    totalsum = 0;
    newProductArray = [0, 0, 0, 0];
    antVarer = 0;
    location.reload(); 
}
    
function lagCookie(){ //Lager cookie med navn "Produkt" og string fra arrayToString().
        var d = new Date();
        d.setDate(d.getDate() + days);
        var expires = ";expires="+d;
        var value = arrayToString();  
        document.cookie = "Produkt="+value+expires+";";
    }

function arrayToStringSlett(){ //Henter arrayet fra cookien og gjør det til string slik at vi kan søke etter den ved navn.
    produktArrayStringSlett = newProductArray.toString();
    return produktArrayStringSlett;
}

function arrayToString(){ //Henter array med antall av hvert produkt og gjør til string slik at cookie kan ta imot.
        produktArrayString = produktArray.toString();
        return produktArrayString;
    }

