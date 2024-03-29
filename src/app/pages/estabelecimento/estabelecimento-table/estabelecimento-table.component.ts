import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface TableRow {
  date: string;
  value: number;
  status: string;
  type: string;
  account: string;
  cpfCnpj: string;
}

@Component({
  selector: 'app-estabelecimento-table',
  templateUrl: './estabelecimento-table.component.html',
  styleUrl: './estabelecimento-table.component.scss'
})
export class EstabelecimentoTableComponent {
  filterForm!: FormGroup;
  filteredData!: any[];
  types!: any[];
  TableRow!:any[];
  cols = [
    { field: 'date', header: 'Data' },
    { field: 'value', header: 'Valor' },
    { field: 'status', header: 'Status' },
    { field: 'type', header: 'Tipo' },
    { field: 'account', header: 'Conta' },
    { field: 'cpfCnpj', header: 'CPF/CNPJ' }
  ];

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      date: [''],
      type: [''],
      account: [''],
      cpfCnpj: ['']
    });

    // Initialize types dropdown options
    this.types = [
      { label: 'Type 1', value: 'Type 1' },
      { label: 'Type 2', value: 'Type 2' },
      { label: 'Type 3', value: 'Type 3' }
    ];

    this.filteredData = [
      { date: '2024-03-01', value: 100.0, status: 'Paid', type: 'Credit', account: '1234567890', cpfCnpj: '123.456.789-00' },
      { date: '2024-03-02', value: 150.0, status: 'Pending', type: 'Debit', account: '0987654321', cpfCnpj: '098.765.432-10' },
      { date: '2024-03-03', value: 200.0, status: 'Paid', type: 'Credit', account: '5678901234', cpfCnpj: '567.890.123-20' },
      { date: '2024-03-04', value: 120.0, status: 'Pending', type: 'Debit', account: '5432109876', cpfCnpj: '543.210.987-30' },
      { date: '2024-03-05', value: 180.0, status: 'Paid', type: 'Credit', account: '9876543210', cpfCnpj: '987.654.321-40' },
      { date: '2024-03-06', value: 90.0, status: 'Pending', type: 'Debit', account: '4321098765', cpfCnpj: '432.109.876-50' }
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
