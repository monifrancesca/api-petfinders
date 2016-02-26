$(document).ready(function() {
    petFinder();
});

function petFinder() {
    // API Key
    var key = 'your api key';

    var baseURL = 'http://api.petfinder.com/';
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=full';
    query += '&format=json';
    query += '&callback=?';

    var request = baseURL + query;
    console.log(request);

    $.ajax({
        type: "GET",
        url: encodeURI(request),
        dataType: "jsonp",
        crossDomain: true,
        //jsonp: 'json_callback',
        success: function(data) {
            console.log(data.petfinder.pet);
        }
    });
}
