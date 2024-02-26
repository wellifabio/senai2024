document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe "btn-details"
    const buttons = document.querySelectorAll('.btn-details');

    // Adiciona um manipulador de eventos de clique a cada botão
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtém o alvo do botão (ID do modal) do atributo data-bs-target
            const targetModalId = button.getAttribute('data-bs-target');
            
            // Obtém o modal correspondente
            const modal = document.querySelector(targetModalId);
            
            // Verifica se o modal existe
            if (modal) {
                // Abre o modal
                const modalBS = new bootstrap.Modal(modal);
                modalBS.show();
            }
        });
    });

    // Adiciona um manipulador de eventos para remover o foco do modal ao fechá-lo
    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.addEventListener('hidden.bs.modal', function() {
            // Remove o foco do modal
            const modalBackdrop = document.querySelector('.modal-backdrop');
            modalBackdrop.parentNode.removeChild(modalBackdrop);
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Seleciona o formulário de busca pelo ID
        const formBuscar = document.getElementById('form-buscar');
    
        // Adiciona um manipulador de eventos para o envio do formulário
        formBuscar.addEventListener('submit', function(event) {
            // Previne o comportamento padrão do formulário (recarregar a página)
            event.preventDefault();
    
            // Seleciona o campo de entrada de texto pelo ID
            const inputBuscar = document.getElementById('input-buscar');
    
            // Obtém o valor digitado no campo de busca
            const termoBusca = inputBuscar.value;
    
            // Aqui você pode adicionar o código para realizar a busca com o termoBusca
            // Por exemplo:
            console.log('Buscando por:', termoBusca);
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const conteudoContato = document.getElementById('conteudoContato');
        
        // Carregar conteúdo da página de contato
        fetch('contato.html')
            .then(response => response.text())
            .then(data => {
                conteudoContato.innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar a página de Contato:', error);
            });
    });
    
});
