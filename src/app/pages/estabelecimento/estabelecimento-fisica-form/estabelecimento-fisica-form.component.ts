import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-estabelecimento-fisica-form',
  templateUrl: './estabelecimento-fisica-form.component.html',
  styleUrl: './estabelecimento-fisica-form.component.scss'
})
export class EstabelecimentoFisicaFormComponent{
  form!: FormGroup;
  items!: MenuItem[] | undefined;

  home: MenuItem | undefined;

  estabelecimento:any=
   [
    {id:0, nome:"Fisico"},
    {id:1,  nome:"Juridico"},
   ]

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.items = [{ label: 'Home' },{ label: 'Cadastro Estabelecimento' }];

      this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.criarFormulario()
  }

  

  criarFormulario(){
    this.form = this.fb.group({
      tipoEstabelecimentoId: [1, Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      categoria: ['', Validators.required],
      nomeComprovante: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        cep: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        complemento: [''],
        bancoId: ['', Validators.required],
        agencia: ['', Validators.required],
        conta: ['', Validators.required],
        nomeTitular: ['', Validators.required],
        tipoContaBancaria: ['', Validators.required],
      identificadorPlano: ['', Validators.required]
    });
  }
  
  getValueControl(form:FormGroup, control:string){
    return form.controls[control].value;
  }

  cadastrar() {
    if(this.form.valid){
      let tipoEstabelecimentoId = this.getValueControl(this.form, 'tipoEstabelecimentoId');
      let nome = this.getValueControl(this.form, 'nome');
      let email = this.getValueControl(this.form, 'email');
      let celular = this.getValueControl(this.form, 'celular');
      let dataNascimento = this.getValueControl(this.form, 'dataNascimento');
      let cpf = this.getValueControl(this.form, 'cpf');
      let categoria = this.getValueControl(this.form, 'categoria');
      let nomeComprovante = this.getValueControl(this.form, 'nomeComprovante');
      let logradouro = this.getValueControl(this.form, 'logradouro');
      let numero = this.getValueControl(this.form, 'numero');
      let cep = this.getValueControl(this.form, 'cep');
      let cidade = this.getValueControl(this.form, 'cidade');
      let estado = this.getValueControl(this.form, 'estado');
      let complemento = this.getValueControl(this.form, 'complemento');
      let bancoId = this.getValueControl(this.form, 'bancoId');
      let agencia = this.getValueControl(this.form, 'agencia');
      let conta = this.getValueControl(this.form, 'conta');
      let nomeTitular = this.getValueControl(this.form, 'nomeTitular');
      let tipoContaBancaria = this.getValueControl(this.form, 'tipoContaBancaria');
      let identificadorPlano = this.getValueControl(this.form, 'identificadorPlano');
  
      const payload = {
          tipoEstabelecimentoId,
          nome,
          email,
          celular,
          dataNascimento,
          cpf,
          categoria,
          nomeComprovante,
          logradouro,
          numero,
          cep,
          cidade,
          estado,
          complemento,
          bancoId,
          agencia,
          conta,
          nomeTitular,
          tipoContaBancaria,
          identificadorPlano
      };
  
      
      // Envie o payload para onde for necessário
      console.log(payload);
    }
  

    // Limpe o formulário após o cadastro
    this.clearForm();
}


  clearForm(){
    this.form.reset();
  }
}
