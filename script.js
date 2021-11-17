function contar() {
  var initial = document.getElementById('initialNumber')
  var final = document.getElementById('finalNumber')
  var passo = document.getElementById('passNumber')
  var res = document.getElementById('res')
  if (
    initial.value.length == 0 ||
    final.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert(`[ERRO] Verifique os dados digitados`)
  } else {
    res.innerHTML = 'Contando...'
    let i = Number(initial.value) // Preciso do value para poder acessar o tal do valor
    let f = Number(final.value)
    let p = Number(passo.value)
    debugger
    if (p <= 0) {
      alert(`Passo Invalido! Considerando-o como 1`)
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
