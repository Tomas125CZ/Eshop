var mouseX = 0;
var mouseY = 0;

function hover(section = "", mainWebsite = false) {
    if(section === "playstation") {
        document.querySelector(":root").style.setProperty('--visibilityps', "visible");
    }
    if(section === "nintendo") {
        document.querySelector(":root").style.setProperty('--visibilitynt', "visible");
    }
    if(section === "xbox") {
        document.querySelector(":root").style.setProperty('--visibilityxb', "visible");
    }
    if(section === "pc") {
        document.querySelector(":root").style.setProperty('--visibilitypc', "visible");
    }
    if(!(mouseY >= 135 && mouseY <= 415)) {
        if(mainWebsite) document.getElementById("hoverBlocks").innerHTML = "<div class='sectionhoverblock playstations' onmouseenter=" + "hover('playstation')" + " onmouseleave=" + "unhover('playstation')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "images/hogwartslegacy.png" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+playstation+5+.,." + ">PlayStation 5</a><div class=" + "sectionpartlinks" + "><a href=" + "index2.html?search=search+playstation+5+game+.,." + ">Hry</a><a href=" + "index2.html?search=search+playstation+5+.,." + ">Konzole</a></div></div></div><div class=" + "sectionpart" + "><img src=" + "images/hogwartslegacydeluxe.jpeg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+playstation+4+.,." + ">PlayStation 4</a><div class="+ "sectionpartlinks" + "><a href=" + "index2.html?search=search+playstation+4+game+.,." + ">Hry</a><a href=" + "index2.html?search=search+playstation+4+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock nintendos' onmouseenter="+ "hover('nintendo')" + " onmouseleave=" + "unhover('nintendo')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "images/hogwartslegacynt.webp" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+nintendo+switch+.,." + ">Nintendo Switch</a><div class=" + "sectionpartlinks" + "><a href=" + "index2.html?search=search+nintendo+game+.,." + ">Hry</a><a href=" + "index2.html?search=search+nintendo+switch+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock xboxs' onmouseenter="+ "hover('xbox')" + " onmouseleave=" + "unhover('xbox')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "images/hogwartslegacyxbseries.png" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+XBOX+SERIES+.,." + ">Xbox Series</a><div class=" + "sectionpartlinks" + "><a href=" + "index2.html?search=search+xbox+game+.,." + ">Hry</a><a href=" + "index2.html?search=search+XBOX+SERIES+.,." + ">Konzole</a></div></div></div><div class=" + "sectionpart" + "><img src=" + "images/hogwartslegacyxbone.jpeg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+XBOX+ONE+.,." + ">Xbox One</a><div class=" + "sectionpartlinks" + "><a href=" + "index2.html?search=search+xbox+game+.,." + ">Hry</a><a href=" + "index2.html?search=search+XBOX+ONE+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock pcs' onmouseenter=" + "hover('pc')" + " onmouseleave=" + "unhover('pc')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" +"><img src=" + "images/starwarsjedi.jpg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "index2.html?search=search+PC+game+.,." + ">Hry</a><div class=" + "sectionpartlinks" + "><a href=" + "index2.html?search=search+PC+game+.,." + ">Hry</a></div></div></div></div></div>"
        else document.getElementById("hoverBlocks").innerHTML = "<div class='sectionhoverblock playstations' onmouseenter=" + "hover('playstation')" + " onmouseleave=" + "unhover('playstation')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "../images/hogwartslegacy.png" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+playstation+5+.,." + ">PlayStation 5</a><div class=" + "sectionpartlinks" + "><a href=" + "../index2.html?search=search+playstation+5+game+.,." + ">Hry</a><a href=" + "../index2.html?search=search+playstation+5+.,." + ">Konzole</a></div></div></div><div class=" + "sectionpart" + "><img src=" + "../images/hogwartslegacydeluxe.jpeg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+playstation+4+.,." + ">PlayStation 4</a><div class="+ "sectionpartlinks" + "><a href=" + "../index2.html?search=search+playstation+4+game+.,." + ">Hry</a><a href=" + "../index2.html?search=search+playstation+4+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock nintendos' onmouseenter="+ "hover('nintendo')" + " onmouseleave=" + "unhover('nintendo')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "../images/hogwartslegacynt.webp" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+nintendo+switch+.,." + ">Nintendo Switch</a><div class=" + "sectionpartlinks" + "><a href=" + "../index2.html?search=search+nintendo+game+.,." + ">Hry</a><a href=" + "../index2.html?search=search+nintendo+switch+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock xboxs' onmouseenter="+ "hover('xbox')" + " onmouseleave=" + "unhover('xbox')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" + "><img src=" + "../images/hogwartslegacyxbseries.png" + " alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+XBOX+SERIES+.,." + ">Xbox Series</a><div class=" + "sectionpartlinks" + "><a href=" + "../index2.html?search=search+xbox+game+.,." + ">Hry</a><a href=" + "../index2.html?search=search+XBOX+SERIES+.,." + ">Konzole</a></div></div></div><div class=" + "sectionpart" + "><img src=" + "../images/hogwartslegacyxbone.jpeg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+XBOX+ONE+.,." + ">Xbox One</a><div class=" + "sectionpartlinks" + "><a href=" + "../index2.html?search=search+xbox+game+.,." + ">Hry</a><a href=" + "../index2.html?search=search+XBOX+ONE+.,." + ">Konzole</a></div></div></div></div></div><div class='sectionhoverblock pcs' onmouseenter=" + "hover('pc')" + " onmouseleave=" + "unhover('pc')" + "><div class=" + "sectionmenu" + "><div class=" + "sectionpart" +"><img src=" + "../images/starwarsjedi.jpg" + "  alt="+"><div class=" + "sectionparttext" + "><a href=" + "../index2.html?search=search+PC+game+.,." + ">Hry</a><div class=" + "sectionpartlinks" + "><a href=" + "../index2.html?search=search+PC+game+.,." + ">Hry</a></div></div></div></div></div>"
    }
}

function saveToFile(content = "") {
    var kosikContent = localStorage.getItem("kosikContent");
    kosikContent += "%" + content;
    localStorage.setItem("kosikContent", kosikContent);
    loadCart();
}

function removeFromFile(content = "") {
    var kosikContent = localStorage.getItem("kosikContent");
    content = "%" + content.replaceAll("-", " ").trim();
    kosikContent = kosikContent.replace(content, "");
    localStorage.setItem("kosikContent", kosikContent);
    openWebsite("kosik.html");
}

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function openWebsite(website = "") {
    window.open(website, "_self");
}


function unhover(section = "") {
    if(section === "playstation") {
        document.querySelector(":root").style.setProperty('--visibilityps', "hidden");
    }
    if(section === "nintendo") {
        document.querySelector(":root").style.setProperty('--visibilitynt', "hidden");
    }
    if(section === "xbox") {
        document.querySelector(":root").style.setProperty('--visibilityxb', "hidden");
    }
    if(section === "pc") {
        document.querySelector(":root").style.setProperty('--visibilitypc', "hidden");
    }
    document.querySelector(":root").style.setProperty('--sectionmenu-width', "30%");
}

function resetRecommended(val = 0) {
    switch (val) {
        case 0: {
            document.querySelector(":root").style.setProperty('--recommendedps5', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedps5W', "normal");
            document.querySelector(":root").style.setProperty('--recommendedps5S', "19px");
            document.querySelector(":root").style.setProperty('--recommendedps5P', "5px");
        }
        case 1: {
            document.querySelector(":root").style.setProperty('--recommendedhl', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedhlW', "normal");
            document.querySelector(":root").style.setProperty('--recommendedhlS', "19px");
            document.querySelector(":root").style.setProperty('--recommendedhlP', "5px");
        }
        case 2: {
            document.querySelector(":root").style.setProperty('--recommendedxb', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedxbW', "normal");
            document.querySelector(":root").style.setProperty('--recommendedxbS', "19px");
            document.querySelector(":root").style.setProperty('--recommendedxbP', "5px");
        }
    }
}

var val = 0;

function load() {
    startRecommended();
    calcOffset(); 
    loadCart(true);
}

var price = 0;

function loadCart(isNormal = false) {
    loadPrice();
    if(isNormal) {
        if(price != 0) {
            document.getElementById("cart").innerHTML = "<a href='kosik.html'><img src='images/cart.png' alt='' class='shoppingcart'><div class = 'cartPrice'> " + price + " CZK</div></a>";   
        }
        else {
            document.getElementById("cart").innerHTML = "<a href='kosik.html'><img src='images/cart.png' alt='' class='shoppingcart'><div class = 'cartPrice'>Tvůj košík je prázdný</div></a>";   
        }
    }
    else {
        if(price != 0) {
            document.getElementById("cart").innerHTML = "<a href='../kosik.html'><img src='../images/cart.png' alt='' class='shoppingcart'><div class = 'cartPrice'> " + price + " CZK</div></a>";   
        }
        else {
            document.getElementById("cart").innerHTML = "<a href='../kosik.html'><img src='../images/cart.png' alt='' class='shoppingcart'><div class = 'cartPrice'>Tvůj košík je prázdný</div></a>";   
        }
    }
}

function loadPrice() {
    price = 0;
    var total = 26;
    var names = Array(total);
    var statuss = Array(total);
    var prize = Array(total);
    var images = Array(total);
    names[0] = "Hogwarts Legacy (PS5)";
    images[0] = "images/hogwartslegacy.png";
    prize[0] = "1899";
    statuss[0] = "Skladem";
    names[1] = "Transport Fever 2 Console Edition (PS4)";
    images[1] = "images/transportfever.jfif";
    prize[1] = "999";
    statuss[1] = "Není skladem";
    names[2] = "Clash Artifacts of Chaos Zeno Edition (XBOX)";
    images[2] = "images/clashartifactofchaos.jpg";
    prize[2] = "799";
    statuss[2] = "Není skladem";
    names[3] = "Monster Energy Supercross 6 (PS4)";
    images[3] = "images/monsterenergy.jfif";
    prize[3] = "1299";
    statuss[3] = "Není skladem";
    names[4] = "TRAIN LIFE: A RAILWAY SIMULATOR (SWITCH)";
    images[4] = "images/trainlife.jfif";
    prize[4] = "799";
    statuss[4] = "Není skladem";
    names[5] = "DC Justice League Cosmic Chaos (PS4)";
    images[5] = "images/dcjusticechaos.webp";
    prize[5] = "1299";
    statuss[5] = "Není skladem";
    names[6] = "Gamedec Definitive Edition (PS5)";
    images[6] = "images/gamedec.jfif";
    prize[6] = "899";
    statuss[6] = "Není skladem";
    names[7] = "DYSCHRONIA CHRONOS ALTERNATE (PS5)";
    images[7] = "images/dyschroniachronos.jfif";
    prize[7] = "999";
    statuss[7] = "Není skladem";
    names[8] = "Anno 1800 Console Edition (PS5)";
    images[8] = "images/anno1800.png";
    prize[8] = "999";
    statuss[8] = "Není skladem";
    names[9] = "WWE 2K23 (PS4)";
    images[9] = "images/wwe2k23.webp";
    prize[9] = "2399";
    statuss[9] = "Není skladem";
    names[10] = "PEPPA PIG: WORLD ADVENTURES (PS4)";
    images[10] = "images/peppapig.jfif";
    prize[10] = "1099";
    statuss[10] = "Není skladem";
    names[11] = "Hogwarts Legacy Deluxe (PS4)";
    images[11] = "images/hogwartslegacydeluxe.jpeg";
    prize[11] = "2099";
    statuss[11] = "Není skladem";
    names[12] = "PlayStation 5";
    images[12] = "images/playstation5.webp";
    prize[12] = "13490";
    statuss[12] = "Skladem";
    names[13] = "PLAYSTATION 5 + GOD OF WAR RAGNAROK";
    images[13] = "images/playstation5godofwar.webp";
    prize[13] = "15490";
    statuss[13] = "Skladem";
    names[14] = "PLAYSTATION 4 PRO";
    images[14] = "images/ps4pro.webp";
    prize[14] = "8290";
    statuss[14] = "Skladem";
    names[15] = "MINECRAFT: NINTENDO SWITCH EDITION (NINTENDO)";
    images[15] = "images/minecraftnintendo.png";
    prize[15] = "749";
    statuss[15] = "Skladem";
    names[16] = "THE LEGEND OF ZELDA: BREATH OF THE WILD (NINTENDO)";
    images[16] = "images/zeldanintendo.png";
    prize[16] = "1699";
    statuss[16] = "Skladem";
    names[17] = "FORZA HORIZON 5 (XBOX)";
    images[17] = "images/forzahorizonxbox.png";
    prize[17] = "1499";
    statuss[17] = "Skladem";
    names[18] = "MINECRAFT DUNGEONS ULTIMATE EDITION (XBOX)";
    images[18] = "images/minecraftdungeonsxbox.png";
    prize[18] = "699";
    statuss[18] = "Skladem";
    names[19] = "STAR WARS JEDI: SURVIVOR (PC)";
    images[19] = "images/starwarsjedi.jpg";
    prize[19] = "1799";
    statuss[19] = "Není skladem";
    names[20] = "COMPANY OF HEROES 3 LAUNCH EDITION METAL CASE (PC)";
    images[20] = "images/companyofheroes3.png";
    prize[20] = "1299";
    statuss[20] = "Skladem";
    names[21] = "FIFA 23 (PC)";
    images[21] = "images/fifa23.png";
    prize[21] = "1699";
    statuss[21] = "Skladem";
    names[22] = "NINTENDO SWITCH KONZOLE ČERVENÁ/MODRÁ";
    images[22] = "images/nintendoswitch.webp";
    prize[22] = "7190";
    statuss[22] = "Skladem";
    names[23] = "XBOX SERIES S 512 GB";
    images[23] = "images/xboxseriess.webp";
    prize[23] = "5990";
    statuss[23] = "Skladem";
    names[24] = "XBOX SERIES X 1 TB";
    images[24] = "images/xboxseriesx.webp";
    prize[24] = "10290";
    statuss[24] = "Skladem";
    names[25] = "XBOX ONE S 500GB";
    images[25] = "images/xboxone.webp";
    prize[25] = "4990";
    statuss[25] = "Skladem";
    var searched = localStorage.getItem("kosikContent");
    if(searched != null) {
        console.log(searched);
        for(var i = 0; i < searched.split("%").length; i++) {
            var s = searched.split("%")[i].trim().toUpperCase();
            for(var x = 0; x < total; x++) {
                var color = "green";
                if(statuss[x] === "Není skladem") color = "red";
                console.log(s);
                if(names[x].toUpperCase() === s) {
                    console.log("EQUALS");
                    price += Number(prize[x]);
                }
            }
        }
    }
    price = price.toLocaleString();
}

function calcOffset() {
    var biggest = 0;
    for(var i = 1; i < 6; i++) {
        var height = document.getElementById("of" + i).clientHeight;
        if(height > biggest) biggest = height;
    }
    document.querySelector(":root").style.setProperty('--biggestof', biggest + "px");
    for(var i = 1; i < 6; i++) {
        var height = document.getElementById("of" + i).clientHeight;
        document.querySelector(":root").style.setProperty('--of' + i, (biggest - height) + "px");
    }
}

window.addEventListener('resize', function() {
    calcOffset();
});


function setRecommended(value = -1) {
    val = value;
    changeRecommended();
}

function startRecommended() {
    val = 1;
    setInterval(changeRecommended, 2500);
}

function changeRecommended() {
    if(val > 2) val = 0;
    for(var i = 0; i < 3; i++) {
        resetRecommended(i);
    }
    if(val == 0) {
        document.querySelector(":root").style.setProperty('--recommendedps5', "white");
        document.querySelector(":root").style.setProperty('--recommendedps5W', "bold");
        document.querySelector(":root").style.setProperty('--recommendedps5S', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+playstation+5+.,.'><img src='images/ps5.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji<div class='recommendedUnderline'></div></p></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p><div class='recommendedUnderlineHide'></div></div></div>";
    }
    if(val == 1) {
        document.querySelector(":root").style.setProperty('--recommendedhl', "white");
        document.querySelector(":root").style.setProperty('--recommendedhlW', "bold");
        document.querySelector(":root").style.setProperty('--recommendedhlS', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+hogwarts+legacy+.,.'><img src='images/hogwartslegacy.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji</p><div class='recommendedUnderlineHide'></div></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p><div class='recommendedUnderline'></div></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p></div></div>";
    }
    if(val == 2) {
        document.querySelector(":root").style.setProperty('--recommendedxb', "white");
        document.querySelector(":root").style.setProperty('--recommendedxbW', "bold");
        document.querySelector(":root").style.setProperty('--recommendedxbS', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+xbox+series+.,.'><img src='images/xbox.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji</p></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p><div class='recommendedUnderlineHide'></div></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p><div class='recommendedUnderline'></div></div></div>";
    }
    val++;
}