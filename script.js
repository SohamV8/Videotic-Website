document.addEventListener('DOMContentLoaded', function () {
  const videoContainers = document.querySelectorAll('.video-container');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('video');
      if (entry.intersectionRatio >= 0.5) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  
  videoContainers.forEach(videoContainer => {
    observer.observe(videoContainer);
  });
});

// ------------------------------------

var $cursor = $(".cursor"),
    $overlay = $(".project-overlay");

function moveCircle(e) {
  gsap.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}

$(".p-1").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/gdsc.png)" });
});
$(".p-2").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/LF.png)" });
});
$(".p-3").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/astropathshala.png)" });
});
$(".p-4").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/blog.png)" });
});
$(".p-5").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/sendnotes.png)" });
});
$(".p-6").hover(function(){
  $(".cursor").css({ "background-image": "url(assets/port.png)" });
});

var flag = false;
$($overlay).mousemove(function() {
  flag = true;
  TweenLite.to($cursor, 0.3, {scale: 1, autoAlpha: 1});
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
  flag = false;
  TweenLite.to($cursor, 0.3, {scale: 0.1, autoAlpha: 0});
});



// -----------------------------------------------------

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});


// -----------------------------------------------------