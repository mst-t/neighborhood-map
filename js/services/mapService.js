/**
 * mapService
 * @description
 * Handles loading of the google map.
 */
var mapService = {

    /**
     * loadMap
     * @description
     * Loads the google map.
     * @returns {object} Google map object
     */
    loadMap: function() {
        return new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: 45.4931753,
                lng: -73.5889808
            },
            styles: model.mapStyle,
        });
    },

    /**
     * mapLoadError
     * @description
     * Notifies the failure of loading the google map.
     */
    mapLoadError: function() {
        alert ("Failed to load Google Map. Please reload the page or try again later.");
    }
};