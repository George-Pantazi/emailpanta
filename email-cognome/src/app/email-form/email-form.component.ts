import { Component, EventEmitter, Output } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  @Output() emailSent = new EventEmitter<Email>();

  to: string = '';
  subject: string = '';
  body: string = '';

  sendEmail() {
    const newEmail = new Email(this.to, this.subject, this.body);
    this.emailSent.emit(newEmail);
    // Reset form fields
    this.clearForm();
  }

  private clearForm() {
    this.to = '';
    this.subject = '';
    this.body = '';
  }
}
