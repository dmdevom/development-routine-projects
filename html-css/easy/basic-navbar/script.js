const icon = document.querySelector("#nav p");
const menus = document.querySelector("#menu-items");

icon.addEventListener("click", toggleMenuItems);
let flag = 0;
function toggleMenuItems() {
  if (flag == 0) {
    menus.style.top = "0";
    flag = 1;
    icon.innerHTML = '<i class="ri-close-circle-line"></i>'
  } else {
    menus.style.top = "-100%";
    flag = 0;
    icon.innerHTML = '<i class="ri-menu-2-line"></i>'
  }
}
