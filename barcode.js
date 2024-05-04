
document.addEventListener('DOMContentLoaded', function() {
    for(let i=0; i<12; i++) {
        document.body.appendChild(genererCarteCode());
    }


});

function genererCarteCode() {
    var section = document.createElement('section');
    section.className = 'carte';
    var h1 = document.createElement('h1');
    h1.textContent = 'Conso 🍫';
    var barcodeDiv = document.createElement('div');
    barcodeDiv.className = 'barcode';
    var table = document.createElement('table');
    table.className = 'infoCarte';
    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.textContent = 'Montant';
    var td2 = document.createElement('td');
    var tr2 = document.createElement('tr');
    var td3 = document.createElement('td');
    td3.textContent = 'Nom';
    var td4 = document.createElement('td');
    section.appendChild(h1);
    section.appendChild(barcodeDiv);
    section.appendChild(table);
    table.appendChild(tr1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    table.appendChild(tr2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
     
    let acode = new Code128();
    
    acode.code = Math.random().toString(36).substr(2, 7);
    acode.type = 'CODE128';
    acode.withtext = true;
    acode.xsize = 1.4;
    acode.ysize = 100;
    acode.xratio = 3.0;
    acode.xinter = 1;
    barcodeDiv.innerHTML= acode.draw();
    return section;
}