function calcularIdade() {
    const dataNascimento = document.getElementById("dataNascimento").value;

    if (!dataNascimento) {
        document.getElementById("resultado").innerText = "Por favor, selecione uma data.";
        return;
    }

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    document.getElementById("resultado").innerText = `Você tem ${idade} anos.`;
}