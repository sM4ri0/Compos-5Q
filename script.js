const teamData = {
  ascent: {
    background: "ascent.jpg",
    Kaki: ["jett"],
    Deva: ["killjoy"],
    Tryno: ["kayo"],
    Drako: ["omen"],
    Mario: ["tejo", "sova"]
  },
  icebox: {
    background: "icebox.jpg",
    Kaki: ["jett"],
    Deva: ["killjoy"],
    Tryno: ["viper", "kayo"],
    Drako: ["harbor", "viper"],
    Mario: ["sova", "tejo"]
  },
  haven: {
    background: "haven.jpg",
    Kaki: ["iso", "yoru"],
    Deva: ["fade"],
    Tryno: ["breach"],
    Drako: ["omen"],
    Mario: ["cypher"]
  },
  pearl: {
    background: "pearl.jpg",
    Kaki: ["jett", "yoru"],
    Deva: ["fade"],
    Tryno: ["cypher", "kayo", "tejo"],
    Drako: ["astra"],
    Mario: ["vyse", "cypher", "yoru"]
  },
  lotus: {
    background: "lotus.jpg",
    Kaki: ["neon", "waylay", "yoru"],
    Deva: ["gekko"],
    Tryno: ["breach"],
    Drako: ["omen"],
    Mario: ["cypher", "vyse"]
  },
  fracture: {
    background: "fracture.jpg",
    Kaki: ["neon", "raze"],
    Deva: ["tejo", "breach"],
    Tryno: ["breach", "tejo"],
    Drako: ["brimstone"],
    Mario: ["cypher"]
  },
  split: {
    background: "split.jpg",
    Kaki: ["raze"],
    Deva: ["fade"],
    Tryno: ["viper"],
    Drako: ["astra"],
    Mario: ["yoru"]
  }
};

const mapSelect = document.getElementById("mapSelect");
const teamDiv = document.getElementById("team");

mapSelect.addEventListener("change", () => {
  loadMap(mapSelect.value);
});

function loadMap(map) {
  if (!map || !teamData[map]) return;

  // Cambiar fondo apuntando a carpeta img/
  document.body.style.backgroundImage = `url(img/${teamData[map].background})`;

  // Limpiar contenido previo
  teamDiv.innerHTML = "";

  // Generar composición por jugador
  for (const player in teamData[map]) {
    if (player === "background") continue;

    const agentContainer = document.createElement("div");
    agentContainer.className = "agent";

    // Nombre del jugador
    const playerName = document.createElement("div");
    playerName.className = "agent-name";
    playerName.textContent = player;
    agentContainer.appendChild(playerName);

    // Imágenes de los agentes
    teamData[map][player].forEach((agent) => {
      const img = document.createElement("img");
      img.src = `img/${agent}.jpg`;
      img.alt = agent;
      img.title = agent; // tooltip opcional
      agentContainer.appendChild(img);
    });

    teamDiv.appendChild(agentContainer);
  }
}

// Cargar mapa Ascent por defecto al iniciar
window.addEventListener("DOMContentLoaded", () => {
  loadMap("ascent");
});
