import { ChartOptions } from "../models/pie-chart-config.model";

export class PieChartconfig {

  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      width: "100%",
      type: "pie",
      zoom: {
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: true
      }
    },
    dataLabels: {
      enabled: true,
    },
    labels: []
    ,
    title: {
      text: "",
      align: "center",
      style: {
        fontFamily: "roboto"
      }
    },
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: "roboto"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

}
