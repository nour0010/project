let x=document.getElementById("x-input");
let a=document.getElementById("a-input");
let b=document.getElementById("b-input");
let e=document.getElementById("e-input");
let btn=document.getElementById("btn");
let tbody=document.getElementById("tbody");
let btn2=document.getElementById("btn2");
let r;
let fa;
let fr;


function evaluateEquation(equation, x) {
    
    const parsedEquation = equation.replace(/x/g, x);

    try {
        
        return eval(parsedEquation);
    } catch (error) {
        console.error("خطأ في المعادلة المدخلة.");
        return NaN;
    }
}
btn.onclick=function()
{
    

    r = (+a.value + +b.value)/2;
    
    fa =evaluateEquation(x.value, a.value);
    

    fr=evaluateEquation(x.value, r);
let n=0;

while(Math.abs(fr)>=e.value)
{
n++;
r = (+a.value + +b.value)/2;



fa =evaluateEquation(x.value, a.value);



fr=evaluateEquation(x.value, r)

tbody.innerHTML+=`

           
            <tr>
                <td>${n}</td>
                <td>${a.value}</td>
                <td>${b.value}</td>
                <td>${r}</td>
                <td>${fa}</td>
                <td>${fr}</td>
            </tr>

`;

if(fa*fr>0)
    {
       a.value =r ;
    }
    else{
        b.value=r;
    }


}


}
btn2.onclick=function(){
    location.reload()
}