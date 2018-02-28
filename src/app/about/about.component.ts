import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info= {
    nom: 'yassine',
    mail: 'yassine@gmail.com',
    tel: 63256545,
  }
  comments=[
    {date:new Date() , message:  'A' },
    {date:new Date() , message:  'B' },
    {date:new Date() , message:  'C' }

    ]

  commentaire: any ={
    date: null,
    message: "",
  }

  onAddcommenraire(){
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire)
    this.commentaire={date:null,message:""}

  }
  constructor() { }

  ngOnInit() {
  }

}
