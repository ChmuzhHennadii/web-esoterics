import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sa-sign.in',
  templateUrl: './sign.in.component.html',
  styleUrls: ['./sign.in.component.css']
})
export class SignInComponent implements OnInit {
  loading: boolean = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
    }
  }

  private processResponse() {
    this.router.navigate([this.returnUrl]);
  }
}
