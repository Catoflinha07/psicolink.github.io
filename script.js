// script.js

// Este código garante que o JavaScript só será executado
// depois que todo o conteúdo HTML da página for carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Pegamos os elementos HTML da página pelos seus IDs.
    // O JavaScript precisa saber quais partes da página ele deve manipular.
    const loginForm = document.getElementById('loginForm');
    const telaLogin = document.getElementById('tela-login');
    const telaDashboard = document.getElementById('tela-dashboard');
    
    // --- VERIFICAÇÕES DE SEGURANÇA (PARA AJUDAR A DEPURAR) ---
    // Estas linhas verificam se os elementos foram realmente encontrados no HTML.
    // Se algum não for encontrado (ex: erro de digitação no ID),
    // ele mostrará uma mensagem no console do navegador (F12) e parará o script.
    if (!loginForm) { 
        console.error("ERRO: Elemento com ID 'loginForm' não encontrado no HTML!"); 
        return; 
    }
    if (!telaLogin) { 
        console.error("ERRO: Elemento com ID 'tela-login' não encontrado no HTML!"); 
        return; 
    }
    if (!telaDashboard) { 
        console.error("ERRO: Elemento com ID 'tela-dashboard' não encontrado no HTML!"); 
        return; 
    }
    // --- FIM DAS VERIFICAÇÕES ---


    // 2. Adicionamos um "ouvinte" ao formulário de login.
    // Este ouvinte espera pelo evento de 'submit' (quando o formulário é enviado,
    // o que acontece ao clicar no botão 'LOGIN' do tipo 'submit').
    loginForm.addEventListener('submit', function(event) {
        
        // IMPORTANTE: event.preventDefault()
        // Esta linha é crucial! Ela impede o comportamento padrão do navegador,
        // que seria recarregar a página ou tentar enviar o formulário para um servidor.
        // Sem isso, a tela piscaria e não haveria a transição suave.
        event.preventDefault();

        // Para fins de depuração: mostra uma mensagem no console do navegador (F12).
        console.log("Botão 'LOGIN' foi clicado! Iniciando a transição de tela...");

        // --- A MÁGICA DA TROCA DE TELA ---
        
        // Esconde a tela de login:
        // Adiciona a classe 'hidden' ao elemento com ID 'tela-login'.
        // Lembre-se que no seu 'style.css', a classe '.hidden' define 'display: none !important;'.
        telaLogin.classList.add('hidden');
        
        // Mostra a tela do dashboard (o menu):
        // Remove a classe 'hidden' do elemento com ID 'tela-dashboard'.
        // Isso faz com que ele apareça na tela.
        telaDashboard.classList.remove('hidden');

        // (Opcional) Limpa os campos do formulário de login.
        // Isso é bom para quando o usuário logar, os campos de CPF/Senha não ficarem preenchidos.
        loginForm.reset();

        // Para fins de depuração: confirma que os comandos de troca foram executados.
        console.log("Comandos de transição de tela executados: tela de login escondida, tela do menu mostrada.");
    });

    // Você pode adicionar mais funcionalidades aqui para os botões do menu (perfil, minhas consultas, etc.)
    // Exemplo (descomente para usar e adicione IDs aos botões do menu):
    /*
    const botaoPerfil = document.getElementById('botao-perfil');
    if (botaoPerfil) {
        botaoPerfil.addEventListener('click', function() {
            alert('Você clicou em Perfil!');
            // Aqui você esconderia a tela do menu e mostraria a tela de perfil, por exemplo.
        });
    }
    */
});