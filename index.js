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
  let mes = window.prompt("Digite o mês");
  let nomeMes = "";
  switch (Number(mes)) {
    case 1:
      nomeMes = "Janeiro";
      break;
    case 2:
      nomeMes = "Fevereiro";
      break;
    case 3:
      nomeMes = "Março";
      break;
    case 4:
      nomeMes = "Abril";
      break;
    case 5:
      nomeMes = "Maio";
      break;
    case 6:
      nomeMes = "Junho";
      break;
    case 7:
      nomeMes = "Julho";
      break;
    case 8:
      nomeMes = "Agosto";
      break;
    case 9:
      nomeMes = "Setembro";
      break;
    case 10:
      nomeMes = "Outubro";
      break;
    case 11:
      nomeMes = "Novembro";
      break;
    case 12:
      nomeMes = "Dezembro";
      break;
    default:
      nomeMes = "Mês inexistente";
  }
  console.log(nomeMes);
}
