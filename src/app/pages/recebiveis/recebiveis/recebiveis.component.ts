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
      { estabelecimento: 'local01', documento: '100', date: '2024-03-01', cartao: 'Credit', boleto: '1234567890', estorno: 'sim',total:'1238' },
      { estabelecimento: 'local01', documento: '150', date: '2024-03-01', cartao: 'Debit', boleto: '0987654321', estorno: 'nao',total:'1239' },
      { estabelecimento: 'local01', documento: '200', date: '2024-03-01', cartao: 'Credit', boleto: '5678901234', estorno: 'sim',total:'123' },
      { estabelecimento: 'local01', documento: '120', date: '2024-03-01', cartao: 'Debit', boleto: '5432109876', estorno: 'sim',total:'1223' },
      { estabelecimento: 'local01', documento: '180', date: '2024-03-01', cartao: 'Credit', boleto: '9876543210', estorno: 'nao',total:'1283' },
      { estabelecimento: 'local01', documento: '90', date: '2024-03-01', cartao: 'Debit', boleto: '4321098765', estorno: 'sim',total:'13323' }
    ];
  }


  showDetails(idDetail: any) {
    console.log("Chamou", idDetail);
    this.router.navigateByUrl('/estabelecimento/details');
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


