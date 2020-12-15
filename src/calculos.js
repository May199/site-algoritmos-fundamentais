module.exports = {
    somaConjunto(array) {
        var soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }
        return soma;
    },
  
    mdc(a, b){
        var resto, mdc, resultado; 
        while (b != 0) {
            resto = a % b; 
            a = b; 
            b = resto; 
            mdc = a;
        }
        resultado = mdc;
        return resultado; 
    },
    Numprimo(n) {
        var resultado = '', div = 0; 
        for (let i = 1; i <= n; i++) {
            if (n % i == 0)
                div++;
        }
        if (div == 2) {
            resultado = 'É primo';
        } else {
            resultado = 'Não é primo';
        }
        return resultado; 
    },
    fibonacci(base) {
        base = parseInt(base); 
        var resultado = [], num = 1, sucessor, antecessor = 0; 
        if (base <=2){
            num = base -1;
        }else{
            for(let i=1; i <= base; i++){
                resultado[0] = 0; 
                resultado[i] = num;
                sucessor = antecessor + num; 
                antecessor = num; 
                num = sucessor;

            }
            return resultado;
        } 
    },
    contador(num){
        num = parseInt(num); 
        let count = 0;

        for (let i = 0; i < num; i++){
            count = i;
        }
        return count;
    },
    ordenar(array) {
        function quick(vetor, left = 0, right = vetor.length - 1) {
            let pivo = left;

            if (left < right) {
                let pivoIndex = quebra(vetor, left, right, pivo);

                quick(vetor, left, pivoIndex - 1);
                quick(vetor, pivoIndex + 1, right);
            }
            return vetor;
        }

        function quebra(vetor, left, right, pivo) {
            let p = vetor[pivo];
            troca(vetor, right, pivo);
            let aux = left;

            for (let i = left; i < right; i++) {
                if (vetor[i] <= p) {
                troca(vetor, i, aux);
                aux = aux + 1;
                }
            }

            troca(vetor, right, aux);
            return aux;
        }

        function troca(vetor, i, j) {
            let temp = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = temp;
        }

        return quick(array);
    },
    toArray(string) {
        const array = string.split(',').map((el) => {
            el = parseFloat(el);
            if (!el) el = 0;
            return el;
        });

        return array;
    }
}