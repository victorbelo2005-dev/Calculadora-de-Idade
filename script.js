const input = document.getElementById("dataNascimento");
const resultado = document.getElementById("resultado");

// Carregar data salva
window.onload = () => {
    const dataSalva = localStorage.getItem("dataNascimento");
    if (dataSalva) {
        input.value = dataSalva;
        calcularIdade();
    }
    definirTema();
};

// Salvar e calcular
function salvarECalcular() {
    localStorage.setItem("dataNascimento", input.value);
    calcularIdade();
}

// Função principal
function calcularIdade() {
    if (!input.value) {
        resultado.innerText = "Selecione uma data.";
        return;
    }

    const nascimento = new Date(input.value);

    function atualizar() {
        const agora = new Date();

        let anos = agora.getFullYear() - nascimento.getFullYear();
        let meses = agora.getMonth() - nascimento.getMonth();
        let dias = agora.getDate() - nascimento.getDate();

        if (dias < 0) {
            meses--;
            dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        }

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        // total de dias de vida
        const diff = agora - nascimento;
        const totalDias = Math.floor(diff / (1000 * 60 * 60 * 24));

        resultado.innerHTML = `
            <strong>${anos}</strong> anos<br>
            ${meses} meses e ${dias} dias<br><br>
            🧮 ${totalDias} dias de vida
        `;
    }

    atualizar();
    setInterval(atualizar, 1000);
}

// Tema automático
function definirTema() {
    const hora = new Date().getHours();
    document.body.classList.add(hora >= 6 && hora < 18 ? "light" : "dark");
}


const btn = document.getElementById("btnCalcular");
const toggleTema = document.getElementById("toggleTema");

// Tema inicial
document.body.classList.add("light");

// Alternar tema
toggleTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

// Botão calcular
btn.addEventListener("click", () => {
    if (!input.value) {
        resultado.innerText = "Selecione uma data!";
        resultado.classList.add("show");
        return;
    }

    const nascimento = new Date(input.value);
    const hoje = new Date();

    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();
    let dias = hoje.getDate() - nascimento.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diff = hoje - nascimento;
    const totalDias = Math.floor(diff / (1000 * 60 * 60 * 24));

    resultado.innerHTML = `
        <strong>${anos}</strong> anos<br>
        ${meses} meses e ${dias} dias<br><br>
        🧮 ${totalDias} dias de vida
    `;

    resultado.classList.add("show");
});