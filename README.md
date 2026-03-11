# 📊 Stats Calculator – AFSE

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![Status](https://img.shields.io/badge/status-finished-brightgreen)

Uma **calculadora de progresso para Anime Fighting Simulator (AFSE)** que permite estimar quanto tempo será necessário para alcançar uma meta de **Stats ou Yen** com base nos ganhos atuais do jogador.

A ferramenta foi criada para facilitar o planejamento de grind dentro do jogo, considerando:

- ganho por click
- ganho por champion
- multiplicadores
- valores muito grandes (com sufixos como k, m, b, t)

---

# 🎮 Funcionalidades

✅ Cálculo de tempo para atingir metas de:

- Strength  
- Durability  
- Chakra  
- Sword  
- Yen  

✅ Conversão automática de **números com sufixos**

Exemplos aceitos:

```
10k
150m
1b
2qd
```

✅ Cálculo de:

- ganho por minuto
- ganho por hora
- tempo total necessário para atingir a meta

✅ Interface estilo **gaming / neon UI**

---

# 📸 Interface

A interface foi desenhada com um estilo **dark neon**, comum em dashboards de jogos.

Características visuais:

- gradiente escuro
- glow effects
- cores roxo e rosa
- layout centralizado

---

# 🧠 Como funciona

A aplicação calcula o progresso baseado em **ganho por segundo**.

### Fórmula principal

```
ganhoPorSegundo =
(statPorClick / tempoClick) +
(championPorTick / tempoChampion)
```

Depois calcula:

```
tempoTotal = (meta - valorAtual) / ganhoPorSegundo
```

O resultado é exibido em:

```
horas
minutos
segundos
```

---

# 💰 Cálculo de Yen

O cálculo de Yen considera multiplicadores:

```
yenTotal = yenBase × multiplicador1 × multiplicador2 × championMultiplier
```

Depois disso o sistema calcula:

- Yen por hora
- Tempo necessário para atingir a meta desejada.

---

# 🔢 Suporte a números grandes

O sistema reconhece automaticamente sufixos usados em jogos idle:

| Sufixo | Valor |
|------|------|
| k | 1.000 |
| m | 1.000.000 |
| b | 1.000.000.000 |
| t | 1.000.000.000.000 |
| qd | 10¹⁵ |
| qn | 10¹⁸ |
| sx | 10²¹ |
| sp | 10²⁴ |
| oc | 10²⁷ |

---

# 🗂 Estrutura do projeto

```
stats-calculator-afse
│
├── index.html
├── style.css
└── app.js
```

### index.html
Contém a estrutura da interface da aplicação.

### style.css
Responsável pelo design visual e layout.

### app.js
Contém toda a lógica da calculadora:

- conversão de sufixos
- cálculos de tempo
- cálculos de Yen
- manipulação do DOM

---

# 🚀 Como usar

1. Clone o repositório

```
git clone https://github.com/seu-usuario/stats-calculator-afse.git
```

2. Abra o arquivo

```
index.html
```

3. Preencha os campos:

- tipo de stat
- stat por click
- stats atuais
- meta desejada
- champion
- multiplicadores (se for Yen)

4. Clique em **Calculate**

O sistema mostrará:

- ganho por minuto / hora
- tempo estimado para alcançar a meta.

---

# 🔮 Melhorias futuras

Possíveis evoluções do projeto:

- 📱 versão responsiva mobile
- 💾 salvar valores com LocalStorage
- 📊 histórico de cálculos
- 🎮 suporte a outros jogos idle
- ⚛️ versão com React ou Vue
- 📈 gráficos de progressão

---

# 👨‍💻 Autor

Desenvolvido por **Lucas Nery**

Projeto criado como ferramenta auxiliar para jogadores e também como prática de desenvolvimento **HTML, CSS e JavaScript**.
