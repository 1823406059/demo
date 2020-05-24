$(document).ready(function() {
	setLine();
	setBar();
	setPie();
});
var setLine = function() {
	var option = {
		title: {
			text: '曲线图数据展示',
			x: 'center'
		},
		tooltip: {},
		legend: {
			data: ['用户来源']
		},
		xAxis: {
			data: ["01/26", "01/28", "01/30", "02/01", "02/03", "02/05", "02/07", "02/09", "02/11", "02/13", "02/15", "02/17", "02/19", "02/21", "02/23"]
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}人'
			}

		},
		series: [{
			name: '日期',
			smooth: true,
			type: 'line',
			data: [8972, 6448, 7456, 5824, 8123, 300, 300, 5319, 7463, 1435, 9426, 8187, 8297, 443, 9135]
		}]
	};
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('card_graph'));

	//使用制定的配置项和数据显示图表
	myChart.setOption(option);
}
var setBar = function() {
	var option = {
		title: {
			text: '柱状图数据展示',
			x: 'center'
		},
		tooltip: {},
		legend: {
			data: ['用户来源']
		},

		xAxis: {
			data: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUM"]
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}人'
			}

		},
		series: [{
			name: '商品数',
			smooth: true,
			type: 'bar',
			data: [9, 11, 13, 10, 8, 11, 5]
		}]
	};
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('histogram'));

	//使用制定的配置项和数据显示图表
	myChart.setOption(option);
}
var setPie = function() {
	var option = {
		title: {
			text: '饼状图数据展示',
			x: 'center'
		},
		tooltip: {},
		series: [{
			type: 'pie',
			data: [{
					value: 9,
					name: 'MON'
				},
				{
					value: 11,
					name: 'TUE'
				},
				{
					value: 13,
					name: 'WED'
				},
				{
					value: 10,
					name: 'THU'
				},
				{
					value: 8,
					name: 'FRI'
				},
				{
					value: 11,
					name: 'SAT'
				},
				{
					value: 5,
					name: 'SUM'
				}
			]
		}]
	};
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('pie_chart'));

	//使用制定的配置项和数据显示图表
	myChart.setOption(option);
}