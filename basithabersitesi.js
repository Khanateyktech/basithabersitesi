// Haber detayını değiştirme
document.getElementById("haber-baslik").textContent = "Yeni Başlık";
document.getElementById("haber-icerik").textContent = "Yeni haber içeriği...";
// Kategorilere tıklanınca haberleri filtreleme
const kategoriButonlari = document.querySelectorAll(".kategori-btn");
const haberler = [
    { baslik: "Haber 1", kategori: "dunya", icerik: "Haber içeriği 1..." },
    { baslik: "Haber 2", kategori: "spor", icerik: "Haber içeriği 2..." },
    { baslik: "Haber 3", kategori: "teknoloji", icerik: "Haber içeriği 3..." }
];

kategoriButonlari.forEach(btn => {
    btn.addEventListener("click", () => {
        const secilenKategori = btn.getAttribute("data-kategori");
        const secilenHaberler = haberler.filter(haber => haber.kategori === secilenKategori);
        haberleriListele(secilenHaberler);
    });
});

// Haberleri listeleme
function haberleriListele(haberListesi) {
    const haberlerDiv = document.getElementById("haberler");
    haberlerDiv.innerHTML = "";

    haberListesi.forEach(haber => {
        const haberHTML = `
            <article>
                <h2>${haber.baslik}</h2>
                <p>${haber.icerik}</p>
            </article>
        `;
        haberlerDiv.innerHTML += haberHTML;
    });
}
const kategoriButonlari = document.querySelectorAll(".kategori-btn");
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // OpenWeatherMap API anahtarınızı buraya ekleyin

kategoriButonlari.forEach(btn => {
    btn.addEventListener("click", () => {
        // ... Diğer kodlar ...
        havaDurumuBilgisiGetir("Istanbul,TR"); // Örnek olarak İstanbul hava durumu alınacak
    });
});

async function havaDurumuBilgisiGetir(sehir) {
    const havaDurumuDiv = document.getElementById("hava-durumu-bilgisi");
    havaDurumuDiv.innerHTML = "Hava durumu bilgisi yükleniyor...";

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiURL);
        const veri = await response.json();

        const havaDurumuHTML = `
            <p>Hava: ${veri.weather[0].description}</p>
            <p>Sıcaklık: ${veri.main.temp} °C</p>
            <p>Nem: ${veri.main.humidity}%</p>
        `;
        
        havaDurumuDiv.innerHTML = havaDurumuHTML;
    } catch (hata) {
        havaDurumuDiv.innerHTML = "Hava durumu bilgisi alınamadı.";
    }
}

