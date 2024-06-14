/*
    20.Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).
*/
const prompt = require('prompt-sync')();

const funcionarios = [
    { matricula: 1684, nome: 'Carlos', salarioBruto: 4105 },
    { matricula: 1495, nome: 'Ana', salarioBruto: 2403 },
    { matricula: 1546, nome: 'Julia', salarioBruto: 3731 },
    { matricula: 1355, nome: 'Pedro', salarioBruto: 3917 },
    { matricula: 1869, nome: 'Carlos', salarioBruto: 3608 },
    { matricula: 1875, nome: 'Pedro', salarioBruto: 2489 },
    { matricula: 1123, nome: 'Maria', salarioBruto: 4407 },
    { matricula: 1211, nome: 'João', salarioBruto: 1726 },
    { matricula: 1162, nome: 'Mariana', salarioBruto: 4525 },
    { matricula: 1480, nome: 'Ana', salarioBruto: 1895 },
    { matricula: 1922, nome: 'Julia', salarioBruto: 2565 },
    { matricula: 1530, nome: 'Pedro', salarioBruto: 2785 },
    { matricula: 1505, nome: 'Carlos', salarioBruto: 2345 },
    { matricula: 1682, nome: 'Ana', salarioBruto: 4478 },
    { matricula: 1483, nome: 'João', salarioBruto: 4410 },
    { matricula: 1544, nome: 'Maria', salarioBruto: 3765 },
    { matricula: 1315, nome: 'Lucas', salarioBruto: 1319 },
    { matricula: 1888, nome: 'Mariana', salarioBruto: 1507 },
    { matricula: 1513, nome: 'Lucas', salarioBruto: 3476 },
    { matricula: 1651, nome: 'João', salarioBruto: 2027 },
    { matricula: 1927, nome: 'Carlos', salarioBruto: 3326 },
    { matricula: 1697, nome: 'Ana', salarioBruto: 2649 },
    { matricula: 1100, nome: 'Carlos', salarioBruto: 1861 },
    { matricula: 1567, nome: 'Mariana', salarioBruto: 1445 },
    { matricula: 1964, nome: 'João', salarioBruto: 4263 },
    { matricula: 1582, nome: 'Ana', salarioBruto: 4418 },
    { matricula: 1926, nome: 'Lucas', salarioBruto: 2547 },
    { matricula: 1997, nome: 'João', salarioBruto: 4767 },
    { matricula: 1715, nome: 'Julia', salarioBruto: 1696 },
    { matricula: 1170, nome: 'Mariana', salarioBruto: 3550 },
    { matricula: 1330, nome: 'Maria', salarioBruto: 4474 },
    { matricula: 1708, nome: 'Lucas', salarioBruto: 4870 },
    { matricula: 1984, nome: 'Carlos', salarioBruto: 2359 },
    { matricula: 1740, nome: 'Ana', salarioBruto: 2733 },
    { matricula: 1111, nome: 'Pedro', salarioBruto: 1601 },
    { matricula: 1999, nome: 'Carlos', salarioBruto: 2459 },
    { matricula: 1934, nome: 'Ana', salarioBruto: 4228 },
    { matricula: 1176, nome: 'Pedro', salarioBruto: 1306 },
    { matricula: 1332, nome: 'Maria', salarioBruto: 2695 },
    { matricula: 1516, nome: 'Carlos', salarioBruto: 4335 },
    { matricula: 1952, nome: 'Julia', salarioBruto: 1844 },
    { matricula: 1167, nome: 'João', salarioBruto: 4849 },
    { matricula: 1689, nome: 'Maria', salarioBruto: 2262 },
    { matricula: 1298, nome: 'Julia', salarioBruto: 4519 },
    { matricula: 1627, nome: 'Pedro', salarioBruto: 3063 },
    { matricula: 1111, nome: 'Lucas', salarioBruto: 2424 },
    { matricula: 1114, nome: 'Mariana', salarioBruto: 4194 },
    { matricula: 1127, nome: 'Maria', salarioBruto: 1942 },
    { matricula: 1751, nome: 'Carlos', salarioBruto: 4762 },
    { matricula: 1945, nome: 'Julia', salarioBruto: 4728 },
    { matricula: 1257, nome: 'Ana', salarioBruto: 3433 },
    { matricula: 1281, nome: 'Mariana', salarioBruto: 2941 },
    { matricula: 1671, nome: 'Maria', salarioBruto: 3946 },
    { matricula: 1171, nome: 'Julia', salarioBruto: 2284 },
    { matricula: 1219, nome: 'João', salarioBruto: 3664 },
    { matricula: 1294, nome: 'Pedro', salarioBruto: 3663 },
    { matricula: 1810, nome: 'Lucas', salarioBruto: 327},
    { matricula: 1932, nome: 'Pedro', salarioBruto: 4229 },
    { matricula: 1911, nome: 'Carlos', salarioBruto: 2094 },
    { matricula: 1419, nome: 'Maria', salarioBruto: 4762 },
    { matricula: 1873, nome: 'Lucas', salarioBruto: 1458 },
    { matricula: 1220, nome: 'Ana', salarioBruto: 3595 },
    { matricula: 1720, nome: 'Pedro', salarioBruto: 3674 },
    { matricula: 1741, nome: 'Mariana', salarioBruto: 4742 },
    { matricula: 1947, nome: 'Maria', salarioBruto: 4962 },
    { matricula: 1664, nome: 'Pedro', salarioBruto: 3275 },
    { matricula: 1939, nome: 'Ana', salarioBruto: 2554 },
    { matricula: 1424, nome: 'Carlos', salarioBruto: 1499 },
    { matricula: 1375, nome: 'Lucas', salarioBruto: 4513 },
    { matricula: 1575, nome: 'Maria', salarioBruto: 2745 },
    { matricula: 1957, nome: 'Mariana', salarioBruto: 2334 },
    { matricula: 1793, nome: 'Julia', salarioBruto: 2354 },
    { matricula: 1311, nome: 'Carlos', salarioBruto: 3184 },
    { matricula: 1289, nome: 'Ana', salarioBruto: 4963 },
    { matricula: 1934, nome: 'Pedro', salarioBruto: 1442 },
    { matricula: 1536, nome: 'Lucas', salarioBruto: 2792 },
    { matricula: 1879, nome: 'Maria', salarioBruto: 4866 },
    { matricula: 1888, nome: 'João', salarioBruto: 3998 },
    { matricula: 1342, nome: 'Julia', salarioBruto: 3725 },
    { matricula: 1262, nome: 'Carlos', salarioBruto: 3491 },
];

for(let i = 0; i < funcionarios.length; i++){
  let deducaoINSS = funcionarios[i].salarioBruto * 0.12;
  let salarioLiquido = funcionarios[i].salarioBruto - deducaoINSS;
  console.log("Informações do Funcionário: ", funcionarios[i].nome);
  console.log("Matrícula: ", funcionarios[i].matricula);
  console.log(`Salário Bruto: R$${funcionarios[i].salarioBruto} reais`);
  console.log(`A dedução do INSS é R$${deducaoINSS.toFixed(2)} reais`);
  console.log(`Salário Liquído: R$${salarioLiquido.toFixed(2)} reais`);
  console.log("\n")
}
