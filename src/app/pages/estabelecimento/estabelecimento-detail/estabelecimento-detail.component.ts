import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-estabelecimento-detail',
  templateUrl: './estabelecimento-detail.component.html',
  styleUrl: './estabelecimento-detail.component.scss'
})
export class EstabelecimentoDetailComponent {

  formEstabelecimento!:FormGroup;
  isEditing: boolean = false;

  form = new FormGroup({
    nomeFantasia:new FormControl('',[Validators.required, Validators.email])
  })

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
