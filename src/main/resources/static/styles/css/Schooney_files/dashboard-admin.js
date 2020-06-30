$(document).ready(function() {
  // Activities
  // setTimeout(function() {
  //   $("#loading-activities").fadeOut();
  // }, 300);

  // Timeline
  setTimeout(function() {
    $("#loading-timeline").fadeOut();
  }, 500);

  // นักเรียนทั้งหมด
  setTimeout(function() {
    $(".loading-students").fadeOut();
  }, 400);

  // นักเรียนตามระดับชั้น
  setTimeout(function() {
    $("#loading-student-table").fadeOut();
  }, 700);

    // การเติมเงินทั้งหมดในวันนี้
    let echartElemTopupToday = document.getElementById("echart-topup-today");
    if (echartElemTopupToday) {
        let echart = echarts.init(echartElemTopupToday);
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
        setTimeout(function() {
            $("#loading-topup-today").fadeOut();
        }, 600);
    }

    // การเติมเงินทั้งหมดใน 1 เดือน
    let echartElemTopupWeek = document.getElementById("echart-topup-week");
    if (echartElemTopupWeek) {
        let echart = echarts.init(echartElemTopupWeek);
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
        setTimeout(function() {
            $("#loading-topup-week").fadeOut();
        }, 800);
    }

    // ยอดการเติมเงินประจำเดือน
    let echartElemTopupMonth = document.getElementById("echart-topup-month");
    if (echartElemTopupMonth) {
        let echart = echarts.init(echartElemTopupMonth);
        echart.setOption({
            ...echartOptions.lineNoAxis,
            ...{
                grid: {
                    top: 40,
                    right: 0,
                    left: 0,
                    bottom: 40
                },
                xAxis: {
                    type: "category",
                    data: [
                        "1 ก.พ.",
                        "2 ก.พ.",
                        "3 ก.พ.",
                        "4 ก.พ.",
                        "5 ก.พ.",
                        "6 ก.พ.",
                        "7 ก.พ.",
                        "8 ก.พ.",
                        "9 ก.พ.",
                        "10 ก.พ.",
                        "11 ก.พ.",
                        "12 ก.พ.",
                        "13 ก.พ.",
                        "14 ก.พ.",
                        "15 ก.พ.",
                        "16 ก.พ.",
                        "17 ก.พ.",
                        "18 ก.พ.",
                        "19 ก.พ.",
                        "20 ก.พ.",
                        "21 ก.พ.",
                        "22 ก.พ.",
                        "23 ก.พ.",
                        "24 ก.พ.",
                        "25 ก.พ.",
                        "26 ก.พ.",
                        "27 ก.พ.",
                        "28 ก.พ."
                    ],
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: colors.dark,
                        interval: 6,
                        showMinLabel: false
                    }
                },
                series: [
                    {
                        data: [
                            40,
                            30,
                            50,
                            80,
                            120,
                            40,
                            80,
                            20,
                            90,
                            30,
                            80,
                            40,
                            90,
                            20,
                            80,
                            30,
                            45,
                            50,
                            110,
                            90,
                            145,
                            70,
                            30,
                            80,
                            50,
                            10,
                            100,
                            130
                        ],
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            color: colors.primary,
                            width: 3
                        },
                        itemStyle: {
                            borderColor: colors.primary
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
        setTimeout(function() {
            $("#loading-topup-month").fadeOut();
        }, 1000);
    }

    // การจ่ายเงินทั้งหมดในวันนี้
    let echartElemPayToday = document.getElementById("echart-pay-today");
    if (echartElemPayToday) {
        let echart = echarts.init(echartElemPayToday);
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
                            color: colors.yellow
                        },
                        itemStyle: {
                            color: colors.yellow
                        },
                        areaStyle: {
                            color: colors.yellowSoft
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
        setTimeout(function() {
            $("#loading-pay-today").fadeOut();
        }, 300);
    }

    // การจ่ายเงินทั้งหมดใน 1 เดือน
    let echartElemPayWeek = document.getElementById("echart-pay-week");
    if (echartElemPayWeek) {
        let echart = echarts.init(echartElemPayWeek);
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
                            color: colors.blue
                        },
                        itemStyle: {
                            color: colors.blue
                        },
                        areaStyle: {
                            color: colors.blueSoft
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
        setTimeout(function() {
            $("#loading-pay-week").fadeOut();
        }, 500);
    }

    // ยอดการจ่ายเงินประจำเดือน
    let echartElemPayMonth = document.getElementById("echart-pay-month");
    if (echartElemPayMonth) {
        let echart = echarts.init(echartElemPayMonth);
        echart.setOption({
            ...echartOptions.lineNoAxis,
            ...{
                grid: {
                    top: 40,
                    right: 0,
                    left: 0,
                    bottom: 40
                },
                xAxis: {
                    type: "category",
                    data: [
                        "1 ก.พ.",
                        "2 ก.พ.",
                        "3 ก.พ.",
                        "4 ก.พ.",
                        "5 ก.พ.",
                        "6 ก.พ.",
                        "7 ก.พ.",
                        "8 ก.พ.",
                        "9 ก.พ.",
                        "10 ก.พ.",
                        "11 ก.พ.",
                        "12 ก.พ.",
                        "13 ก.พ.",
                        "14 ก.พ.",
                        "15 ก.พ.",
                        "16 ก.พ.",
                        "17 ก.พ.",
                        "18 ก.พ.",
                        "19 ก.พ.",
                        "20 ก.พ.",
                        "21 ก.พ.",
                        "22 ก.พ.",
                        "23 ก.พ.",
                        "24 ก.พ.",
                        "25 ก.พ.",
                        "26 ก.พ.",
                        "27 ก.พ.",
                        "28 ก.พ."
                    ],
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: colors.dark,
                        interval: 6,
                        showMinLabel: false
                    }
                },
                series: [
                    {
                        data: [
                            40,
                            30,
                            50,
                            80,
                            120,
                            40,
                            80,
                            20,
                            90,
                            30,
                            80,
                            40,
                            90,
                            20,
                            80,
                            30,
                            45,
                            50,
                            110,
                            90,
                            145,
                            70,
                            30,
                            80,
                            50,
                            10,
                            100,
                            130
                        ],
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            color: colors.blue,
                            width: 3
                        },
                        itemStyle: {
                            borderColor: colors.blue
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
        setTimeout(function() {
            $("#loading-pay-month").fadeOut();
        }, 1200);
    }




  // สรุปยอดขายทุกร้าน รายวัน
  let echartElemStoreToday = document.getElementById("echart-store-today");
  if (echartElemStoreToday) {
    let echart = echarts.init(echartElemStoreToday);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [30, 40, 20, 50, 40, 80, 90],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.secondary
            },
            itemStyle: {
              color: colors.secondary
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
    setTimeout(function() {
      $(".loading-store-today").fadeOut();
    }, 700);
  }

  // สรุปยอดขายทุกร้าน รายเดือน
  let echartElemStoreMonth = document.getElementById("echart-store-month");
  if (echartElemStoreMonth) {
    let echart = echarts.init(echartElemStoreMonth);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [6, 4, 7, 4, 6, 4, 1],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.primary
            },
            itemStyle: {
              color: colors.primary
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
    setTimeout(function() {
      $(".loading-store-month").fadeOut();
    }, 800);
  }

  // สรุปยอดขายทุกร้าน รายเทอม
  let echartElemStoreTerm = document.getElementById("echart-store-term");
  if (echartElemStoreTerm) {
    let echart = echarts.init(echartElemStoreTerm);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [2, 2, 7, 4, 6, 4, 8],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.blue
            },
            itemStyle: {
              color: colors.blue
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
    setTimeout(function() {
      $(".loading-store-term").fadeOut();
    }, 900);
  }

  // สรุปยอดขายแต่ละร้าน
  setTimeout(function() {
    $("#loading-store-table").fadeOut();
  }, 1200);

  // 3 ร้านขายดีประจำเดือน
  setTimeout(function() {
    $(".loading-store-top").fadeOut();
  }, 500);

  // ปริมาณการนำสินค้าเข้า
  let echartElemOrganizationReceive = document.getElementById(
    "echart-organization-receive"
  );
  if (echartElemOrganizationReceive) {
    let echart = echarts.init(echartElemOrganizationReceive);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [30, 40, 20, 50, 40, 80, 90],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.secondary
            },
            itemStyle: {
              color: colors.secondary
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
    setTimeout(function() {
      $("#loading-organization-receive").fadeOut();
    }, 700);
  }

  // รายจ่ายทั้งหมดในการนำเข้า
  let echartElemOrganizationPayment = document.getElementById(
    "echart-organization-payment"
  );
  if (echartElemOrganizationPayment) {
    let echart = echarts.init(echartElemOrganizationPayment);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [6, 4, 7, 4, 6, 4, 1],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.primary
            },
            itemStyle: {
              color: colors.primary
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
    setTimeout(function() {
      $("#loading-organization-payment").fadeOut();
    }, 500);
  }

  // รายรับทั้งหมด
  let echartElemOrganizationIncome = document.getElementById(
    "echart-organization-income"
  );
  if (echartElemOrganizationIncome) {
    let echart = echarts.init(echartElemOrganizationIncome);
    echart.setOption({
      ...echartOptions.defaultOptions,
      ...{
        series: [
          {
            data: [2, 2, 7, 4, 6, 4, 8],
            ...echartOptions.smoothLine,
            lineStyle: {
              color: colors.secondary
            },
            itemStyle: {
              color: colors.secondary
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
    setTimeout(function() {
      $("#loading-organization-income").fadeOut();
    }, 600);
  }

  let echartElemOrganizationMonth = document.getElementById(
    "echart-organization-month"
  );
  if (echartElemOrganizationMonth) {
    let echart = echarts.init(echartElemOrganizationMonth);
    echart.setOption({
      grid: {
        left: "8px",
        right: "8px",
        bottom: "0",
        top: "15px",
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
    setTimeout(function() {
      $("#loading-organization-month").fadeOut();
    }, 1300);
  }

  // Top 5 items ประจำเดือน
  setTimeout(function() {
    $("#loading-organization-top").fadeOut();
  }, 400);
});


// การเติมเงินทั้งหมดในวันนี้
function topupToday(data){
    let echartElemTopupToday = document.getElementById("echart-topup-today");
    if (echartElemTopupToday) {
        let echart = echarts.init(echartElemTopupToday);
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
                    data: data.xdata,
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
                        data: data.ydata,
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
        setTimeout(function() {
            $("#loading-topup-today").fadeOut();
        }, 600);
    }

}

// การเติมเงินทั้งหมดใน 1 เดือน
function topupMonth(data){
    let echartElemTopupWeek = document.getElementById("echart-topup-week");
    if (echartElemTopupWeek) {
        let echart = echarts.init(echartElemTopupWeek);
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
                    data: data.xdata,
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
                        data: data.ydata,
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
        setTimeout(function() {
            $("#loading-topup-week").fadeOut();
        }, 800);
    }

}

// ยอดการเติมเงินประจำเดือน
function topupMonthDaily(data){
    let echartElemTopupMonth = document.getElementById("echart-topup-month");
    if (echartElemTopupMonth) {
        let echart = echarts.init(echartElemTopupMonth);
        echart.setOption({
            ...echartOptions.lineNoAxis,
            ...{
                grid: {
                    top: 40,
                    right: 0,
                    left: 0,
                    bottom: 40
                },
                xAxis: {
                    type: "category",
                    data: data.xdata,
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: colors.dark,
                        interval: 6,
                        showMinLabel: false
                    }
                },
                series: [
                    {
                        data: data.ydata,
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            color: colors.primary,
                            width: 3
                        },
                        itemStyle: {
                            borderColor: colors.primary
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
        setTimeout(function() {
            $("#loading-topup-month").fadeOut();
        }, 1000);
    }
}

// การจ่ายเงินทั้งหมดในวันนี้
function paidToday(data) {
    let echartElemPayToday = document.getElementById("echart-pay-today");
    if (echartElemPayToday) {
        let echart = echarts.init(echartElemPayToday);
        echart.setOption({
            ...echartOptions.lineFullWidth,
            ...
                {
                    grid: {
                        show: false,
                        top
                            :
                            5,
                        right
                            :
                            "-12.5%",
                        left
                            :
                            "-12.5%",
                        bottom
                            :
                            0
                    }
                    ,
                    xAxis: {
                        type: "category",
                        data: data.xdata,
                        axisLabel
                            :
                            {
                                show: false,
                                showMinLabel
                                    :
                                    false,
                                showMaxLabel
                                    :
                                    false
                            }
                    }
                    ,
                    tooltip: {
                        show: true,
                        backgroundColor
                            :
                            "rgba(0, 0, 0, .8)",
                        formatter
                            :
                            "{b}: {c} บาท"
                    }
                    ,
                    series: [
                        {
                            data: data.ydata,
                            ...echartOptions.smoothLine,
                            lineStyle
                                :
                                {
                                    color: colors.yellow
                                }
                            ,
                            itemStyle: {
                                color: colors.yellow
                            }
                            ,
                            areaStyle: {
                                color: colors.yellowSoft
                            }
                        }
                    ]
                }
        })
        ;
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
        setTimeout(function () {
            $("#loading-pay-today").fadeOut();
        }, 300);
    }
}

// การจ่ายเงินทั้งหมดใน 1 เดือน
function paidMonth(data) {
    let echartElemPayWeek = document.getElementById("echart-pay-week");
    if (echartElemPayWeek) {
        let echart = echarts.init(echartElemPayWeek);
        echart.setOption({
            ...echartOptions.lineFullWidth,
            ...
                {
                    grid: {
                        show: false,
                        top
                            :
                            5,
                        right
                            :
                            "-12.5%",
                        left
                            :
                            "-12.5%",
                        bottom
                            :
                            0
                    }
                    ,
                    xAxis: {
                        type: "category",
                        data
                            : data.xdata,
                        axisLabel
                            :
                            {
                                show: false,
                                showMinLabel
                                    :
                                    false,
                                showMaxLabel
                                    :
                                    false
                            }
                    }
                    ,
                    tooltip: {
                        show: true,
                        backgroundColor
                            :
                            "rgba(0, 0, 0, .8)",
                        formatter
                            :
                            "{b}: {c} บาท"
                    }
                    ,
                    series: [
                        {
                            data: data.ydata,
                            ...echartOptions.smoothLine,
                            lineStyle
                                :
                                {
                                    color: colors.blue
                                }
                            ,
                            itemStyle: {
                                color: colors.blue
                            }
                            ,
                            areaStyle: {
                                color: colors.blueSoft
                            }
                        }
                    ]
                }
        })
        ;
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
        setTimeout(function () {
            $("#loading-pay-week").fadeOut();
        }, 500);
    }
}

// ยอดการจ่ายเงินประจำเดือน
function paidMonthDaily(data) {
    let echartElemPayMonth = document.getElementById("echart-pay-month");
    if (echartElemPayMonth) {
        let echart = echarts.init(echartElemPayMonth);
        echart.setOption({
            ...echartOptions.lineNoAxis,
            ...
                {
                    grid: {
                        top: 40,
                        right
                            :
                            0,
                        left
                            :
                            0,
                        bottom
                            :
                            40
                    }
                    ,
                    xAxis: {
                        type: "category",
                        data
                            : data.xdata,
                        axisLine
                            :
                            {
                                show: true
                            }
                        ,
                        axisTick: {
                            show: false
                        }
                        ,
                        axisLabel: {
                            color: colors.dark,
                            interval
                                :
                                6,
                            showMinLabel
                                :
                                false
                        }
                    }
                    ,
                    series: [
                        {
                            data: data.ydata,
                            type: "line",
                            smooth: true,
                            lineStyle: {
                                color: colors.blue,
                                width: 3
                            },
                            itemStyle: {
                                borderColor: colors.blue
                            }
                        }
                    ]
                }
        })
        ;
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
        setTimeout(function () {
            $("#loading-pay-month").fadeOut();
        }, 1200);
    }
}