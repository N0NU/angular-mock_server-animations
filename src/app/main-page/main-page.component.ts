import { Component, OnInit } from '@angular/core';
import { MockServiceService } from '../services/mock-service.service';
import { slideIn } from './slide'; 
import { rotatedState }  from './rotate'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    slideIn,
    rotatedState
  ]
})
export class MainPageComponent implements OnInit {

  constructor(private mockService: MockServiceService) { }
cards:any;
slideInState = 'in';
  max:number=1;
  state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
  slideIn(){
  this.slideInState = 'in';

  }
  slideOut(){
    this.slideInState = 'out';
  
   }
   next(): void {
    this.max =this.max+1;
  }
  back(): void {
    this.max =this.max-1;
    this.slideInState = 'out';
  }
  ngOnInit() {
    this.mockService.getCards().subscribe(res=>{
      this.cards = res;
      console.log(res,'res');
    })
  }

}
