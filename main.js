/* =========================================
   MENU COM EFEITO AO ROLAR
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }
});

/* =========================================
   ANIMAÇÃO DE ENTRADA DOS CARDS
========================================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
});

/* =========================================
   EFEITO DE DESTAQUE NOS PLANOS
========================================= */

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

/* =========================================
   SCROLL SUAVE PARA LINKS INTERNOS
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

/* =========================================
   BOTÃO "CONHECER PLANOS"
========================================= */

const botao = document.querySelector(".botao");

if (botao) {

    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.08)";
        botao.style.transition = "0.3s";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
    });

}

/* =========================================
   CONTADOR DE VISITANTES SIMULADO
========================================= */

const destaque = document.querySelector("#destaque");

const contador = document.createElement("p");

contador.style.marginTop = "30px";
contador.style.fontSize = "1.2rem";
contador.style.fontWeight = "bold";

let visitantes = 125;

contador.innerHTML =
`🔥 Mais de ${visitantes}+ clientes atendidos`;

destaque.appendChild(contador);

setInterval(() => {

    visitantes += Math.floor(Math.random() * 3);

    contador.innerHTML =
    `🔥 Mais de ${visitantes}+ clientes atendidos`;

}, 5000);

/* =========================================
   ANIMAÇÃO DE TEXTO DO HERO
========================================= */

const titulo = document.querySelector("#destaque h1");

if (titulo) {

    const textoOriginal = titulo.textContent;

    titulo.textContent = "";

    let i = 0;

    function escrever() {

        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escrever, 35);
        }

    }

    escrever();
}

/* =========================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================= */

const footer = document.querySelector("footer");

const ano = document.createElement("p");

ano.style.marginTop = "40px";
ano.style.opacity = "0.8";

ano.innerHTML =
`© ${new Date().getFullYear()} BlueTech. Todos os direitos reservados.`;

footer.appendChild(ano);

/* =========================================
   EFEITO PARALLAX LEVE NO HERO
========================================= */

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    const hero = document.querySelector("#destaque");

    hero.style.backgroundPositionY =
        `${scroll * 0.4}px`;

});

/* =========================================
   TOAST DE BOAS-VINDAS
========================================= */

window.addEventListener("load", () => {

    const toast = document.createElement("div");

    toast.innerHTML =
        "👋 Bem-vindo à BlueTech!";

    toast.style.position = "fixed";
    toast.style.right = "20px";
    toast.style.bottom = "20px";
    toast.style.background = "#2563EB";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "12px";
    toast.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.2)";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = "0.5s";
        toast.style.opacity = "0";

        setTimeout(() => {
            toast.remove();
        }, 500);

    }, 4000);

});