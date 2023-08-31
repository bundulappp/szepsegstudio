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
