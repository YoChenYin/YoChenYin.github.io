
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

// var data1 = [
//     {Indonesia_c:81490, Indonesia_d :11722,Philippines_c:21223,Philippines_d:48203, Tai_c:2733,Tai_d:108805,Vietnam_c :15263,
//         Vietnam_d:14210,growth_rate:-0.3,migrant:303684, other_c:2,other_d:33,unemploy_rate:5.17,year:2002},
//     {Indonesia_c:47891,Indonesia_d:8546,Philippines_c:29347,Philippines_d:52008,Tai_c:2961,Tai_d:101767,Vietnam_c:40397,
//         Vietnam_d:17206,growth_rate:-1.16,migrant:300150,other_c:2,other_d:25,unemploy_rate:4.99,year:2003},
//     {Indonesia_c:21457, Indonesia_d:5824,Philippines_c:34446,Philippines_d:56704,Tai_c:3333,Tai_d:101948,Vietnam_c:71783,
//         Vietnam_d:18458,growth_rate:4.63,migrant:314034,other_c:48,other_d:33,unemploy_rate:4.44,year:2004},
//     {Indonesia_c:41906,Indonesia_d:7188,Philippines_c:35047,Philippines_d:60656,Tai_c:3057,Tai_d:95265, Vietnam_c:63956,
//         Vietnam_d:20229,growth_rate:4.25,migrant:327396,other_c:49,other_d:43,unemploy_rate:4.13,year:2005},
//     {Indonesia_c:75577,Indonesia_d:9646,Philippines_c:29107,Philippines_d:60947,Tai_c:2318,Tai_d:90576,Vietnam_c:46767,
//         Vietnam_d:23769,growth_rate:3.47,migrant:338755,other_c:16,other_d :32,unemploy_rate:3.91, year:2006},
//     {Indonesia_c:101619,Indonesia_d:13871,Philippines_c :24369,Philippines_d:62054,Tai_c:1819,Tai_d:85129,Vietnam_c :34414,
//         Vietnam_d:34629,growth_rate:5.66,migrant:357937,other_c:7,other_d:26,unemploy_rate :3.91,year:2007},
//     {Indonesia_c:111114,Indonesia_d:16650,Philippines_c  :22894,Philippines_d:57742,Tai_c:1504,Tai_d:74080,Vietnam_c:32912,
//         Vietnam_d:48148, growth_rate:1.99,migrant:365060,other_c:3,other_d:13,unemploy_rate:4.14,year:2008},
//     {Indonesia_c:121058,Indonesia_d:18346,Philippines_c:22676,Philippines_d:49401,Tai_c:1295,Tai_d:60137,Vietnam_c:29914,
//         Vietnam_d:48179,growth_rate:-3.85,migrant:351016,other_c:0,other_d:10, unemploy_rate:5.85,year :2009},
//     {Indonesia_c:135019,Indonesia_d:21313,Philippines_c:23320,Philippines_d:54218,Tai_c:1226,Tai_d :64516,Vietnam_c:26542,
//         Vietnam_d:53488,growth_rate :8.16,migrant:379653,other_c:1,other_d:10,unemploy_rate:5.21,year:2010},
//     {Indonesia_c:148080,Indonesia_d:27329,Philippines_c:23017, Philippines_d:59824,Tai_c:1068,Tai_d:70695,Vietnam_c:25688,
//         Vietnam_d:69955,growth_rate:12.12,migrant:425660,other_c:1,other_d:3,unemploy_rate:4.39,year:2011},
//     {Indonesia_c:157403,Indonesia_d:33724,Philippines_c:22921,Philippines_d:63865,Tai_c:870,Tai_d:66741,Vietnam_c:21499,
//         Vietnam_d:78551,growth_rate:4.68,migrant:445579,other_c:1,other_d:4,unemploy_rate:4.24,year:2012},
//     {Indonesia_c:167315,Indonesia_d:45919,Philippines_c :21582,Philippines_d:67442,Tai_c:745,Tai_d:60964,Vietnam_c:20572,
//         Vietnam_d :104590,growth_rate:9.77,migrant:489134,other_c:1,other_d:4,unemploy_rate:4.18,year:2013},
//     {Indonesia_c:174584,Indonesia_d:54907,Philippines_c :24784,Philippines_d:86749,Tai_c:666,Tai_d :59267,Vietnam_c :19974,
//         Vietnam_d:130658,growth_rate :12.77,migrant:551596,other_c:3,other_d:4,unemploy_rate:3.96,year:2014},
//     {Indonesia_c:177265,Indonesia_d :59261,Philippines_c :27613,Philippines_d:95445, Tai_c:557,Tai_d:57815,Vietnam_c:18919,
//         Vietnam_d:151062, growth_rate:6.59,migrant:587940,other_c:2,other_d:1,unemploy_rate :3.78,year :2015},
//     {Indonesia_c:183535,Indonesia_d:61645,Philippines_c:30268, Philippines_d:105529,Tai_c:560,Tai_d :58309,Vietnam_c:22927,
//         Vietnam_d :161993,growth_rate :6.26,migrant:624768,other_c :1,other_d:1, unemploy_rate :3.92,year:2016},
//     {Indonesia_c:187496,Indonesia_d:67019,Philippines_c :31181,Philippines_d:114033,Tai_c:541,Tai_d:60137,Vietnam_c  :25794,
//         Vietnam_d:171781, growth_rate:9.46,migrant :657983,other_c :0,other_d:1,unemploy_rate:3.84,year:2017}
//     ];
d3.csv("data.csv",function(data) {console.table(data);});

//color
var color = d3.scale.category20();

/*LineChart*/ 
//append svg ,g and set position
var width = 1120,height = 300;
var padding = {top:30,right:50,bottom:50,left:50};
var svgLineChart = d3.select("#linechart").append('svg');
svgLineChart = d3.select("svg").attr({'width':width,'height':height}); 
var LineChart = svgLineChart.append('g');
LineChart.attr('transform',"translate(" + padding.top + "," + padding.left + ')');

//圖例線條
LineChart.append('line').attr('id', 'growth_rate');
LineChart.select('#growth_rate')
    .attr({'x1': 20,
            'y1': 0,
            'x2': 50,
            'y2': 0
    }).style({
            'stroke': '#A71D31',
            'stroke-width': 2
});
LineChart.append('line').attr('id', 'unemployee_rate');
LineChart.select('#unemployee_rate')
    .attr({'x1': 20,
    'y1': 15,
    'x2': 50,
    'y2': 15
}).style({
    'stroke': 'orange',
    'stroke-width': 2
});
//圖例文字
LineChart.append('text')
.attr('id', 'growth_rate_w');
LineChart.select('#growth_rate_w')
.attr({
    'x': '50',
    'y': '2',
    'fill': 'black',
    'font-size': '11px',
    'font-weight': 'normal',
    'font-family': '微軟正黑體'
})
.text('外籍移工人數成長率');
LineChart.append('text').attr('id', 'unemployee_rate_w');
LineChart.select('#unemployee_rate_w')
.attr({
    'x': '50',
    'y': '18',
    'fill': 'black',
    'font-size': '11px',
    'font-weight': 'normal',
    'font-family': '微軟正黑體'
})
.text('失業率');
//x,y軸比例尺
var xScale = d3.scale.linear().domain(d3.extent(data1,function(d){
    return d.year;
})).range([0,width - padding.left - padding.right]);
var yScale = d3.scale.linear().domain([d3.min(data1,function(d){
    return d.growth_rate;
}),d3.max(data1,function(d){
    return d.growth_rate;
})]).range([height - padding.top - padding.bottom,0]);
//創建x,y軸
var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(function(d){return d+'%';});
//call axis
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
var Line = [];
Line[0] = d3.svg.line().x(function(d){return xScale(d.year)}).y(function(d){return yScale(d.growth_rate);}).interpolate('linear');
LineChart.append('path').attr('class','line').attr('d',Line[0](data1))
        .attr({'stroke':'#A71D31','stroke-width':'1px','fill':'none'});
//折線(台灣失業率)
Line[1] = d3.svg.line().x(function(d){return xScale(d.year)}).y(function(d){return yScale(d.unemploy_rate);}).interpolate('linear');
LineChart.append('path').attr('class','line').attr('d',Line[1](data1))
        .attr({'stroke':'orange','stroke-width':'1px','fill':'none'});
//標記點(外勞成長率)
LineChart.append('g').selectAll('circle')
        .data(data1)
        .enter()
        .append('circle')
        .attr('cx',function(d){
            return xScale(d.year);
        })
        .attr('cy',function(d){
            return yScale(d.growth_rate);
        })
        .attr('r',4)
        .attr('fill','#A71D31')
        .attr('opacity',function(d,i){
            if(i!=0)
                return 0.4;
        })
        .attr('id',function(d,i){return 'dot'+i;});
//標記點(台灣失業率)
LineChart.append('g').selectAll('circle')
        .data(data1)
        .enter()    
        .append('circle')
        .attr('cx',function(d){
                    return xScale(d.year);
        })
        .attr('cy',function(d){
                    return yScale(d.unemploy_rate);
        })
        .attr('r',4)
        .attr('fill','orange')
        .attr('opacity',function(d,i){
        if(i!=0)
            return 0.2;
        })
        .attr('id',function(d,i){return 'dot'+i;});
       
//標記文字
var offsetY = 1;
LineChart.append('g').attr('class','mark1');
LineChart.append('g').attr('class','mark2');
for(var i =1;i<3;i++){
    LineChart.select('.mark'+i).selectAll('text')
    .data(data1)
    .enter()
    .append('text')
    .attr({
       'x': function(d){
           return xScale(d.year);
       },
       'fill': "black",
       'font-size': '12px',
       'font-weight': 'bold',
       'font-family': 'monospace',
       'visibility':'hidden',
       'id':function(d,i){return 'mark'+i;}
   });
}
LineChart.select('.mark1').selectAll('text').text(function(d){return d.growth_rate}).attr('y',function(d){
    if(Math.floor(d.growth_rate,0) ==Math.floor(d.unemploy_rate,0)){
        return yScale(offsetY+d.growth_rate);
    }
    else
        return yScale(d.growth_rate);
})
LineChart.select('.mark2').selectAll('text').text(function(d){return d.unemploy_rate}).attr('y',function(d){
    if(Math.floor(d.growth_rate,0) ==Math.floor(d.unemploy_rate,0)){
        return yScale(d.unemploy_rate-offsetY);
    }
    else
        return yScale(d.unemploy_rate);
})


/*TimeLine*/
//append svg,g and set size
var svgTime = d3.select("#timeLine").append('svg');
svgTime = d3.select("#timeLine").select('svg').attr({
    'width': 1500,
    'height': 50
});
var TimeLine = svgTime.append('g');

//Line
TimeLine.append('line').attr({
    'x1': 70,
    'y1': 20,
    'x2': 1165,
    'y2': 20
}).style({
    'stroke': 'gray',
    'stroke-width': 0.5
});

//year
TimeLine.selectAll('text')
    .data(data1)
    .enter()
    .append('text')
    .text(function (d) {
        return d.year;
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
TimeLine.selectAll('circle')
    .data(data1)
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

var sumPerYear = document.getElementById("desc2"); 
var node = document.createTextNode('2002年 外籍移工人數達 303684人');
/*chartbar*/
var w = $(window).width() *0.5;
var h = 150;

//調整比例
var scaleX = d3.scale.linear().range([0, w]).domain([0, 200000]);//產業、社福
var scaleX_sum = d3.scale.linear().range([0, 1.5*w]).domain([0, 300000]);//總數
var scaleY = d3.scale.linear().range([0, h]).domain([0, 190]);

//axis
var axis = d3.select('#axis').append('svg');
axis = d3.select('#axis').select('svg').attr({
    'width': '1500',
    'height': '50'
});
var g1_axis = axis.append('g');
var axisX = d3.svg.axis()
                .scale(scaleX_sum)
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
//append svg,g
var svgBar = d3.select("#MW_in_TW").append("svg");
svgBar = d3.select("#MW_in_TW").select("svg")
    .attr({
        'x': 0,
        'y': 0,
        width: 2* w,
        height: 200
    });
var chartBar = svgBar.append('g');

//insert into path to draw

chartBar.selectAll("path")
    .data(data)
    .enter()
    .append("path");

var pos = [];
var country = ['Indonesia_c','Philippines_c','Tai_c','Vietnam_c','other_c','Indonesia_d' ,'Philippines_d','Tai_d','Vietnam_d','other_d'];
var countryChinese = ['印尼','菲律賓','泰國','越南','其他'];
//設定元素參數
chartBar.selectAll('path')
    .attr("d", function(d,i) {
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
    .attr("d", function (d,i) {
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

//圖例方塊
chartBar.append('rect').attr('id', 'industry');
chartBar.select('#industry')
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#A7B368')
    .attr({
        'x': 150,
        'y': 160
    });
chartBar.append('rect').attr('id', 'caregiver');
chartBar.select('#caregiver')
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#F6CAB3')
    .attr({
        'x': 250,
        'y': 160
    });

//長條圖國家文字
chartBar.selectAll('text')
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
        if (i < 5) return d[0];
    });
//長條圖比例
var sum = 0; 
var dev = [];
var num = [];
for (var i = 0; i < data.length; i++) {
    chartBar.append('text')
        .attr('class', 'ratio')
}
chartBar.selectAll('.ratio')
    .data(data)
    .attr('fill', 'white')
    .transition().duration(2000)
    .text(function (d, i) {
        if (i < 5) {
            dev.push(d[1]);
         
        } else {
            sum = data1[0].migrant;
          
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
chartBar.append('text')
    .attr('id', 'industry_w');
chartBar.select('#industry_w')
    .attr({
        'x': '170',
        'y': '173',
        'fill': 'black',
        'font-size': '12px',
        'font-weight': 'bolder',
        'font-family': '微軟正黑體'
    })
    .text('產業外籍勞工');
chartBar.append('text').attr('id', 'caregiver_w');
chartBar.select('#caregiver_w')
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
pos = [];//儲存產業外勞數值
dev = [];//for account ratio
num = [];//industry +caregiver

sumPerYear.appendChild(node);
TimeLine.selectAll('circle')
    .on('mouseover', function (d, i) {
        $("#desc2").text(d.year+'年 外籍移工人數達 '+d.migrant+'人');
        //bigger circle
        d3.select(this).attr({
            'r': 10,
            'opacity':1
        });
        //changing chartbar
        chartBar.selectAll('path')
            .transition().duration(1000).ease('poly', '2')
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
        chartBar.selectAll('.ratio')
            .attr('opacity', '0')
            .transition().duration(1000).ease('poly', '2')
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
            .attr('opacity', '1');
        //Linechart     
        LineChart.selectAll('#mark'+i).attr('visibility','visible');
        LineChart.selectAll('#dot'+i).attr('opacity','1');})
    .on('mouseout', function (d,i) {
        d3.select(this).attr({
            'r': 7,
            'opacity':0.4
        });
        LineChart.selectAll('#mark'+i).attr('visibility','hidden');
        LineChart.selectAll('#dot'+i).attr('opacity','0.2');
    });


