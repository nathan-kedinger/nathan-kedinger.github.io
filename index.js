window.addEventListener("load", function() {
  var openPhotoSwipe = function(index) {
    var pswpElement = document.querySelectorAll(".pswp")[0];

    var items = [
      {
        src: "images/gallery1.jpg",
        w: 3120,
        h: 4126
      },
      {
        src: "images/gallery2.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery3.jpg",
        w: 3648,
        h: 2736
      },
      {
        src: "images/gallery4.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery5.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery6.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery7.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery8.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery9.jpg",
        w: 3648,
        h: 2736
      },
      {
        src: "images/gallery10.jpg",
        w: 3648,
        h: 2736
      },
      {
        src: "images/gallery11.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery12.jpg",
        w: 2736,
        h: 3648
      },
      {
        src: "images/gallery13.jpg",
        w: 3648,
        h: 2736
      },
      {
        src: "images/gallery14.jpg",
        w: 7296,
        h: 5472
      },
      {
        src: "images/gallery15.jpg",
        w: 7296,
        h: 5472
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
