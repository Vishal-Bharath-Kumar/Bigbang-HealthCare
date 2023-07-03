import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service'; // Import your authentication service
declare var $: any; // Import jQuery or use an appropriate TypeScript declaration for it

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
 
  constructor(private authservice:AuthService) {
      // Subscribe to the authentication service's login status
    this.authservice.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
   }
   logout() {
    // Call the authentication service's logout method
    this.authservice.logout();
  }
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
