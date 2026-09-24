/* =====================================================
   GAMEZONE CITY - BASE DE DATOS Y LÓGICA
   ===================================================== */

const DB = {
    casas: [
        { id: 1, nombre: "Cyber House Alpha", desc: "Equipada con luces LED, servidor privado y zona VR.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
        { id: 2, nombre: "Pixel Mansion", desc: "Mansión de 3 pisos con sala de torneos integrada.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
        { id: 3, nombre: "Gamer Castle", desc: "Estilo medieval futurista con estudio de producción.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" },
        { id: 4, nombre: "Neon Villa", desc: "Villa inteligente con piscina retroiluminada y cine.", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80" },
        { id: 5, nombre: "Streamer Sanctuary", desc: "Aislamiento acústico total y cabinas de transmisión.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
        { id: 6, nombre: "Matrix Residence", desc: "Arquitectura minimalista con domótica completa.", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80" },
        { id: 7, nombre: "Arcade Haven", desc: "Incluye una colección privada de máquinas arcade.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" },
        { id: 8, nombre: "Future Haven", desc: "Paneles solares, energía limpia y la mejor fibra óptica.", img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80" },
        { id: 9, nombre: "Esports Bunker", desc: "Diseñada para entrenamientos de equipos profesionales.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
        { id: 10, nombre: "Quantum Palace", desc: "Lujo máximo con simulación de realidad aumentada.", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" }
    ],
    apartamentos: [
        { id: 1, nombre: "Cyber Loft 101", precio: "1,200 Créditos", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },
        { id: 2, nombre: "Neon Studio", precio: "1,500 Créditos", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" },
        { id: 3, nombre: "Pro Gamer Suite", precio: "2,000 Créditos", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" },
        { id: 4, nombre: "Skyline View Loft", precio: "2,400 Créditos", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" },
        { id: 5, nombre: "Minimalist Pod", precio: "900 Créditos", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80" },
        { id: 6, nombre: "High-Tech Duplex", precio: "2,800 Créditos", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
        { id: 7, nombre: "Retro Gaming Flat", precio: "1,100 Créditos", img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=600&q=80" },
        { id: 8, nombre: "Urban Cyber Pad", precio: "1,700 Créditos", img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&q=80" },
        { id: 9, nombre: "Apex Penthouse", precio: "3,500 Créditos", img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=600&q=80" },
        { id: 10, nombre: "Holo Suite", precio: "2,100 Créditos", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" }
    ],
    juegos: [
        { id: 1, titulo: "Roblox", cat: "roblox", rating: "9.8", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR947rhIRKktPdcPLUEmARLYvMfE8YsrPRmauH5a5ngA&s=10" },
        { id: 2, titulo: "Juego de Acción", cat: "accion", rating: "9.5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6Luduruk5yAJYHQdWclRj_Xb9ObJFe0HFAoiVAyImQ&s=10" },
        { id: 3, titulo: "Juego de Aventura", cat: "aventura", rating: "9.3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdDLHNezvn0NcPV27Y2xFb0zQAVtqBsvle7gc7t0QhA&s=10" },
        { id: 4, titulo: "Racing City", cat: "carreras", rating: "9.6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgBEAxowFNlASGZXbU8mxdPIT9SfVw1-yxZljeOo9Sw&s=10" },
        { id: 5, titulo: "Motor City", cat: "carreras", rating: "9.1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUUiyZ2-V_ahd4U4xjzEPnZROuacweIeVanqDosrQNQ&s=10" },
        { id: 6, titulo: "Mortal Combat", cat: "pelea", rating: "9.7", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDijIbxkkkmVNO4zAsvioq3jN9fL0162kUO5Z39j93Lg&s=10" }
    ],
    anime: [
        { id: 1, titulo: "Dragon Ball", temp: "Múltiples Sagas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_2rKtcwYn3GeqNXH-R_Z-h4LG3bG5FDQ0GtIv8iNfw&s=10" },
        { id: 2, titulo: "Naruto", temp: "2 Temporadas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwu5tp5VXFscxrNB4qp2XuMBcv-0LiA8_CHtO8qHkEg&s=10" },
        { id: 3, titulo: "One Piece", temp: "En emisión", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlIaCENWFNL-A4PfnfmW0da_0MuBqOurpwuZOAs27Ew&s=10" },
        { id: 4, titulo: "Anime 4", temp: "1 Temporada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvz6jiwe3BUdWvJ-9ep-4GYz3xWk7nMFQnVAvucy-xLA&s=10" },
        { id: 5, titulo: "Attack on Titan", temp: "4 Temporadas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ub5_DGVCc3e7JtxzNV_4Qo_xekV_DWl1D_gR6oRbPg&s" },
        { id: 6, titulo: "My Hero Academia", temp: "6 Temporadas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbQMxgXZaMlkvwsnt5l_E3z5tXkhFYB4zhW2IkI7T5A&s=10" },
        { id: 7, titulo: "Anime 7", temp: "1 Temporada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboHwcMaW9Jvajw0_7-NidPJ56Bs9l-6aU_UhTj8HZCA&s=10" },
        { id: 8, titulo: "Hunter x Hunter", temp: "6 Temporadas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLiD6vLB0nlUt4Z7rlyx3b0lgfb1h7Xe_yD0PsFbrHA&s=10" }
    ],
    ropa: [
        { id: 1, nombre: "Cyber Hoodie", tipo: "Hoodie", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
        { id: 2, nombre: "GameZone Cap", tipo: "Gorra", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" },
        { id: 3, nombre: "Pixel T-Shirt", tipo: "Camiseta", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
        { id: 4, nombre: "Pro Jacket", tipo: "Chaqueta", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80" },
        { id: 5, nombre: "Gamer Sneakers", tipo: "Tenis", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80" },
        { id: 6, nombre: "Neon Pants", tipo: "Pantalón", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80" },
        { id: 7, nombre: "Tech Backpack", tipo: "Mochila", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" },
        { id: 8, nombre: "RGB Mask", tipo: "Accesorio", img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=600&q=80" },
        { id: 9, nombre: "Esports Jersey", tipo: "Camiseta", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" },
        { id: 10, nombre: "Streamer Gloves", tipo: "Guantes", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" }
    ]
};

// PORTADA SLIDER AUTOMÁTICO Y MANUAL
const heroImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigobSp1b1DRmp6xeC4hcycUCRnUXcP3XQTxdkHxd14w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5m7Cz3MqjUYlYZAH2r2pw1M0wLlZAIZaSw_XsUDAjQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR947rhIRKktPdcPLUEmARLYvMfE8YsrPRmauH5a5ngA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ub5_DGVCc3e7JtxzNV_4Qo_xekV_DWl1D_gR6oRbPg&s"
];

let currentSlide = 0;
let autoSliderTimer = null;

function updateHero() {
    const heroBox = document.getElementById("heroImage");
    if (heroBox) {
        heroBox.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
    }
}

function startAutoSlider() {
    stopAutoSlider();
    autoSliderTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % heroImages.length;
        updateHero();
    }, 5000); 
}

function stopAutoSlider() {
    if (autoSliderTimer) clearInterval(autoSliderTimer);
}

// BOTONES MANUALES DEL SLIDER
document.getElementById("nextHero")?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroImages.length;
    updateHero();
    startAutoSlider(); 
});

document.getElementById("previousHero")?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    updateHero();
    startAutoSlider();
});

// MODAL CONTROLES
function openModal(title, text, img) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");
    content.innerHTML = `
        <h2 style="color: var(--cyan); margin-top:0;">${title}</h2>
        ${img ? `<img src="${img}" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ''}
        <p>${text}</p>
        <button class="card-btn" onclick="closeModal()">Cerrar</button>
    `;
    modal.classList.add("show");
}

function closeModal() {
    document.getElementById("modal")?.classList.remove("show");
}

// RENDERIZADO DE SECCIONES
function renderAll() {
    // Casas
    document.getElementById("casasContainer").innerHTML = DB.casas.map(item => `
        <article class="card">
            <div class="card-image-box"><img src="${item.img}" alt="${item.nombre}"></div>
            <div class="card-body">
                <h3>${item.nombre}</h3>
                <p>${item.desc}</p>
                <button class="card-btn" onclick="openModal('${item.nombre}', '${item.desc}', '${item.img}')">Ver Propiedad</button>
            </div>
        </article>
    `).join('');

    // Apartamentos
    document.getElementById("apartamentosContainer").innerHTML = DB.apartamentos.map(item => `
        <article class="card">
            <div class="card-image-box"><img src="${item.img}" alt="${item.nombre}"></div>
            <div class="card-body">
                <h3>${item.nombre}</h3>
                <p>Alquiler desde <strong>${item.precio}</strong></p>
                <button class="card-btn" onclick="openModal('${item.nombre}', 'Precio: ${item.precio}', '${item.img}')">Reservar Loft</button>
            </div>
        </article>
    `).join('');

    // Juegos
    renderJuegos(DB.juegos);

    // Anime
    document.getElementById("animeGrid").innerHTML = DB.anime.map(item => `
        <article class="card">
            <div class="card-image-box"><img src="${item.img}" alt="${item.titulo}"></div>
            <div class="card-body">
                <h3>${item.titulo}</h3>
                <p>Disponibilidad: ${item.temp}</p>
                <button class="card-btn" onclick="openModal('${item.titulo}', 'Serie en transmisión. ${item.temp}.', '${item.img}')">Ver Transmisión</button>
            </div>
        </article>
    `).join('');

    // Ropa
    document.getElementById("ropaGrid").innerHTML = DB.ropa.map(item => `
        <article class="card">
            <div class="card-image-box"><img src="${item.img}" alt="${item.nombre}"></div>
            <div class="card-body">
                <h3>${item.nombre}</h3>
                <p>Categoría: ${item.tipo}</p>
                <button class="card-btn" onclick="openModal('${item.nombre}', 'Prenda de edición limitada - ${item.tipo}', '${item.img}')">Personalizar</button>
            </div>
        </article>
    `).join('');
}

function renderJuegos(list) {
    const gameGrid = document.getElementById("gameGrid");
    gameGrid.innerHTML = list.map(item => `
        <article class="game-card">
            <img class="game-cover" src="${item.img}" alt="${item.titulo}" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80'">
            <div class="game-info">
                <h3>${item.titulo}</h3>
                <p>Categoría: ${item.cat.toUpperCase()} • ⭐ ${item.rating}</p>
                <button class="card-btn" onclick="openModal('${item.titulo}', 'Calificación: ${item.rating}/10. ¡Juega ahora en servidor oficial!', '${item.img}')">Jugar</button>
            </div>
        </article>
    `).join('');
}

// BÚSQUEDA Y FILTRADO
document.getElementById("gameSearch")?.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = DB.juegos.filter(j => j.titulo.toLowerCase().includes(val) || j.cat.toLowerCase().includes(val));
    renderJuegos(filtered);
});

document.getElementById("categoryFilter")?.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        document.querySelectorAll("#categoryFilter button").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        const cat = e.target.getAttribute("data-category");
        if (cat === "todos") renderJuegos(DB.juegos);
        else renderJuegos(DB.juegos.filter(j => j.cat === cat));
    }
});

// CONTROL DE AUDIO RELAJANTE
const bgMusic = document.getElementById("bgMusic");
document.getElementById("soundButton")?.addEventListener("click", function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.textContent = "🔊";
    } else {
        bgMusic.pause();
        this.textContent = "🔇";
    }
});

// MODO CLARO / OSCURO
document.getElementById("themeButton")?.addEventListener("click", function() {
    document.body.classList.toggle("light");
    this.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    updateHero();
    startAutoSlider();
    renderAll();
});