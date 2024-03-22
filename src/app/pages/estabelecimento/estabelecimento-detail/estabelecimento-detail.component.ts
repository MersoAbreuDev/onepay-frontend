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
    nomeFantasia:new FormControl([Validators.required]),
    razaoSocial:new FormControl([Validators.required]),
    cnpj:new FormControl([Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    telefone:new FormControl('',[Validators.required]),
    categoriaNegocio:new FormControl('',[Validators.required]),
    dataCriacao:new FormControl('',[Validators.required]),
    nomeComprovante:new FormControl('',[Validators.required])
  })
  ngOnInit() {
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  submit() {

    if (this.form.valid) {
    var valoresDoFormulario = this.form.value;

    console.log(
      valoresDoFormulario.nomeFantasia + "\n" + valoresDoFormulario.razaoSocial + "\n" + valoresDoFormulario.cnpj + "\n"+
      valoresDoFormulario.email + "\n" + valoresDoFormulario.telefone + "\n" + valoresDoFormulario.categoriaNegocio + "\n"+
      valoresDoFormulario.dataCriacao + "\n" + valoresDoFormulario.nomeComprovante
    );
    }



  }
}
