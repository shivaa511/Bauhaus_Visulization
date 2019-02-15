
//Global Variable Declaration

var margin = {top: 66, right: 110, bottom: 20, left: 188},
    width = document.body.clientWidth - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom,
    innerHeight = height - 2;

var devicePixelRatio = window.devicePixelRatio || 1;
var CommonWeight = 7.69;

var Temp_beityp;   
var Temp_emp;
var Temp_degr;
var Temp_hoefl;
var Temp_ehrl;
var Temp_posemo;
var Temp_negemo;
var Temp_humor;
var Temp_frage;
var Temp_korr;
var Temp_zus;
var Temp_meta;
var Temp_mod;
var FinalValue;
var color = d3.scaleOrdinal()
  .domain(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
  .range(["#DB7F85", "#50AB84", "#4C6C86", "#C47DCB", "#B59248", "#DD6CA7", "#E15E5A", "#5DA5B3", "#725D82", "#54AF52", "#954D56", "#8C92E8", "#D8597D", "#AB9C27", "#D67D4B", "#D58323", "#BA89AD", "#357468", "#8F86C2", "#7D9E33", "#517C3F", "#9D5130", "#5E9ACF", "#776327", "#944F7E"]);

var types = {
  "Number": {
    key: "Number",
    coerce: function(d) { return +d; },
    extent: d3.extent,
    within: function(d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
    defaultScale: d3.scaleLinear().range([innerHeight, 0])
  },
  "String": {
    key: "String",
    coerce: String,
    extent: function (data) { return data.sort(); },
    within: function(d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
    defaultScale: d3.scalePoint().range([0, innerHeight])
  },
  "Date": {
    key: "Date",
    coerce: function(d) { return new Date(d); },
    extent: d3.extent,
    within: function(d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
    defaultScale: d3.scaleTime().range([innerHeight, 0])
  }
};
var dimensions;
var selected_dimensions; // adding in new var showing selected dims
//alert(dimensions);
 function buttonscript() {
   attribute = document.getElementById("mySelect").value;

   // see whether inside the current selection
   var found = false;
   var found_index = -1;
   for(var i = 0; i < selected_dimensions.length; i++) {
     if(selected_dimensions[i].key == attribute) {
      found = true;
      found_index = i;
      break;
     }
   }

   // if found remove, if not add
   if(found) {
     selected_dimensions.splice(found_index, 1);
   } else {
     selected_dimensions.push(dimensions[attribute]);
   }
   console.log(selected_dimensions);
}  

dimensions = { "Artikelnr": {
    key: "Artikelnr",
    description: "Artikelnr",
    type: types["Number"],
    axis: d3.axisLeft()
      .tickFormat(function(d,i) {
        return d;
      })
  },

  "Gesamtnr": 
  {
    key: "Gesamtnr",
    description: "Gesamtnr",
    type: types["Number"]
  },
  "coder": 
  {
    key: "coder",
    description: "coder",
    type: types["Number"]
  },
  "medium": 
  {
    key: "medium",
    type: types["Number"],
    description: "medium",
    
  },
 /*
  {
    key: "typ_diskber",
    description: "typ_diskber",
    type: types["Number"]
  },
  
	 {
    key: "f_anzbeit",
    description: "f_anzbeit",
    type: types["Number"]
  },

  
	{
    key: "f_accalter",
    description: "f_accalter",
    type: types["Number"]
  },
  {
    key: "f_posBewRed",
    description: "f_posBewRed",
    type: types["Number"]
  },
  
{
    key: "posbew",
    description: "posbew",
    type: types["Number"]
  },	
	
{
    key: "f_negbew",
    description: "f_negbew",
    type: types["Number"]
  },	
	
		
{
    key: "klarname",
    description: "klarname",
    type: types["Number"]
  },	
{
    key: "journalist",
    description: "journalist",
    type: types["Number"]
  },	
{
    key: "f_kommtyp",
    description: "f_kommtyp",
    type: types["Number"]
  },		
	
{
    key: "ausg_nr",
    description: "ausg_nr",
    type: types["Number"]
  },	
	


{
    key: "ausg_umf",
    description: "ausg_umf",
    type: types["Number"]
  },		
{
    key: "ausg_posReakNut",
    description: "ausg_posReakNut",
    type: types["Number"]
  },
{
    key: "ausg_posReakRed",
    description: "ausg_posReakNut",
    type: types["Number"]
  },	
{
    key: "ausg_negReakNut",
    description: "ausg_negReakNut",
    type: types["Number"]
  },	
{
    key: "ausg_beityp",
    description: "ausg_beityp",
    type: types["Number"]
  },	
{
    key: "ausg_begrtyp",
    description: "ausg_begrtyp",
    type: types["Number"]
  },			
{
    key: "ausg_adr",
    description: "ausg_adr",
    type: types["Number"]
  },	
{
    key: "ausg_emp",
    description: "ausg_emp",
    type: types["Number"]
  },	
{
    key: "ausg_degr",
    description: "ausg_degr",
    type: types["Number"]
  },	
{
    key: "ausg_hoefl",
    description: "ausg_hoefl",
    type: types["Number"]
  },	
{
    key: "ausg_ehrl",
    description: "ausg_ehrl",
    type: types["Number"]
  },	
{
    key: "ausg_posemo",
    description: "ausg_posemo",
    type: types["Number"]
  },	
	
{
    key: "ausg_negemo",
    description: "ausg_negemo",
    type: types["Number"]
  },		
{
    key: "ausg_zielnegemo",
    description: "ausg_zielnegemo",
    type: types["Number"]
  },	
{
    key: "ausg_humor",
    description: "ausg_humor",
    type: types["Number"]
  },	
{
    key: "ausg_frage",
    description: "ausg_frage",
    type: types["Number"]
  },	
{
    key: "ausg_zus",
    description: "ausg_zus",
    type: types["Number"]
  },	
{
    key: "ausg_meta",
    description: "ausg_meta",
    type: types["Number"]
  },	
	
	
{
    key: "ausg_mod",
    description: "ausg_mod",
    type: types["Number"]
  },	
{
    key: "ausg_spr1",
    description: "ausg_spr1",
    type: types["Number"]
  },	
		
	
{
    key: "ausg_spr2",
    description: "ausg_spr2",
    type: types["Number"]
  },	
	
	
{
    key: "ausg_leg1",
    description: "ausg_leg1",
    type: types["Number"]
  },	
{
    key: "ausg_leg2",
    description: "ausg_leg2",
    type: types["Number"]
  },	
{
    key: "ausg_obgrpos",
    description: "ausg_obgrpos",
    type: types["Number"]
  },	
	
	
	
{
    key: "ausg_fluechtl",
    description: "ausg_fluechtl",
    type: types["Number"]
  },	
{
    key: "beznr_komm",
    description: "beznr_komm",
    type: types["Number"]
  },	
{
    key: "antw_nr",
    description: "antw_nr",
    type: types["Number"]
  },	
{
    key: "antw_sicht",
    description: "antw_sicht",
    type: types["Number"]
  },		
		
	
	
{
    key: "antw_datzeit",
    description: "antw_datzeit",
    type: types["Number"]
  },	
{
    key: "antw_umf",
    description: "antw_umf",
    type: types["Number"]
  },	
{
    key: "antw_posReakNut",
    description: "antw_posReakNut",
    type: types["Number"]
  },	
{
    key: "antw_posReakRed",
    description: "antw_posReakRed",
    type: types["Number"]
  },		
{
    key: "antw_negReakNut",
    description: "antw_negReakNut",
    type: types["Number"]
  },	
  {
    key: "acc_nam",
    description: "acc_name",
    type: types["String"]
  },*/
};



selected_dimensions = [
 

  {
    key: "beityp",
    description: "beityp",
    type: types["String"],
    axis: d3.axisLeft()
      .tickFormat(function(d,i) {
          if ( d == 222)
              return d + "Temporay Text";
          return d;
      })
  },

 {
    key: "emp",
    description: "emp",
    type: types["Number"]
  },

 {
    key: "degr",
    description: "degr",
    type: types["Number"]
  },

 {
    key: "hoefl",
    description: "hoefl",
    type: types["Number"]
  },


{
    key: "ehrl",
    description: "ehrl",
    type: types["Number"]
  },

{
    key: "posemo",
    description: "posemo",
    type: types["Number"]
  },


{
    key: "negemo",
    description: "negemo",
    type: types["Number"]
  },




{
    key: "humor",
    description: "humor",
    type: types["Number"]
  },




{
    key: "frage",
    description: "frage",
    type: types["Number"]
  },


{
    key: "korr",
    description: "korr",
    type: types["Number"]
  },



{
    key: "zus",
    description: "zus",
    type: types["Number"]
  },


{
    key: "meta",
    description: "meta",
    type: types["Number"]
  },

{
    key: "mod",
    description: "mod",
    type: types["Number"]
  },




  /*{
    key: "coder",
    description: "coder",
    type: types["Number"]
  },
    
  {
    key: "medium",
    type: types["Number"],
    description: "medium",
    
  },
 
  {
    key: "typ_diskber",
    description: "typ_diskber",
    type: types["Number"]
  },
  
	 {
    key: "f_anzbeit",
    description: "f_anzbeit",
    type: types["Number"]
  },

  
	{
    key: "f_accalter",
    description: "f_accalter",
    type: types["Number"]
  },
  {
    key: "f_posBewRed",
    description: "f_posBewRed",
    type: types["Number"]
  },
  
{
    key: "posbew",
    description: "posbew",
    type: types["Number"]
  },	
	
{
    key: "f_negbew",
    description: "f_negbew",
    type: types["Number"]
  },	
	
		
{
    key: "klarname",
    description: "klarname",
    type: types["Number"]
  },	
{
    key: "journalist",
    description: "journalist",
    type: types["Number"]
  },	
{
    key: "f_kommtyp",
    description: "f_kommtyp",
    type: types["Number"]
  },		
	
{
    key: "ausg_nr",
    description: "ausg_nr",
    type: types["Number"]
  },	
	


{
    key: "ausg_umf",
    description: "ausg_umf",
    type: types["Number"]
  },		
{
    key: "ausg_posReakNut",
    description: "ausg_posReakNut",
    type: types["Number"]
  },
{
    key: "ausg_posReakRed",
    description: "ausg_posReakNut",
    type: types["Number"]
  },	
{
    key: "ausg_negReakNut",
    description: "ausg_negReakNut",
    type: types["Number"]
  },	
{
    key: "ausg_beityp",
    description: "ausg_beityp",
    type: types["Number"]
  },	
{
    key: "ausg_begrtyp",
    description: "ausg_begrtyp",
    type: types["Number"]
  },			
{
    key: "ausg_adr",
    description: "ausg_adr",
    type: types["Number"]
  },	
{
    key: "ausg_emp",
    description: "ausg_emp",
    type: types["Number"]
  },	
{
    key: "ausg_degr",
    description: "ausg_degr",
    type: types["Number"]
  },	
{
    key: "ausg_hoefl",
    description: "ausg_hoefl",
    type: types["Number"]
  },	
{
    key: "ausg_ehrl",
    description: "ausg_ehrl",
    type: types["Number"]
  },	
{
    key: "ausg_posemo",
    description: "ausg_posemo",
    type: types["Number"]
  },	
	
{
    key: "ausg_negemo",
    description: "ausg_negemo",
    type: types["Number"]
  },		
{
    key: "ausg_zielnegemo",
    description: "ausg_zielnegemo",
    type: types["Number"]
  },	
{
    key: "ausg_humor",
    description: "ausg_humor",
    type: types["Number"]
  },	
{
    key: "ausg_frage",
    description: "ausg_frage",
    type: types["Number"]
  },	
{
    key: "ausg_zus",
    description: "ausg_zus",
    type: types["Number"]
  },	
{
    key: "ausg_meta",
    description: "ausg_meta",
    type: types["Number"]
  },	
	
	
{
    key: "ausg_mod",
    description: "ausg_mod",
    type: types["Number"]
  },	
{
    key: "ausg_spr1",
    description: "ausg_spr1",
    type: types["Number"]
  },	
		
	
{
    key: "ausg_spr2",
    description: "ausg_spr2",
    type: types["Number"]
  },	
	
	
{
    key: "ausg_leg1",
    description: "ausg_leg1",
    type: types["Number"]
  },	
{
    key: "ausg_leg2",
    description: "ausg_leg2",
    type: types["Number"]
  },	
{
    key: "ausg_obgrpos",
    description: "ausg_obgrpos",
    type: types["Number"]
  },	
	
	
	
{
    key: "ausg_fluechtl",
    description: "ausg_fluechtl",
    type: types["Number"]
  },	
{
    key: "beznr_komm",
    description: "beznr_komm",
    type: types["Number"]
  },	
{
    key: "antw_nr",
    description: "antw_nr",
    type: types["Number"]
  },	
{
    key: "antw_sicht",
    description: "antw_sicht",
    type: types["Number"]
  },		
		
	
	
{
    key: "antw_datzeit",
    description: "antw_datzeit",
    type: types["Number"]
  },	
{
    key: "antw_umf",
    description: "antw_umf",
    type: types["Number"]
  },	
{
    key: "antw_posReakNut",
    description: "antw_posReakNut",
    type: types["Number"]
  },	
{
    key: "antw_posReakRed",
    description: "antw_posReakRed",
    type: types["Number"]
  },		
{
    key: "antw_negReakNut",
    description: "antw_negReakNut",
    type: types["Number"]
  },	
  {
    key: "acc_nam",
    description: "acc_name",
    type: types["String"]
  },*/
];
document.getElementById('1a').value = CommonWeight;
function updateTextInput1(val) {
          document.getElementById('1a').value=val; 
        }


document.getElementById('2a').value = CommonWeight; 

function updateTextInput2(val) {
          document.getElementById('2a').value=val; 
        }
document.getElementById('3a').value = CommonWeight; 
function updateTextInput3(val) {
          document.getElementById('3a').value=val; 
        }
document.getElementById('4a').value = CommonWeight; 
function updateTextInput4(val) {
          document.getElementById('4a').value=val; 
        }
document.getElementById('5a').value = CommonWeight; 
function updateTextInput5(val) {
          document.getElementById('5a').value=val; 
        }
document.getElementById('6a').value = CommonWeight;
function updateTextInput6(val) {
          document.getElementById('6a').value=val; 
        }
document.getElementById('7a').value = CommonWeight; 
function updateTextInput7(val) {
          document.getElementById('7a').value=val; 
        }
document.getElementById('8a').value = CommonWeight; 
function updateTextInput8(val) {
          document.getElementById('8a').value=val; 
        }
document.getElementById('9a').value = CommonWeight;
function updateTextInput9(val) {
          document.getElementById('9a').value=val; 
        }
document.getElementById('10a').value = CommonWeight; 
function updateTextInput10(val) {
          document.getElementById('10a').value=val; 
        }
document.getElementById('11a').value = CommonWeight; 
function updateTextInput11(val) {
          document.getElementById('11a').value=val; 
        }
document.getElementById('12a').value = CommonWeight; 
function updateTextInput12(val) {
          document.getElementById('12a').value=val; 
        }
document.getElementById('13a').value = CommonWeight;
function updateTextInput13(val) {
          document.getElementById('13a').value=val; 
        }
/*document.getElementById('14a').value = CommonWeight; 
document.getElementById('15a').value = CommonWeight; 
document.getElementById('16a').value = CommonWeight; 
document.getElementById('17a').value = CommonWeight; 
document.getElementById('18a').value = CommonWeight; 
document.getElementById('19a').value = CommonWeight; 
document.getElementById('20a').value = CommonWeight; 
document.getElementById('21a').value = CommonWeight; 
document.getElementById('22a').value = CommonWeight; 
document.getElementById('23a').value = CommonWeight; 
document.getElementById('24a').value = CommonWeight; 
document.getElementById('25a').value = CommonWeight; 
document.getElementById('26a').value = CommonWeight;
document.getElementById('27a').value = CommonWeight;*/


console.log(dimensions);
var xscale = d3.scalePoint()
    .domain(d3.range(selected_dimensions.length))
    .range([0, width]);

var yAxis = d3.axisLeft();

var container = d3.select("body").append("div")
    .attr("class", "parcoords")
    .style("width", width + margin.left + margin.right + "px")
    .style("height", height + margin.top + margin.bottom + "px");

var svg = container.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var canvas = container.append("canvas")
    .attr("width", width * devicePixelRatio)
    .attr("height", height * devicePixelRatio)
    .style("width", width + "px")
    .style("height", height + "px")
    .style("margin-top", margin.top + "px")
    .style("margin-left", margin.left + "px");

var ctx = canvas.node().getContext("2d");
ctx.globalCompositeOperation = 'darken';
ctx.globalAlpha = 0.15;
ctx.lineWidth = 1.5;
ctx.scale(devicePixelRatio, devicePixelRatio);

var output = d3.select("body").append("pre");

var axes = svg.selectAll(".axis")
    .data(selected_dimensions)
  .enter().append("g")
    .attr("class", function(d) { return "axis " + d.key.replace(/ /g, "_"); })
    .attr("transform", function(d,i) { return "translate(" + xscale(i) + ")"; });

d3.csv("Comments124.csv", function(error, data) {
  
  if (error) throw error;

  data.forEach(function(d) {
    selected_dimensions.forEach(function(p) {
      d[p.key] = !d[p.key] ? null : p.type.coerce(d[p.key]);
		
        
    });

    // truncate long text strings to fit in data table
    for (var key in d) {
      if (d[key] && d[key].length > 35) d[key] = d[key].slice(0,36);
    }
  });
 
  /*var ausg_beitypAvg = d3.mean(data, function(d) { return d.antw_beityp; });
    document.getElementById('1a').value = ausg_beitypAvg.toFixed(2);
  var antw_beitypAvg = d3.mean(data, function(d) { return d.antw_beityp; });
    document.getElementById('2a').value = antw_beitypAvg.toFixed(2);
  var ausg_empAvg = d3.mean(data, function(d) { return d.ausg_emp; });
    document.getElementById('3a').value = ausg_empAvg.toFixed(2);
  var antw_empAvg = d3.mean(data, function(d) { return d.antw_emp; });
    document.getElementById('4a').value = antw_empAvg.toFixed(2);
  var ausg_degrAvg = d3.mean(data, function(d) { return d.ausg_degr; });
    document.getElementById('5a').value = ausg_degrAvg.toFixed(2);
  var antw_degrAvg = d3.mean(data, function(d) { return d.antw_degr; });
    document.getElementById('6a').value = antw_degrAvg.toFixed(2);
  var ausg_hoeflAvg = d3.mean(data, function(d) { return d.ausg_hoefl; });
    document.getElementById('7a').value = ausg_hoeflAvg.toFixed(2);
  var antw_hoeflAvg = d3.mean(data, function(d) { return d.antw_hoefl; });
    document.getElementById('8a').value = antw_hoeflAvg.toFixed(2);
  var ausg_ehrlAvg = d3.mean(data, function(d) { return d.ausg_ehrl; });
    document.getElementById('9a').value = ausg_ehrlAvg.toFixed(2);
  var antw_ehrlAvg = d3.mean(data, function(d) { return d.antw_ehrl; });
    document.getElementById('10a').value = antw_ehrlAvg.toFixed(2);
  var ausg_posemoAvg = d3.mean(data, function(d) { return d.ausg_posemo; });
    document.getElementById('11a').value = ausg_posemoAvg.toFixed(2);
  var antw_posemoAvg = d3.mean(data, function(d) { return d.antw_posemo; });
    document.getElementById('12a').value = antw_posemoAvg.toFixed(2); 
  var ausg_negemoAvg = d3.mean(data, function(d) { return d.ausg_negemo; });
    document.getElementById('13a').value = ausg_negemoAvg.toFixed(2);
  var antw_negemoAvg = d3.mean(data, function(d) { return d.antw_negemo; });
    document.getElementById('14a').value = antw_negemoAvg.toFixed(2);
  var ausg_humorAvg = d3.mean(data, function(d) { return d.ausg_humor; });
    document.getElementById('15a').value = ausg_humorAvg.toFixed(2);
  var antw_humorAvg = d3.mean(data, function(d) { return d.antw_humor; });
    document.getElementById('16a').value = antw_humorAvg.toFixed(2);
  var ausg_frageAvg = d3.mean(data, function(d) { return d.ausg_frage; });
    document.getElementById('17a').value = ausg_frageAvg.toFixed(2);
  var antw_frageAvg = d3.mean(data, function(d) { return d.antw_frage; });
    document.getElementById('18a').value = antw_frageAvg.toFixed(2); 
  var ausg_korrAvg = d3.mean(data, function(d) { return d.ausg_korr; });
    document.getElementById('19a').value = ausg_korrAvg.toFixed(2);
  var antw_korrAvg = d3.mean(data, function(d) { return d.antw_korr; });
    document.getElementById('20a').value = antw_korrAvg.toFixed(2);
  var ausg_zusAvg = d3.mean(data, function(d) { return d.antw_zus; });
    document.getElementById('21a').value = antw_zusAvg;
  var antw_zusAvg = d3.mean(data, function(d) { return d.antw_zus; });
    document.getElementById('22a').value = antw_zusAvg.toFixed(2);
  var ausg_metaAvg = d3.mean(data, function(d) { return d.ausg_meta; });
    document.getElementById('23a').value = ausg_metaAvg.toFixed(2);
  var antw_metaAvg = d3.mean(data, function(d) { return d.antw_meta; });
    document.getElementById('24a').value = antw_metaAvg.toFixed(2);
  var ausg_modAvg = d3.mean(data, function(d) { return d.ausg_mod; });
    document.getElementById('25a').value = ausg_modAvg.toFixed(2); 
  var antw_modAvg = d3.mean(data, function(d) { return d.antw_mod; });
    document.getElementById('26a').value = antw_modAvg.toFixed(2);*/
  

  // type/dimension default setting happens here
  selected_dimensions.forEach(function(dim) {
    if (!("domain" in dim)) {
      // detect domain using dimension type's extent function
      dim.domain = d3_functor(dim.type.extent)(data.map(function(d) { return d[dim.key]; }));
    }
    if (!("scale" in dim)) {
      // use type's default scale for dimension
      dim.scale = dim.type.defaultScale.copy();
    }
    dim.scale.domain(dim.domain);
  });

  var render = renderQueue(draw).rate(30);

  ctx.clearRect(0,0,width,height);
  ctx.globalAlpha = d3.min([1.15/Math.pow(data.length,0.3),1]);
  render(data);

  axes.append("g")
      .each(function(d) {
        var renderAxis = "axis" in d
          ? d.axis.scale(d.scale)  // custom axis
          : yAxis.scale(d.scale);  // default axis
        d3.select(this).call(renderAxis);
      })
    .append("text")
      .attr("class", "title")
      .attr("text-anchor", "start")
      .text(function(d) { return "description" in d ? d.description : d.key; });

  // Add and store a brush for each axis.
  axes.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(d.brush = d3.brushY()
          .extent([[-10,0], [10,height]])
          .on("start", brushstart)
          .on("brush", brush)
          .on("end", brush)
        )
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 26);

  d3.selectAll(".axis.beityp .tick text")
    .style("fill", color);
    
  output.text(d3.tsvFormat(data.slice(0,24)));
  output.on({
      "mouseover": function(d) { axes.highlight([d]) },
      "mouseout": axes.unhighlight
    });

  function project(d) {
    return selected_dimensions.map(function(p,i) {
      // check if data element has property and contains a value
      if (
        !(p.key in d) ||
        d[p.key] === null
      ) return null;

      return [xscale(i),p.scale(d[p.key])];
    });
  };

  function draw(d) {
    ctx.strokeStyle = color(d.beityp);
    ctx.beginPath();
    var coords = project(d);
    coords.forEach(function(p,i) {
      // this tricky bit avoids rendering null values as 0
      if (p === null) {
        // this bit renders horizontal lines on the previous/next
        // dimensions, so that sandwiched null values are visible
        if (i > 0) {
          var prev = coords[i-1];
          if (prev !== null) {
            ctx.moveTo(prev[0],prev[1]);
            ctx.lineTo(prev[0]+6,prev[1]);
          }
        }
        if (i < coords.length-1) {
          var next = coords[i+1];
          if (next !== null) {
            ctx.moveTo(next[0]-6,next[1]);
          }
        }
        return;
      }
      
      if (i == 0) {
        ctx.moveTo(p[0],p[1]);
        return;
      }

      ctx.lineTo(p[0],p[1]);
    });
    ctx.stroke();
  }

  function brushstart() {
    d3.event.sourceEvent.stopPropagation();
  }

  // Handles a brush event, toggling the display of foreground lines.
  function brush() {
    render.invalidate();

    var actives = [];
    svg.selectAll(".axis .brush")
      .filter(function(d) {
        return d3.brushSelection(this);
      })
      .each(function(d) {
        actives.push({
          dimension: d,
          extent: d3.brushSelection(this)
        });
      });

    var selected = data.filter(function(d) {
      if (actives.every(function(active) {
          var dim = active.dimension;
          // test if point is within extents for each active brush
          return dim.type.within(d[dim.key], active.extent, dim);
        })) {
        return true;
      }
    });

    // show ticks for active brush dimensions
    // and filter ticks to only those within brush extents
    /*
    svg.selectAll(".axis")
        .filter(function(d) {
          return actives.indexOf(d) > -1 ? true : false;
        })
        .classed("active", true)
        .each(function(dimension, i) {
          var extent = extents[i];
          d3.select(this)
            .selectAll(".tick text")
            .style("display", function(d) {
              var value = dimension.type.coerce(d);
              return dimension.type.within(value, extent, dimension) ? null : "none";
            });
        });

    // reset dimensions without active brushes
    svg.selectAll(".axis")
        .filter(function(d) {
          return actives.indexOf(d) > -1 ? false : true;
        })
        .classed("active", false)
        .selectAll(".tick text")
          .style("display", null);
    */

    ctx.clearRect(0,0,width,height);
    ctx.globalAlpha = d3.min([0.85/Math.pow(selected.length,0.3),1]);
    render(selected);

    output.text(d3.tsvFormat(selected.slice(0,24)));
  }
});
/*function total()
{
var a1 = document.getElementById("1a");
var a2 = document.getElementById("2a");
var a3 = document.getElementById("3a");
var a3 = document.getElementById("1a");
var a4 = document.getElementById("4a");
var a5 = document.getElementById("5a");
var a6 = document.getElementById("6a");
var a7 = document.getElementById("7a");
var a8 = document.getElementById("8a");
var a9 = document.getElementById("9a");
var a10 = document.getElementById("10a");
var a11 = document.getElementById("11a");
var a12 = document.getElementById("12a");
var a13 = document.getElementById("13a");
var a14 = document.getElementById("14a");
var a15 = document.getElementById("15a");
var a16 = document.getElementById("16a");
var a17 = document.getElementById("17a");
var a18 = document.getElementById("18a");
var a19 = document.getElementById("19a");
var a20 = document.getElementById("20a");
var a21 = document.getElementById("21a");
var a22 = document.getElementById("22a");
var a23 = document.getElementById("23a");
var a24 = document.getElementById("24a");
var a25 = document.getElementById("25a");
var a26 = document.getElementById("26a");

if((a1.value=="") || (a2.value=="") || (a3.value=="") || (a4.value=="") || (a5.value=="") || (a6.value=="") || (a7.value=="") || (a8.value=="") || (a9.value=="") || (a10.value=="") || (a11.value=="") || (a12.value=="") || (a13.value=="") || (a14.value=="") || (a15.value=="") || (a16.value=="") || (a17.value=="") || (a18.value=="") || (a19.value=="") || (a20.value=="") || (a21.value=="") || (a22.value=="") || (a23.value=="") || (a24.value=="") || (a25.value=="") || (a26.value==""))
    
{
    a1.value = 0;
    a2.value = 0;
    a3.value = 0;
    a4.value = 0;
    a5.value = 0;
    a6.value = 0;
    a7.value = 0;
    a8.value = 0;
    a9.value = 0;
    a10.value = 0;
    a11.value = 0;
    a12.value = 0;
    a13.value = 0;
    a14.value = 0;
    a15.value = 0;
    a16.value = 0;
    a17.value = 0;
    a18.value = 0;
    a19.value = 0;
    a20.value = 0;
    a21.value = 0;
    a22.value = 0;
    a23.value = 0;
    a24.value = 0;
    a25.value = 0;
    a26.value = 0;
    
}

var total1 = (a1.value + a2.value + a3.value + a4.value + a5.value + a6.value + a7.value + a8.value + a9.value + a10.value + a11.value + a12.value + a13.value + a14.value + a15.value + a16.value + a17.value + a18.value + a19.value + a20.value + a21.value + a22.value + a23.value + a24.value + a25.value + a26.value);

var total2 = (total1/26);
document.getElementById("total").value=total2.toFixed(2);
}*/




var beitypVal;
var btn = document.getElementById("calc");
btn.addEventListener("click", function() {
 d3.csv("Comments124.csv", function(data) {
  data.forEach(function(d) {
      d.beityp = +d.beityp
      if (d.beityp == 20 || d.beityp == 21 || d.beityp == 211)
          {
              beitypVal = 0.0;
              Temp_beityp =  beitypVal * document.getElementById("1a").value ;
              console.log(Temp_beityp);
          }
      else if (d.beityp == 201 || d.beityp == 213 || d.beityp == 214 || d.beityp == 22 ||d.beityp == 221)
          {
              beitypVal = 0.25;
              Temp_beityp =  beitypVal * document.getElementById("1a").value ;
              console.log(Temp_beityp);
          }
      else if (d.beityp == 202 || d.beityp == 212 || d.beityp == 223 || d.beityp == 224 )
          {
              beitypVal = 0.50;
              Temp_beityp =  beitypVal * document.getElementById("1a").value ;
              console.log(Temp_beityp);
          }
	  else 
          {
              Temp_beityp =  1 * document.getElementById("1a").value ;
              console.log(Temp_beityp);
          }
      
      
      
      d.emp = +d.emp
      
      if (d.emp == 1 || d.emp == 2 )
          {
              empVal = 1.0;
              Temp_emp =  empVal * document.getElementById("2a").value ;
              
          }
      else 
          {
              Temp_emp =  0 * document.getElementById("2a").value ;
              
              }
      
      //console.log(Temp_emp);
      
      
      
      d.degr = +d.degr
      
      if (d.degr == 1 || d.degr == 2 || d.degr == 3 || d.degr == 4 || d.degr == 9)
          {
              degrVal = -1.0;
              Temp_degr =  degrVal * document.getElementById("3a").value ;
              
          }
      else 
          {
              Temp_degr =  0 * document.getElementById("3a").value ;
              
        }
      
      
      
      
      d.hoefl = +d.hoefl
      Temp_hoefl =  d.hoefl * document.getElementById("4a").value ;
      //console.log(Tempantw_hoefl);
      
      
      d.ehrl = +d.ehrl
      
      if (d.ehrl == 1 || d.ehrl == 2 || d.ehrl == 3 || d.ehrl == 4 || d.ehrl== 9)
          {
              ehrlVal = 1.0;
              Temp_ehrl =  ehrlVal * document.getElementById("5a").value ;
              
          }
      else 
          {
              Temp_ehrl =  0 * document.getElementById("5a").value ;
              
        }
            
   
      
      d.posemo = +d.posemo
      
       if (d.posemo == 10 || d.posemo == 11 || d.posemo == 13)
          {
              posemoVal = 1.0;
              Temp_posemo =  posemoVal * document.getElementById("6a").value ;
              
          }
      else 
          {
              Temp_posemo =  0 * document.getElementById("6a").value ;
              
        }
         
     

      d.negemo = +d.negemo
      
      if (d.negemo == 11 || d.negemo == 12 || d.negemo == 13 || d.negemo == 14 || d.negemo== 10)
          {
              negemoVal = 1.0;
              Temp_negemo =  negemoVal * document.getElementById("7a").value ;
              
          }
      else 
          {
              Temp_negemo =  0 * document.getElementById("7a").value ;
              //Temp_negemo =  d.negemo * document.getElementById("7a").value ;
      //console.log(Tempantw_negemo);
              
        }
      
      
      
      d.humor = +d.humor
      
      Temp_humor =  d.humor * document.getElementById("8a").value ;
      //console.log(Tempantw_humor);
      
      
       d.frage = +d.frage
      
      
      
       if (d.frage == 10 || d.frage == 11 || d.frage == 12)
          {
              frageVal = 1.0;
              Temp_frage =  frageVal * document.getElementById("9a").value ;
              
          }
      else 
          {
              Temp_frage =  0 * document.getElementById("9a").value ;
              //Temp_frage =  d.ausg_frage * document.getElementById("9a").value ;
      //console.log(Tempausg_frage);
              
        }
      
      
      d.korr = +d.korr
      Temp_korr =  d.korr * document.getElementById("10a").value ;
      //console.log(Tempausg_korr);
      
      d.zus = +d.zus
      
      if (d.zus == 1 || d.zus == 2)
          {
              zusVal = 1.0;
              Temp_zus =  zusVal * document.getElementById("11a").value ;
              
          }
      else 
          {
              Temp_zus =  0 * document.getElementById("11a").value ;
              //Temp_zus =  d.ausg_zus * document.getElementById("11a").value ;
      //console.log(Tempausg_zus);
      
              
              
        }
      
      d.meta = +d.meta
      
        if (d.meta == 10 || d.meta == 11 || d.meta == 12 || d.meta == 20)
          {
              metaVal = 1.0;
              Temp_meta =  metaVal * document.getElementById("12a").value ;
              
          }
      else 
          {
              Temp_meta =  0 * document.getElementById("12a").value ;
              //Temp_meta =  d.meta * document.getElementById("12a").value ;
              //console.log(Tempausg_meta);
              
              
        }
      
      
      
      d.mod = +d.mod
      
      if (d.mod == 11 )
          {
              ModVal = 1.0;
              Temp_Mod =  ModVal * document.getElementById("13a").value ;
              
          }
      else if (d.mod == 12 )
          {
              
              ModVal = -1.0;
              Temp_Mod =  ModVal * document.getElementById("13a").value ;
              
        }
      else
          {
          Temp_Mod =  0 * document.getElementById("13a").value ;
              //Temp_mod =  d.mod * document.getElementById("13a").value ;
      //console.log(Tempausg_mod);
              }
          
      
      
      FinalValue = (Temp_beityp+Temp_emp+Temp_degr+Temp_hoefl+Temp_ehrl+Temp_posemo+Temp_negemo+Temp_humor+Temp_frage+Temp_korr+Temp_zus+Temp_meta+Temp_mod)/13;
	  
	  
      
      

  });
  
});   
});
function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
};
