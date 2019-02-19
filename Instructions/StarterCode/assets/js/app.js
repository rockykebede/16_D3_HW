// @TODO: YOUR CODE HERE!
// D3 Animated Scatter Plot

// Section 1: Pre-Data Setup


//Setting up the width and he height
// Referncing the width of the scatter box
var width = parseInt(d3.select("#scatter").style("width"));

// Variable Height of the graph
var height = width - width / 4.5;

// Variable Margin for the graph
var margin = 30;


//Var SVG to select from the scatter ID
// and append it with the width and height
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

// Creating the radius for each circle through the crget 
//function
var circRadius;
function crGet() {
  if (width <= 450) {
    circRadius = 4;
  }
  else {
    circRadius = 8;
  }
}
crGet();

// I have not attempted to do the Lvel 2 challenging question.
// i also had didfficulty in labeling