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
        }
        Hastoattend.textContent+= attend+" Lectures";
        canmiss.textContent+= miss + " Lectures";
    }

    
}
