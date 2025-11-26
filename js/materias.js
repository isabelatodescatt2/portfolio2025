document.getElementById('menuOpcoesSobreMim').addEventListener('click', function() {
    const divSobreMim = document.getElementById('sobreMim');
    divSobreMim.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('logoVRosaExtendida').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// PARTICULAS NA CAPA mds to enlouquecendo
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffb6c1" }, 
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: true }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});

// botoes
function PorfolioAntigo() {
    window.open("https://portfoliobela.carrd.co/", "_blank");
}

function certificados() {
    window.open("https://drive.google.com/drive/folders/18C_o4lT5eZB5jFXbtkOBe80lW6eBLR0R?usp=sharing", "_blank");
}

// matérias

document.addEventListener('DOMContentLoaded', function() {
    const abas = document.querySelectorAll('.aba-trimestre');
    
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            // Remove a classe 'ativo' de todas as abas e conteúdos
            document.querySelectorAll('.aba-trimestre').forEach(a => a.classList.remove('ativo'));
            document.querySelectorAll('.conteudo-trimestre').forEach(c => c.classList.remove('ativo'));
            
            // Adiciona a classe 'ativo' apenas na aba clicada
            this.classList.add('ativo');
            
            // Mostra o conteúdo correspondente
            const trimestre = this.getAttribute('data-trimestre');
            document.querySelector(`.conteudo-trimestre[data-trimestre="${trimestre}"]`).classList.add('ativo');
        });
    });
});

// Adicione isso ao seu script.js
document.addEventListener('DOMContentLoaded', function() {
    // Controle das abas (já existente)
    const abas = document.querySelectorAll('.aba-trimestre');
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            document.querySelectorAll('.aba-trimestre').forEach(a => a.classList.remove('ativo'));
            document.querySelectorAll('.conteudo-trimestre').forEach(c => c.classList.remove('ativo'));
            this.classList.add('ativo');
            const trimestre = this.getAttribute('data-trimestre');
            document.querySelector(`.conteudo-trimestre[data-trimestre="${trimestre}"]`).classList.add('ativo');
        });
    });

    // Controle dos botões de detalhes
    const botoesDetalhes = document.querySelectorAll('.botao-detalhes');
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', function() {
            const atividade = this.closest('.atividade');
            const descricao = atividade.querySelector('.atividade-descricao');
            
            // Mostrar a descri o completa
            descricao.style.maxHeight = descricao.scrollHeight + 'px';
        });
    });
    
});

    // direcionar abars
    

    function voltar() {
        window.location.href = "../inicio/index.html";
    }
    function Humanas() {
        window.location.href = "../materias/humanas.html";
    }

    function Linguagens() {
        window.location.href = "../materias/linguagens.html";
    }
    
    function Matematica() {
        window.location.href = "../materias/matematica.html";
    }

    function Natureza() {
        window.location.href = "../materias/natureza.html";
    }

    function ModelagemS(){
        window.location.href = "../técnico/modelagemsistemas.html"
    }

    function IOT(){
        window.location.href = "../técnico/iot.html"
    }

    function BancoDados(){
        window.location.href = "../técnico/bancodedados.html"
    }

//HUMANAS ------------------------------------------
// humanas 1
function hlinhatempo() {
    window.open("https://www.canva.com/design/DAGkmyHVXIM/yv9fFlpIAqG5bwoHLXq5Rw/edit", "_blank");
}

function hseminario() {
    window.open("https://www.canva.com/design/DAGe_O8CbEs/6RP_GAmoGstsVPjevzo0kg/view?utm_content=DAGe_O8CbEs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h682aa8898b", "_blank");
}

//humanas 2
function hlisa() {
    window.open("https://www.canva.com/design/DAGsfMU_E0c/lKRk3ex-26nInOxlEOon3Q/view?utm_content=DAGsfMU_E0c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6892d31d4c", "_blank");
}

function zambia(){
    widow.open("https://docs.google.com/document/d/1hUO2Eff4n_IOnsie6xJBAvVQHoHod5HlFBs_uwzxSU4/edit?tab=t.0#heading=h.5wzlrwd6gow9", "_blank");
}

function hcarrsholocausto(){
    window.open("https://docs.google.com/document/d/1d3O3XmKtYSS25i-Fzkw_3nCgDWE78whzZMmhGYmgCJk/edit?usp=sharing", "_blank");
}

//humanas 3
function hbrasilia(){
    window.open("https://www.canva.com/design/DAG1N0h1jXc/KJE0zR-8xh-2-u5zi5QkqQ/view?utm_content=DAG1N0h1jXc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6af6870fae", "_blank");
}

function hjuriGV(){
    window.open("https://docs.google.com/document/d/1-epv8M0-tYWl4Nh3l0_ThF0SErqllkxs96SdBtOO9HU/edit?usp=sharing", "_blank");
}


// LINGUAGENS -------------------------------------
// linguagens 1

function lpadlet1() {
    window.open("https://drive.google.com/file/d/1-Ww2r_yqL4iEePbqkl6XxfcznpTx8B8G/view?usp=sharing", "_blank");
}

function lrevista() {
    window.open("https://www.figma.com/proto/Xr1vVrH9ObO6Fh6fD8npN0/Litera---Revista-Liter%C3%A1ria?node-id=1-2&p=f&t=TsgivSrnxjLIri3F-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2", "_blank");
}

function lredacao() {
    window.open("https://drive.google.com/file/d/16Te-K6GfpIJ2uDXj3t8bLRlrcEpojQ5g/view?usp=sharing", "_blank");
}

function lconto() {
    window.open("https://www.canva.com/design/DAGj5Sonf6c/YE6cRkLlNffdtqbSPKL_aA/view?utm_content=DAGj5Sonf6c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d602970b2", "_blank");
}

function lbiografia() {
    window.open("https://www.canva.com/design/DAGlaBKN5-U/VR6-L391WDeoKx9QZ2Nu-w/view?utm_content=DAGlaBKN5-U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd005f3b0f1", "_blank");
}

function lrepertorio() {
    window.open("https://sites.google.com/estudante.sesisenai.org.br/redacao-acessivel/in%C3%ADcio", "_blank");
}

// linguagens 2
function lingles(){
    window.open("https://www.canva.com/design/DAGvehfPmyk/l0LDxXGqoXqaUgE1Ta6OXg/view?utm_content=DAGvehfPmyk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcdd00d7ff9", "_blank");
}

//linguagens 3
function lredacaocancelamento(){
    window.open("https://drive.google.com/file/d/17DJZvigqqMz2X6OrOFzbYNDAuPP-Gdp9/view?usp=sharing", "_blank");
}

function lreels(){
    window.open("https://youtube.com/shorts/D24PtiQJgBk?si=LSKz78LwIfIwfgKC", "_blank");
}

function lcartaintencao(){
    window.open("https://www.canva.com/design/DAG4uoQT1bc/BWznTLCKErpePvJAsn-XVQ/view?utm_content=DAG4uoQT1bc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f5743cfcc", "_blank");
}

// NATUREZA ---------------------------------------
// natureza 1
function npoluicao() {
    window.open("https://docs.google.com/document/d/1-NDSGgE1z0HIKrvxqoX81HYRPVl-2l6o-6NJ9zC0aqU/edit?usp=sharing", "_blank");
}

function nestequiometria() {
    window.open("https://www.canva.com/design/DAGht1RtGYQ/Hd5Lu6rqdWXOHf9T3hxhow/view?utm_content=DAGht1RtGYQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h479f1af109", "_blank");
}

function nradioatividade() {
    window.open("https://www.canva.com/design/DAGgAxpa-Ag/JyZDSHJwwpwNui5HnxfRaA/edit?utm_content=DAGgAxpa-Ag&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
}

function neletrostatica() {
    window.open("https://www.canva.com/design/DAGlZ_FdyiE/MxgKluDHUdon-pOM_5xcgg/view?utm_content=DAGlZ_FdyiE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4f61ca27dd", "_blank");
}

// natureza 2
function autoralcamp(){
    window.open("https://enoisgroup.my.canva.site/campo-magn-tico-terrestre-e-auroras", "_blank");
}

function nglossario(){
    window.open("https://www.canva.com/design/DAGqs-VITyM/dKURKltFZV0_jpFOit5o2A/view?utm_content=DAGqs-VITyM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he5421b394c&authuser=0", "_blank");
}

function nmapasistemas(){
    window.open("https://www.canva.com/design/DAGsAwdeck4/OdFwJ2pXMGdeDWo0ShGsQA/view?utm_content=DAGsAwdeck4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8036732936", "_blank");
}

// natureza 3
function noleoessencial(){
    window.open("https://www.youtube.com/shorts/p7EYvoruS8I", "_blank");
}

function ncristalizaçãopadlet(){
    window.open("https://padlet.com/romuelsilva/trabalhos-3a-x9g8c2ybggrprlju", "_blank")
}

function nenergia(){
    window.open("https://www.canva.com/design/DAGzzGN-Qz4/jaNt5g4dWBesuX1GbZkMjA/edit", "_blank")
}

// MATEMÁTICA -------------------------------------
// matematica 1
function hfilme() {
    window.open("https://docs.google.com/document/d/1WzZrqpXLnqumy7fNdOUGpCNkiHbZsNP7Q1WF8R-HteY/edit?usp=sharing", "_blank");
}
function hjogo() {
    window.open("https://www.canva.com/design/DAGk4mGajNg/uZ15Zuv5_thd3E7G_Aw-5Q/view?utm_content=DAGk4mGajNg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h294bf37923", "_blank");
}

// matematica 2
function hestatistica(){
    window.open("https://www.canva.com/design/DAGr-EVPQCk/ZjQpA2GnV510C02McZORvg/view?utm_content=DAGr-EVPQCk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h797bf463df&authuser=0", "_blank");
}

//matematica 3
function hbolodecaneca(){
    window.open("https://www.canva.com/design/DAG36x8bE5c/jkwuDpd_vwZ5uJ8AYWqeNw/view?utm_content=DAG36x8bE5c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0877d2865", "_blank");
}

// MODELAGEM DE SISTEMAS ----------------------------
// modelagem de sistemas 1
function mshamburgueria() {
    window.open("https://docs.google.com/spreadsheets/d/1aQaSxqGmsIqfTMy1x9_lTEjevl1-jZKYrTuMfgJw-8M/edit?usp=sharing", "_blank");
}

function mssaapresentacao() {
    window.open("https://www.canva.com/design/DAGiBSdVkqA/RR62FQMow1BQ4W3IsUjnRQ/edit?utm_content=DAGiBSdVkqA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
}

// modelagem de sistemas 2
function mswireframe(){
    window.open("https://www.figma.com/design/XjsNTo38jiJkwaVvhEPuwM/EcoVigia?node-id=0-1&t=x7K2ALuhRV5YhzwJ-1", "_blank");
}

// BANCO DE DADOS --------------------------------
// banco de dados 2
function bdbrmodelo(){
    window.open("https://docs.google.com/document/d/1-JJ_iRPeXT4c-dePoMTHipe9ByR5kSyHn60UaOc5asM/edit?usp=sharing", "_blank");
}
