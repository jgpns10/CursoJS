//Função Recursivas - ela se chama de volta

function recursiva(i) {
    console.log(i)
    if (i >= 100) return;
    i++;
    recursiva(i)
}

recursiva(0)