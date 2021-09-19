google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(obtenerdatos);


function obtenerdatos(){
    const separador = ',';
    const d = new google.visualization.DataTable();
    const c = new google.visualization.DataTable();
    const a = new google.visualization.DataTable();
    d.addColumn('string', 'Element');
    d.addColumn('number', 'Percentage');
    c.addColumn('string', 'Element');
    c.addColumn('number', 'Percentage');
    a.addColumn('string', 'Element');
    a.addColumn('number', 'Percentage');
    const texto1 = document.getElementById("inputdata").value;
    const texto2 = document.getElementById("inputlabel").value;
    const arrayDeCadenas1 = texto1.split(separador);
    const arrayDeCadenas2 = texto2.split(separador);
    const n=[];
    for(var i=0; i < arrayDeCadenas1.length; i++){
        n.push(parseFloat(arrayDeCadenas1[i]));
    }
    console.log(arrayDeCadenas2,n);
    console.log(n[0]);
    var p=0;
    for(var i=0;i <arrayDeCadenas2.length;i++){
        console.log(p);
        var n1=arrayDeCadenas2[i];
        var n2=n[i];
        
        console.log(n[0])

        d.addRow([n1, n2]);
        c.addRow([n1, n2]);
        a.addRow([n1, n2]);
        
        p++;
    }
    
    

    const chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(d, null);
    const chart1 = new google.visualization.ColumnChart(document.getElementById('column-chart'));
    chart1.draw(c, null);
    const chart2 = new google.visualization.AreaChart(document.getElementById('area-chart'));
    chart2.draw(a, null);


console.log(d);
}

