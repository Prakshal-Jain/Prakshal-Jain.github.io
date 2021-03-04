// Enter JSON filename as json_url
json_url = "experiences.json"

function get_data(){
    var parsed_json = [];
    $.ajax({
        'async': false,
        'global': false,
        'url': json_url,
        'dataType': "json",
        'success': function (json_data) {
            parsed_json = json_data;
        }
    });
    return parsed_json;
}

var all_experiences = get_data();

for(let exp of all_experiences){
    document.getElementById("experiences").innerHTML += '<li><h4 style="color:#fff">'+exp["title"]+'</h4>('+exp["duration"][0]+' - '+exp["duration"][1]+')<p>'+exp["place"]+'</p></li>'
}