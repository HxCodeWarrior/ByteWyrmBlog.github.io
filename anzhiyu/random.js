var posts=["2024/12/16/hello-world/","2024/12/16/第二届”长城杯“铁人三项(防护赛)介绍/","2024/12/17/第二届长城杯WEB篇-hello_web/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };