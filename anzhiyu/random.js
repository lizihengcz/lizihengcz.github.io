var posts=["archives/4a17b156.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"LZH的小窝","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","descr":"凡是过往，皆为序章","siteshot":"https://www.z4a.net/images/2023/08/31/123.png","color":"speed","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":true},{"name":"Ljcbaby的网络小屋","link":"https://blog.ljcbaby.top/","avatar":"https://sdn.geekzu.org/avatar/e7033b1012a3e7c07044b31686c57523","descr":"宁静的栖身之地","recommend":false},{"name":"心智备份","link":"https://www.tyrantg.com","avatar":"https://cdn.tyrantg.com/van/static/img/e6702f96504d68622cdb4f6b38389127.65752703_p0.jpg","descr":"心智备份","recommend":false},{"name":"CairBin’s Blog","link":"https://cairbin.top","avatar":"https://cairbin.gitee.io/cair_img/img/bloglogo.png","descr":"To be or not to be …","recommend":false},{"name":"Sakitami的集装箱","link":"https://blog.skihome.xyz","avatar":"https://blog.skihome.xyz/uploads/avatar.jpg","descr":"我已经无敌了！","recommend":false},{"name":"五葉魔法書","link":"https://grimoire.cn","avatar":"https://s1.ax1x.com/2020/03/26/G93rfs.jpg","descr":"暂无","recommend":false},{"name":"Throwable","link":"https://www.throwx.cn","avatar":"https://throwable-blog-1256189093.cos.ap-guangzhou.myqcloud.com/mine/doge_avatar.jpg","descr":"Java、架构、并发编程、源码","recommend":false},{"name":"雷雷屋头","link":"https://ll.sc.cn","avatar":"https://ll.sc.cn/img/avatar.png","descr":"爱生活，爱工作，爱折腾。","recommend":false},{"name":"故事的程序猿","link":"https://blog.lichenghao.cn/","avatar":"https://blog.lichenghao.cn/assets/images/head.svg","descr":"好好学习，天天向上！","recommend":false},{"name":"星空下的YZY","link":"https://226yzy.com","avatar":"https://226yzy.com/medias/avatar.jpg","descr":"记录一枚菜鸟的征程","recommend":false},{"name":"暂无","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","descr":"暂无","recommend":false},{"name":"暂无","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };