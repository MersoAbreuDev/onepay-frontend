import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
estabelecimentos: any[] = [];
informacoesPorBandeira: any[] = [];
informacoesPorTipoPagamento: any[] = [];
mostrarPorBandeira: boolean = true;

ngOnInit(){
  this.estabelecimentos = [
    { estabelecimento: 'Loja 1', valorMarkup: 100.00, valorComissao: 20.00, comissao: 10 },
    { estabelecimento: 'Loja 2', valorMarkup: 150.00, valorComissao: 30.00, comissao: 15 },
    { estabelecimento: 'Loja 3', valorMarkup: 80.00, valorComissao: 16.00, comissao: 8 },
    { estabelecimento: 'Loja 4', valorMarkup: 120.00, valorComissao: 24.00, comissao: 12 },
    { estabelecimento: 'Loja 5', valorMarkup: 200.20, valorComissao: 40.00, comissao: 20 },
  ];
  this.carregarDados();
}

carregarDados() {
  // Aqui você carregaria os dados de acordo com sua fonte de dados
  // Por exemplo:
  this.informacoesPorBandeira = [
    { nome: 'Elo', valorMarkup: 100.00, valorComissao: 2 },
    { nome: 'Visa', valorMarkup: 220.00, valorComissao: 3 },
    { nome: 'Mastercard', valorMarkup: 345.00, valorComissao: 2.5 }
  ];

  this.informacoesPorTipoPagamento = [
    { nome: 'A vista Crédito', valorMarkup: 185.00, valorComissao: 1.5 },
    { nome: 'A vista Débito', valorMarkup: 230.00, valorComissao: 0.5 },
    { nome: 'Parcelado Crédito', valorMarkup: 452.00, valorComissao: 2 }
  ];
}

filtrarPorBandeira() {
  this.mostrarPorBandeira = true;
}

filtrarPorTipoPagamento() {
  this.mostrarPorBandeira = false;
}
}
