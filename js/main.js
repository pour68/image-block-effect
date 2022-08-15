const banner = document.getElementsByClassName("child-banner")[0];
const blocks = document.getElementsByClassName("grandchild-blocks");

for (let i = 0; i < 400; i++) {
  banner.innerHTML += `<div class="grandchild-blocks"></div>`;
  blocks[i].style.animationDelay = `${i * 0.05}s`;
}
