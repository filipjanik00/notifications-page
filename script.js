const notificationNum = document.querySelector(".notification-num");
const unreadedPosts = document.querySelectorAll(".unreaded-post");
const readAllBtn = document.querySelector(".read-all-btn");
const dot = document.querySelectorAll(".dot");

unreadedPosts.forEach((post) => {
  post.addEventListener("click", () => {
    if (!post.classList.contains("read")) {
      post.classList.add("read");

      post.style.backgroundColor = "transparent";

      const postDot = post.querySelector(".dot");
      postDot.style.display = "none";

      let num = parseInt(notificationNum.textContent);
      notificationNum.textContent = num - 1;

      post.style.cursor = "auto";
    }
  });
});

readAllBtn.addEventListener("click", () => {
  unreadedPosts.forEach((post) => {
    post.classList.add("read");
    post.style.backgroundColor = "transparent";
    const postDot = post.querySelector(".dot");
    postDot.style.display = "none";
    post.style.cursor = "auto";
  });
  notificationNum.textContent = 0;
});
