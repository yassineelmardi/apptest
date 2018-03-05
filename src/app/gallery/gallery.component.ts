import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;

  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(dataForm){
    console.log(dataForm.motcle);
    this.http.get("https://pixabay.com/api/?key=8215851-e6c413ca83ff4760e6f6d3aab&q="+dataForm.motcle+"&image_type=photo&pretty=true")
      .map(resp=>{
        return resp.json();
      })
      .subscribe(data=>{
        console.log(data);
        this.pagePhotos=data;
      })
  }

}
