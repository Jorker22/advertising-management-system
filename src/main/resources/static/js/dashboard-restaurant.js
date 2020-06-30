$(document).ready(function() {
  // Peak Time
  let echartElemPeakTime = document.getElementById("echart-peak-time");
  if (echartElemPeakTime) {
    let echart = echarts.init(echartElemPeakTime);
    echart.setOption({
      ...echartOptions.lineNoAxis,
      ...{
        grid: {
          top: 30,
          right: 25,
          left: 25,
          bottom: 1
        },
        xAxis: {
          type: "category",
          data: [
            "6.30 - 7.30 น.",
            "7.30 - 8.30 น.",
            "8.30 - 9.30 น.",
            "9.30 - 10.30 น.",
            "10.30 - 11.30 น.",
            "11.30 - 12.30 น.",
            "12.30 - 13.30 น.",
            "13.30 - 14.30 น.",
            "14.30 - 15.30 น.",
            "15.30 - 16.30 น.",
            "16.30 - 17.30 น.",
            "17.30 - 18.30 น."
          ],
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            data: [40, 30, 90, 80, 40, 80, 120, 80, 30, 80, 100, 40],
            type: "line",
            smooth: true,
            label: {
              show: true,
              formatter: function(obj) {
                if (obj.value >= 90) {
                  return "{peak|" + obj.name + "}";
                }
                return "{normal|}";
              },
              rich: {
                peak: {
                  show: true,
                  color: colors.primaryColor,
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                  padding: [2, 5]
                },
                normal: {
                  show: false
                }
              }
            },
            lineStyle: {
              color: colors.secondary,
              width: 3
            },
            itemStyle: {
              borderColor: colors.secondary
            }
          }
        ]
      }
    });
    $(window).on("resize", function() {
      setTimeout(() => {
        echart.resize();
      }, 500);
    });
    $(".menu-toggle").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 240);
    });
    $(".breadcrumb-collapse i").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 250);
    });
    setTimeout(function() {
      echart.resize();
    }, 500);
  }

  // Orders Today
  let echartElemOrder = document.getElementById("echart-order");
  if (echartElemOrder) {
    let echart = echarts.init(echartElemOrder);
    echart.setOption({
      color: colors.pieColors,
      tooltip: {
        show: true,
        backgroundColor: "rgba(0, 0, 0, .8)",
        formatter: "{b}: {c} คน"
      },
      series: [
        {
          type: "pie",
          radius: "60%",
          center: ["50%", "50%"],
          data: [
            { value: 14, name: "ข้าวหมูกระเทียม" },
            { value: 54, name: "ข้าวหมูทอด" },
            { value: 32, name: "ข้าวมันไก่ทอด" }
          ],
          label: {
            color: colors.dark,
            formatter: "{b}\n{c} คน"
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    $(window).on("resize", function() {
      setTimeout(() => {
        echart.resize();
      }, 500);
    });
    $(".menu-toggle").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 240);
    });
    $(".breadcrumb-collapse i").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 250);
    });
    setTimeout(function() {
      echart.resize();
    }, 500);
  }

  // Daily
  setTimeout(function() {
    $("#loading-daily").fadeOut();
  }, 300);

  // ยอดขายในสัปดาห์ก่อนหน้านี้
  let echartElemLastWeek = document.getElementById("echart-last-week");
  if (echartElemLastWeek) {
    let echart = echarts.init(echartElemLastWeek);
    echart.setOption({
      ...echartOptions.lineFullWidth,
      ...{
        grid: {
          show: false,
          top: 5,
          right: "-12.5%",
          left: "-12.5%",
          bottom: 0
        },
        xAxis: {
          type: "category",
          data: ["4 ก.พ.", "5 ก.พ.", "6 ก.พ.", "7 ก.พ.", "8 ก.พ."],
          axisLabel: {
            show: false,
            showMinLabel: false,
            showMaxLabel: false
          }
        },
        tooltip: {
          show: true,
          backgroundColor: "rgba(0, 0, 0, .8)",
          formatter: "{b}: {c} บาท"
        },
        series: [
          {
            data: [40, 20, 50, 40, 80],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.secondary
            },
            itemStyle: {
              color: colors.secondary
            },
            areaStyle: {
              color: colors.secondarySoft
            }
          }
        ]
      }
    });
    $(window).on("resize", function() {
      setTimeout(() => {
        echart.resize();
      }, 500);
    });
    $(".menu-toggle").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 240);
    });
    $(".breadcrumb-collapse i").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 250);
    });
    setTimeout(function() {
      echart.resize();
    }, 500);
  }

  // ยอดขายในสัปดาห์นี้
  let echartElemThisWeek = document.getElementById("echart-this-week");
  if (echartElemThisWeek) {
    let echart = echarts.init(echartElemThisWeek);
    echart.setOption({
      ...echartOptions.lineFullWidth,
      ...{
        grid: {
          show: false,
          top: 5,
          right: "-12.5%",
          left: "-12.5%",
          bottom: 0
        },
        xAxis: {
          type: "category",
          data: ["11 ก.พ.", "12 ก.พ.", "13 ก.พ.", "14 ก.พ.", "15 ก.พ."],
          axisLabel: {
            show: false,
            showMinLabel: false,
            showMaxLabel: false
          }
        },
        tooltip: {
          show: true,
          backgroundColor: "rgba(0, 0, 0, .8)",
          formatter: "{b}: {c} บาท"
        },
        series: [
          {
            data: [30, 10, 40, 10, 40],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.primary
            },
            itemStyle: {
              color: colors.primary
            },
            areaStyle: {
              color: colors.primarySoft
            }
          }
        ]
      }
    });
    $(window).on("resize", function() {
      setTimeout(() => {
        echart.resize();
      }, 500);
    });
    $(".menu-toggle").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 240);
    });
    $(".breadcrumb-collapse i").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 250);
    });
    setTimeout(function() {
      echart.resize();
    }, 500);
  }
  setTimeout(function() {
    $("#loading-weekly").fadeOut();
  }, 600);

  // ยอดขายรายเดือน
  let echartElemMonth = document.getElementById("echart-month");
  if (echartElemMonth) {
    let echart = echarts.init(echartElemMonth);
    echart.setOption({
      grid: {
        left: "8px",
        right: "8px",
        bottom: "0",
        top: "8px",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "ม.ค.",
            "ก.พ.",
            "มี.ค.",
            "เม.ย.",
            "พ.ค.",
            "มิ.ย.",
            "ก.ค.",
            "ส.ค.",
            "ก.ย.",
            "ต.ค.",
            "พ.ย.",
            "ธ.ค."
          ],
          axisTick: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function(value, _) {
              return value / 1000 + "K";
            }
          }
        }
      ],
      tooltip: {
        show: true,
        backgroundColor: "rgba(0, 0, 0, .8)"
      },
      series: [
        {
          data: [
            10000,
            13500,
            10000,
            5000,
            17500,
            10000,
            13500,
            10000,
            5000,
            17500,
            13500,
            10000
          ],
          type: "bar",
          smooth: true,
          barMaxWidth: 24,
          itemStyle: {
            color: colors.primarySoft,
            barBorderColor: colors.primary,
            emphasis: {
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: -2,
              shadowColor: "rgba(0, 0, 0, 0.3)"
            }
          },
          label: {
            show: true,
            position: "top",
            formatter: function(obj) {
              return obj.value.numberFormat();
            }
          }
        }
      ]
    });
    $(window).on("resize", function() {
      setTimeout(() => {
        echart.resize();
      }, 500);
    });
    $(".menu-toggle").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 240);
    });
    $(".breadcrumb-collapse i").on("click", function() {
      setTimeout(() => {
        echart.resize();
      }, 250);
    });
    setTimeout(function() {
      echart.resize();
    }, 500);
  }
  setTimeout(function() {
    $("#loading-monthly").fadeOut();
  }, 800);
});
