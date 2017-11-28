include('js/variables.js');
include('js/gametable.js');
include('js/engine.js');



// include js
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}