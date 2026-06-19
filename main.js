document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interação dos Cards de Serviços
    const cards = document.querySelectorAll(".card");
    const painelInfo = document.getElementById("painel-info");
    const textoInfo = document.getElementById("texto-info");
    const fecharPainel = document.getElementById("fechar-painel");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const detalhe = card.getAttribute("data-info");
            textoInfo.textContent = detalhe;
            painelInfo.classList.remove("hidden");
        });
    });

    fecharPainel.addEventListener("click", () => {
        painelInfo.classList.add("hidden");
    });

    // 2. Botão da Home rolando para Serviços
    const btnExplorar = document.getElementById("btn-explorar");
    btnExplorar.addEventListener("click", () => {
        document.querySelector("#servicos").scrollIntoView({ behavior: "smooth" });
    });

    // 3. Validação Básica e Alerta do Formulário de Contato
    const form = document.getElementById("form-contato");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        
        const nome = document.getElementById("nome").value;
        
        alert(`Obrigado pelo contato, ${nome}! Suas informações de agro-interesse foram registradas.`);
        form.reset(); // Limpa os campos
    });

    // 4. Menu Ativo conforme a Rolagem da Página
    const secoes = document.querySelectorAll(".section");
    const linksNav = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let atual = "";
        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            if (pageYOffset >= topoSecao - 120) {
                atual = secao.getAttribute("id");
            }
        });

        linksNav.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(atual)) {
                link.classList.add("active");
            }
        });
    });
});