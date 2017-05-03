
/**
 * Data model of the application.
 * mapStyle   Customizes the google map
 * mapMarkers Store information of markers
 */
var model = {
    mapStyle: [{"featureType":"landscape.man_made", "elementType":"geometry", "stylers":[{"color":"#f7f1df"}]},
               {"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},
               {"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},
               {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
               {"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},
               {"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},
               {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},
               {"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
               {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
               {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},
               {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},
               {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
               {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},
               {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},
               {"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}],
    mapMarkers: [
        {
            position: {lat: 45.5180534, lng: -73.5838048},
            title: "Restaurant L'\Évidence",
            icon: 'icons/cafe.png'
        },
        {
            position: {lat: 45.5062901, lng: -73.59224246},
            title: 'Chalet du Mont-Royal',
            icon: 'icons/park.png'
        },
        {
            position: {lat: 45.5061908, lng: -73.558434},
            title: 'Basilique Notre-Dame de Montr\éal',
            icon: 'icons/church.png'
        },
        {
            position: {lat: 45.5056157, lng: -73.6225149},
            title: 'Universit\é de Montr\éal',
            icon: 'icons/school.png'
        },
        {
            position: {lat: 45.4563874, lng: -73.6477994},
            title: 'Universit\é Concordia',
            icon: 'icons/school.png'
        },
        {
            position: {lat: 45.4420559, lng: -73.6104971},
            title: 'Parc Angrignon',
            icon: 'icons/park.png'
        },
        {
            position: {lat: 45.46731, lng: -73.745019},
            title: 'A\éroport international Pierre-Elliott-Trudeau de Montr\éal',
            icon: 'icons/airplane.png'
        },
        {
            position: {lat: 45.5249422, lng: -73.6419513},
            title: 'March\é Jean-Talon',
            icon: 'icons/shopping-bag.png'
        },
        {
            position: {lat: 45.4938355, lng: -73.6869027},
            title: "Saint Joseph's Oratory",
            icon: 'icons/church.png'
        },
        {
            position: {lat: 45.5085368, lng: -73.5695893},
            title: "Mus\ée d'art contemporain de Montr\éal",
            icon: 'icons/art.png'
        },
        {
            position: {lat: 45.5578508, lng: -73.553542},
            title: 'Olympic Stadium (Montreal)',
            icon: 'icons/stadium.png'
        },
        {
            position: {lat: 45.4846302, lng: -73.6169361},
            title: 'Westmount, Quebec',
            icon: 'icons/house.png'
        },
    ]
};