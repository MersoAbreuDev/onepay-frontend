import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estabelecimento-table',
  templateUrl: './estabelecimento-table.component.html',
  styleUrl: './estabelecimento-table.component.scss'
})
export class EstabelecimentoTableComponent {
  filterForm!: FormGroup;
  filteredData!: any[];
  types!: any[];

  cols = [
    { field: 'date', header: 'Data' },
    { field: 'value', header: 'Valor' },
    { field: 'status', header: 'Status' },
    { field: 'type', header: 'Tipo' },
    { field: 'account', header: 'Conta' },
    { field: 'cpfCnpj', header: 'CPF/CNPJ' }
  ];

  constructor(private fb: FormBuilder) {}

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

    // Fetch data and assign to filteredData
    // For example:
    // this.filteredData = this.yourDataService.getData();
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
