(function () {
  var buttons = document.querySelectorAll(".tag-filter .tag");
  var posts = document.querySelectorAll(".wall .post");

  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tag = btn.getAttribute("data-tag");

      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      posts.forEach(function (post) {
        if (tag === "__all__") {
          post.hidden = false;
          return;
        }
        var postTags = (post.getAttribute("data-tags") || "").split(",");
        post.hidden = postTags.indexOf(tag) === -1;
      });
    });
  });

  document.querySelectorAll(".wall .post .tag").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tag");
      var filterBtn = document.querySelector('.tag-filter .tag[data-tag="' + target + '"]');
      if (filterBtn) {
        filterBtn.click();
        filterBtn.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
