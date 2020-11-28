import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COREUI';
  isMenuOpen=true;
  contentMargin=240;

  onMenuToggle(){
  console.log("ontoolbar logged",this.isMenuOpen);
  this.isMenuOpen= !this.isMenuOpen;
  if(!this.isMenuOpen){
    this.contentMargin=43;
  }else{
    this.contentMargin=200;
  }
  }
}
