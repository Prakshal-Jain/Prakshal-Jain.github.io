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
    if(exp["duration"][1] == "Present"){
        document.getElementById("experiences").innerHTML += '<div class="timeline-container primary"><div class="timeline-icon"><i class="fa fa-calendar-plus-o"></i></div><div class="timeline-body"><h4 class="timeline-title"><span class="badge">'+exp["place"]+'</span></h4><h3>'+exp["title"]+'</h3><p class="timeline-subtitle">'+exp["duration"][0]+' - '+exp["duration"][1]+'</p></div>'
    }
    else{
        document.getElementById("experiences").innerHTML += '<div class="timeline-container primary"><div class="timeline-icon"><i class="fa fa-calendar-check-o"></i></div><div class="timeline-body"><h4 class="timeline-title"><span class="badge">'+exp["place"]+'</span></h4><h3>'+exp["title"]+'</h3><p class="timeline-subtitle">'+exp["duration"][0]+' - '+exp["duration"][1]+'</p></div>'
    }
}