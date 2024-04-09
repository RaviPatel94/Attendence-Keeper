
function display() {
    let tLec = document.getElementById("tLec").value;
    let tAtt = document.getElementById("tAtt").value;
    let rAtt = document.getElementById("rAtt").value;
    let resAtt = document.getElementById("resAtt");
    let absent = document.getElementById("absent");
    let status = document.getElementById("status");
    let canmiss = document.getElementById("canMiss");
    let Hastoattend = document.getElementById("attend");
    let a= (tAtt/tLec)*100;
    let attendence= a.toPrecision(2);
    console.log(attendence);
    resAtt.textContent += attendence + '%';
    absent.textContent += tLec - tAtt + ' Lectures';
    
    if (attendence > rAtt) {
        let attend=0;
        let miss=0;

        while (attendence > rAtt) {
            miss +=1;
            tLec++;
            tAtt++;
            tAtt--;
            attendence = [(tAtt) / tLec] * 100;
        }

        status.textContent += 'High';
        canmiss.textContent+=miss + " Lectures";
        Hastoattend.textContent+= attend+" Lectures";
   
    } 
    
    else if (rAtt === attendence) {
        let attend=0;
        let miss=0;
        status.textContent += 'On edge';
        canmiss.textContent+=miss + " Lectures";
        Hastoattend.textContent+= attend+" Lectures";
    } 
    
    else if (rAtt > attendence)
    {
        let attend=0;
        let miss=0;
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
