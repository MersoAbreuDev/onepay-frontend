import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[cepMask]'
  })
export class CepMaskDirective {

    constructor(private control: NgControl) { }
    
   
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.control.valueAccessor!.writeValue(this.applyMask(event));
  }

  applyMask(cep: string): string {
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
    cep = cep.substring(0, 8); // Limita o comprimento máximo do CEP para 8 caracteres
    cep = cep.replace(/^(\d{5})(\d{0,3})/, '$1-$2'); // Aplica a máscara de CEP
    return cep;
  }
  }