import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss'
})
export class VendasComponent {
  filterForm!: FormGroup;
  filteredData!: any[];
  types!: any[];
  mockData!: any[];
  tableData!: any[];
  cols = [
    { field: 'date', header: 'Data' },
    { field: 'value', header: 'Valor' },
    { field: 'status', header: 'Status' },
    { field: 'type', header: 'Tipo' },
    { field: 'account', header: 'Conta' },
    { field: 'cpfCnpj', header: 'CPF/CNPJ' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.mockData = [
      {
          cmt: "CMT1",
          value: 1000,
          taxes: 100,
          net: 900,
          dueDate: "2022-01-01",
          saleOrder: "SO1",
          client: "Cliente 1"
      },
      {
          cmt: "CMT2",
          value: 2000,
          taxes: 200,
          net: 1800,
          dueDate: "2022-02-01",
          saleOrder: "SO2",
          client: "Cliente 2"
      },
      {
          cmt: "CMT3",
          value: 3000,
          taxes: 300,
          net: 2700,
          dueDate: "2022-03-01",
          saleOrder: "SO3",
          client: "Cliente 3"
      },
      {
        cmt: "CMT3",
        value: 3000,
        taxes: 300,
        net: 2700,
        dueDate: "2022-03-01",
        saleOrder: "SO3",
        client: "Cliente 3"
    },
    {
      cmt: "CMT3",
      value: 3000,
      taxes: 300,
      net: 2700,
      dueDate: "2022-03-01",
      saleOrder: "SO3",
      client: "Cliente 3"
  },
  {
    cmt: "CMT3",
    value: 3000,
    taxes: 300,
    net: 2700,
    dueDate: "2022-03-01",
    saleOrder: "SO3",
    client: "Cliente 3"
},
{
  cmt: "CMT3",
  value: 3000,
  taxes: 300,
  net: 2700,
  dueDate: "2022-03-01",
  saleOrder: "SO3",
  client: "Cliente 3"
},
      // Adicione mais objetos conforme necessário
  ];
  this.tableData = this.mockData;

    this.filterForm = this.fb.group({
      cpfCnpj: [''],
      estabelecimento: [''],
      cliente: [''],
      dataDe: [''],
      dataAte: [''],
      bandeira: [''],
      formaPagamento: [''],
      statusVenda: ['']
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

  navigateToDetails(rowData:any) {
    console.log("Proxima page ",rowData);
    this.router.navigate(['/vendas/vendas-detalhes']);
  }
}
