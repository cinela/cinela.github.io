// Pranav Maddi
// Cinela
// 2015

var video_data = [
    {'source' : 'vimeo', 'video_id' : '2078991', 'title' : 'Notte Sento'},
    {'source' : 'youtube', 'video_id' : 'D4KF8Mko7Z0', 'title' : 'Allergy to Originality'},
    {'source' : 'vimeo', 'video_id' : '6271487', 'title' : 'Spheres'},
    {'source' : 'youtube', 'video_id' : 'YY7f1t9y9a0', 'title' : 'Billions in Change'},
    {'source' : 'youtube', 'video_id' : 'xz63Vppw3gE', 'title' : 'Searchers: Highway of Tears'},
    {'source' : 'youtube', 'video_id' : 'aVgeJ5eqlSM', 'title' : 'Post It'},
    {'source' : 'youtube', 'video_id' : '4gVcI_0T5l4', 'title' : 'IMAGINE'},
    {'source' : 'vimeo', 'video_id' : '6540668', 'title' : 'Cinnamon Chasers - Luv Deluxe'},
    {'source' : 'vimeo', 'video_id' : '8076064', 'title' : 'APRICOT'},
    {'source' : 'vimeo', 'video_id' : '9078364', 'title' : 'Nuit Blanche'},
    {'source' : 'vimeo', 'video_id' : '11099712', 'title' : 'The Raven'},
    {'source' : 'vimeo', 'video_id' : '15759511', 'title' : 'The Black Hole'},
    {'source' : 'vimeo', 'video_id' : '14017511', 'title' : 'Your Lucky Day'},
    ];
function vimeoLoadingThumb(id){    
    var url = "http://vimeo.com/api/v2/video/" + id + ".json?callback=showThumb";
      
    var id_img = "#vimeo-" + id;
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = url;

    $(id_img).before(script);
}

function showThumb(data){
    var id_img = "#vimeo-" + data[0].id;
    $(id_img).attr('src',data[0].thumbnail_medium);
}

$(function() {
    var vimeo_video_data = video_data.filter(function(el) {
        return el.source === 'vimeo'
    });
    vimeo_video_data.map(function(el) {
        vimeoLoadingThumb(parseInt(el.video_id))
    });
});

var items = Array("476", "232", "352", "348", "282", "384", "274", "282");
function addVimeoToReel(id, title) {
    var size = items[Math.floor(Math.random()*items.length)];
    $('<article/>', {'class': 'item thumb', 
                     'data-width' : size}).append(
        $('<h2/>', {text : title}), 
            $('<a/>', {'href': 'http://vimeo.com/' + id, 
                'data-poptrox' : 'vimeo', 
                'class' : 'image'}).append(
            $('<img/>', 
                {'id' : 'vimeo-' + id})
        )
    ).appendTo('#reel');
};
function addYoutubeToReel(yId, title) {
    var size = items[Math.floor(Math.random()*items.length)];
    $('<article/>', {'class': 'item thumb', 
                     'data-width' : size}).append(
        $('<h2/>', {text : title}), 
            $('<a/>', {'href': 'http://youtu.be/' + yId, 
                'data-poptrox' : 'youtube', 
                'class' : 'image'}).append(
            $('<img/>', 
                {'src' : 'http://img.youtube.com/vi/' + yId + '/hqdefault.jpg'})
        )
    ).appendTo('#reel');
};
video_data.map(function(el) {
    if (el.source === 'youtube') {
        addYoutubeToReel(el.video_id, el.title);
    } else if (el.source == 'vimeo') {
        addVimeoToReel(el.video_id, el.title);
    }
});

