
d3.csv("data1.csv", function (error, dataset) {
    if (error) throw error;
    /*population*/
//append svg,g and set size
var width_pop = 1300;
var height_pop = 300;
var svg_pop = d3.select("#population").append('svg');
svg_pop = d3.select("#population").select('svg').attr({
    'width': width_pop,
    'height': height_pop,
    'class':'bubble'
});
var pop = svg_pop.append('g');

    
//year

pop.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function (d) {
            return d.年分;
    })
    .attr({
        'x': function (d, i) {
            return ( 70+i * 75)
        },
        'y': 240,
        'fill': "gray",
        'font-size': '16px',
        'font-weight': 'normal',
        'font-family': 'monospace'
    });
    pop.append("text").text('民國年').attr('transform','translate(0,240)').attr({
        'fill': "gray",
        'font-size': '12px',
        'font-weight': 'normal', 
    });
//var Gradient = d3.scale.linear().domain([1,16]).range(['#00BCD4','#006064'])


pop.append('line').attr({
    'x1':-10,
    'y1':150,
    'x2':1230,
    'y2':150,
    'stroke':'#ccc',
    'stroke-width':1
})
pop.append('circle').attr({
    'transform':'translate(10,280)',
    'r':5,
    'fill':'#EEA9A9',
})
pop.append("text").text('外籍移工人數').attr('transform','translate(20,285)').attr({
    'fill': "gray",
    'font-size': '12px',
    'font-weight': 'normal', 
});
pop.append('circle').attr({
    'transform':'translate(130,280)',
    'r':5,
    'fill':'#FFB11B',
})
pop.append("text").text('台灣就業人數').attr('transform','translate(140,285)').attr({
    'fill': "gray",
    'font-size': '12px',
    'font-weight': 'normal', 
});


//bubble
d3.csv("data.csv", function (error, dataset_ori) {
    //convert numerical values from strings to numbers
    dataset_tw = dataset_ori.map(function(d){ d.value = +d.總計; return d; });

var dataobj = {children:dataset_tw};
var pack = d3.layout.pack().sort(null);//建立layout物件
pack = pack.padding(2).size([1200,250]);//設立圖大小與泡泡距離
var nodes = pack.nodes(dataobj);

nodes = nodes.filter(function(it){return it.parent;});
var bubble = svg_pop.append('g');
bubble.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr({
        cx:function (d, i) {
            if (i<16)
                return ( 80+i * 75);
            else
                return (80+(i-16)*75);
        },
        cy:function (d, i) {
            console.log(d.growth_rate);
            if (i<16)
                return ( 160-d.growth_rate * 7);
            else
                return (145-d.growth_rate * 7);
        },
        r:function(it,i){ console.log(it);if(i<16) return it.r*6 ;else return 2*it.r;},
        fill:function (d, i) {
            if (i<16)
                return '#EEA9A9';
            else
                return '#FFB11B';
        },
        opacity:function (d, i) {
            if (i<16)
                return 0.7;
            else
                return 0;
        },
        visibility:function (d, i) {
            if (i<16)
                return 'visable';
            else
                return 'hidden';
        },
    }).attr('id',function(d,i){return 'circle'+i ;})

    bubble.selectAll('text').data(dataset_ori).enter().append('text').text(function(d,i){    
        //console.log(i+' '+d.growth_rate);
        if(i>15)
            return d.growth_rate;
    }).attr('x',function (d, i) {
        if (i>15)
            return ( 65+(i-16) * 75);
    }).attr('y',function (d, i) {
        if (i>15)
            return ( 160-d.growth_rate * 7);
    }).attr({
        'fill': "white",
        'font-size': '12px',
        'font-weight': 'bord',
        'font-family': 'monospace'
    });

    //event
    var last;
    var another;
    var flag = 0;
    bubble.selectAll('circle').on('mouseover',function(d,i){
        flag ++;
        if(i<16) {   
            console.log(i);
            //(litter circle)
            d3.select(this).transition().duration(300).ease('poly',2).attr({
                fill:'#8E354A',
                opacity:1            
        })
       another = i+16;    
       //labor of taiwan(big circle)
        d3.select('#circle'+another).transition().duration(600).ease('poly',2).attr({
            visibility: 'visable', 
            opacity:0.4          
        }) 
        if(flag>1){
        d3.select('#circle'+last).attr({
            visibility: 'hidden'           
        }) 
        last = last-16;
        d3.select('#circle'+last).attr({
            fill:'#EEA9A9',
            opacity:0.7,            
        })
    }
    }
    }).on('mouseout',function(d,i){
        if(i<16) { 
            last = another ;    
        }        
       
})

})
})

d3.csv("donutdata.csv", function (error, dataset) {
    
        if (error) throw error;
        var country = [],
            type = [],
            item3k = [],
            itemcare = [];
        var country_data = [];
        var type_data = [];
        var item3k_data = [];
        var itemcare_data = [];
        for (var i = 0; i < 16; i++) {
            country = [];
            type = [];
            item3k = [];
            itemcare = [];
            country.push(dataset[i].印尼, dataset[i].菲律賓, dataset[i].泰國, dataset[i].越南, dataset[i].其他);
            type.push(dataset[i].Industrial_labor, dataset[i].caregiver);
            item3k.push(dataset[i].threek, dataset[i].ind);
            itemcare.push(dataset[i].看護工, dataset[i].care);
    
            country_data[i] = country;
            type_data[i] = type;
            item3k_data[i] = item3k;
            itemcare_data[i] = itemcare;
        }
    
        var width = 400,
            height = 500,
            cwidth = 25,
            offsetX = 20;
        var color = d3.scale.category20();
    
        var pie = d3.layout.pie()
            .sort(null);
    
        var arc = d3.svg.arc();
    
        var svg1 = d3.select("#donut_from").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
        var gs1 = svg1.selectAll("g").data(d3.values(country_data)).enter().append("g");
        var color1 = [ "#64363C",'#BEC23F',"#E8B647",  "#F596AA"];
        var path1 = gs1.selectAll("path")
            .data(function (d) { return pie(d); })
            .enter().append("path")
            .attr("fill", function (d, i) { return color1[i]; })
            .attr("stroke", "#ffffff")
            .transition().duration(250)
            .attr("d", function (d, i, j) { if (j == 15) return arc.innerRadius(50).outerRadius(80)(d) });
    
    
        
    
        var svg2 = d3.select("#donut_work").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    
        var gs2 = svg2.selectAll("g").data(d3.values(type_data)).enter().append("g");
    
        var path2 = gs2.selectAll("path")
            .data(function (d) { return pie(d); })
            .enter().append("path")
            .attr("fill", function (d, i) { if (i < 2) return color1[i]; })
            .attr("stroke", "#ffffff")
            .attr("d", function (d, i, j) { if (j == 15) return arc.innerRadius(40).outerRadius(70)(d) })
    
        var svg3 = d3.select("#donut_threek").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    
        var gs3 = svg3.selectAll("g").data(d3.values(item3k_data)).enter().append("g");
        var color2 = ["#f44336", "#ffcdd2"];
        var path3 = gs3.selectAll("path")
            .data(function (d) { return pie(d); })
            .enter().append("path")
            .attr("fill", function (d, i) { return color2[i]; })
            .attr("d", function (d, i, j) { if (j == 15) return arc.innerRadius(40).outerRadius(70)(d) })
    
        var svg4 = d3.select("#donut_care").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    
        var gs4 = svg4.selectAll("g").data(d3.values(itemcare_data)).enter().append("g");
        var color3 = ["#1A237E", "#C5CAE9"];
        var path4 = gs4.selectAll("path")
            .data(function (d) { return pie(d); })
            .enter().append("path")
            .attr("fill", function (d, i) { return color3[i]; })
            .attr("d", function (d, i, j) { if (j == 15) return arc.innerRadius(40).outerRadius(70)(d) })
    
        /*圖例*/
        var width_legend = 200,
            height_legend = 80;
        var legend_from = d3.select("#legend_from").append("svg").attr("width", width_legend).attr("height", height_legend);
        var g_legend = legend_from.append("g");
        var text_from = ["印尼", "菲律賓", "泰國", "越南"];
        var text_ind = ["產業外勞", "社福外勞"];
        g_legend.selectAll("g")
            .data(country_data)
            .enter()
            .append("rect")
            .attr('width', 10)
            .attr("height", 10)
            .attr("fill", function (d, i) {
                if (i < 4)
                    return color1[i];
                else if (i < 6)
                    return color1[i - 4];
            })
            .attr("transform", function (d, i) {
                if (i < 4)
                    return "translate(0," + (5 + 18 * i) + ")";
                else if (i < 6)
                    return "translate(220," + (5 + 18 * (i - 4)) + ")";
            })
            .attr('visibility', function (d, i) { if (i > 3) return 'hidden'; });
        g_legend.selectAll("g")
            .data(country_data)
            .enter()
            .append("text")
            .attr('width', 100)
            .attr("height", 80)
            .text(function (d, i) {
                if (i < 4)
                    return text_from[i];
                    /* else if(i<6)
                return  text_ind[i-4] ;*/})
            .attr("transform", function (d, i) {
                if (i < 4)
                    return "translate(25," + (14 + 18 * i) + ")"
                else if (i < 6)
                    return "translate(250," + (14 + 18 * (i - 4)) + ")";
            })
            .attr({
                "font-size": "12px",
                "font-weight": "bold"
            });
    
        /*LineChart*/
        //append svg ,g and set position
        d3.csv("Linedata.csv", function (csvdata) {
            if (error) throw error;
            var width_Line = 400, height_Line = 300;
            var padding = { top: 30, right: 50, bottom: 50, left: 50 };
            var svgLineChart = d3.select("#linechart").append('svg').attr({ 'width': width_Line, 'height': height_Line });
            var LineChart = svgLineChart.append('g');
            LineChart.attr('transform', "translate(" + padding.top + "," + padding.left + ')');
    
            //x,y軸比例尺
            var xScale = d3.scale.linear().domain(d3.extent(csvdata, function (d) {
                return d.年分;
            })).range([0, width_Line - padding.left - padding.right]);
            var Ymax = d3.max(csvdata, function (d) {
                if (parseInt(d.國內) > parseInt(d.外勞)) {
                    return d.國內;
                } else {
                    return d.外勞;
                }
            });
            var yScale = d3.scale.linear().domain([0, Ymax]).range([height_Line - padding.top - padding.bottom, 0]);
    
            //創建x,y軸
            var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
            var yAxis = d3.svg.axis().scale(yScale).orient('left');
    
            //call axis
            LineChart.append('g').attr('class', 'axis').attr('transform', 'translate(0,' + (height_Line - padding.top - padding.bottom) + ')')
                .call(xAxis).attr({ 'stroke': '#000', 'stroke-width': '2px', 'fill': 'none' })
                .selectAll('text')
                .attr({
                    'fill': 'transparent',
                    'stroke': 'none',
                    'font-family': 'monospace'
                });
            LineChart.append('g').attr('class', 'axis').call(yAxis)
                .attr({ 'stroke': '#000', 'stroke-width': '2px', 'fill': 'none' })
                .selectAll('text')
                .attr({
                    'fill': 'black',
                    'stroke': 'none',
                    'font-family': 'monospace'
                });
            //折線(產業移工&社福移工)
            var Line = [];
            Line[0] = d3.svg.line().x(function (d) { return xScale(d.年分); }).y(function (d) { return yScale(d.國內); }).interpolate('linear');
            LineChart.append('path').attr('class', 'line').attr('d', Line[0](csvdata))
                .attr({ 'stroke': '#CDDC39', 'stroke-width': '1px', 'fill': 'none' });
            Line[1] = d3.svg.line().x(function (d) { return xScale(d.年分); }).y(function (d) { return yScale(d.外勞); }).interpolate('linear');
            LineChart.append('path').attr('class', 'line').attr('d', Line[1](csvdata))
                .attr({ 'stroke': '#d50000', 'stroke-width': '1px', 'fill': 'none' });
    
            //標記點
            LineChart.append('g').selectAll('circle')
                .data(csvdata)
                .enter()
                .append('circle')
                .attr('cx', function (d) {
    
                    return xScale(d.年分);
                })
                .attr('cy', function (d) {
    
                    return yScale(d.國內);
                })
                .attr('r', 3)
                .attr('fill', '#CDDC39')
                .attr('opacity', function (d, i) {
                    return 1;
                    // if(i!=0)
                    //     return 0;
                })
                .attr('id', function (d, i) { return 'dot' + i; });
            LineChart.append('g').selectAll('circle')
                .data(csvdata)
                .enter()
                .append('circle')
                .attr('cx', function (d) {
                    return xScale(d.年分);
                })
                .attr('cy', function (d) {
                    return yScale(d.外勞);
                })
                .attr('r', 3)
                .attr('fill', '#d50000')
                .attr('opacity', function (d, i) {
                    return 1;
                    // if(i!=0)
                    //     return 0;
                })
                .attr('id', function (d, i) { return 'dot' + i; });
    
            //標記文字
            var offsetY = 1;
            LineChart.append('g').attr('class', 'mark1');
            LineChart.append('g').attr('class', 'mark2');
            for (var i = 1; i < 3; i++) {
                LineChart.select('.mark' + i).selectAll('text')
                    .data(csvdata)
                    .enter()
                    .append('text')
                    .attr({
                        'x': function (d) {
                            return xScale(d.年分);
                        },
                        'fill': "black",
                        'font-size': '12px',
                        'font-weight': 'bold',
                        'font-family': 'monospace',
                        'visibility': 'hidden',
                        'id': function (d, i) { return 'mark' + i; }
                    });
            }
            LineChart.select('.mark1').selectAll('text').text(function (d) { return d.國內 }).attr('y', function (d) {
                if (Math.floor(d.國內, 0) == Math.floor(d.外勞, 0)) {
                    return yScale(offsetY + d.國內);
                }
                else
                    return yScale(d.國內);
            })
            LineChart.select('.mark2').selectAll('text').text(function (d) { return d.外勞 }).attr('y', function (d) {
                if (Math.floor(d.國內, 0) == Math.floor(d.外勞, 0)) {
                    return yScale(d.外勞 - offsetY);
                }
                else
                    return yScale(d.外勞);
            })
    
            /*TimeLine*/
            //append svg,g and set size
            var svgTime = d3.select("#timeLine").append('svg');
            svgTime = d3.select("#timeLine").select('svg').attr({
                'width': 80,
                'height': 500
            });
            var TimeLine = svgTime.append('g');
    
            //year
            TimeLine.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(function (d) {
                    return d.年分;
                })
                .attr({
                    'x': 30,
                    'y': function (d, i) {
                        return (50 + (i + 1) * 25)
                    },
                    'fill': "gray",
                    'font-size': '12px',
                    'font-weight': 'bold',
                    'font-family': 'monospace'
                });
    
            var Gradient = d3.scale.linear().domain([1, 16]).range(['#00BCD4', '#006064'])
            // //circle
            // var tLoffset = 12;
            // TimeLine.selectAll('circle')
            //     .data(dataset)
            //     .enter()
            //     .append('circle')
            //     .attr({
            //         'cx': function (d, i) {
            //             return tLoffset+xScale(d.年分)
            //         },
            //         'cy': 10,
            //         'r': 4,
            //         'fill': function (d, i) {
            //             return Gradient(i)
            //         },
            //         'opacity': 0.7
            //     })
            //逐年變動
            TimeLine.selectAll('text')
                .on('mouseover', function (d, i) {
                    console.log("i", i);
                    //total text
                    $("#desc").text(d.年分 + "在台外籍移工達" + d.總計 + "人");
                    //bigger circle
                    d3.select(this).attr({
                        'font-size': "20px"
                    });
                    path1 = gs1.selectAll("path")
                        .transition().duration(20000).ease('poly', '3')
                        .attr("d", function (d, i1, j) { if (j == i) return arc.innerRadius(50).outerRadius(85)(d); });
                    path2 = gs2.selectAll("path")
                        .transition().duration(20000).ease('poly', '3')
                        .attr("fill", function (d, i) { return color1[i]; })
                        .attr("d", function (d, i1, j) { if (j == i) return arc.innerRadius(50).outerRadius(80)(d); });
                    path3 = gs3.selectAll("path")
                        .transition().duration(20000).ease('poly', '3')
                        .attr("fill", function (d, i) { return color(i); })
                        .attr("d", function (d, i1, j) { if (j == i) return arc.innerRadius(50).outerRadius(80)(d); });
                    path4 = gs4.selectAll("path")
                        .transition().duration(20000).ease('poly', '3')
                        .attr("fill", function (d, i) { return color(i); })
                        .attr("d", function (d, i1, j) { if (j == i) return arc.innerRadius(50).outerRadius(80)(d); });
    
    
    
    
                })
                .on('mouseout', function (d, i) {
                    d3.select(this).attr({
                        'font-size': "12px"
                    });
                    gs1.selectAll("path").on("mouseover", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j1) { return arc.innerRadius(50).outerRadius(80)(d); })
                    }).on("mouseout", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(70)(d); })
                    });
                    gs2.selectAll("path").on("mouseover", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(70)(d); })
                    }).on("mouseout", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(70)(d); })
                    });
                    gs3.selectAll("path").on("mouseover", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(85)(d); })
                    }).on("mouseout", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(85)(d); })
                    });
                    gs4.selectAll("path").on("mouseover", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(85)(d); })
                    }).on("mouseout", function (d, i, j) {
                        d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(85)(d); })
                    });
    
                });
            gs1.selectAll("path").on("mouseover", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(85)(d); })
            }).on("mouseout", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(50).outerRadius(80)(d); })
            })
            gs2.selectAll("path").on("mouseover", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(75)(d); })
            }).on("mouseout", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(70)(d); })
            })
            gs3.selectAll("path").on("mouseover", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(75)(d); })
            }).on("mouseout", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(70)(d); })
            })
            gs4.selectAll("path").on("mouseover", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(75)(d); })
            }).on("mouseout", function (d, i, j) {
                d3.select(this).attr("d", function (d, i, j) { return arc.innerRadius(40).outerRadius(70)(d); })
            })
    
        });
   
    }); 
    
    
    // /*chartbar*/
    // var w = 560;
    // var h = 300;
    
    // //比例
    // var scaleX = d3.scale.linear().range([0, w]).domain([0, 110000]);
    // var scaleY = d3.scale.linear().range([0, h]).domain([0, 190]);
    
    // //append svg,g
    // var svgBar = d3.select("#MW_in_TW").append("svg");
    // svgBar = d3.select("#MW_in_TW").select("svg")
    //     .attr({
    //         'x': 0,
    //         'y': 0,
    //         width:2* w,
    //         height: 300
    //     });
    // var chartBar = svgBar.append('g');
    
    // //insert into path to draw
    // d3.csv("data/2002.csv",function(error,data_year){
    //     if(error) throw error;
    //     chartBar.selectAll("path")
    //     .data(data_year)
    //     .enter()
    //     .append("path");
    // var Gradient_b = d3.scale.linear().domain([1,22]).range(['#00BCD4','#006064'])
    //     //設定元素參數
    // chartBar.selectAll('path')
    // .attr("d", function(d,i) {
    //         if(d.項目 == "台灣")
    //         {
    //             return;
    //         }else{
    //             --i;
    //         var x1 = 100; //bar 起始點
    //         var x2 = 100; //bar 終點
    //         var y1 = scaleY(i * 10); //bar 起始高
    //         var y2 = scaleY(i * 10 + 8);
    //             return (
    //             "M" + x1 + " " + y1 +
    //             "L" + x2 + " " + y1 +
    //             "L" + x2 + " " + y2 +
    //             "L" + x1 + " " + y2 + "Z"
    //         );
    //         }
    // })
    // .attr('fill', function (d, i) {
    //     return Gradient_b(i);
    // })
    // .transition().duration(1000).ease('poly', '3')
    // .attr("d", function (d,i) {  
    //     if(d.項目 == "台灣")
    //     {
    //         return;
    //     }else{
    //         --i;
    //         var x1 = 100; //bar 起始點
    //         var x2 = 100 + scaleX(d.總計); //bar 終點
    //         var y1 = scaleY(i * 10); //bar 起始高
    //         var y2 = scaleY(i * 10 + 8);
    //     return (
    //         "M" + x1 + " " + y1 +
    //         "L" + x2 + " " + y1 +
    //         "L" + x2 + " " + y2 +
    //         "L" + x1 + " " + y2 + "Z"
    //     );
    // }
    // })
    // .attr('fill', function (d, i) {
    //         return  Gradient_b(i);
    // });
    // //長條圖國家文字
    // chartBar.selectAll('text')
    // .data(data_year)
    // .enter()
    // .append('text')
    // .attr({
    //     'x': 50,
    //     'y': function (d, i) {
    //         if(d.項目 == "台灣")
    //         {
    //             return;
    //         }else{
    //             --i;
    //         return scaleY(i * 10 + 5);}
    //     },
    //     'fill': 'black',
    //     'font-size': '10px',
    //     'font-weight': 'bold',
    //     'font-family': '微軟正黑體'
    // })
    // .text(function (d, i) {
    //     if(d.項目 == "台灣")
    //     {
    //         return;
    //     }else{
    //         return d.項目;
    //     }
    // });
    // });
    // // /*甜甜圈*/
    // // var width_d = 460,
    // //     height_d = 300,
    // //     radius = Math.min(width_d,height_d)/2;
    // // var pie = d3.layout.pie().sort(null);
    // // var arc = d3.svg.arc().innerRadius(radius - 100).outerRadius(radius-50);
    // // var donut = d3.select("#donut").append("svg");
    
    // // donut = d3.select("svg").attr("width",width_d).attr("height",height_d);
    // // var donut_C = donut.append("g");
    // // donut_C.attr("transform","translate("+width_d/2+","+height_d/2+")");
    // //               var color = d3.scale.category20();
    // //               var dataset = {
    // //                 apples: [53245, 28479, 19697, 24037, 40245],
    // //               };
    // // d3.csv("data.csv",function(error,data){
    
    // //     if (error) throw error;
    // //     var path = donut_C.selectAll("path").data(pie(dataset. apples)).enter().append("path")
    // //                     .attr("fill",function(d,i){return color(i);})
    // //                     .attr("d",arc);
    // // });
    
    // //逐年變動
    // TimeLine.selectAll('circle')
    //     .on('mouseover', function (d, i) {
    //         //bigger circle
    //         d3.select(this).attr({
    //             'r': 6,
    //             'opacity':1
    //         });
    //         //changing chartbar
    //         var filename = 2002+i;
    //         d3.csv("data/"+filename+".csv",function(error,update){
    //             if (error) throw error;
    //         chartBar.selectAll('path')
    //                 .transition().duration(1000).ease('poly', '2')
    //                 .selectAll('path')
    //                 .data(update)
    //                 .attr("d", function (d, i) {
    //                     if(d.項目 == "台灣")
    //                     {
    //                         return;
    //                     }else{
    //                         --i;
    //                     var x1 = 100; //bar 起始點
    //                     var x2 = 100 + scaleX(d.總計); //bar 終點
    //                     var y1 = scaleY(i * 10); //bar 起始高
    //                     var y2 = scaleY(i * 10 + 8);
    
    //                 return (
    //                     "M" + x1 + " " + y1 +
    //                     "L" + x2 + " " + y1 +
    //                     "L" + x2 + " " + y2 +
    //                     "L" + x1 + " " + y2 + "Z"
    //                 );
    //             }
    //             });
    //         // chartBar.selectAll('.ratio')
    //         //     .attr('opacity', '0')
    //         //     .transition().duration(1000).ease('poly', '2')
    //         //     .text(function (d1, i1) {
    
    //         //             if (i1 == 0) {
    //         //                 dev = [];
    //         //                 num = [];
    //         //             }
    //         //             if (i1 < 5) {
    //         //                 dev.push(d1[i + 1]);
    //         //             } else {
    
    //         //                 var ratio = 100 * (d1[i + 1] + dev[i1 - 5]) / sum;
    //         //                 num.push(d1[i + 1] + dev[i1 - 5]);
    //         //                 return ratio.toFixed(2) + "%"
    //         //             }
    //         //         }
    //         //     )
    //         //     .attr('x', function (d1, i1) {
    //         //         if (i1 >= 5) {
    //         //             return 160 + scaleX(num[i1 - 5])
    //         //         }
    //         //     })
    //         //     .attr('opacity', '1');
    //     })
    //         //Linechart     
    //         LineChart.selectAll('#mark'+i).attr('visibility','visible');
    //         LineChart.selectAll('#dot'+i).attr('opacity','1');})
    //     .on('mouseout', function (d,i) {
    //         d3.select(this).attr({
    //             'r': 3,
    //             'opacity':0.7
    //         });
    //         LineChart.selectAll('#mark'+i).attr('visibility','hidden');
    //         LineChart.selectAll('#dot'+i).attr('opacity','1');
    //     });
    // });
    
    
    
    
    
    
    
    
