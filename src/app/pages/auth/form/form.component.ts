import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.services';
import { ACTIONS } from '@shared/constants/constant';

export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  authForm!: FormGroup;
  SignIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;
  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit():void{
    console.log('Save', this.authForm.value);
    this.authSvc.signUp(this.authForm.value);
  }

  private initForm():void{
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
