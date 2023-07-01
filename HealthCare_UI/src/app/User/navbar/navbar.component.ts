import { Component, OnInit } from '@angular/core';

declare var $: any; // Import jQuery or use an appropriate TypeScript declaration for it

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login:boolean= false;
  constructor() { }

  ngOnInit() {
    $("#search-icon").click(() => {
      $(".nav").toggleClass("search");
      $(".nav").toggleClass("no-search");
      $(".search-input").toggleClass("search-active");
    });

    $('.menu-toggle').click(() => {
      $(".nav").toggleClass("mobile-nav");
      $(this).toggleClass("is-active");
    });
  }

}
