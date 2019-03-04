

console.log("hi");
var stepSel = d3.selectAll(".step");
console.log(stepSel.nodes());
	
var test = d3.select(`[data-index='0']`);
console.log(test.nodes());


function updateChart(index){

	console.log(index);

	var sel = d3.select(`[data-index='${index}']`);
	var color = sel.attr("specialColor");

	d3.select("div.chart").style("background-color", color);


}



enterView({
	selector: stepSel.nodes(),
	offset: 0.5,
	enter: el => {
		//get current index
		var index = +d3.select(el).attr('data-index');
		updateChart(index);
	},
	exit: el => {
		var index = +d3.select(el).attr('data-index');
		index = Math.max(0, index - 1);
		updateChart(index);	
	}
});








