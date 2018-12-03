import { Component, OnInit } from '@angular/core';
import { Twitter } from '../share/model/twitter';
import { TwitterService } from '../share/twitter.service';
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  

  twitter : Array<Twitter>;
  twitterSeleccionado : Twitter;


  constructor(private twitterService : TwitterService) {

    this.twitterService = twitterService;

   }

  ngOnInit() {

    this.twitterService.getPost()
    .subscribe((data: Array<Twitter>)=>{
    this.twitter = data.slice(0,10);
    }, error =>{
      console.log(`Error ${error}`)
    })
  }
  onSelect( twitter : Twitter) : void{
    this.twitterSeleccionado = twitter;
  }

}
