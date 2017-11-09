import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToProducts() {

    this.router.navigate(['/products']);

  }

  public navigateToLogin() {
    console.log('to login');
    this.router.navigate(['/login']);
  }

}
