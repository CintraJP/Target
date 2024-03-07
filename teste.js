

//2
let a = 0, b =1
let resposta
function calcular_sequencia(numero){
    if (numero == 0 || numero == 1){
        console.log("pertence a sequencia")
    }
    else {
        while(b <= numero){
            let fib = a + b
            a = b
            b = fib
            
            if (numero == fib){
                resposta = "Existe"
                return resposta
            }
        }
        resposta = "Nao existe"
        return resposta
    }
}
    

console.log(calcular_sequencia(13))

//5
let invertido = " "
function inverte(str){
    for(i = str.length - 1; i>=0; i--){
         invertido += str[i]
    }
    return invertido
}
console.log(inverte("target"))