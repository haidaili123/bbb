// 浅紫色渐变主题 - 第六章坐标轴定制交互功能
// 专为浅紫色主题设计的Chart.js扩展和交互功能

// 浅紫色主题配色系统
const PurpleTheme = {
    // 主色系
    light: '#F3E5F5',           // 极浅紫色 - 背景色
    pale: '#E1BEE7',             // 淡紫色
    soft: '#CE93D8',             // 柔和紫色
    medium: '#AB47BC',           // 中等紫色
    vibrant: '#9C27B0',         // 鲜艳紫色 - 主色
    deep: '#7B1FA2',             // 深紫色
    dark: '#6A1B9A',             // 暗紫色
    accent: '#8E24AA',            // 强调紫色
    
    // 辅助色系
    lavender: '#E6E6FA',         // 薰衣草色
    thistle: '#D8BFD8',          // 蓟色
    plum: '#DDA0DD',             // 梅子色
    orchid: '#DA70D6',           // 兰花色
    violet: '#EE82EE',           // 紫罗兰色
    
    // 渐变色
    gradient1: ['#F3E5F5', '#E1BEE7', '#CE93D8'],
    gradient2: ['#9C27B0', '#AB47BC', '#BA68C8'],
    gradient3: ['#CE93D8', '#9C27B0', '#6A1B9A'],
    
    // 中性色
    textPrimary: '#2E1A47',
    textSecondary: '#5A3A7E',
    textLight: '#8B6BB1',
    surfaceWhite: '#FFFFFF',
    surfaceGray: '#FAFAFA',
    
    // 阴影和边框
    shadowLight: 'rgba(156, 39, 176, 0.08)',
    shadowMedium: 'rgba(156, 39, 176, 0.15)',
    shadowDark: 'rgba(156, 39, 176, 0.25)',
    borderLight: 'rgba(156, 39, 176, 0.2)',
    borderMedium: 'rgba(156, 39, 176, 0.3)'
};

// 第六章数据 - 浅紫色版本
const PurpleChapter6Data = {
    // 实例1：深圳市24小时风速
    windSpeed: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        values: [7, 9, 11, 14, 8, 15, 22, 11, 10, 11, 11, 13, 8],
        hourly: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
        hourlyValues: [7, 8, 9, 10, 11, 12, 14, 16, 15, 13, 22, 18, 11, 10, 10, 11, 10, 11, 11, 12, 11, 12, 13, 11, 8]
    },
    
    // 实例3：三角函数
    trigonometric: {
        generateData: function(points = 100, start = -2*Math.PI, end = 2*Math.PI, amplitude = 1, frequency = 1) {
            const x = [];
            const sin = [];
            const cos = [];
            const tan = [];
            
            for (let i = 0; i < points; i++) {
                const val = start + (end - start) * i / (points - 1);
                x.push(val);
                sin.push(Math.sin(val * frequency) * amplitude);
                cos.push(Math.cos(val * frequency) * amplitude);
                tan.push(Math.tan(val * frequency) * amplitude);
            }
            return { x, sin, cos, tan };
        },
        
        // 特殊数据集
        specialFunctions: {
            damping: (points = 100) => {
                const data = [];
                for (let i = 0; i < points; i++) {
                    data.push(Math.exp(-i/20) * Math.sin(i/5) * 50);
                }
                return data;
            },
            
            beats: (points = 100) => {
                const data = [];
                for (let i = 0; i < points; i++) {
                    data.push(Math.sin(i/5) * Math.cos(i/15) * 30);
                }
                return data;
            }
        }
    },
    
    // 坐标轴位置演示
    axisPosition: {
        data1: [12, 19, 3, 5, 2, 8, 15, 25, 18, 30],
        data2: [8, 12, 6, 9, 4, 11, 7, 20, 14, 25],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    
    // 自定义数据生成器
    dataGenerator: {
        random: (count, range = 100) => {
            const data = [];
            for (let i = 0; i < count; i++) {
                data.push(Math.random() * range);
            }
            return data;
        },
        
        sine: (count, amplitude = 50, frequency = 1) => {
            const data = [];
            for (let i = 0; i < count; i++) {
                data.push(Math.sin(i * frequency) * amplitude + 50);
            }
            return data;
        },
        
        exponential: (count, rate = 0.1) => {
            const data = [];
            for (let i = 0; i < count; i++) {
                data.push(Math.exp(i * rate) * 10);
            }
            return data;
        },
        
        logarithmic: (count) => {
            const data = [];
            for (let i = 1; i <= count; i++) {
                data.push(Math.log(i) * 20);
            }
            return data;
        }
    }
};

// 浅紫色主题图表管理器
class PurpleChartManager {
    constructor() {
        this.charts = {};
        this.animations = {};
        this.settings = {
            animationDuration: 1000,
            animationEasing: 'easeInOutQuart',
            defaultColors: PurpleTheme.gradient2,
            enableAnimations: true,
            enableInteractions: true
        };
    }
    
    // 创建风速图表
    createWindSpeedChart(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.error(`Canvas element with id '${canvasId}' not found`);
            return null;
        }
        
        const ctx = canvas.getContext('2d');
        const chartOptions = this.getWindSpeedChartOptions(options);
        
        this.charts.windSpeed = new Chart(ctx, {
            type: 'line',
            data: {
                labels: PurpleChapter6Data.windSpeed.labels,
                datasets: [{
                    label: '平均风速 (km/h)',
                    data: PurpleChapter6Data.windSpeed.values,
                    borderColor: PurpleTheme.vibrant,
                    backgroundColor: this.createGradient(ctx, PurpleTheme.gradient1),
                    borderWidth: 3,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: PurpleTheme.medium,
                    pointBorderColor: PurpleTheme.vibrant,
                    pointBorderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: chartOptions
        });
        
        return this.charts.windSpeed;
    }
    
    // 创建三角函数图表
    createTrigonometricChart(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;
        
        const ctx = canvas.getContext('2d');
        const chartOptions = this.getTrigonometricChartOptions(options);
        const data = PurpleChapter6Data.trigonometric.generateData(100, -2*Math.PI, 2*Math.PI);
        
        this.charts.trigonometric = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.x,
                datasets: [
                    {
                        label: 'sin(x)',
                        data: data.sin,
                        borderColor: PurpleTheme.vibrant,
                        backgroundColor: 'transparent',
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'cos(x)',
                        data: data.cos,
                        borderColor: PurpleTheme.accent,
                        backgroundColor: 'transparent',
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'tan(x)',
                        data: data.tan,
                        borderColor: PurpleTheme.medium,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        tension: 0.4,
                        fill: false,
                        hidden: true
                    }
                ]
            },
            options: chartOptions
        });
        
        return this.charts.trigonometric;
    }
    
    // 创建轴位置演示图表
    createAxisDemoCharts(canvas1Id, canvas2Id, options = {}) {
        // 第一个演示图表
        const canvas1 = document.getElementById(canvas1Id);
        if (canvas1) {
            const ctx1 = canvas1.getContext('2d');
            this.charts.axisDemo1 = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: PurpleChapter6Data.axisPosition.labels,
                    datasets: [{
                        label: '数据系列 A',
                        data: PurpleChapter6Data.axisPosition.data1,
                        borderColor: PurpleTheme.vibrant,
                        backgroundColor: this.createGradient(ctx1, PurpleTheme.gradient1),
                        borderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: PurpleTheme.medium,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: this.getAxisDemoChartOptions(options)
            });
        }
        
        // 第二个演示图表
        const canvas2 = document.getElementById(canvas2Id);
        if (canvas2) {
            const ctx2 = canvas2.getContext('2d');
            this.charts.axisDemo2 = new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: PurpleChapter6Data.axisPosition.labels,
                    datasets: [{
                        label: '数据系列 B',
                        data: PurpleChapter6Data.axisPosition.data2,
                        backgroundColor: this.createGradient(ctx2, PurpleTheme.gradient2),
                        borderColor: PurpleTheme.vibrant,
                        borderWidth: 2,
                        hoverBackgroundColor: PurpleTheme.medium
                    }]
                },
                options: this.getAxisDemoChartOptions(options)
            });
        }
        
        return { demo1: this.charts.axisDemo1, demo2: this.charts.axisDemo2 };
    }
    
    // 创建自定义图表
    createCustomChart(canvasId, chartOptions = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;
        
        const ctx = canvas.getContext('2d');
        const options = this.getCustomChartOptions(chartOptions);
        
        const chartType = chartOptions.type || 'line';
        const dataMode = chartOptions.dataMode || 'random';
        const dataPoints = chartOptions.dataPoints || 30;
        const dataRange = chartOptions.dataRange || 100;
        
        const data = this.generateCustomData(dataMode, dataPoints, dataRange);
        
        if (this.charts.custom) {
            this.charts.custom.destroy();
        }
        
        this.charts.custom = new Chart(ctx, {
            type: chartType,
            data: {
                labels: data.labels,
                datasets: [{
                    label: '自定义数据',
                    data: data.values,
                    borderColor: PurpleTheme.vibrant,
                    backgroundColor: chartType === 'line' ? this.createGradient(ctx, PurpleTheme.gradient1) : this.createGradient(ctx, PurpleTheme.gradient2),
                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    tension: 0.3,
                    fill: chartType === 'area' || chartType === 'line'
                }]
            },
            options: options
        });
        
        return this.charts.custom;
    }
    
    // 获取风速图表选项
    getWindSpeedChartOptions(customOptions = {}) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: '深圳市24小时平均风速监测',
                    font: { size: 16, weight: 'bold' },
                    color: PurpleTheme.textPrimary,
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 },
                        color: PurpleTheme.textPrimary
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: PurpleTheme.vibrant,
                    bodyColor: PurpleTheme.textPrimary,
                    borderColor: PurpleTheme.medium,
                    borderWidth: 2,
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y} km/h`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '时间',
                        font: { size: 14, weight: 'bold' },
                        color: PurpleTheme.textPrimary
                    },
                    grid: {
                        display: true,
                        color: PurpleTheme.light + '40',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: PurpleTheme.textPrimary
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '风速 (km/h)',
                        font: { size: 14, weight: 'bold' },
                        color: PurpleTheme.textPrimary
                    },
                    grid: {
                        display: true,
                        color: PurpleTheme.light + '40',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: PurpleTheme.textPrimary
                    },
                    beginAtZero: true,
                    max: 25
                }
            },
            animation: {
                duration: this.settings.animationDuration,
                easing: this.settings.animationEasing
            },
            ...customOptions
        };
    }
    
    // 获取三角函数图表选项
    getTrigonometricChartOptions(customOptions = {}) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: '三角函数曲线 - sin, cos, tan',
                    font: { size: 16, weight: 'bold' },
                    color: PurpleTheme.textPrimary,
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 },
                        color: PurpleTheme.textPrimary
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: PurpleTheme.vibrant,
                    bodyColor: PurpleTheme.textPrimary,
                    borderColor: PurpleTheme.medium,
                    borderWidth: 2,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        title: function(tooltipItems) {
                            const xValue = tooltipItems[0].parsed.x;
                            return `x = ${xValue.toFixed(3)}`;
                        },
                        label: function(context) {
                            const value = context.parsed.y;
                            return `${context.dataset.label}: ${value.toFixed(4)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'x (弧度)',
                        font: { size: 14, weight: 'bold' },
                        color: PurpleTheme.textPrimary
                    },
                    grid: {
                        display: true,
                        color: PurpleTheme.light + '40',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: PurpleTheme.textPrimary,
                        callback: function(value) {
                            const pi = Math.PI;
                            if (Math.abs(value) < 0.01) return '0';
                            if (Math.abs(value - pi) < 0.1) return 'π';
                            if (Math.abs(value + pi) < 0.1) return '-π';
                            if (Math.abs(value - 2*pi) < 0.1) return '2π';
                            if (Math.abs(value + 2*pi) < 0.1) return '-2π';
                            if (Math.abs(value - pi/2) < 0.1) return 'π/2';
                            if (Math.abs(value + pi/2) < 0.1) return '-π/2';
                            if (Math.abs(value - 3*pi/2) < 0.1) return '3π/2';
                            if (Math.abs(value + 3*pi/2) < 0.1) return '-3π/2';
                            return value.toFixed(1);
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'y',
                        font: { size: 14, weight: 'bold' },
                        color: PurpleTheme.textPrimary
                    },
                    grid: {
                        display: true,
                        color: PurpleTheme.light + '40',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: PurpleTheme.textPrimary
                    },
                    min: -2,
                    max: 2
                }
            },
            animation: {
                duration: this.settings.animationDuration,
                easing: this.settings.animationEasing
            },
            ...customOptions
        };
    }
    
    // 获取轴演示图表选项
    getAxisDemoChartOptions(customOptions = {}) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '坐标轴位置演示',
                    font: { size: 14, weight: 'bold' },
                    color: PurpleTheme.textPrimary
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 12 },
                        color: PurpleTheme.textPrimary
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: { display: false },
                    ticks: { color: PurpleTheme.textPrimary }
                },
                y: {
                    display: true,
                    grid: { color: PurpleTheme.light + '40' },
                    ticks: { color: PurpleTheme.textPrimary },
                    beginAtZero: true
                }
            },
            animation: {
                duration: this.settings.animationDuration,
                easing: this.settings.animationEasing
            },
            ...customOptions
        };
    }
    
    // 获取自定义图表选项
    getCustomChartOptions(customOptions = {}) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                title: {
                    display: true,
                    text: '自定义创作图表',
                    font: { size: 16, weight: 'bold' },
                    color: PurpleTheme.textPrimary
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 12 },
                        color: PurpleTheme.textPrimary
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: { display: false },
                    ticks: { color: PurpleTheme.textPrimary }
                },
                y: {
                    display: true,
                    grid: { color: PurpleTheme.light + '40' },
                    ticks: { color: PurpleTheme.textPrimary },
                    beginAtZero: true
                }
            },
            animation: {
                duration: this.settings.enableAnimations ? this.settings.animationDuration : 0,
                easing: this.settings.animationEasing
            },
            ...customOptions
        };
    }
    
    // 创建渐变
    createGradient(ctx, colors) {
        if (!ctx) return colors[0];
        
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        colors.forEach((color, index) => {
            gradient.addColorStop(index / (colors.length - 1), color);
        });
        return gradient;
    }
    
    // 生成自定义数据
    generateCustomData(mode, count, range) {
        const labels = [];
        const values = [];
        
        for (let i = 0; i < count; i++) {
            labels.push(`数据${i + 1}`);
            
            switch(mode) {
                case 'sine':
                    values.push(Math.sin(i * 0.3) * range/2 + range/2);
                    break;
                case 'cosine':
                    values.push(Math.cos(i * 0.3) * range/2 + range/2);
                    break;
                case 'linear':
                    values.push(i * range / count);
                    break;
                case 'exponential':
                    values.push(Math.exp(i * 0.1) * range/10);
                    break;
                case 'logarithmic':
                    values.push(Math.log(i + 1) * range/5);
                    break;
                default:
                    values.push(Math.random() * range);
            }
        }
        
        return { labels, values };
    }
    
    // 更新图表数据
    updateChart(chartName, newData, options = {}) {
        const chart = this.charts[chartName];
        if (!chart) return false;
        
        if (newData.labels) {
            chart.data.labels = newData.labels;
        }
        
        if (newData.datasets) {
            newData.datasets.forEach((dataset, index) => {
                if (chart.data.datasets[index]) {
                    Object.assign(chart.data.datasets[index], dataset);
                }
            });
        }
        
        chart.update(options.mode || 'default');
        return true;
    }
    
    // 动画功能
    animateChart(chartName, animationType = 'fadeIn') {
        const chart = this.charts[chartName];
        if (!chart) return;
        
        switch(animationType) {
            case 'fadeIn':
                this.fadeInAnimation(chart);
                break;
            case 'wave':
                this.waveAnimation(chart);
                break;
            case 'pulse':
                this.pulseAnimation(chart);
                break;
            default:
                console.log(`Unknown animation type: ${animationType}`);
        }
    }
    
    // 淡入动画
    fadeInAnimation(chart) {
        const originalData = chart.data.datasets.map(dataset => ({
            ...dataset,
            data: [...dataset.data]
        }));
        
        // 设置初始状态
        chart.data.datasets.forEach(dataset => {
            dataset.data = dataset.data.map(() => 0);
        });
        chart.update('none');
        
        // 动画到最终状态
        let step = 0;
        const steps = 30;
        const interval = setInterval(() => {
            if (step >= steps) {
                clearInterval(interval);
                return;
            }
            
            const progress = step / steps;
            chart.data.datasets.forEach((dataset, index) => {
                dataset.data = originalData[index].data.map(value => value * progress);
            });
            
            chart.update('none');
            step++;
        }, this.settings.animationDuration / steps);
    }
    
    // 波浪动画
    waveAnimation(chart) {
        if (!chart.data.datasets[0]) return;
        
        const originalData = [...chart.data.datasets[0].data];
        let step = 0;
        
        const animate = () => {
            const offset = step * 0.1;
            chart.data.datasets[0].data = originalData.map((value, index) => {
                return value * Math.sin(index * 0.3 + offset) * 0.3 + value * 0.7;
            });
            
            chart.update('none');
            step++;
            
            if (step < 100) {
                requestAnimationFrame(animate);
            } else {
                chart.data.datasets[0].data = originalData;
                chart.update('none');
            }
        };
        
        animate();
    }
    
    // 脉冲动画
    pulseAnimation(chart) {
        const originalBorderWidth = chart.data.datasets[0].borderWidth;
        let step = 0;
        let increasing = true;
        
        const animate = () => {
            if (increasing) {
                step += 0.5;
                if (step >= 3) increasing = false;
            } else {
                step -= 0.5;
                if (step <= 1) increasing = true;
            }
            
            chart.data.datasets.forEach(dataset => {
                dataset.borderWidth = originalBorderWidth + step;
            });
            
            chart.update('none');
            
            if (step === 1 && !increasing) {
                chart.data.datasets.forEach(dataset => {
                    dataset.borderWidth = originalBorderWidth;
                });
                chart.update('none');
                return;
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    // 导出图表
    exportChart(chartName, filename = null) {
        const chart = this.charts[chartName];
        if (!chart) return null;
        
        const url = chart.toBase64Image();
        const link = document.createElement('a');
        link.download = filename || `purple-chart-${chartName}-${Date.now()}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        return url;
    }
    
    // 导出所有图表
    exportAllCharts() {
        const exports = {};
        Object.entries(this.charts).forEach(([name, chart]) => {
            if (chart) {
                exports[name] = this.exportChart(name);
            }
        });
        return exports;
    }
    
    // 重置所有设置
    resetAllCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.reset();
                chart.update();
            }
        });
    }
    
    // 销毁所有图表
    destroyAllCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.destroy();
            }
        });
        this.charts = {};
        this.animations = {};
    }
}

// 全局紫色图表管理器实例
const purpleChartManager = new PurpleChartManager();

// 浅紫色主题全局函数
window.PurpleCharts = {
    manager: purpleChartManager,
    theme: PurpleTheme,
    data: PurpleChapter6Data,
    
    // 便捷函数
    createWindSpeed: (canvasId, options) => purpleChartManager.createWindSpeedChart(canvasId, options),
    createTrigonometric: (canvasId, options) => purpleChartManager.createTrigonometricChart(canvasId, options),
    createAxisDemo: (canvas1Id, canvas2Id, options) => purpleChartManager.createAxisDemoCharts(canvas1Id, canvas2Id, options),
    createCustom: (canvasId, options) => purpleChartManager.createCustomChart(canvasId, options),
    
    // 功能函数
    animate: (chartName, type) => purpleChartManager.animateChart(chartName, type),
    export: (chartName, filename) => purpleChartManager.exportChart(chartName, filename),
    exportAll: () => purpleChartManager.exportAllCharts(),
    reset: () => purpleChartManager.resetAllCharts(),
    destroy: () => purpleChartManager.destroyAllCharts(),
    
    // 获取图表实例
    get: (chartName) => purpleChartManager.charts[chartName],
    getAll: () => purpleChartManager.charts
};

// 初始化函数
window.initPurpleTheme = function() {
    console.log('🌸 初始化浅紫色渐变主题...');
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 自动初始化所有图表
    const initCharts = () => {
        try {
            purpleChartManager.createWindSpeedChart('windSpeedPurpleChart');
            purpleChartManager.createTrigonometricChart('trigPurpleChart');
            purpleChartManager.createAxisDemoCharts('axisDemoPurple1', 'axisDemoPurple2');
            purpleChartManager.createCustomChart('customPurpleChart');
            
            console.log('✅ 浅紫色主题图表初始化完成');
        } catch (error) {
            console.error('❌ 浅紫色主题图表初始化失败:', error);
        }
    };
    
    // 延迟初始化以确保DOM完全加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCharts);
    } else {
        setTimeout(initCharts, 100);
    }
};

// 自动初始化
initPurpleTheme();