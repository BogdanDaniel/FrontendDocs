/**
 * Created by Bogdan.Barbu on 6/27/2017.
 */
var eL = [{
    firstN: 'John',
    lastN:'King',
    phone:'123444',
    salary:4500,
    euro:0,



},{
    firstN: 'Steven',
    lastN:'Gerard',
    phone:'133456',
    salary:4500,
    euro:0

},{
    firstN: 'Diana',
    lastN:'Loss',
    phone:'153457',
    salary:4500,
    euro:0

},{
    firstN: 'Mikey',
    lastN:'Bob',
    phone:'123336',
    salary:2000,
    euro:0

},{
    firstN: 'Ion',
    lastN:'Dumitru',
    phone:'123567',
    salary:300,
    euro:0

},{
    firstN: 'John',
    lastN:'Dumitru2',
    phone:'123542',
    salary:4500,
    euro:0

},{
    firstN: 'Johnin',
    lastN:'Bob',
    phone:'123987',
    salary:4500,
    euro:0

}];
var j=1;

var ind =0;
var numarul = 0;
var Nr = 0;
var n1=0,n2=0,n3=0,n4=0,n5=0;
var media =0;


function showList(){
    var abc = 0;
        var myTable = '<table  border="1"  class="table table-striped"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';

   getPrenume();
   getNume();
   getNumar();
   getMedia();

    var string4 = eL[ind].firstN;

        for (var i in eL) {

            var string = '<br><button onclick="conv('+i+')">ConvertEuro</button></br>';
            var string2 = '<br><button onclick="viz('+i+')">Vizualizare</button></br>';
            var string3 = '<br><button onclick="steg('+i+')">Stergere</button></br>';
            var numarul2 = numarul +1;
             string4 = eL[ind].firstN ;
             var string5 = n1 +","+ n2 +","+n3 +","+n4 +","+n5;


            myTable += '<tr><td>' + eL[i].firstN + '</td><td>' + eL[i].lastN + '</td><td>' + eL[i].phone + '</td><td>'+ eL[i].salary + string +'  </td><td>'+string2+'</td><td>'+string3+'</td></tr>';

               }
               myTable +='<tr><td>'+string4+'</td><td>'+numarul2+'</td><td>'+string5+'</td><td>'+media+'</td></tr>';


        myTable += '</table>';
        numarul = 0;
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;


}
var em = function(fN,lN,p,s,eu){
    this.firstN = fN;
    this.lastN = lN;
    this.phone = p;
    this.salary =s;
    this.euro = eu;
}
function addEm(){
    var fN=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    var euro = 0;
    eL.push(new em(fN,lastName,phone,salary,euro));
    showList()
}
function sum(){
    var sum=0 ;
    for(var i in eL)

   sum = sum + eL[i].salary;
    var container2 = document.getElementById('sumacontainer');
    container2.innerHTML = sum;
}

function delEm(){ eL.pop();
showList();}

function conv(i){

           eL[i].salary = (eL[i].salary/4.5);
    showList();
}
function viz(i){
   var string = eL[i].firstN + " " + eL[i].lastN + " " + eL[i].salary + " " + eL[i].phone;
    alert(string);
    showList();

}
function steg(i){

eL.splice(i,1);
    showList();
}
function getPrenume(){
    var num =0, max = 0,ind =0;
    for (var j=0;j<eL.length-1;j++){
        for(var t = j+1; t<eL.length;t++){
            if(eL[j].firstN == eL[t].firstN){
                num++;

            }
            if(num>max) {
                max = num;
                ind = j;
            }
            num =0 ;

        }
    }
}
function getNume() {
    var isUnic = 1; // true
    var q = 0;
    console.log(eL.length);
    console.log(numarul);
    for (var j = 0; j < eL.length - 1; j++) {
        for (var t = j + 1; t < eL.length; t++) {
            if (eL[j].lastN == eL[t].lastN){

                isUnic = 0;}
        }
        if (isUnic == 1){
            numarul++;
            }
        isUnic = 1;
    }
}
function getNumar() {
    var array = [0,0,0,0,0,0,0,0,0,0];
    var numa;
    var m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;
    /* numa = Number(eL[1].phone);
     console.log(numa);*/
    for (var j = 0; j < eL.length; j++) {

        for (var u = 0; u < 6; u++) {
            if (Number(eL[j].phone[u]) == 0)
                array[0]++;
            if (Number(eL[j].phone[u]) == 1){


                array[1]++;
                }
            if (Number(eL[j].phone[u]) == 2)
                array[2]++;
            if (Number(eL[j].phone[u]) == 3)
                array[3]++;
            if (Number(eL[j].phone[u]) == 4)
                array[4]++;
            if (Number(eL[j].phone[u]) == 5)
                array[5]++;
            if (Number(eL[j].phone[u]) == 6)
                array[6]++;
            if (Number(eL[j].phone[u]) == 7)
                array[7]++;
            if (Number(eL[j].phone[u]) == 8)
                array[8]++;
            if (Number(eL[j].phone[u]) == 9)
                array[9]++;
        }



        for (p = 0; p < 9; p++) {
            for (r = p + 1; r < 10; r++) {
                if (array[r] > m1) {
                    m1 = array[r];
                    n1=r;
                }
                if (array[r] < m1 && array[r] > m2) {
                    m2 = array[r];
                    n2=r;
                }
                if (array[r] < m2 && array[r] > m3){
                    m3 = array[r];
                n3=r;
            }
                if (array[r] < m3 && array[r] > m4){
                    m4 = array[r];
                    n4=r;
                }
                if (array[r] < m4 && array[r] > m5){
                    m5 = array[r];
                    n5=r;
                }

            }
        }



    }

}
function getMedia() {
    var sum =0;
    for (var j=0;j<eL.length;j++){
        sum += eL[j].salary;


    }
    media = sum/eL.length;
}
function sort1(a,b) {
    var aux;

    if (a > b){
        aux = b;
    b=a;
    a= aux;}

}
function SORT(){
    var sort = document.getElementById("sort").value;
    var aux;


    if(sort == 1){
    for(var j=0;j<eL.length-1;j++)
        for(var t=j+1;t<eL.length;t++)
            if (eL.[j].firstN.localeCompare(eL.[t].firstN)>1){
                aux = eL.[t].firstN;
                eL.[t].firstN=eL.[j].firstN;
                eL.[j].firstN= aux;}}
    if(sort == 2){
    for(var j=0;j<eL.length-1;j++)
        for(var t=j+1;t<eL.length;t++)
            if (eL.[j].lastN.localeCompare(eL.[t].lastN)>1){
                aux = eL.[t].lastN;
                eL.[t].lastN=eL.[j].lastN;
                eL.[j].lastN= aux;}
    }
    if(sort == 3){
        for(var j=0;j<eL.length-1;j++)
            for(var t=j+1;t<eL.length;t++)
                if (eL.[j].phone.localeCompare(eL.[t].phone)>1){
                    aux = eL.[t].phone;
                    eL.[t].phone=eL.[j].phone;
                    eL.[j].phone= aux;}
    }
    if(sort == 4){
        for(var j=0;j<eL.length-1;j++)
            for(var t=j+1;t<eL.length;t++)
                if (eL.[j].salary.localeCompare(eL.[t].salary)>1){
                    aux = eL.[t].salary;
                    eL.[t].salary=eL.[j].salary;
                    eL.[j].salary= aux;}
    }
showList();


}
