// 第五章数据可视化图表实现
// 基于暖米黄色主题

// 全局图表配置
Chart.defaults.color = '#5D4E37';
Chart.defaults.font.family = "'Microsoft YaHei', 'Arial', sans-serif";

const warmColors = {
    primary: '#D4A574',
    secondary: '#C19A6B', 
    light: '#E6D5B8',
    pale: '#F5F0E8',
    accent: '#B8956A',
    contrast1: '#8B7355',
    contrast2: '#A0826D'
};

// 5.1 实例1：产品销售额分析
function createProductSalesChart() {
    const ctx = document.getElementById('productSales');
    if (!ctx) return;
    const chartCtx = ctx.getContext('2d');
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const productA = [20, 28, 23, 16, 29, 36, 39, 33, 31, 19, 21, 25];
    const productB = [17, 22, 39, 26, 35, 23, 25, 27, 29, 38, 28, 20];

    new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '产品A',
                data: productA,
                borderColor: warmColors.primary,
                backgroundColor: 'rgba(212, 165, 116, 0.1)',
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7
            }, {
                label: '产品B',
                data: productB,
                borderColor: warmColors.secondary,
                backgroundColor: 'rgba(193, 154, 107, 0.1)',
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '产品A与产品B的销售额趋势'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 45,
                    title: {
                        display: true,
                        text: '销售额(亿元)'
                    }
                }
            }
        }
    });
}

function createProductAPieChart() {
    const ctx = document.getElementById('productAPie');
    if (!ctx) return;
    const chartCtx = ctx.getContext('2d');
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const data = [20, 28, 23, 16, 29, 36, 39, 33, 31, 19, 21, 25];

    new Chart(chartCtx, {
        type: 'pie',
        data: {
            labels: months,
            datasets: [{
                data: data,
                backgroundColor: [
                    warmColors.primary, warmColors.secondary, warmColors.light,
                    warmColors.accent, warmColors.contrast1, warmColors.contrast2,
                    '#D4A574', '#C19A6B', '#E6D5B8', '#B8956A', '#8B7355', '#A0826D'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '产品A销售额分布'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createProductBPieChart() {
    const ctx = document.getElementById('productBPie').getContext('2d');
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const data = [17, 22, 39, 26, 35, 23, 25, 27, 29, 38, 28, 20];

    new Chart(chartCtx, {
        type: 'doughnut',
        data: {
            labels: months,
            datasets: [{
                data: data,
                backgroundColor: [
                    warmColors.secondary, warmColors.light, warmColors.accent,
                    warmColors.contrast1, warmColors.contrast2, warmColors.primary,
                    '#C19A6B', '#E6D5B8', '#B8956A', '#8B7355', '#A0826D', '#D4A574'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '产品B销售额分布'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 5.1 实例2：养猫养狗人群比例
function createCatOwnershipChart() {
    const ctx = document.getElementById('catOwnership').getContext('2d');
    const countries = ['中国', '加拿大', '巴西', '澳大利亚', '日本', '墨西哥', '俄罗斯', '韩国', '瑞士', '土耳其', '英国', '美国'];
    const data = [19, 33, 28, 29, 14, 24, 57, 6, 26, 15, 27, 39];

    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: '养猫人群比例',
                data: data,
                backgroundColor: warmColors.primary,
                borderColor: warmColors.accent,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '部分国家养猫人群比例'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '人群比例(%)'
                    }
                }
            }
        }
    });
}

function createDogOwnershipChart() {
    const ctx = document.getElementById('dogOwnership').getContext('2d');
    const countries = ['中国', '加拿大', '巴西', '澳大利亚', '日本', '墨西哥', '俄罗斯', '韩国', '瑞士', '土耳其', '英国', '美国'];
    const data = [25, 33, 58, 39, 15, 64, 29, 23, 22, 11, 27, 50];

    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: '养狗人群比例',
                data: data,
                backgroundColor: warmColors.secondary,
                borderColor: warmColors.contrast1,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '部分国家养狗人群比例'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '人群比例(%)'
                    }
                }
            }
        }
    });
}

// 5.2 实例3：抖音用户分析
function createDouyinGrowthChart() {
    const ctx = document.getElementById('douyinGrowth').getContext('2d');
    if (!ctx) return;
    
    const cities = ['一线城市', '二线城市', '三线城市', '四线及以外', '其他国家及地区'];
    const growth = [51, 73, 99, 132, 45];

    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: cities,
            datasets: [{
                label: '增长倍数',
                data: growth,
                backgroundColor: warmColors.primary,
                borderColor: warmColors.accent,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '抖音2018vs2017人群增长倍数'
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '增长倍数'
                    },
                    max: 150
                }
            }
        }
    });
}

function createDouyin2017Chart() {
    const ctx = document.getElementById('douyin2017').getContext('2d');
    const cities = ['一线城市', '二线城市', '三线城市', '四线及以外', '其他国家及地区'];
    const data = [21, 35, 22, 19, 3];

    new Chart(chartCtx, {
        type: 'pie',
        data: {
            labels: cities,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#2F4F4F', '#FF0000', '#A9A9A9', '#FFD700', '#B0C4DE'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '2017年抖音用户地区分布'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createDouyin2018Chart() {
    const ctx = document.getElementById('douyin2018').getContext('2d');
    const cities = ['一线城市', '二线城市', '三线城市', '四线及以外', '其他国家及地区'];
    const data = [13, 32, 27, 27, 1];

    new Chart(chartCtx, {
        type: 'pie',
        data: {
            labels: cities,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#2F4F4F', '#FF0000', '#A9A9A9', '#FFD700', '#B0C4DE'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '2018年抖音用户地区分布'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 5.3 实例4：气温与降水关系
function createWeatherChart() {
    const ctx = document.getElementById('weatherData').getContext('2d');
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const temperature = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 33.4, 23.0, 16.5, 12.0, 6.2];
    const precipitation = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3];
    const evaporation = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];

    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: '蒸发量',
                    data: evaporation,
                    backgroundColor: 'rgba(212, 165, 116, 0.8)',
                    borderColor: warmColors.accent,
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: '降水量',
                    data: precipitation,
                    backgroundColor: 'rgba(193, 154, 107, 0.8)',
                    borderColor: warmColors.contrast1,
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: '平均气温',
                    data: temperature,
                    type: 'line',
                    borderColor: warmColors.contrast2,
                    backgroundColor: 'rgba(160, 130, 109, 0.1)',
                    borderWidth: 2,
                    pointRadius: 5,
                    yAxisID: 'y1',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '平均气温与降水量、蒸发量的关系'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '水量 (ml)'
                    },
                    stacked: true
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '气温(°C)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

// 5.4 实例5：汽车销售情况
function createCarMonthlySalesChart() {
    const ctx = document.getElementById('carMonthlySales').getContext('2d');
    const months = ['1月', '2月', '3月', '4月', '5月', '6月'];
    const sales = [2150, 1050, 1560, 1480, 1530, 1490];

    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: '销售额',
                data: sales,
                backgroundColor: warmColors.primary,
                borderColor: warmColors.accent,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '2018年上半年某品牌汽车的销售额'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '销售额(亿元)'
                    }
                }
            }
        }
    });
}

function createCarCitySalesChart() {
    const ctx = document.getElementById('carCitySales').getContext('2d');
    const cities = ['北京', '上海', '广州', '深圳', '浙江', '山东'];
    const sales = [83775, 62860, 59176, 64205, 48671, 39968];

    new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: cities,
            datasets: [{
                label: '销量',
                data: sales,
                borderColor: warmColors.secondary,
                backgroundColor: 'rgba(193, 154, 107, 0.1)',
                borderWidth: 2,
                pointRadius: 8,
                pointHoverRadius: 10,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '分公司某品牌汽车的销量'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '销量(辆)'
                    }
                }
            }
        }
    });
}

function createCarCityStackedChart() {
    const ctx = document.getElementById('carCityStacked').getContext('2d');
    const cities = ['北京', '上海', '广州', '深圳', '浙江', '山东'];
    const sales = [83775, 62860, 59176, 64205, 48671, 39968];

    new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: cities,
            datasets: [{
                label: '销量',
                data: sales,
                backgroundColor: 'rgba(230, 213, 184, 0.6)',
                borderColor: warmColors.accent,
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '分公司某品牌汽车的销量(堆叠图)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '销量(辆)'
                    }
                }
            }
        }
    });
}

// 页面加载完成后初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing charts...');
    
    // 等待Chart.js完全加载
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded');
        return;
    }
    
    // 5.1 固定区域子图
    setTimeout(() => {
        try {
            createProductSalesChart();
            createProductAPieChart();
            createProductBPieChart();
            createCatOwnershipChart();
            createDogOwnershipChart();
            console.log('Section 5.1 charts created successfully');
        } catch (error) {
            console.error('Error creating section 5.1 charts:', error);
        }
    }, 100);
    
    // 5.2 自定义区域子图
    setTimeout(() => {
        try {
            createDouyinGrowthChart();
            createDouyin2017Chart();
            createDouyin2018Chart();
            console.log('Section 5.2 charts created successfully');
        } catch (error) {
            console.error('Error creating section 5.2 charts:', error);
        }
    }, 200);
    
    // 5.3 共享坐标轴
    setTimeout(() => {
        try {
            createWeatherChart();
            console.log('Section 5.3 charts created successfully');
        } catch (error) {
            console.error('Error creating section 5.3 charts:', error);
        }
    }, 300);
    
    // 5.4 子图布局
    setTimeout(() => {
        try {
            createCarMonthlySalesChart();
            createCarCitySalesChart();
            createCarCityStackedChart();
            console.log('Section 5.4 charts created successfully');
        } catch (error) {
            console.error('Error creating section 5.4 charts:', error);
        }
    }, 400);
});

// 添加平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});