import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  showTab(tabName: string, event : Event): void {
    event.preventDefault();
    const loginTab = (<HTMLInputElement>document.getElementById('loginTab'));
    const signupTab = document.getElementById('signupTab');

    if (tabName === 'login') {
      if (loginTab) {
        loginTab.style.display = 'block';
      }
      if (signupTab) {
        signupTab.style.display = 'none';
      }
    }
    if(tabName === 'signup'){
      if (loginTab) {
        loginTab.style.display = 'none';
      }
      if (signupTab) {
        signupTab.style.display = 'block';
      }
    }
  }
}
