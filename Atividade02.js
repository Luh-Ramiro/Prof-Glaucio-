const inputsContainer = document.getElementById("inputsContainer");
        for (let i = 0; i < 15; i++) {
            inputsContainer.innerHTML += `
                <div>
                    <label>Altura da pessoa ${i + 1} (em metros): </label>
                    <input type="number" step="0.01" id="altura${i}" required>
                    <label>Gênero (M/F): </label>
                    <input type="text" id="genero${i}" maxlength="1" required>
                </div>
            `;
        }

        document.getElementById("dadosForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const pessoas = [];
            for (let i = 0; i < 15; i++) {
                let altura = parseFloat(document.getElementById(`altura${i}`).value);
                let genero = document.getElementById(`genero${i}`).value.toUpperCase();
                
                if (isNaN(altura) || (genero !== 'M' && genero !== 'F')) {
                    alert("Dados inválidos! Certifique-se de inserir uma altura válida e gênero como 'M' ou 'F'.");
                    return;
                }
                
                pessoas.push({ altura, genero });
            }
            
            const alturas = pessoas.map(pessoa => pessoa.altura);
            const maiorAltura = Math.max(...alturas);
            const menorAltura = Math.min(...alturas);
            
            const homens = pessoas.filter(pessoa => pessoa.genero === 'M');
            const mediaAlturaHomens = homens.length ? (homens.reduce((acc, cur) => acc + cur.altura, 0) / homens.length).toFixed(2) : 0;
            
            const quantidadeMulheres = pessoas.filter(pessoa => pessoa.genero === 'F').length;
            
            document.getElementById("maiorAltura").innerText = `Maior altura do grupo: ${maiorAltura}m`;
            document.getElementById("menorAltura").innerText = `Menor altura do grupo: ${menorAltura}m`;
            document.getElementById("mediaAlturaHomens").innerText = `Média de altura dos homens: ${mediaAlturaHomens}m`;
            document.getElementById("quantidadeMulheres").innerText = `Número de mulheres no grupo: ${quantidadeMulheres}`;
        });