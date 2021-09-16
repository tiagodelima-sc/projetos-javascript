window.onload = function(){
// Método Construtor
class Produto {
  constructor(nome, preco, ano) {
      this.nome = nome;
      this.preco = preco;
      this.ano = ano;
  }
}

// Interface
class Interface {
  adicionarProduto(produto) {
      const productList = document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML = `
          <div class="card text-center mb-4">
              <div class="card-body">
                  <strong>Produto</strong>: ${produto.nome} -
                  <strong>Preco</strong>: ${produto.preco} - 
                  <strong>Ano</strong>: ${produto.ano}
                  <a href="#" class="btn btn-danger" name="excluir"> Excluir </a>
              </div>
          </div>
      `;
      productList.appendChild(element);
  }

  excluirFormulario() {
      document.getElementById('product-form').reset();
  }

  excluirProduto(element) {
      if (element.name === 'excluir') {
          element.parentElement.parentElement.remove();
          this.mostrarMensagem('Produto deletado', 'success');
      }
  }

  mostrarMensagem(message, cssClass) {
      const div = document.createElement('div');
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
      // Show in The DOM
      const container = document.querySelector('.container');
      const app = document.querySelector('#App');
      // Insert Message in the UI
      container.insertBefore(div, app);
      // Remove the Message after 3 seconds
      setTimeout(function () {
          document.querySelector('.alert').remove();
      }, 3000);
  }
}

// DOM Events
document.getElementById('product-form')
  .addEventListener('submit', function (e) {

      const nome = document.getElementById('nome').value;
      const  preco = document.getElementById('preco').value;
      const  ano = document.getElementById('ano').value;

      // Criando o objeto
      const produto = new Produto(nome, preco, ano);

      // Criando a interface
      const interface = new Interface();

      // Verificando a validação

      if (nome === '' || preco === '' || ano === '') {
          interface.mostrarMensagem('Preencha todos os campos para adicionar o produto', 'danger');
      }

      // Salvando o produto
      interface.adicionarProduto(produto);
      interface.mostrarMensagem('Produto adicionado', 'success');
      interface.excluirFormulario();

      e.preventDefault();
  });

document.getElementById('product-list')
  .addEventListener('click', function (e) {
      const interface = new Interface();
      interface.excluirProduto(e.target);
      e.preventDefault();
  });

}