"use strict";

// Creo la funzione createApp
const app = Vue.createApp({
    data() {
        return {
            pageTitle: "Vue Hello",
            classTitle: "text-center text-white fw-bold text-uppercase pt-5 pb-4",
            imageUrl: "https://picsum.photos/600/400",
            imageAlt: "Immagine random",
            classImg: "border rounded-4",
        }
    }
})

// Attivo vue
app.mount("#app");