// 1. 创建标签
    let p = document.createElement('p')

    // 2. 设置内容
    p.innerText = '我是 JS 动态加进来的段落56666'

    // 3. 加到页面里
    document.getElementById('container').appendChild(p)

    function forceRefresh() {
  // 跳过缓存，强制获取最新页面
  location.reload(true);
}