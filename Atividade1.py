
dados = [
    {"altura": 1.75, "genero": "Masculino"},
    {"altura": 1.60, "genero": "Feminino"},
    {"altura": 1.82, "genero": "Masculino"},
    {"altura": 1.55, "genero": "Feminino"},
    {"altura": 1.90, "genero": "Masculino"},
    {"altura": 1.65, "genero": "Feminino"},
    {"altura": 1.78, "genero": "Masculino"},
    {"altura": 1.62, "genero": "Feminino"},
    {"altura": 1.85, "genero": "Masculino"},
    {"altura": 1.70, "genero": "Feminino"},
    {"altura": 1.88, "genero": "Masculino"},
    {"altura": 1.50, "genero": "Feminino"},
    {"altura": 1.77, "genero": "Masculino"},
    {"altura": 1.64, "genero": "Feminino"},
    {"altura": 1.80, "genero": "Masculino"},
]


maior_altura = float('-inf')
menor_altura = float('inf')
soma_altura_masculino = 0
contador_masculino = 0
contador_feminino = 0


for pessoa in dados:
    altura = pessoa["altura"]
    genero = pessoa["genero"]
    
    
    if altura > maior_altura:
        maior_altura = altura
    if altura < menor_altura:
        menor_altura = altura
    
    
    if genero == "Masculino":
        soma_altura_masculino += altura
        contador_masculino += 1
    
   
    if genero == "Feminino":
        contador_feminino += 1


media_altura_masculino = soma_altura_masculino / contador_masculino if contador_masculino > 0 else 0

# Resultados
print(f"A maior altura do grupo é: {maior_altura:.2f} m")
print(f"A menor altura do grupo é: {menor_altura:.2f} m")
print(f"A média de altura das pessoas do gênero Masculino é: {media_altura_masculino:.2f} m")
print(f"O número de pessoas do gênero Feminino é: {contador_feminino}")