import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() label: string;
  exampleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initExampleForm();
  }

  ngOnInit() {
  }

  private initExampleForm() {
    this.exampleForm = this.fb.group({
      email: [null],
      password: [null]
    });
  }

}
