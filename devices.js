// devices.js

// Fake device list for demo
const demoDevices = [
  {
    name: "Lobby Diffuser",
    location: "Hotel Lobby - Pune",
    status: "online",
    oilLevel: 28,
    fragranceName: "White Tea & Oud",
    lastHeartbeat: "2025-10-28 14:12 IST"
  },
  {
    name: "Spa Room 2",
    location: "Wellness Floor - Mumbai",
    status: "online",
    oilLevel: 72,
    fragranceName: "Lavender Calm",
    lastHeartbeat: "2025-10-28 14:10 IST"
  },
  {
    name: "Showroom Demo Unit",
    location: "Aroma de Valencia HQ Lab",
    status: "offline",
    oilLevel: 0,
    fragranceName: "Citrus Neroli",
    lastHeartbeat: "2025-10-28 09:01 IST"
  }
];

// Render cards to dashboard
(function renderDevices() {
  const grid = document.getElementById("deviceGrid");
  if (!grid) return;

  grid.innerHTML = ""; // clear just in case

  demoDevices.forEach(d => {
    const card = document.createElement("div");
    card.className = "device-card";

    card.innerHTML = `
      <div class="device-top">
        <div class="device-name">
          ${d.name}
          <div style="color:#6b7280;font-size:.7rem;font-weight:400;line-height:1.4;margin-top:.2rem;">
            ${d.location}
          </div>
        </div>
        <div class="device-status ${d.status === "online" ? "online" : "offline"}">
          ${d.status === "online" ? "Online" : "Offline"}
        </div>
      </div>

      <div class="device-body">
        <div>
          <span class="small-label">Fragrance</span>
          ${d.fragranceName}
        </div>
        <div>
          <span class="small-label">Oil Level</span>
          ${d.oilLevel}%
        </div>
        <div>
          <span class="small-label">Last Heartbeat</span>
          ${d.lastHeartbeat}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
})();
