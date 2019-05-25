import { Component, OnInit } from '@angular/core';
import { MockServiceService } from '../services/mock-service.service';
import { MatSnackBar } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ] 
})
export class MainPageComponent implements OnInit {

  constructor(private mockService: MockServiceService,
    private snackBar: MatSnackBar) { }
cards:any =[];
breakpoint = 3;

  ngOnInit() {
    this.getCards();
    if(window.innerWidth <= 400){
      this.breakpoint = 1
    }else if(window.innerWidth <= 600){
    this.breakpoint = 2;
    }else{
      this.breakpoint = 3;
    }
  }

  getCards(){
    this.mockService.getCards().subscribe((res: any[])=>{
      if(res.length){
      this.cards = res;
      }else{
      this.cards = res;
      this.snackBarMessage('Please Add Some Cards')
      }
    })
  }

  deleteCard(id){
    this.mockService.deleteCard(id).subscribe(res=>{
      if(res){
        this.getCards();
        this.snackBarMessage('Card Deleted Successfully')
        }else{
          this.snackBarMessage('Some Error Occured Please Refresh')
        }
    })
  }

  addCard(){
    var id = (this.cards.length)? this.cards[this.cards.length-1].id +1 : 1;
    var data = {
      id: id,
      title: "mock_data_card_"+id,
      author: "Meh"
    }
    this.mockService.addCard(data).subscribe(res=>{
      if(res){
        this.snackBarMessage('Card Added Successfully')
          this.getCards();
        }else{
          this.snackBarMessage('Some Error Occured Please Refresh')
        }
    })
  }

  snackBarMessage(msg){
    this.snackBar.open(msg,'', {
      duration: 2000,
    });
  }

  onResize(event) {
    if(event.target.innerWidth <= 400){
      this.breakpoint = 1
    }else if(event.target.innerWidth <= 600){
    this.breakpoint = 2;
    }else{
      this.breakpoint = 3;
    }
  }

}
