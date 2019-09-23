window.addEventListener('load', init, false);

let filename = '';

function init() {
    document.getElementById('showPlan').addEventListener('change', loadFile, false);
    // document.getElementById('table_dis').style.display = 'none';
    // document.getElementById('showPlanVisor').style.display = 'none';
    // document.getElementById('log_display').style.display = 'none';
}

function loadFile(ev) {
    filename = ev.target.files[0].name;
    document.getElementById('dataFile').innerHTML	= 'Nombre del archivo: '+filename+'<br>'
                                                            + 'Tama\u00F1o del archivo: '+ev.target.files[0].size+' bytes';

    let fileRead = new FileReader();
    fileRead.addEventListener('load',readFile,false);
    fileRead.readAsText(ev.target.files[0]);

    document.getElementById('info_dis').style.display = 'none';
    // document.getElementById('table_dis').style.display = 'block';
    // document.getElementById('showPlanVisor').style.display = 'block';
}

function readFile(ev) {
    const lineas = ev.target.result.split("\n");
    var generalLog = new Array();

    for (var i = 0; i < lineas.length; i++) {

      if (!isNaN(lineas[i].substring(0,2))) {
        generalLog.push(lineas[i]);
      }
    }

    alert(generalLog.length);

    // for (var i = 0; i < 5; i++) {
    //   alert(generalLog[i]);
    // }

    document.getElementById('showPlanVisor').value = ev.target.result;

}
