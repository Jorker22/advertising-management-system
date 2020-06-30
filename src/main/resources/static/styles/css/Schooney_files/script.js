var colors = {
  dark: "#37323c",
  primary: "#ff9800",
  primaryColor: "#ffffff",
  primarySoft: "#ffc774",
  secondary: "#6C389C",
  secondarySoft: "#efeaf5",
  pieColors: ["#FF9300", "#FFEED2", "#FFC564"],
  yellow: "#FFC400",
  yellowSoft: "#ffe284",
  blue: "#58bdbe",
  blueSoft: "#afdedf"
};

$(document).ready(function() {
  "use strict";
  var $sidebarToggle = $(".menu-toggle");
  var $sidebarLeft = $(".sidebar-left");
  var $sidebarOverlay = $(".sidebar-overlay");
  var $mainContentWrap = $(".main-content-wrap");
  var $mainNav = $(".main-nav");
  var $breadcrumb = $(".breadcrumb-collapse i");

  // Reusable utilities
  window.gullUtils = {
    isMobile: function isMobile() {
      return window && window.matchMedia("(max-width: 767px)").matches;
    }
  };

  function openSidebar() {
    $sidebarLeft.addClass("open");
    $mainContentWrap.addClass("sidenav-open");
    if (!gullUtils.isMobile()) {
      setTimeout(function() {
        if ($.fn.matchHeight) $.fn.matchHeight._update();
      }, 240);
    } else {
      $sidebarOverlay.show();
    }
  }

  function closeSidebar() {
    $sidebarLeft.removeClass("open");
    $mainContentWrap.removeClass("sidenav-open");
    if (!gullUtils.isMobile()) {
      setTimeout(function() {
        if ($.fn.matchHeight) $.fn.matchHeight._update();
      }, 240);
    } else {
      $sidebarOverlay.hide();
    }
  }

  function initLayout() {
    if (gullUtils.isMobile()) {
      closeSidebar();
    }
    ElementQueries.init();
    setTimeout(function() {
      if ($.fn.matchHeight) $.fn.matchHeight._update();
    }, 500);
  }

  function initDatatable() {
    $(".datatable").DataTable({
        autoWidth: true,
      dom: '<"top"f><"middle"rt><"bottom"lp><"clear">',
      pagingType: "full_numbers"
    });

    $(".datatable tr[href]").on("click", function(event) {
      window.location = $(this).attr("href");
    });

    $(".datatable tr[href] .btn").on("click", function(event) {
      event.stopPropagation();
    });
  }

  function initForm() {
    // Tagging
    $(".tagBox").tagging({
      "no-comma": true,
      "no-duplicate": true,
      "case-sensitive": true,
      "edit-on-delete": false,
      "pre-tags-separator": "|",
      "no-duplicate-text": "Duplicate tags"
    });
    $(".tagBox input").attr("placeholder", " + Tag");

    // Form Validation
    let forms = document.getElementsByClassName("needs-validation");
    let tagBoxs = $(".needs-validation .tagBox.required");
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        "submit",
        function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          $.each(tagBoxs, function(_, tagBox) {
            tagBox = $(tagBox);
            if (tagBox.find(".tag").length === 0) {
              tagBox.addClass("invalid");
              event.preventDefault();
            } else tagBox.removeClass("invalid");
          });
          form.classList.add("was-validated");
        },
        false
      );
    });

    // Date Picker
    $.each($(".date-picker"), function() {
      $(this).datepicker({
        locale: 'th-th',
        format: 'dd mmm yyyy',
        uiLibrary: "bootstrap4"
      });
    });

    // Toggle form tab
    $("input[data-tab]").on("change", function(event) {
      $(".form-tab").hide();
      $('.form-tab[data-tab="' + $(this).data("tab") + '"]').show();
    });

    // Toggle disabled form by checkbox
    $('input[type="checkbox"][data-disabled]').on("change", function(event) {
      let element = $(
        '.disabled-toggle[data-disabled="' + $(this).data("disabled") + '"]'
      )[0];
      element.disabled = !element.disabled;
    });

    // Toggle disabled form by radio
    $('input[type="radio"][data-disabled]').on("change", function(event) {
      let element = $(
        '.disabled-toggle[data-disabled="' + $(this).data("disabled") + '"]'
      )[0];
      element.disabled = $(this).data("target");
    });
  }

  $(window).on("resize", function(event) {
    if (gullUtils.isMobile()) {
      closeSidebar();
    }
  });

  initLayout();
  initDatatable();
  initForm();
  setTimeout(function() {
    $(".loading-page").fadeOut();
  }, 200);

  // Prevent opeing link if has data-item
  $sidebarLeft.find(".nav-item").on("click", function(e) {
    let $navItem = $(event.currentTarget);
    let dataItem = $navItem.data("item");
    if (dataItem) {
      e.preventDefault();
    }
  });

  // Toggle menus on click on header toggle icon
  $sidebarToggle.on("click", function(event) {
    let isSidebarOpen = $sidebarLeft.hasClass("open");
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Hide menu on click on overlay
  $sidebarOverlay.on("click", function(event) {
    if (gullUtils.isMobile()) {
      closeSidebar();
    }
  });

  // Toggle subnavs on click on mainnav
  $mainNav.on("click", function(event) {
    let subNav = $(this).next();
    if (!$(this).hasClass("expand")) {
      // Collapse current subnavs
      $(".main-nav.expand")
        .next()
        .slideUp(200);
      $(".main-nav.expand").removeClass("expand");
      // Open new subnavs
      subNav.slideDown(200);
      $(this).addClass("expand");
    } else {
      subNav.slideUp(200);
      $(this).removeClass("expand");
    }
  });

  // Toggle breadcrumb
  $breadcrumb.on("click", function(event) {
    let content = $(this)
      .parent()
      .next()
      .next();
    if ($(this).hasClass("expand")) {
      content.slideUp(200);
      $(this).removeClass("expand");
    } else {
      content.slideDown(200, function() {
        if ($.fn.matchHeight) $.fn.matchHeight._update();
      });
      $(this).addClass("expand");
    }
  });

  // Perfect scrollbar
  $(".perfect-scrollbar, [data-perfect-scrollbar]").each(function(index) {
    var $el = $(this);
    var ps = new PerfectScrollbar(this, {
      suppressScrollX: $el.data("suppress-scroll-x"),
      suppressScrollY: $el.data("suppress-scroll-y")
    });
  });

  // Full screen
  function cancelFullScreen(el) {
    var requestMethod =
      el.cancelFullScreen ||
      el.webkitCancelFullScreen ||
      el.mozCancelFullScreen ||
      el.exitFullscreen;
    if (requestMethod) {
      // cancel full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    return false;
  }

  function toggleFullscreen() {
    var elem = document.body;
    var isInFullScreen =
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
      cancelFullScreen(document);
    } else {
      requestFullScreen(elem);
    }
    return false;
  }
  $("[data-fullscreen]").on("click", toggleFullscreen);

  Number.prototype.numberFormat = function(n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
});
