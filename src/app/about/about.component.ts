import {Component, Input, OnInit} from '@angular/core';
import {AboutService} from "../../services/aboutservice";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info:any;
  comments=[];
  constructor(private aboutService:AboutService) {
    this.comments=aboutService.getAllcomments();
    this.info=aboutService.getInfo();
  }

  commentaire: any ={
    date: null,
    message: "",
  }

  onAddcommenraire(c){
    console.log(c)
    c.date = new Date();
    this.aboutService.addComment(c);
    this.commentaire={date:null,message:""}


  }


  ngOnInit() {
  }

}
