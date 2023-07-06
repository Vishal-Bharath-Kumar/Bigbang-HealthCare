import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-docnavbar',
  templateUrl: './docnavbar.component.html',
  styleUrls: ['./docnavbar.component.css']
})
export class DocnavbarComponent implements OnInit{

    constructor() { }
  
    ngOnInit(): void {
      // Place the JavaScript code here
      const bars: HTMLElement | null = document.getElementById("nav-action");
      const nav: HTMLElement | null = document.getElementById("nav");
  
      // Setting up the listener
      bars?.addEventListener("click", barClicked, false);
  
      // Setting up the clicked effect
      function barClicked(): void {
        bars?.classList.toggle('active');
        nav?.classList.toggle('visible');
      }
  
  }

}
