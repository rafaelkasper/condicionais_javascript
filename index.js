function condicaoIf() {
  let idade = window.prompt("Qual é sua idade?");
  if (Number(idade) >= 16) {
    console.log("Você pode votar");
  }
}

function condicaoIfMultipla() {
  let idade = window.prompt("Qual é sua idade?");
  if ((Number(idade) >= 16 && Number(idade) < 18) || idade >= 70) {
    console.log("O voto é opcional");
  }
}

function condicaoElseIf() {
  let idade = window.prompt("Qual é sua idade?");
  if ((Number(idade) >= 16 && Number(idade) < 18) || idade >= 70) {
    console.log("O voto é opcional");
  } else if (Number(idade) < 16) {
    console.log("Você não pode votar");
  } else {
    console.log("Você é obrigado a votar");
  }
}

function condicaoElse() {
  let idade = window.prompt("Qual é sua idade?");
  if (Number(idade) >= 16) {
    console.log("Você pode votar");
  } else {
    console.log("Você não pode votar");
  }
}

function operadorTernario() {
  let idade = window.prompt("Qual é sua idade?");
  if (Number(idade) >= 16) {
    console.log("Você pode votar");
  } else {
    console.log("Você não pode votar");
  }
}

function condicaoSwitch() {
  let signo = window.prompt("Qual é seu signo?");
  switch (signo) {
    case "Áries":
      console.log("Você nasceu entre 21 março e 20 abril");
      break;
    case "Touro":
      console.log("Você nasceu entre 21 abril e 20 maio");
      break;
    case "Gêmeos":
      console.log("Você nasceu entre 21 maio e 20 junho");
      break;
    case "Câncer":
      console.log("Você nasceu entre 21 junho e 22 julho");
      break;
    case "Leão":
      console.log("Você nasceu entre 23 julho e 22 agosto");
      break;
    case "Virgem":
      console.log("Você nasceu entre 23 agosto e 22 setembro");
      break;
    case "Libra":
      console.log("Você nasceu entre 23 setembro e 22 outubro");
      break;
    default:
      console.log("Signo não encontrado");
      break;
  }
}
