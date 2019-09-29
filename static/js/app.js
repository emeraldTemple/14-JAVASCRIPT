// from data.js
var tableData = data;
// YOUR CODE HERE!
// get data in arrays
tbody = d3.select("tbody");

function getSet(search, category, list){
    return list.filter(function(){
        return obj.category == search
    })
};
// get all site dates
var sightDates = data.map(function(sightObj) {
    return sightObj.datetime;
});
// get unique site dates
var sortDateList = sightDates.filter(function (elem, pos) {
    return sightDates.indexOf(elem) == pos;
});

var sightListArr = [
sightDateList = [],
sightCityList = [],
sightStateList = [],
sightCountryList = [],
sightShapeList = [],
sightDurationList = [],
sightCommentList =[]
]


//function to populate page
function displayData(tableData){ 

    tableData.forEach(function(obj){
    newRow = tbody.append("tr");
    Object.entries(obj).forEach(function([key, value]){
        newCell = newRow.append("td").text(value);
    })
    
})}

function displayHead(tableData){

    tableData.forEach(function(obj){
        Object.entries(obj).forEach(function([key, value]){
            switch(key) {
                case "datetime":
                    sightDateList.push(value);
                  break;
                case "city":
                    sightCityList.push(value);
                  break;
                case "state":
                    sightStateList.push(value);
                    break;
                case "country":
                    sightCountryList.push(value);
                    break;
                case "shape":
                    sightShapeList.push(value);
                    break;
                case "durationMinutes":
                    sightDurationList.push(value);
                    break;
                case "comments":
                    sightCommentList.push(value);
                    break;
              }
        })
        
    })


var uniqueDates = sightDateList.filter(function(elem, pos) {
        return sightDateList.indexOf(elem) == pos;
})

var uniqueCities = sightCityList.filter(function(elem, pos) {
    return sightCityList.indexOf(elem) == pos;
})
var uniqueStates = sightStateList.filter(function(elem, pos) {
    return sightStateList.indexOf(elem) == pos;
})

var uniqueCountry = sightCountryList.filter(function(elem, pos) {
return sightCountryList.indexOf(elem) == pos;
})

var uniqueShape = sightShapeList.filter(function(elem, pos) {
    return sightShapeList.indexOf(elem) == pos;
})
var uniqueDuration = sightDurationList.filter(function(elem, pos) {
    return sightDurationList.indexOf(elem) == pos;
})

var uniqueComment = sightCommentList.filter(function(elem, pos) {
return sightCommentList.indexOf(elem) == pos;
})

    uniqueDates.forEach(function(stDates){
        newOpt = d3.select("#Date")
        .append("option")
        .text(stDates);
        var val = newOpt.property("value");
        d3.selectAll("select").on("change", handleSubmit);
    });
    uniqueCities.forEach(function(city){
        newOpt = d3.select("#City").append("option").text(city);
    });
    uniqueStates.forEach(function(st){
        newOpt = d3.select("#State").append("option").text(st);
    });
    uniqueCountry.forEach(function(org){
        newOpt = d3.select("#Country").append("option").text(org);
    });
    uniqueShape.forEach(function(shp){
        newOpt = d3.select("#Shape").append("option").text(shp);
    });
    uniqueDuration.forEach(function(dur){
        newOpt = d3.select("#Duration").append("option").text(dur);
    });
    uniqueComment.forEach(function(comm){
        newOpt = d3.select("#Comments").append("option").text(comm);
    });


};

//populate page
displayData(tableData);
displayHead(tableData);


// submit page with new data set chosen from the select value
function handleSubmit() {
    var value = d3.select(this).property("value");
    var elemId = d3.select(this).attr('id');
    alert('obj.'+ elemId + value)
    var dataSet = tableData.filter(function(value, elemId){ return obj.elemId == value; })
    alert('here');
    tbody.selectAll("*").remove();
    displayData(dataSet);
} 

//d3.select("#filter-btn").on("click", handleSubmit(this));
