window.onload=function () {
    let title=document.getElementsByClassName('title')[0];
    let txt=document.getElementById('txt');
    let info=document.getElementById('info');
    let submi=document.getElementsByTagName('button')[0];
    let span=document.getElementsByClassName('num')[0];
    window.onkeyup=function (e) {
        // console.log(e.keyCode);
        console.log(title.value);
        let txtVal=txt.value.length;
        let num=0;
        num+=txtVal;
        span.innerHTML=num;
        // console.log(span.value);
    };
    submi.addEventListener('click',function () {
        if (txt.value!=''&&title.value!=''){
            let person=document.getElementsByClassName('personl')[0];
            let uls=document.getElementsByTagName('ul')[0];
            console.log(uls);
            uls.innerHTML=`
            <li>
                <img src="img/3c014d76335271b74510d8857e2f7892.png" alt="">
                <div class="personl">
                    <h3><span>来自于</span>${title.value}</h3>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;${txt.value}</p>
                </div>
            </li>
            `+uls.innerHTML;
            txt.value='';
            title.value='';
            let txtVal=txt.value.length;
            let num=0;
            num+=txtVal;
            span.innerHTML=num;

        }
    });
    window.onkeydown=function (e) {
        if (txt.value!=''&&title.value!=''){
            if (e.keyCode==13){
                let person=document.getElementsByClassName('personl')[0];
                let uls=document.getElementsByTagName('ul')[0];
                console.log(uls);
                uls.innerHTML=`
            <li>
                <img src="img/3c014d76335271b74510d8857e2f7892.png" alt="">
                <div class="personl">
                    <h3><span>来自于</span>${title.value}</h3>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;${txt.value}</p>
                </div>
            </li>
            `+uls.innerHTML;
                txt.value='';
                title.value='';
            }
        }
    };
};