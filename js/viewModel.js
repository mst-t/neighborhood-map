var googleMap;
var allMarkers = [];

/**
 * viewModel
 */
var viewModel = function() {

    var self = this;

    self.menuHidden = ko.observable(false);

    /**
     * displayMenu
     * @description
     * Toggles the side menu.
     */
    self.displayMenu = function() {
        self.menuHidden(!self.menuHidden());
    };

    /**
     * selectItem
     * @description
     * Triggers the mouse click event when a list item is clicked.
     * @params {number} id The id of a marker
     * @returns {function} Trigger event
     */
    self.selectItem = function(id) {
        // Mousedown is being used instead of click so it guarantees the best
        // UX on mobiles
        return function() {
            google.maps.event.trigger(allMarkers[id], 'mousedown');
        };
    };

    self.input = ko.observable('');

    /**
     * filteredLocations
     * @description
     * Computed observable. Filters list items by user input.
     * @returns {array} filteredLocations location names filterd by user input
     */
    self.filteredLocations = ko.computed(function() {

        var input = self.input().toLowerCase(),
            markerNum = allMarkers.length,
            filteredLocations = [],
            i;

        if (input !== '') {

            // When input is not empty, the toDisplay Array is wiped
            filteredLocations = [];

            // And then it's populated according to what the user is typing
            for (i = 0; i < markerNum; i++) {
                var marker = allMarkers[i];
                marker.setVisible(false);

                if (marker.title.toLowerCase().indexOf(input) >= 0) {
                    filteredLocations.push(marker);
                    marker.setVisible(true);
                }
            }
        } else {
            // If the input is empty, every marker is displayed on the list,
            // and on the map
            filteredLocations = allMarkers;
            for (i = 0; i < markerNum; i++) {
                var marker = allMarkers[i];
                marker.setVisible(true);
            }
        }
        return filteredLocations;
    });
};

/**
 * initMap
 * @description
 * Initializes the application. The call back of the google map loading.
 */
var initMap = function() {
    googleMap = mapService.loadMap();
    allMarkers = markerService.createMarkers(googleMap);
    markerService.setAllMarkers(allMarkers, googleMap);
    ko.applyBindings(viewModel);
};