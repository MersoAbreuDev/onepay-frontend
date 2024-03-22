import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-estabelecimento-detail',
  templateUrl: './estabelecimento-detail.component.html',
  styleUrl: './estabelecimento-detail.component.scss'
})
export class EstabelecimentoDetailComponent {

  formEstabelecimento!:FormGroup;
  formEndereco!:FormGroup;
  formProprietario!:FormGroup;
  formTermo!:FormGroup;
  formDocumento!:FormGroup;
  isEditingEstabelecimento: boolean = false;
  isEditingEndereco: boolean = false;
  isEditingProprietario: boolean = false;

  formEstabelecimanto = new FormGroup({
    nomeFantasia:new FormControl(['',Validators.required]),
    razaoSocial:new FormControl('',[Validators.required]),
    cnpj:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    telefone:new FormControl('',[Validators.required]),
    categoriaNegocio:new FormControl('',[Validators.required]),
    dataCriacao:new FormControl('',[Validators.required]),
    nomeComprovante:new FormControl('',[Validators.required])
  })

  endForm = new FormGroup({
    cep:new FormControl(['',Validators.required]),
    logradouro:new FormControl('',[Validators.required]),
    numero:new FormControl('',[Validators.required]),
    complemento:new FormControl(''),
    bairro:new FormControl('',[Validators.required]),
    cidade:new FormControl('',[Validators.required]),
    estado:new FormControl('',[Validators.required]),
  })

  propForm = new FormGroup({
    cpf:new FormControl(['',Validators.required]),
    nome:new FormControl('',[Validators.required]),
    dataNascimento:new FormControl('',[Validators.required]),
    telefone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email])
  })

  ngOnInit() {
  }

  toggleEditEstabelecimento() {
    this.isEditingEstabelecimento = !this.isEditingEstabelecimento;
  }

  toggleEditEndereco() {
    this.isEditingEndereco = !this.isEditingEndereco;
  }
  toggleEditProprietario() {
    this.isEditingProprietario = !this.isEditingProprietario;
  }

  cancelEditEstabelecimento() {
    this.isEditingEstabelecimento = false;
  }
  cancelEditEndereco() {
    this.isEditingEndereco = false;
  }

  cancelEditProprietario() {
    this.isEditingProprietario = false;
  }

  submit() {

    if (this.formEstabelecimanto.valid) {
    var valoresDoFormulario = this.formEstabelecimanto.value;

    console.log(
      valoresDoFormulario.nomeFantasia + "\n" + valoresDoFormulario.razaoSocial + "\n" + valoresDoFormulario.cnpj + "\n"+
      valoresDoFormulario.email + "\n" + valoresDoFormulario.telefone + "\n" + valoresDoFormulario.categoriaNegocio + "\n"+
      valoresDoFormulario.dataCriacao + "\n" + valoresDoFormulario.nomeComprovante
    );
    }
  }
  submit1() {

    if (this.formEndereco.valid) {
    var valoresDoFormulario = this.endForm.value;

    console.log(
      valoresDoFormulario.cep + "\n" + valoresDoFormulario.logradouro + "\n" + valoresDoFormulario.numero + "\n"+
      valoresDoFormulario.complemento + "\n" + valoresDoFormulario.bairro + "\n" + valoresDoFormulario.estado
    );
    }
  }

  submit2() {

    if (this.formProprietario.valid) {
    var valoresDoFormulario = this.propForm.value;

    console.log(
      valoresDoFormulario.cpf + "\n" + valoresDoFormulario.dataNascimento + "\n" + valoresDoFormulario.email + "\n"+
      valoresDoFormulario.nome + "\n" + valoresDoFormulario.telefone
    );
    }
  }

}
