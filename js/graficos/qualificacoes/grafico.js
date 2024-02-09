function createPie(chartId, titleText, data) {
    Highcharts.chart(chartId, {
        chart: { type: 'pie', width: 130, height: 170, backgroundColor: null },
        title: {
            text: titleText,
            align: 'center',
            verticalAlign: 'bottom',
            y: -60,
            style: { fontSize: '14px', backgroundColor: null }
        },
        tooltip: {
            formatter: function () {
                // Verifique se o ponto é um "Void" e não mostre o tooltip para ele
                if (this.point.name === 'Void') {
                    return false;
                }
                return this.series.name + ': <b>' + this.point.percentage.toFixed(1) + '%</b>';
            }
        },
        accessibility: { point: { valueSuffix: '%' } },
        plotOptions: {
            pie: {
                dataLabels: { enabled: true, distance: -50, style: { fontWeight: 'bold', color: 'white' } },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '150%'
            }
        },
        exporting: { enabled: false },
        series: [{
            type: 'pie',
            name: titleText,
            innerSize: '70%',
            data: data
        }],
        credits: { enabled: false }
    });
}