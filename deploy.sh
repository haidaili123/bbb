#!/bin/bash

# GitHub Pages 部署脚本
# 用于将第五章数据可视化网站部署到 https://haidaili123.github.io/QQQ/

echo "🚀 开始部署第五章数据可视化网站到GitHub Pages..."

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：未找到index.html文件，请确保在项目根目录执行此脚本"
    exit 1
fi

# 初始化Git仓库（如果需要）
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
    git branch -M main
fi

# 添加远程仓库（如果还没有）
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 添加远程仓库..."
    git remote add origin https://github.com/haidaili123/QQQ.git
fi

# 添加所有文件
echo "📝 添加文件到Git..."
git add .
git add -A
git add -f

# 提交更改
echo "💾 提交更改..."
git commit -m "🚀 Deploy Chapter 5 Data Visualization Website

✨ Features:
- Low-saturation warm yellow theme design
- Interactive data visualization with Chart.js
- Responsive layout for all devices
- Data filtering and export functionality
- Based on Chapter 5 Matplotlib examples

📊 Charts include:
- Product sales analysis (line/bar/radar charts)
- Pet ownership statistics by country
- Douyin user growth and demographics
- Weather data visualization
- Car sales comparison

🎨 Theme: Warm yellow color palette
📱 Mobile-friendly responsive design
🔧 Built with HTML5, CSS3, Chart.js

Deploy to GitHub Pages: https://haidaili123.github.io/QQQ/"

# 推送到GitHub
echo "⬆️ 推送到GitHub..."
git push -u origin main --force

# 等待GitHub Pages构建
echo "⏳ 等待GitHub Pages构建完成..."
sleep 5

echo "✅ 部署完成！"
echo ""
echo "🌐 您的网站现在可以通过以下地址访问："
echo "👉 https://haidaili123.github.io/QQQ/"
echo ""
echo "📝 如果网站没有立即显示，请等待1-2分钟让GitHub Pages完成构建"
echo "📋 构建状态可在 https://github.com/haidaili123/QQQ/actions 查看"