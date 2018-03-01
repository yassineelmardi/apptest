import {Injectable} from "@angular/core";
/**
 * Created by a187370 on 01/03/2018.
 */
@Injectable()
export  class AboutService{

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

  getInfo(){
    return this.info;
  }

  addComment(c){
    this.comments.push(c);
  }
  getAllcomments(){
    return this.comments;
  }


}
