try {
    // console.log(a) ---> Mostra o catch (tratando o erro)
    console.log('Abri um aquivo');
    console.log('Manupulei o arquivo e deu erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou Finally')
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}