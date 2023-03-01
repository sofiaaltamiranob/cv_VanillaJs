

let esRosa  = true;
let verMasSid = false;
let verMasSab = false;
document.getElementById('nocturno').onclick = function (){
    if (esRosa == true) {
        let cantRosa = ((document.getElementsByClassName('rosa').length)-1)
        for (let i = 0; i< cantRosa ; i++) { 
            document.getElementsByClassName('rosa')[i].style.backgroundColor = '#000000';
        }
        document.body.style.backgroundColor = '#2e2a29';
        let cantH2 = (document.getElementsByTagName('h2').length);
        document.body.style.color = '#ffffff';
        for (let i = 0; i < cantH2; i++) {
            document.getElementsByTagName('h2')[i].style.color ='#ff7f50';
            console.log("done")
        }
        document.getElementById('logoUp').style.color ="#ff7f50"
        esRosa = false;
        console.log(esRosa);
    } else { return}
};

document.getElementById('claro').addEventListener('click',function (){
    if (esRosa == false) {
        let cantRosa = ((document.getElementsByClassName('rosa').length)-1)
        for (let i = 0; i< cantRosa ; i++) { 
            document.getElementsByClassName('rosa')[i].style.backgroundColor = '#ff7f50';
        }
        document.body.style.backgroundColor = '#ffffff';
        let cantH2 = (document.getElementsByTagName('h2').length);
        document.body.style.color = '#000000';
        for (let i = 0; i < cantH2; i++) {
            document.getElementsByTagName('h2')[i].style.color ='#000000';
            console.log("done");
        }
        document.getElementById('logoUp').style.color ="#000000"
        esRosa = true;
    } else {
        return
    }
});

document.getElementById('verSab').addEventListener('click', function(){
    if (verMasSab == false){
        document.getElementById('verMasSab').style.display = 'none';
        verMasSab = true;
        console.log(verMasSab);
    } else if (verMasSab == true) {
        document.getElementById('verMasSab').style.display = 'block';
        verMasSab = false;
        console.log(verMasSab);
    }
});

document.getElementById('verSid').addEventListener('click', function(){
    if (verMasSid == false){
        document.getElementById('verMasSid').style.display = 'none';
        verMasSid = true;
    } else if (verMasSid == true) {
        document.getElementById('verMasSid').style.display = 'block';
        verMasSid = false;

    }
})
