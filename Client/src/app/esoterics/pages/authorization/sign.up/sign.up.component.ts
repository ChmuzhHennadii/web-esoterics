import { Component, OnInit } from '@angular/core';
import { Validators } from "../../../infrastructure/Validators";
import { NgForm } from '@angular/forms';
import { NotificationService } from "../../../services/notification.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sa-sign.up',
  templateUrl: './sign.up.component.html',
  styleUrls: ['./sign.up.component.css']
})
export class SignUpComponent implements OnInit {
  emailValidation = Validators.IsEmail;
  nameValidation = Validators.IsName;

  constructor(
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (form.value.password != form.value.passwordConfirm) {
        this.notificationService.smallBox({
          title: `Can't sign up`,
          content: 'Password and confirm password are different',
          color: "#C46A69",
          timeout: 6000,
          icon: "fa fa-ban"
        });
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  private handleError(err) {
    let r = err.error;
    this.notificationService.smallBox({
      title: `Error: ${r.statusCode}`,
      content: r.message,
      color: "#C46A69",
      timeout: 6000,
      icon: "fa fa-ban"
    });
  }
}
