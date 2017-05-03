/**
 * markerService
 * @description
 * Creates markers and provides the way of setting them on the map.
 */
var markerService = {
    /**
     * createMarkers
     * @description
     * Creates markers. The contents of the infoWindow are loaded asynchronously,
     * each time the marker is clicked.
     * params {object} map Google map object
     * @returns {array} markers
     */
    createMarkers: function(map) {

        var markers = [];
        var infowindow = new google.maps.InfoWindow();

        for (var i = 0; i < model.mapMarkers.length; i++) {

            // Get the position, title and icon from the data model
            var position = model.mapMarkers[i].position,
                title = model.mapMarkers[i].title,
                icon = {
                    url: model.mapMarkers[i].icon,
                    scaledSize: new google.maps.Size(32, 32)
                };

            var marker = new google.maps.Marker({
                position: position,
                title: title,
                animation: google.maps.Animation.DROP,
                icon: icon,
                id: i
            });

            markers.push(marker);
        }

        markers.forEach(function(marker) {
            // Transform the marker title into a string readable by Wikipedia query
            // and create an empty infowindow

            var rawTitle = marker.title.split(" "),
                formatedTitle = rawTitle.join("%20"),
                HTMLString = '';

            // Ajax request of Wikipedia API
            function ajax() {
                return $.ajax({
                    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
                        formatedTitle,
                    dataType: "jsonp",
                });
            }

            // Using Mousedown event for mobile devices
            marker.addListener('mousedown', function() {

                // Promise
                ajax().done(function(result) {
                    // Create two HTML strings to be displayed on the infowindow of the marker
                    var header = "<h5>" + marker.title + "</h5><br>" +
                                 "<p>Articles Provided by Wikipedia:</p>" +
                                 "<ul>",
                        links = [];

                    var wikiTitle = result[1],
                        wikiLinks = result[3];
                    for (var i = 0; i < wikiLinks.length; i++) {

                        if (i === 4) {
                            break;
                        }
 
                        links.push("<li><a href=" +
                              wikiLinks[i] + ">"  +
                              wikiTitle[i] + "</a></li>");
                    }

                    // Set the content to be the HTML string
                    if (links.length > 0) {
                        HTMLString = header + links.join(" ") + "</ul>";
                    } else {
                        HTMLString = header +
                                     "There is no Wikipedia article for this Location" +
                                     "</ul";
                    }

                    infowindow.setContent(HTMLString);
                    infowindow.open(map, marker);

                }).fail(function() {
                    // Notify the failure of loading wiki articles.
                    alert("Failed to load wiki articles!");
                }).always(function(result) {
                    map.setZoom(13);
                    map.setCenter(marker.position);

                    // Markers are bounced by being clicked.
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        setTimeout(function() {
                            marker.setAnimation(null);
                        }, 1500);
                    }
                });
            });
        });
        return markers;
    },

    /**
     * setAllMarkers
     * @description
     * Sets all markers on the google map.
     * params {arrays} markerArray google map markers
     * params {object} map Google map object
     */
    setAllMarkers: function(markerArray, map) {
        markerArray.forEach(function(marker) {
            marker.setMap(map);
        });
    }
};