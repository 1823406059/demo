$(document).ready(function() {
	setLine();
	setBar();
	setPie();
});
var setLine = function() {
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('card_graph'));
	//https://edu.telking.com/api/?type=month
	$.get('https://edu.telking.com/api/?type=month', function(data) {
		myChart.setOption({
			title: {
				text: '曲线图数据展示',
				x: 'center'
			},
			xAxis: {
				data: data.data.xAxis
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value}人'
				}

			},
			series: [{
				name: '访问来源',
				smooth: true,
				type: 'line', // 设置图表类型为饼图
				data: data.data.series
			}]
		})
	}, 'json');
}
var setBar = function() {
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('histogram'));

	//使用制定的配置项和数据显示图表
	$.get('https://edu.telking.com/api/?type=week', function(data) {
		myChart.setOption({
			title: {
				text: '柱状图数据展示',
				x: 'center'
			},
			xAxis: {
				data: data.data.xAxis
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
				type: 'bar', // 设置图表类型为饼图
				data: data.data.series
			}]
		})
	}, 'json');
}
var setPie = function() {
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('pie_chart'));
	//使用制定的配置项和数据显示图表
	$.get('https://edu.telking.com/api/?type=week', function(data) {

		myChart.setOption({
			title: {
				text: '饼状图数据展示',
				x: 'center'
			},

			series: [{
				smooth: true,
				type: 'pie', // 设置图表类型为饼图
				data: [{
					value: data.data.series[0],
					name: data.data.xAxis[0]
				}, {
					value: data.data.series[1],
					name: data.data.xAxis[1]
				}, {
					value: data.data.series[2],
					name: data.data.xAxis[2]
				}, {
					value: data.data.series[3],
					name: data.data.xAxis[3]
				}, {
					value: data.data.series[4],
					name: data.data.xAxis[4]
				}, {
					value: data.data.series[5],
					name: data.data.xAxis[5]
				}, {
					value: data.data.series[6],
					name: data.data.xAxis[6]
				}]
			}]
		})
	}, 'json');
}
