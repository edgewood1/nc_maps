

var width = 960,
    height = 1160;

// Similarly, we can extract the definition of the projection to make the code clearer:


var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);




d3.json("uk.json", function (error, uk) {
    if (error) return console.error(error);
    // var subunits = topojson.feature(uk, uk.objects.subunits);
    // svg.append("path")
    //     .datum(topojson.feature(uk, uk.objects.subunits))
    //     // .attr("d", path);
    //     .attr("d", d3.geo.path().projection(d3.geo.mercator()));
 

    var projection = d3.geo.mercator()
    //this moves the map up and down 
        .scale(400)
    // hight goes up and down on the screen
        .translate([width / 2, height / 2]);
    // And likewise the path generator:

    var path = d3.geo.path()
        .projection(projection);

    svg.append("path")
        .datum(subunits)
        .attr("d", path);

    var subunits = topojson.feature(uk, uk.objects.subunits);

    var projection = d3.geo.albers()
        .center([0, 55.4])
        .rotate([4.4, 0])
        .parallels([50, 60])
        .scale(6000)
        .translate([width / 2, height / 2]);

    svg.selectAll(".subunit")
        .data(topojson.feature(uk, uk.objects.subunits).features)
        .enter().append("path")
        .attr("class", function (d) { return "subunit " + d.id; })
        .attr("d", path);
    // We can also compute the "class" attribute as a function of data, so that in addition to the subunit class, each country has a three-letter class corresponding to its ISO-3166 alpha-3 country code. These allow us to apply separate fill styles for each country:




});





