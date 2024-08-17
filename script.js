function display() {
    let tLec = Number(document.getElementById("tLec").value); 
    let tAtt = Number(document.getElementById("tAtt").value); 
    let rAtt = Number(document.getElementById("rAtt").value);

    let resAtt = document.getElementById("resAtt");
    let absent = document.getElementById("absent");
    let status = document.getElementById("status");
    let canmiss = document.getElementById("canMiss");
    let Hastoattend = document.getElementById("attend");

    resAtt.textContent='Attendence :';
    absent.textContent ='Absent :';
    status.textContent='Status :';
    canmiss.textContent='Can miss:';
    Hastoattend.textContent='Has to attend :'; 

    let a= (tAtt/tLec)*100;
    let attendence= a.toPrecision(2);
    console.log(attendence);

    if(tAtt>tLec){
        alert("Total attended can't be greater than Total lectures");
    }
    
    else if (attendence > rAtt) {
        let attend=0;
        let miss=0;
        resAtt.textContent += attendence + '%';
        absent.textContent += tLec - tAtt + ' Lectures';

        while (attendence > rAtt) {
            miss +=1;
            tLec++;
            tAtt++;
            tAtt--;
            attendence = [(tAtt) / tLec] * 100;
            console.log(tLec);
            console.log(miss);
            console.log(attendence);
        }
        miss-=1;
        status.textContent += 'High';
        canmiss.textContent+=miss + " Lectures";
        Hastoattend.textContent+= attend+" Lectures";
   
    } 
    
    else if (rAtt === attendence) {
        let attend=0;
        let miss=0;
        resAtt.textContent += attendence + '%';
        absent.textContent += tLec - tAtt + ' Lectures';
        status.textContent += 'On edge';
        canmiss.textContent+=miss + " Lectures";
        Hastoattend.textContent+= attend+" Lectures";
    } 
    
    else if (rAtt > attendence)
    {
        let attend=0;
        let miss=0;
        resAtt.textContent += attendence + '%';
        absent.textContent += tLec - tAtt + ' Lectures';
        status.textContent += 'Low';

        
        while (attendence < rAtt) {
            attend +=1;
            tLec++;
            tAtt++;
            tAtt--;
            attendence = [(tAtt + attend) / tLec] * 100;
            console.log(tLec);
            console.log(attend);
            console.log(attendence);
    
        }
        Hastoattend.textContent+= attend+" Lectures";
        canmiss.textContent+= miss + " Lectures";
    }

    
}

function display2(){
    let tLec2 = Number(document.getElementById("tLec2").value);
    let rAtt2 = Number(document.getElementById("rAtt2").value);
    let canmiss2 = document.getElementById("canMiss2");
    let Hastoattend2 = document.getElementById("attend2");
    let hastoatt2=tLec2*(rAtt2/100)
    let miss2=tLec2-hastoatt2
    console.log(hastoatt2, miss2)
    canmiss2.textContent+= miss2 + " Lectures";
    Hastoattend2.textContent+= hastoatt2+" Lectures";
}

function cal1(){
    content=document.getElementById("content")
    content2=document.getElementById("content2")
    content2.style.display = "none";
    content.style.display = "";
}

function cal2(){
    content2=document.getElementById("content2")
    content=document.getElementById("content")
    content.style.display = "none";
    content2.style.display = "flex";
    console.log("cal2")
}

function profopt() {
    const pfpOpt = document.getElementById('pfpopt');
    pfpOpt.style.display = pfpOpt.style.display === 'block' ? 'none' : 'block';
}
