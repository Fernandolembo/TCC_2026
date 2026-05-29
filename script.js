const ctx = document.getElementById('graficoFakes').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Flamengo', 'Corinthians', 'Palmeiras', 'São Paulo', 'Vasco'],
        datasets: [{
            label: 'Notícias Falsas Detectadas',
            data: [45, 42, 30, 22, 18], // Dados fictícios para o protótipo
            backgroundColor: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#6366f1'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

document.getElementById("btnVerificar").addEventListener("click", function() {
    let textoNoticia = document.getElementById("txtNoticia").value;
    let btn = document.getElementById("btnVerificar");
    let painel = document.getElementById("painelResultado");

    if (textoNoticia.trim() === "") {
        alert("Por favor, cole uma notícia para o VAR analisar!");
        return;
    }

    btn.innerText = "O VAR ESTÁ ANALISANDO A WEB...";
    btn.disabled = true;
    painel.className = "resultado-oculto";

    setTimeout(function() {
        btn.innerText = "CHAMAR O VAR";
        btn.disabled = false;

        painel.className = "resultado-visivel";
        painel.style.backgroundColor = "#fee2e2"; 
        painel.style.borderColor = "#ef4444";  

        let selo = document.getElementById("vereditoSelo");
        selo.innerText = "❌ FAKE NEWS";
        selo.style.backgroundColor = "#ef4444";

        document.getElementById("clubeAlvo").innerText = "Alvo: CR Flamengo";
        
        document.getElementById("justificativaIa").innerText = 
            "Análise do VAR: O texto afirma que o clube fechou um patrocínio de 200 milhões esta manhã. " +
            "Contudo, após varredura em tempo real (Grounding) no GE e UOL Esporte, verificou-se que as " +
            "negociações foram suspensas ontem à noite. A informação é FALSA.";

    }, 2000);
});