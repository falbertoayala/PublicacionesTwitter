import { Component, OnInit } from '@angular/core';
import { Twitter } from '../share/model/twitter';
import { TwitterService } from '../share/twitter.service';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

import { Detalletwitt } from '../share/model/detalletwitt';

@Component({
  selector: 'app-detalletwitt',
  templateUrl: './detalletwitt.component.html',
  styleUrls: ['./detalletwitt.component.css']
})
export class DetalletwittComponent implements OnInit {

  twitter : Twitter;
  twitt : Array<Detalletwitt>;
  detalletwitt : Detalletwitt;

  constructor(public twitterService : TwitterService, private route : ActivatedRoute) {

    this.twitterService = twitterService;
    this.route = route;
   }

  ngOnInit() {
   
   
    this.route.paramMap
    .subscribe(parameters => {
      let id =  Number(parameters.get("id"));
      this.getDetalle(id);
});
     
  }

  getDetalle(id : number){
    this.twitterService.getDetalle(id)
    .subscribe((data : Detalletwitt) => this.detalletwitt = data);
  }

}
