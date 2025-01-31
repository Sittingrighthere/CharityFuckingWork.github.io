const body = document.getElementsByTagName("BODY")[0];
const formField = document.getElementById('formField');
const fieldExcludeList = ['scREVA','scLEVA','ccREVA','ccLEVA','rSph','rCyl','rAxi','rAdd','rPrism','rfVA','rnVA','rMEM','lSph','lCyl','lAxi','lAdd','lPrism','lfVA','lnVA','lMEM','rSKiasNondil','lSKiasNondil','rSKiasdil','lSKiasdil','rPres','lPres'];


const createInput = ((parent,type,id,name, ...tags) => {
    if (fieldExcludeList.indexOf(id)!==-1||type=='checkbox') {
        
    } else {
        const label = document.createElement('label')
        label.innerHTML = id;
        label.htmlFor = id;
        label.id = id + 'Label';
        parent.appendChild(label); 
    }

    const input = document.createElement('input')
    input.type = type;
    input.id = id;
    input.name = name;
    tags.forEach(tag => {
        const tagSplit = tag.split(":") 
        input.setAttribute(tagSplit[0],tagSplit[1])
    })
    parent.appendChild(input);

    if (type=='checkbox') {
        const label = document.createElement('label')
        label.innerHTML = id;
        label.htmlFor = id;
        label.id = id + 'Label';
        parent.appendChild(label);
    }
});

const createDIV = ((parent,type,innerText,id, ...tags) => {
    const DIV = document.createElement(type)
    DIV.innerHTML=innerText;
    DIV.id = id;
    tags.forEach(tag => {
        const tagSplit = tag.split(":") 
        DIV.setAttribute(tagSplit[0],tagSplit[1])
    })
    parent.appendChild(DIV);
});

const createMultiInput = ((parent,type,id,name, ...choices) => {
    const label = document.createElement('label')
    label.innerHTML = id;
    label.htmlFor = id;
    parent.appendChild(label);
    
    choices.forEach(choice => {
        const choiceLabel = document.createElement('label')
        choiceLabel.innerHTML = choice;
        choiceLabel.htmlFor = choice;
        const choiceInput = document.createElement('input')
        choiceInput.type = type;
        choiceInput.id = choice;
        choiceInput.name = name;
        parent.appendChild(choiceLabel);
        parent.appendChild(choiceInput);
        }) 
});

const addForm = (() => {
    const form = document.createElement('form');
    const fieldBoxes = document.createElement('fieldset');
    const PI = document.createElement('fieldset');
    const entranceTest = document.createElement('fieldset');
    const objectiveTesting = document.createElement('fieldset');
    const subjectiveTesting = document.createElement('fieldset');
    const prescription = document.createElement('fieldset');
    const submitBtn = document.createElement('button');
    
    fieldBoxes.id = 'fieldBoxes';
    PI.id = 'PI';
    entranceTest.id = 'entranceTest';
    objectiveTesting.id = 'objectiveTesting';
    subjectiveTesting.id = 'subjectiveTesting';
    prescription.id = 'prescription';
    submitBtn.id = 'submitBtn';
    
    form.setAttribute('method','post');
    form.setAttribute('action','https://script.google.com/macros/s/AKfycbyDoaOkNIBoeGc0bAB6eso0FyEkuirxiTT4K5Yykhk/dev');
    submitBtn.setAttribute('type','submit')
    submitBtn.innerHTML= 'submit';
    
    
    body.appendChild(form);
    form.appendChild(PI);
    form.appendChild(fieldBoxes);
    form.appendChild(entranceTest);
    form.appendChild(objectiveTesting);
    form.appendChild(subjectiveTesting);
    form.appendChild(prescription);
    form.appendChild(submitBtn);
    
    createInput(fieldBoxes,'checkbox','Thị lực','entranceTestCheck','onclick:checkField("Thị lực","entranceTest")')
    createInput(fieldBoxes,'checkbox','Skiascopy','objectiveTestingCheck','onclick:checkField("Skiascopy","objectiveTesting")','checked')
    createInput(fieldBoxes,'checkbox','Khúc xạ chủ quan','subjectiveTestingCheck','onclick:checkField("Khúc xạ chủ quan","subjectiveTesting")')
    createInput(fieldBoxes,'checkbox','Đơn kính','prescriptionCheck','onclick:checkField("Đơn kính","prescription")')

    createInput(PI,'text','PID','PID');
    createInput(PI,'date','DOB','DOB');

    createDIV(entranceTest,'legend','Thị lực','entranceLegend');
    createDIV(entranceTest,'div','','blankGrid','class:entranceTestGrid');
    createDIV(entranceTest,'div','Không kính','Không kính','class:entranceTestGrid');
    createDIV(entranceTest,'div','Có kính','Có kính','class:entranceTestGrid');
    createDIV(entranceTest,'div','Mắt phải','Mắt phải','class:entranceTestGrid');
    createInput(entranceTest,'number','scREVA','scREVA','class:entranceTestGrid','step:0.5');
    createInput(entranceTest,'number','ccREVA','ccREVA','class:entranceTestGrid','step:0.5');
    createDIV(entranceTest,'div','Mắt trái','Mắt trái','class:entranceTestGrid');
    createInput(entranceTest,'number','scLEVA','scLEVA','class:entranceTestGrid','step:0.5');
    createInput(entranceTest,'number','ccLEVA','ccLEVA','class:entranceTestGrid','step:0.5');
    
    createDIV(objectiveTesting,'legend','Skiascopy','objectiveLegend');
    createDIV(objectiveTesting,'div','','blankGrid','class:objTestGrid');
    createDIV(objectiveTesting,'div','Không liệt điều tiết','Không liệt điều tiết','class:objTestGrid');
    createDIV(objectiveTesting,'div','Liệt điều tiết','Liệt điều tiết','class:objTestGrid');
    createDIV(objectiveTesting,'div','Mắt phải','Mắt phải','class:objTestGrid');
    createInput(objectiveTesting,'text','rSKiasNondil','rSKiasNondil','class:objTestGrid');
    createInput(objectiveTesting,'text','rSKiasdil','rSKiasdil','class:objTestGrid');
    createDIV(objectiveTesting,'div','Mắt trái','Mắt trái','class:objTestGrid');
    createInput(objectiveTesting,'text','lSKiasNondil','lSKiasNondil','class:objTestGrid');
    createInput(objectiveTesting,'text','lSKiasdil','lSKiasdil','class:objTestGrid');


    createDIV(subjectiveTesting,'legend','Khúc xạ chủ quan','subjectiveLegend');
    createDIV(subjectiveTesting,'div','','blankGrid','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Cầu','Cầu','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Trụ','Trụ','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Trục','Trục','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Add','Add','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Thị lực xa','Thị lực xa','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Thị lực gần','Thị lực gần','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Lăng Kính','Lăng Kính','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Mắt phải','Mắt phải','class:subTestGrid');
    createInput(subjectiveTesting,'number','rSph','rSph','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rCyl','rCyl','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rAxi','rAxi','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rAdd','rAdd','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rPrism','rPrism','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rfVA','rfVA','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rnVA','rnVA','class:subTestGrid resultGrid','step:0.25');
    createDIV(subjectiveTesting,'div','Mắt trái','Mắt trái','class:subTestGrid');
    createInput(subjectiveTesting,'number','lSph','lSph','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lCyl','lCyl','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lAxi','lAxi','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lAdd','lAdd','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lPrism','lPrism','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lfVA','lfVA','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lnVA','lnVA','class:subTestGrid','step:0.25');
      
    createDIV(prescription,'legend','Đơn kính','prescriptionLegend');
    createDIV(prescription,'div','Mắt phải','Mắt phải','class:prescriptionGrid');
    createInput(prescription,'text','rPres','rPres','class:prescriptionGrid');
    createDIV(prescription,'div','Mắt trái','Mắt trái','class:prescriptionGrid');
    createInput(prescription,'text','lPres','lPres','class:prescriptionGrid');
    
})();

// const setTwoNumberDecimal = (() => {
//     const number = document.getElementsByClassName('resultGrid');
//    number.onchange(console.log(1))
//    number.value = parseFloat(number.value).toFixed(2);
// })();

const checkField = ((checkboxName,fieldName) => {
    const checkBox = document.getElementById(checkboxName);
    const checkField = document.getElementById(fieldName);

    if (checkBox.checked == true) {
        checkField.style.display = "flex";
    } else {
        checkField.style.display = "none";
    };
});

const tranferFromObj = ((side,skias) => {
    if (side=='right') {
        const Sph = document.getElementById('rSph');
        const Cyl = document.getElementById('rCyl');
        const Axi = document.getElementById('rAxi');
        const Prescription = document.getElementById('rPres');
        const skiasSplit = skias.split(/[/x]/);
        Sph.value = skiasSplit[0];
        Cyl.value = skiasSplit[1];
        Axi.value = skiasSplit[2];
        Prescription.value=skias;
    } else {
        const Sph = document.getElementById('lSph');
        const Cyl = document.getElementById('lCyl');
        const Axi = document.getElementById('lAxi');
        const Prescription = document.getElementById('lPres');
        const skiasSplit = skias.split(/[/x]/);
        Sph.value = skiasSplit[0];
        Cyl.value = skiasSplit[1];
        Axi.value = skiasSplit[2];
        Prescription.value=skias;
    }
});

const tranferFromSubj = ((side,Sph,Cyl,Axi) => {
    if (side=='right') {
        const rPrescription = document.getElementById('rPres');
        rPrescription.value = (Sph + '/' + Cyl + 'x' + Axi);
    } else {
        const lPrescription = document.getElementById('lPres');
    }
});

const autoTrasferFromObj = (() => {
    const rSkiasNondil = document.getElementById('rSKiasNondil');
    const lSkiasNondil = document.getElementById('lSKiasNondil');
    const rSkiasdil = document.getElementById('rSKiasdil');
    const lSkiasdil = document.getElementById('lSKiasdil');
    rSkiasNondil.onchange = () => tranferFromObj('right',rSkiasNondil.value);
    lSkiasNondil.onchange = () => tranferFromObj('left',lSkiasNondil.value);
    rSkiasdil.onchange = () => tranferFromObj('right',rSkiasdil.value);
    lSkiasdil.onchange = () => tranferFromObj('left',lSkiasdil.value);
})();

const autoTrasferFromSubj = (() => {
    const rSph = document.getElementById('rSph');
    const rCyl = document.getElementById('rCyl');
    const rAxi = document.getElementById('rAxi');
    const lSph = document.getElementById('lSph');
    const lCyl = document.getElementById('lCyl');
    const lAxi = document.getElementById('lAxi');
    rSph.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    rCyl.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    rAxi.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    lSph.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
    lCyl.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
    lAxi.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
})();

const printResult = (() => {
    const submit = document.getElementById('submitBtn');
    submit.addEventListener('click', function() {
        if (document.getElementById('Thị lực').checked == false) {
            const checkField = document.getElementById('entranceTest');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('entranceTest');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('Skiascopy').checked == false) {
            const checkField = document.getElementById('objectiveTesting');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('objectiveTesting');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('Khúc xạ chủ quan').checked == false) {
            const checkField = document.getElementById('subjectiveTesting');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('subjectiveTesting');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('Đơn kính').checked == false) {
            const checkField = document.getElementById('prescription');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('prescription');
            checkField.style.display = "inline-block";
        };
        submitBtn = document.getElementById('submitBtn')
        submitBtn.style.display = "none";
        window.print();
    })
})();