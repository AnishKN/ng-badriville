import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { ContactUsService } from 'src/app/_services/contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  options: FormGroup;
  submitted = false;
  constructor(
    fb: FormBuilder,
    private contactUs: ContactUsService,
    private alertService: AlertService
  ) {
    this.options = fb.group({
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.options.controls; }

  async submitMessage() {
    this.submitted = true;
    if (this.options.invalid) {
      return;
    }
    let data = {
      'first_name': this.options.value.first_name,
      'last_name': this.options.value.last_name,
      'email': this.options.value.email,
      'phone': this.options.value.phone,
      'message': this.options.value.message,
    }
    await this.contactUs.saveContactUs(data);
    this.alertService.showSuccess('Message sent successfully.!');
    this.submitted = false;
    this.options.reset();
  }
}
