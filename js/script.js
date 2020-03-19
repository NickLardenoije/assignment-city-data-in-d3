map = d3.select("body").append("svg");

map.attr("viewbox", "0 0 720 360").attr("width", 720).attr("height", 360);

map.selectAll("rect").data(cities).enter().append("rect")
    .attr("x", (d) => (d.longitude + 180)* 2)
    .attr("y", (d) => (90 - d.latitude)* 2)
    .attr("width", 3)
    .attr("height", 3)
    .attr("rx", 0)
    .attr("ry", 0)
    .style("fill", "red");

d3.select("body").append("button").text("rect")
    .on("click", () => {
        map.selectAll("circle").remove();
        map.selectAll("rect").remove();
        map.selectAll("rect")
            .data(cities).enter().append("rect")
            .attr("x", (d) => (d.longitude + 180)* 2)
            .attr("y", (d) => (90 - d.latitude)* 2)
            .attr("width", 3)
            .attr("height", 3)
            .attr("rx", 0)
            .attr("ry", 0)
            .style("fill", "red");        
    })
d3.select("body").append("button").text("circle")
    .on("click", () =>{
        map.selectAll("rect").remove();
        map.selectAll("circle").remove();
        map.selectAll("circle")
            .data(cities).enter().append("circle")
            .attr("cx", (d) => (d.longitude + 180)* 2)
            .attr("cy", (d) => (90 - d.latitude)* 2)
            .attr("r", 0.5)
            .style("fill", "orange");

    })