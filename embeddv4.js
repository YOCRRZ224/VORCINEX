(function () {

  const css = `
  .vx-float {
    position: fixed;
    bottom: 26px;
    right: 26px;
    width: 58px;
    height: 58px;
    border-radius: 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2147483647;
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    transition: 0.25s ease;
  }

  .vx-float:hover {
    transform: translateY(-2px) scale(1.04);
  }

  .vx-float img {
    width: 28px;
    height: 28px;
  }

  .vx-panel {
    position: fixed;
    bottom: 95px;
    right: 26px;
    width: 360px;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 30px 70px rgba(0,0,0,0.18);
    transform: translateY(20px) scale(0.96);
    opacity: 0;
    pointer-events: none;
    transition: 0.35s cubic-bezier(0.2, 1, 0.2, 1);
    z-index: 2147483647;
  }

  .vx-panel.active {
    transform: translateY(0) scale(1);
    opacity: 1;
    pointer-events: auto;
  }

  .vx-header {
    padding: 16px 18px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .vx-title {
    font-size: 15px;
    font-weight: 650;
    color: black;
  }

  .vx-sub {
    font-size: 12px;
    color: #666;
  }

  .vx-body {
    padding: 14px 18px;
  }

  .vx-members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .vx-member {
    display: flex;
    gap: 10px;
    padding: 10px;
    border-radius: 12px;
    background: #f5f7fb;
  }

  .vx-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34,197,94,0.5);
  }

  .vx-member:nth-child(1) .vx-status,
  .vx-member:nth-child(2) .vx-status {
    background: #ef4444;
  }

  .vx-meta {
    display: flex;
    flex-direction: column;
  }

  .vx-name {
    font-size: 12px;
    font-weight: 600;
    color: black;
  }

  .vx-role {
    font-size: 10px;
    color: #777;
  }

  .vx-btn {
    display: block;
    margin-top: 14px;
    padding: 10px;
    border-radius: 10px;
    background: #111;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  .vx-close {
    margin-top: 12px;
    text-align: center;
    cursor: pointer;
    color: black;
  }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function createWidget() {

    // FLOAT
    const btn = document.createElement("div");
    btn.className = "vx-float";
    btn.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/YOCRRZ224/VORCINEX@refs/heads/main/IMG_20260301_081312_453-removebg-preview.png" />`;

    // PANEL
    const panel = document.createElement("div");
    panel.className = "vx-panel";

    panel.innerHTML = `
      <div class="vx-header">
        <div class="vx-sub">I work at</div>
        <div class="vx-title">VORCINEX_STUDIO</div>
        <div class="vx-sub">Experimental dev studio building systems, UI & tools.</div>
      </div>

      <div class="vx-body">
        <div class="vx-members">

          <div class="vx-member"><div class="vx-status"></div><div class="vx-meta"><div class="vx-name">Yocrrz</div><div class="vx-role">CEO/Backend</div></div></div>

          <div class="vx-member"><div class="vx-status"></div><div class="vx-meta"><div class="vx-name">Abduhamid</div><div class="vx-role">Co-Founder/UE5</div></div></div>

          <div class="vx-member"><div class="vx-status"></div><div class="vx-meta"><div class="vx-name">Shlokarth</div><div class="vx-role">Frontend</div></div></div>

          <div class="vx-member"><div class="vx-status"></div><div class="vx-meta"><div class="vx-name">Zonaryx</div><div class="vx-role">Firebase</div></div></div>

          <div class="vx-member"><div class="vx-status"></div><div class="vx-meta"><div class="vx-name">Clint</div><div class="vx-role">Fullstack</div></div></div>

        </div>

        <a class="vx-btn" href="https://yocrrz.is-a.dev/VORCINEX" target="_blank">Visit Studio</a>
        <div class="vx-close">Close</div>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    const close = panel.querySelector(".vx-close");

    btn.onclick = () => {
      panel.classList.add("active");
    };

    close.onclick = () => {
      panel.classList.remove("active");
    };

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }

})();
