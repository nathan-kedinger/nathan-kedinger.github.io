window.addEventListener("load", function() {
  var openPhotoSwipe = function(index) {
    var pswpElement = document.querySelectorAll(".pswp")[0];

    var items = [
      {
        src: "https://placekitten.com/300/300",
        w: 300,
        h: 300
      },
      {
        src: "https://placekitten.com/200/400",
        w: 300,
        h: 400
      }
    ];

    var options = {
      index: index,
      showAnimationDuration: 0,
      closeOnScroll: false
    };

    var gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    );
    gallery.init();
  };

  var thumbnails = document.querySelectorAll(".creation-thumbnail");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = openPhotoSwipe.bind(null, i);
  }

  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(contactForm);
    var XHR = new XMLHttpRequest();

    XHR.addEventListener("load", function(event) {
      document.querySelectorAll(".form-success-message")[0].style.display =
        "block";
      contactForm.reset();

      setTimeout(function() {
        document.querySelectorAll(".form-success-message")[0].style.display =
          "none";
      }, 3000);
    });

    XHR.addEventListener("error", function(event) {
      alert("Oups! Quelque chose s'est mal passé.");
    });

    XHR.open("POST", "https://hooks.zapier.com/hooks/catch/5067607/v1dosk/");
    XHR.send(formData);
  });
});
