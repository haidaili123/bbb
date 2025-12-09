# 🚀 GitHub Pages 部署指南

## 快速部署步骤

### 方法一：使用Git命令行（推荐）

1. **打开命令行/终端**
   ```bash
   # Windows: 使用 Git Bash 或 PowerShell
   # macOS/Linux: 使用 Terminal
   ```

2. **进入项目目录**
   ```bash
   cd "c:/Users/Administrator/CodeBuddy/20251209164246"
   ```

3. **初始化Git仓库**
   ```bash
   git init
   git branch -M main
   ```

4. **添加远程仓库**
   ```bash
   git remote add origin https://github.com/haidaili123/QQQ.git
   ```

5. **添加所有文件**
   ```bash
   git add .
   git add -A
   git add -f  # 强制添加所有文件
   ```

6. **提交更改**
   ```bash
   git commit -m "🚀 Deploy Chapter 5 Data Visualization Website"
   ```

7. **推送到GitHub**
   ```bash
   git push -u origin main --force
   ```

### 方法二：使用GitHub Desktop（图形界面）

1. **下载并安装GitHub Desktop**
   - 访问：https://desktop.github.com/

2. **克隆仓库**
   - 打开GitHub Desktop
   - 选择 "Clone a repository from the Internet"
   - 输入：`https://github.com/haidaili123/QQQ.git`
   - 选择本地目录：`c:/Users/Administrator/CodeBuddy/20251209164246`

3. **添加文件**
   - 将项目文件复制到克隆的目录中
   - 在GitHub Desktop中查看更改
   - 填写提交信息：`🚀 Deploy Chapter 5 Data Visualization Website`
   - 点击 "Commit to main"
   - 点击 "Push origin"

### 方法三：使用部署脚本

1. **给脚本执行权限**（macOS/Linux）
   ```bash
   chmod +x deploy.sh
   ```

2. **执行脚本**
   ```bash
   ./deploy.sh
   ```

## ⚙️ 启用GitHub Pages

1. **访问仓库设置**
   - 打开：https://github.com/haidaili123/QQQ
   - 点击 "Settings" 标签

2. **配置Pages**
   - 在左侧菜单找到 "Pages"
   - 在 "Source" 下选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 文件夹选择 "/ (root)"
   - 点击 "Save"

3. **等待部署**
   - GitHub会自动构建和部署
   - 通常需要1-2分钟

## 🌐 访问您的网站

部署成功后，您的网站可以通过以下地址访问：

**👉 https://haidaili123.github.io/QQQ/**

## 📋 检查部署状态

1. **GitHub Pages状态**
   - 访问：https://github.com/haidaili123/QQQ/pages
   - 查看构建状态

2. **Actions日志**
   - 访问：https://github.com/haidaili123/QQQ/actions
   - 查看详细构建日志

## 🔧 常见问题解决

### 问题1：网站显示404错误
**解决方案：**
- 确保推送到了正确的分支（main）
- 检查GitHub Pages是否已启用
- 等待2-3分钟让部署完成

### 问题2：图表不显示
**解决方案：**
- 检查浏览器控制台错误（F12）
- 确保Chart.js CDN链接正确
- 检查JavaScript语法错误

### 问题3：样式丢失
**解决方案：**
- 确保CSS文件路径正确
- 检查文件名大小写
- 确认文件已推送到GitHub

### 问题4：推送失败
**解决方案：**
- 检查网络连接
- 确认GitHub仓库权限
- 尝试使用 `--force` 参数

## 🔄 更新网站

当您修改代码后，只需：

```bash
git add .
git commit -m "更新内容描述"
git push origin main
```

GitHub Pages会自动重新部署您的更改。

## 📱 测试网站

部署后，请测试：
- [ ] 桌面端显示正常
- [ ] 移动端响应式布局
- [ ] 所有图表正常加载
- [ ] 交互功能工作正常
- [ ] 数据筛选和导出功能

## 🎉 完成！

如果一切正常，恭喜您！您的第五章数据可视化网站现在已经成功部署到GitHub Pages！🎊

---

需要帮助？请查看：
- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [本项目 Issues](https://github.com/haidaili123/QQQ/issues)