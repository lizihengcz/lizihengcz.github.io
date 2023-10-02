var posts=["archives/1001.html","archives/1003.html","archives/1002.html","archives/1000.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"LZH的小窝","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","descr":"凡是过往，皆为序章","siteshot":"/img/123.jpg","color":"speed","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","sitehot":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","color":"vip","tag":"技术"},{"name":"Qinai","link":"https://slqinai.cn/","avatar":"http://q1.qlogo.cn/g?b=qq&nk=2140137093&s=640","descr":"夜の星もいつかは消える","recommend":false},{"name":"Ljcbaby","link":"https://blog.ljcbaby.top/","avatar":"https://sdn.geekzu.org/avatar/e7033b1012a3e7c07044b31686c57523","descr":"宁静的栖身之地","recommend":false},{"name":"心智备份","link":"https://www.tyrantg.com/","avatar":"https://static.189.tyrantg.com/avatar/e6702f96504d68622cdb4f6b38389127.65752703_p0.jpg","descr":"心智备份","recommend":false},{"name":"CairBin","link":"https://cairbin.top/","avatar":"https://cairbin.gitee.io/cair_img/img/bloglogo.png","descr":"To be or not to be …","recommend":false},{"name":"五葉魔法書","link":"https://grimoire.cn/","avatar":"https://s1.ax1x.com/2020/03/26/G93rfs.jpg","descr":"暂无","recommend":false},{"name":"雷雷屋头","link":"https://ll.sc.cn/","avatar":"https://ll.sc.cn/img/avatar.png","descr":"爱生活，爱工作，爱折腾。","recommend":false},{"name":"故事的程序猿","link":"https://blog.lichenghao.cn/","avatar":"https://blog.lichenghao.cn/avatar.svg","descr":"好好学习，天天向上！","recommend":false},{"name":"LongTao","link":"https://longtao.fun/","avatar":"https://pic.longtao.fun/pics/20210916/avatar.71pjc2scvak0.jpg","descr":"Ewige Wiederkunft","recommend":false},{"name":"Throwable","link":"https://www.throwx.cn/","avatar":"https://throwable-blog-1256189093.cos.ap-guangzhou.myqcloud.com/mine/doge_avatar.jpg","descr":"Java、架构、并发编程、源码","recommend":false},{"name":"MoraEX","link":"https://www.moraex.com/","avatar":"https://www.moraex.com/wp-content/uploads/2022/09/1664001113-mexlogo.png","descr":"学无止境 知行合一","recommend":false},{"name":"低调小熊猫","link":"https://ilovey.live/","avatar":"https://uss.ilovey.live/img/avatar.jpg","descr":"读万卷书，行万里路，赚很多钱","recommend":false},{"name":"云烟成雨","link":"https://shiyu.dev/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=396823203&s=640","descr":"迷失的人迷失了，相逢的人会再相逢。","recommend":false},{"name":"星空下的YZY","link":"https://226yzy.com/","avatar":"https://226yzy.com/medias/avatar.jpg","descr":"记录一枚菜鸟的征程","recommend":false},{"name":"ismeoh","link":"https://blog.ismeoh.com/","avatar":"https://blog.ismeoh.com/avatar","descr":"is me,oh. 个人随笔","recommend":false},{"name":"张时贰","link":"https://zhsher.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！","recommend":false},{"name":"shimmer","link":"https://wp-boke.work/","avatar":"https://wp-boke.work/images/logo.png","descr":"欲买桂花同载酒，终不似，少年游。","recommend":false},{"name":"Hao","link":"https://haonp.top/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=914365069&spec=640","descr":"代码改变世界","recommend":false},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","recommend":false},{"name":"光速大佬","link":"https://blog.dlya.top/","avatar":"https://cravatar.cn/avatar/7819c71a6100c1d8d7fa6b5b7bf961be?s=500&d=mm&r=g","descr":"独步天下，吾心自洁，无欲无求，如林中之象。","recommend":false},{"name":"萌！萝莉","link":"https://loliloli.moe/","avatar":"https://img.cdn.loliloli.net/images/2021/01/11/avatar.jpg","descr":"一个普通的小博客哦~","recommend":false},{"name":"Sakitami","link":"https://blog.skihome.xyz/","avatar":"https://blog.skihome.xyz/uploads/avatar.jpg","descr":"我已经无敌了！","recommend":false},{"name":"Xlenco","link":"https://xlenco.eu.org","avatar":"https://img02.anheyu.com/adminuploads/1/2022/10/04/633b93d930cd9.jpg","descr":"最好的地方,是没去过的地方。最好的时光，是回不来的时光。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/10/04/633b93d35e56b.jpg"},{"name":"呆鱼","link":"https://daiyu-233.top","avatar":"https://img02.anheyu.com/adminuploads/1/2022/10/16/634b6ba10c77f.png","descr":"命运之所以称为命运，正是因为它无可改变。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/10/16/634b6ba10c3a2.png"},{"name":"晨讯","link":"https://zsuh.cc","avatar":"https://img02.anheyu.com/adminuploads/1/2022/10/12/6346b92ed36c7.png","descr":"专注于编程技术分享，记录生活琐事","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/10/12/6346b92edf3e5.jpg"},{"name":"鲸落","link":"https://www.blogog.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2023/03/26/641ff70c9392c.webp","descr":"There is only one heroism in the world: to see the world as it is and to love it.","recommend":false},{"name":"暂无","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","descr":"暂无","recommend":false},{"name":"暂无","link":"https://blog.lzh.life/","avatar":"https://blog.lzh.life/img/logo.png","recommend":false}];
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