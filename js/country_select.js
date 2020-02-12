let url = './json/country.json';
let data;
let country, option;
country = document.getElementById("country");

fetch(url).then(function(res){
    // console.log(res);
    return res.json();
}).then(function(json){
    data = json;
    // console.log(data);
}).then(function(){
    for(let item in data){
        // console.log(data[item])
        option = new Option(data[item], item);
        country.add(option);
    }
})


