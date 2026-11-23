document.querySelector("#formulario").addEventListener("submit",
e => {
  e.preventDefault();
  const inicio = Number(document.querySelector("#inicio").value),
  fim = Number(document.querySelector("#fim").value),
  r = document.querySelector("#resultado");
  if (!Number.isInteger(inicio) || !Number.isInteger(fim) || inicio<1 || fim<inicio || fim-inicio>149) {
    r.textContent = "Informe um intervalo crescente com até 150 números.";
    return
  }
  const passos = [];
  for (let n = inicio; n <= fim; n++) {
    const nome = (n % 3 === 0?"Pula":"") + (n % 5 === 0?"Salta":"");
    passos.push(nome || n)
  }
  r.textContent = passos.join(" · ")
});
document.querySelector("#formulario").requestSubmit()



