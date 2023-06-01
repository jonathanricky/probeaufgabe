//*** menu trigger animation + show&hide nav ***
$("#main-nav-burger-trigger").click(function(event)
{
    $(this).toggleClass("nav-active").siblings(".portal-nav").toggleClass("nav-active");
    $(this).closest(".portal-l-wrapper").toggleClass("nav-active");
    $(this).closest(".portal-l-header").siblings(".portal-l-leftsidebar").toggleClass("nav-active");
});
