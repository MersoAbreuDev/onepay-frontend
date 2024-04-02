import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


interface TableRow {
  estabelecimento: string;
  documento: string;
  date: string;
  cartao: string;
  boleto: string;
  estorno: string;
  cancelar: string;
  total: string;
}

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrl: './recebiveis.component.scss'
})
export class RecebiveisComponent {
  filterForm!: FormGroup;
  TableRow!:any[];
  filteredData!: any[];
  cols = [
    { field: 'estabelecimento', header: 'Estabelecimento' },
    { field: 'documento', header: 'Documento' },
    { field: 'date', header: 'Data' },
    { field: 'cartao', header: 'Cartao' },
    { field: 'boleto', header: 'Boleto' },
    { field: 'estorno', header: 'Estorno' },
    { field: 'cancelar', header: 'Cancelar' },
    { field: 'total', header: 'Total' }
  ];


  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      estabelecimento: [''],
      cpfCnpj: [''],
      date: [''],
    });


    this.filteredData = [
      { estabelecimento: 'local01', documento: 'doc01', date: '2024-03-01', cartao: 'Credit', boleto: '1234567890', estorno: 'sim',cancelar:'sim',total:'1238' },
      { estabelecimento: 'local02', documento: 'doc02', date: '2024-03-02', cartao: 'Debit', boleto: '0987654321', estorno: 'nao',total:'1239' },
      { estabelecimento: 'local03', documento: 'doc03', date: '2024-03-03', cartao: 'Credit', boleto: '5678901234', estorno: 'sim',cancelar:'sim',total:'123' },
      { estabelecimento: 'local04', documento: 'doc04', date: '2024-03-04', cartao: 'Debit', boleto: '5432109876', estorno: 'sim',total:'1223' },
      { estabelecimento: 'local05', documento: 'doc05', date: '2024-03-05', cartao: 'Credit', boleto: '9876543210', estorno: 'nao',cancelar:'sim',total:'1283' },
      { estabelecimento: 'local06', documento: 'doc10', date: '2024-03-06', cartao: 'Debit', boleto: '4321098765', estorno: 'sim',total:'13323' }
    ];
  }

  search() {
    // Implement search functionality based on filterForm values
    // For example:
    // const filters = this.filterForm.value;
    // this.filteredData = this.yourDataService.search(filters);
  }

  clearFilters() {
    this.filterForm.reset();
    // Reset filteredData to original data
    // For example:
    // this.filteredData = this.yourDataService.getData();
  }
}


