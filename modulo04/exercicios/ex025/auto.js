// script.js

// Função para atualizar os campos de data e mês
function atualizarCamposData() {
	const dataAtual = new Date();
	const ano = dataAtual.getFullYear();
	const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
	const dia = dataAtual.getDate().toString().padStart(2, '0');
  
	document.getElementById('idia').value = `${ano}-${mes}-${dia}`;
	document.getElementById('imes').value = `${ano}-${mes}`;
  }
  
  // Chame a função ao carregar a página
  window.addEventListener('load', atualizarCamposData);
  