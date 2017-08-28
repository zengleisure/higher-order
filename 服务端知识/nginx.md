### Windows 下面的Nginx的命令



* 启动 

  E:\nginx> start nginx

* 停止

  E:\nginx>nginx.exe -s stop  // 快速停止nginx

  E: \nginx>nginx.exe -s quit // 有秩序的停止nginx 保存相关信息

* 重新载入nginx

  E:\nginx>nginx.exe -s reload

* 重新打开日志文件

  E:\nginx>nginx.exe -s reopen

* 查看Nginx的版本
  E:\nginx>nginx.exe -v