// funcion para calcular el factorial
const calcularFactorial = (num) => {
    let resultado = 1

    for (let i = 1; i <= num; i++) {
        resultado *= i
    }
    return resultado
}

// console.log("vinculado")
const numberUser = parseInt(prompt("preguntar al usuario por un numero del 1 al 20 "))

if (numberUser >= 1 && numberUser <= 20) {
    console.log("todo correcto")
    //3. realizar los calculos de la tabla
    for (let i = 1; i <= numberUser; i++) {
        console.log(`${i} x ${numberUser} = ${i * numberUser}`)
    }
    //pintar factorial
    for (let i = 1; i <= numberUser; i++) {
        console.log(`factorial de ${i} es: ${calcularFactorial(i).toLocaleString()}`)
    }

} else {
    console.log("no es correcto")
}

