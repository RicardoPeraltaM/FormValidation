import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

public countries:Array<string> = []
public nombre:string = 'Chino'
  constructor(private _CS:CountryService) {
    this._CS.getCountries().subscribe((country)=> this.countries.push(country))
   }

   public form:FormGroup

   public createform(){
     this.form = new FormGroup({
       firstName: new FormControl(null, [
         RxwebValidators.alpha(), RxwebValidators.required(), RxwebValidators.minLength({value:3})
       ])
     })

   }
   public showForm(){
    console.clear()
    console.log(this.form);

   }
   public validateForm(control){
     let error: any = this.form.controls[control].errors


     if(error.required){
       return {
         message:'campo requerido',
         error:true
       }
    }
    else if(error.alpha){
       return {
         message:'caracteres no validos',
         error:true
       }
     }
    }

  ngOnInit(): void {
    this.createform()
  }

}
