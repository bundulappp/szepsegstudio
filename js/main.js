const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);

function initMap() {
  var storeLocation = { lat: -25.363, lng: 131.044 };
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: storeLocation,
  });
  var marker = new google.maps.Marker({
    position: storeLocation,
    map: map,
  });
}

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollToTopButton.className = 'top-link show';
  } else {
    scrollToTopButton.className = 'top-link hide';
  }
};

window.addEventListener('scroll', scrollFunc);
