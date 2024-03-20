import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {

  form = new FormGroup({
    senhaAtual:new FormControl('',[Validators.required]),
    novaSenha:new FormControl('',[Validators.required]),
    confirmeSenha:new FormControl('',[Validators.required])
  })
  ngOnInit() {
  }

  submit() {

    if (this.form.valid) {
    var valoresDoFormulario = this.form.value;
    var senhaNova = valoresDoFormulario.novaSenha;
    var senhaConfirme = valoresDoFormulario.confirmeSenha;

    if (senhaNova !== senhaConfirme) {
        alert("As senhas não coincidem. Por favor, verifique.");
    }else {
 // Limpar os campos do formulário
  this.form.reset();
    }
    }
  }
  }




