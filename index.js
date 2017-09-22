//year ， 外籍勞工總數
var datatotal = [
    [2002, 303684],
    [2003, 300150],
    [2004, 314034],
    [2005, 327396],
    [2006, 338755],
    [2007, 357937],
    [2008, 365060],
    [2009, 351016],
    [2010, 379653],
    [2011, 425660],
    [2012, 445579],
    [2013, 489134],
    [2014, 551596],
    [2015, 587940],
    [2016, 624768],
    [2017, 657983]
];
//各年齡層外勞人數，台灣對應各年齡層勞動總數
var agedata = [
    [60434,190730,48369,4039,82,1070000,2765000,2851000,1965000,804000],
    [54912,181842,59078,4226,67,1013000,2797000,2876000,2071000,816000],
    [52319,181641,75133,4854,70,989000,2853000,2915000,2182000,847000],
    [56232,183986,81131,5923,106,944000,2903000,2934000,2280000,882000],
    [63697,188588,79564,6751,133,902000,2962000,2963000,2343000,942000],
    [69887,198460,81627,7767,177,870000,3013000,2960000,2403000,1048000],
    [73945,197770,84051,9049,231,821000,3053000,2946000,2463000,1120000],
    [63552,190091,86942,10112,308,749000,3028000,2878000,2462000,1162000],
    [64986,204866,97230,12165,397,758000,3072000,2891000,2517000,1255000],
    [76912,227056,107486,13806,389,763000,3096000,2920000,2587000,1342000],
    [78786,235954,115255,15101,470,780000,3057000,2963000,2631000,1429000],
    [92783,251649,125797,18279,610,782000,3020000,2992000,2660000,1513000],
    [112694,278390,138042,21643,816,774000,2969000,3016000,2693000,1627000],
    [118155,296549,148137,24085,1001,796000,2932000,3058000,2714000,1698000],
    [119649,312686,162113,29102,1202,814000,2864000,3104000,2736000,1749000],
    [121448,325966,175579,33584,1390,953000,2955000,3261000,2817000,1827000],
];
//產業外勞與社福外勞逐年人數
var data = [
    ["印尼", 11722, 8546, 5824, 7188, 9646, 13871, 16650, 18346, 21313, 27329, 33724, 45919, 54907, 59261, 61645, 67019],
    ["菲律賓", 48203, 52008, 56704, 60656, 60947, 62054, 57742, 49401, 54218, 59824, 63865, 67442, 86749, 95445, 105529, 114033],
    ["泰國", 108805, 101767, 101948, 95265, 90576, 85129, 74080, 60137, 64516, 70695, 66741, 60964, 59267, 57815, 58309, 60137],
    ["越南", 14210, 17206, 18458, 20229, 23769, 34629, 48148, 48179, 53488, 69955, 78551, 104590, 130658, 151062, 161993, 171781],
    ["其他", 33, 25, 33, 43, 32, 26, 13, 10, 10, 3, 4, 4, 4, 1, 1, 1],
    ["印尼", 81490, 47891, 21457, 41906, 75577, 101619, 111114, 121058, 135019, 148080, 157403, 167315, 174584, 177265, 183535, 187496],
    ["菲律賓", 21223, 29347, 34446, 35047, 29107, 24369, 22894, 22676, 23320, 23017, 22921, 21582, 24784, 27613, 30268, 31181],
    ["泰國", 2733, 2961, 3333, 3057, 2318, 1819, 1504, 1295, 1226, 1068, 870, 745, 666, 557, 560, 541],
    ["越南", 15263, 40397, 71783, 63956, 46767, 34414, 32912, 29914, 26542, 25688, 21499, 20572, 19974, 18919, 22927, 25794],
    ["其他", 2, 2, 48, 49, 16, 7, 3, 0, 1, 1, 1, 1, 3, 2, 1, 0],
];
// var data ={
//     year:[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
//     Foreign:[303684,300150,314034,327396,338755,357937,365060,351016,379653,425660,445579,489134,551596,587940,624768,657983,],
//     Taiwanese:[9969000,10076000,10240000,10371000,10522000,10713000,10853000,10917000,11070000,11200000,11341000,11445000,11535000,11638000,11727000,11770000],
//     country:{
//     Indonesia:[93212,56437,27281,49094,85223,115490,127764,139404,347332,175409,191127,213234,229491,236526,245180,254515],
//     Philippines:[69426,81355,91150,95703,90054,86423,80636,72077,77538,82841,86786,89024,111533,123058,135797,145214],
//     Tai:[111538,104728,105281,98322,92894,86948,75584,61432,65742,71763,67611,61709,59933,58372,58869,60678],
//     Vietnam:[29473,57603,90241,84185,70536,69043,81060,78093,80030,95643,100050,125162,150632,169981,184920,197575],
//     other:[35,27,81,92,48,33,16,10,11,4,5,5,7,3,2,0]
//     }
// };
var dataline = [
    {x: 2002, y1: -0.3, y2:5.17}, {x: 2003, y1: -1.16, y2:4.99},
    {x: 2004, y1: 4.63, y2:4.44}, {x: 2005, y1: 4.25, y2:4.13},
    {x: 2006, y1: 3.47, y2:3.91}, {x: 2007, y1: 5.66, y2:3.91},
    {x: 2008, y1: 1.99, y2:4.14}, {x: 2009, y1: -3.85, y2:5.85},
    {x: 2010, y1: 8.16, y2:5.21}, {x: 2011, y1: 12.12, y2:4.39},
    {x: 2012, y1: 4.68, y2:4.24}, {x: 2013, y1: 9.77, y2:4.18},
    {x: 2014, y1: 12.77, y2:3.96}, {x: 2015, y1: 6.59, y2:3.78},
    {x: 2016, y1: 6.26, y2:3.92}, {x: 2017, y1: 9.46, y2:3.84},
];
d3.csv("data.csv",function(data) {console.log(data);});
//linechart
var width = 1120,height = 300;
var padding = {top:30,right:50,bottom:50,left:50};
var svgLineChart = d3.select("#linechart").append('svg');
svgLineChart = d3.select("svg").attr({'width':width,'height':height}); 
var LineChart = svgLineChart.append('g');
LineChart.attr('transform',"translate(" + padding.top + "," + padding.left + ')');
var color = d3.scale.category20();

//x,y軸比例尺
var xScale = d3.scale.linear().domain(d3.extent(dataline,function(d){
    return d.x;
})).range([0,width - padding.left - padding.right]);
var yScale = d3.scale.linear().domain([d3.min(dataline,function(d){
    return d.y1;
}),d3.max(dataline,function(d){
    return d.y1;
})]).range([height - padding.top - padding.bottom,0]);
//創建x,y軸
var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
var yAxis = d3.svg.axis().scale(yScale).orient('left');

LineChart.append('g').attr('class','axis').attr('transform','translate(0,' +(height - padding.top -2*padding.bottom)+')')
            .call(xAxis).attr({'stroke':'#000','stroke-width':'2px','fill':'none'})
            .selectAll('text')
            .attr({
                'fill': 'transparent',
                'stroke': 'none',
                'font-family': 'monospace'
            });
LineChart.append('g').attr('class','axis').call(yAxis)
        .attr({'stroke':'#000','stroke-width':'2px','fill':'none'})
        .selectAll('text')
        .attr({
            'fill': '#000',
            'stroke': 'none',
            'font-family': 'monospace'
        });;
//折線(外勞成長率)
var line_fw = d3.svg.line().x(function(d){return xScale(d.x)}).y(function(d){return yScale(d.y1);}).interpolate('linear');
LineChart.append('path').attr('class','line').attr('d',line_fw(dataline))
        .attr({'stroke':'#BDBDBD','stroke-width':'0.5px','fill':'none'});
//折線(台灣失業率)
var line_une = d3.svg.line().x(function(d){return xScale(d.x)}).y(function(d){return yScale(d.y2);}).interpolate('linear');
LineChart.append('path').attr('class','line').attr('d',line_une(dataline))
        .attr({'stroke':'#000','stroke-width':'0.5px','fill':'none'});
//標記點(外勞成長率)
LineChart.selectAll('circle')
        .data(dataline)
        .enter()
        .append('circle')
        .attr('cx',function(d){
            return xScale(d.x);
        })
        .attr('cy',function(d){
            return yScale(d.y1);
        })
        .attr('r',4)
        .attr('fill',function(d,i){
            return color(i);
        })
        .attr('opacity',function(d,i){
            if(i!=0)
                return 0.4;
        })
       . attr('class','fw');
//標記文字
LineChart.append('g').attr('class','mark');
LineChart.select('.mark').selectAll('text')
         .data(dataline)
         .enter()
         .append('text')
         .text(function(d){return d.y1})
         .attr({
            'x': function(d){
                return xScale(d.x);
            },
            'y': function(d){
                return yScale(d.y1);
            },
            'fill': "gray",
            'font-size': '12px',
            'font-weight': 'bold',
            'font-family': 'monospace',
            'visibility':'hidden'
        });

//TimeLine
var svgTime = d3.select("#timeLine").append('svg');
svgTime = d3.select("#timeLine").select('svg').attr({
    'width': 1500,
    'height': 50
});
var tL = svgTime.append('g');
//Line
tL.append('line').attr({
    'x1': 70,
    'y1': 20,
    'x2': 1165,
    'y2': 20
}).style({
    'stroke': 'gray',
    'stroke-width': 0.5
});

//year
tL.selectAll('text')
    .data(datatotal)
    .enter()
    .append('text')
    .text(function (d, i) {
        return d[0];
    })
    .attr({
        'x': function (d, i) {
            return (73 + i * 68)
        },
        'y': 40,
        'fill': "gray",
        'font-size': '12px',
        'font-weight': 'bold',
        'font-family': 'monospace'
    });
//circle
tL.selectAll('circle')
    .data(datatotal)
    .enter()
    .append('circle')
    .attr({
        'cx': function (d, i) {
            return (85 + i * 68)
        },
        'cy': 20,
        'r': 7,
        'fill': function (d, i) {
            return color(i)
        },
        'opacity': 0.7
    })
var w = $(window).width() *0.5;
var h = 150;
//調整比例
var scaleX = d3.scale.linear().range([0, w]).domain([0, 200000]);
var scaleX1 = d3.scale.linear().range([0, 1.5*w]).domain([0, 300000]);
var scaleY = d3.scale.linear().range([0, h]).domain([0, 190]);

//axis
var axis = d3.select('#axis').append('svg');
axis = d3.select('#axis').select('svg').attr({
    'width': '1500',
    'height': '50'
});
var g1_axis = axis.append('g');
var axisX = d3.svg.axis()
                .scale(scaleX1)
                .orient("top")
                .tickValues([10000,50000,100000,150000,200000,250000,300000]);
                
g1_axis.call(axisX)
    .attr('transform', 'translate(150,30)')
    .attr({
        "stroke": '#607D8B',
        'stroke-width': 0.4,
        'fill': 'none'
    })
    .selectAll('text')
    .attr({
        'fill': '#607D8B',
        'stroke': 'none',
        'font-family': 'monospace'
    });

//chartbar

var svg1 = d3.select("#MW_in_TW").append("svg");
svg1 = d3.select("#MW_in_TW").select("svg")
    .attr({
        'x': 0,
        'y': 0,
        width: 2* w,
        height: 200
    });
var g1 = svg1.append('g');

//insert into path to draw
g1.selectAll("path")
    .data(data)
    .enter()
    .append("path");



var pos = [];
//設定元素參數
g1.selectAll('path')
    .attr("d", function (d, i) {
        if (i < 5) { //產業
            var x1 = 150; //bar 起始點
            var x2 = 150; //bar 終點
            var y1 = scaleY(i * 40); //bar 起始高
            var y2 = scaleY(i * 40 + 30);
        } else { //看護
            var x1 = 150; //bar 起始點
            var x2 = 150; //bar 終點
            var y1 = scaleY((i - 5) * 40); //bar 起始高
            var y2 = scaleY((i - 5) * 40 + 30);
        }
        return (
            "M" + x1 + " " + y1 +
            "L" + x2 + " " + y1 +
            "L" + x2 + " " + y2 +
            "L" + x1 + " " + y2 + "Z"
        );
    })
    .attr('fill', function (d, i) {
        if (i < 5) return '#A7B368';
        else return '#F6CAB3';
    })
    .transition().duration(1000).ease('poly', '3')
    .attr("d", function (d, i) {
        if (i < 5) {
            var x1 = 150; //bar 起始點
            var x2 = 150 + scaleX(d[1]); //bar 終點
            var y1 = scaleY(i * 40); //bar 起始高
            var y2 = scaleY(i * 40 + 30);
            pos.push(d[1]);
        } else {
            var x1 = 150 + scaleX(pos[i - 5]); //bar 起始點
            var x2 = 150 + scaleX(d[1]); //bar 終點
            var y1 = scaleY((i - 5) * 40); //bar 起始高
            var y2 = scaleY((i - 5) * 40 + 30);
        }
        return (
            "M" + x1 + " " + y1 +
            "L" + x2 + " " + y1 +
            "L" + x2 + " " + y2 +
            "L" + x1 + " " + y2 + "Z"
        );
    })
    .attr('fill', function (d, i) {
        if (i < 5) {
            return '#A7B368';
        } else {
            return '#F6CAB3';
        }
    });

//圖例
g1.append('rect').attr('id', 'industry');
g1.select('#industry')
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#A7B368')
    .attr({
        'x': 150,
        'y': 160
    });
g1.append('rect').attr('id', 'caregiver');

g1.select('#caregiver')
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#F6CAB3')
    .attr({
        'x': 250,
        'y': 160
    });


g1.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr({
        'x': 80,
        'y': function (d, i) {
            if (i < 5) return scaleY(i * 40 + 20);
        },
        'fill': 'black',
        'font-size': '18px',
        'font-weight': 'bold',
        'font-family': '微軟正黑體'
    })
    .text(function (d, i) {
        if (i < 5) return d[0]
    });


var sum = 0;
sum = datatotal[0][1];
var dev = [];
var num = [];
for (var i = 0; i < data.length; i++) {
    g1.append('text')
        .attr('class', 'ratio')
}
g1.selectAll('.ratio')
    .data(data)
    .attr('fill', 'white')
    .transition().duration(2000)
    .text(function (d, i) {
        if (i < 5) {
            dev.push(d[1]);
        } else {
            var ratio = 100 * (d[1] + dev[i - 5]) / sum;
            num.push(d[1] + dev[i - 5]);
            return ratio.toFixed(2) + "%"
        }
    })
    .attr({
        'x': function (d, i) {
            if (i >= 5) return 155 + scaleX(num[i - 5])
        },
        'y': function (d, i) {
            if (i >= 5) return scaleY((i - 5) * 40 + 18)
        },
        'fill': 'black',
        'font-size': '16px',
        'font-weight': 'bold',
        'font-family': 'monospace'
    });
//圖例文字
g1.append('text')
    .attr('id', 'industry_w');
g1.select('#industry_w')
    .attr({
        'x': '170',
        'y': '173',
        'fill': 'black',
        'font-size': '12px',
        'font-weight': 'bolder',
        'font-family': '微軟正黑體'
    })
    .text('產業外籍勞工');
g1.append('text').attr('id', 'caregiver_w');
g1.select('#caregiver_w')
    .attr({
        'x': '270',
        'y': '173',
        'fill': 'black',
        'font-size': '12px',
        'font-weight': 'bolder',
        'font-family': '微軟正黑體'
    })
    .text('社福外籍勞工');
//逐年變動長條圖
pos = [];
dev = [];
num = [];
tL.selectAll('circle')
    .on('mouseover', function (d, i) {
        //bigger circle
        d3.select(this).attr({
            'r': 10,
            'opacity':1
        });
        //changing chartbar
        g1.selectAll('path')
            .transition().duration(1000).ease('poly', '3')
            .attr("d", function (d1, i1) {
                if (i1 < 5) {
                    var x1 = 150; //bar 起始點
                    var x2 = 150 + scaleX(d1[i + 1]); //bar 終點
                    var y1 = scaleY(i1 * 40); //bar 起始高
                    var y2 = scaleY(i1 * 40 + 30);
                    pos.push(d1[i + 1]);
                } else {
                    var x1 = 150 + scaleX(pos[i1 - 5]); //bar 起始點
                    var x2 = 150 + scaleX(pos[i1 - 5]) + scaleX(d1[i + 1]); //bar 終點
                    var y1 = scaleY((i1 - 5) * 40); //bar 起始高
                    var y2 = scaleY((i1 - 5) * 40 + 30);
                }
                if (i1 == 9)
                    pos = [];
                return (
                    "M" + x1 + " " + y1 +
                    "L" + x2 + " " + y1 +
                    "L" + x2 + " " + y2 +
                    "L" + x1 + " " + y2 + "Z"
                );
            });
        var sum = 0;
        sum = datatotal[i][1];
        g1.selectAll('.ratio')
            .attr('fill', 'white')
            .transition().duration(1500)
            .text(function (d1, i1) {
                    if (i1 == 0) {
                        dev = [];
                        num = [];
                    }
                    if (i1 < 5) {
                        dev.push(d1[i + 1]);
                    } else {
                        var ratio = 100 * (d1[i + 1] + dev[i1 - 5]) / sum;
                        num.push(d1[i + 1] + dev[i1 - 5]);
                        return ratio.toFixed(2) + "%"
                    }

                }

            )
            .attr('x', function (d1, i1) {
                if (i1 >= 5) {
                    return 160 + scaleX(num[i1 - 5])
                }
            })
            .attr('fill', 'black')
        //Linechart
        LineChart.select('.mark').select('text').attr('visibility',function(d3,i3){
            if(i == i3){
                return 'visible';
            }
        });
        LineChart.selectAll('circle').attr('fill',function(d2,i2){
                return color(i2);
        }).attr('opacity',function(d2,i2){
            if(i!=i2)
                return 0.4;
            else
                return 1;
        });
    })
    .on('mouseout', function (d) {
        d3.select(this).attr({
            'r': 7,
            'opacity':0.5
        });
        LineChart.select('.mark').selectAll('text').attr('visibility',function(d3,i3){
            if(i != i3)
                return 'hidden';
        });
    });


