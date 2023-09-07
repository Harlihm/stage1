const date =document.getElementById('date');
const time =document.getElementById('time');

function updateDateTime (){
    const now = new Date();
const options ={weekday: 'long'};

date.innerHTML='';
time.innerHTML='';


date.append(`${now.toLocaleDateString(undefined,options)}`);
time.append(`${now.getUTCHours()} :${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`);

}
setInterval(updateDateTime,1000);
