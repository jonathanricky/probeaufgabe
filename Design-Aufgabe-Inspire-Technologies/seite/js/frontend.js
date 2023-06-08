//*** menu trigger animation + show&hide nav ***
$("#main-nav-burger-trigger").click(function (event) {
  $(this)
    .toggleClass("nav-active")
    .siblings(".portal-nav")
    .toggleClass("nav-active");
  $(this).closest(".portal-l-wrapper").toggleClass("nav-active");
  $(this)
    .closest(".portal-l-header")
    .siblings(".portal-l-leftsidebar")
    .toggleClass("nav-active");
});

$(window).click(function (event) {
  if (!event.target.classList.contains("btn-submenu")) {
    $(".t-btn-icon.btn-submenu")
      .children(".ctx-menu")
      .removeClass("ctx-visible");
  }
});

$(".t-btn-icon.btn-submenu").click(function (event) {
  const clickedElement = $(this);
  const contextMenu = clickedElement.children(".ctx-menu");
  const isVisible = contextMenu.hasClass("ctx-visible");

  $(".ctx-visible").removeClass("ctx-visible");
  if (!isVisible) {
    contextMenu.addClass("ctx-visible");
  }
});