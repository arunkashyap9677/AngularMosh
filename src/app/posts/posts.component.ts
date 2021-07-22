import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  resultList: any;
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
      this.http.get(this.url)
          .subscribe(response => {
            this.resultList = response;
            console.log(response);
          })
  }

  ngOnInit(): void {

  }

  createPost(inputTitle: HTMLInputElement)
  {
    console.log(inputTitle.value);
    let jsonInput: any = { title: inputTitle.value};
    this.http.post(this.url, inputTitle.value)
              .subscribe(response => {
                console.log(response);
                jsonInput['id'] = (response as any).id;
                this.resultList.splice(0, 0, jsonInput);
              })
  }

  deletePost(itemIndex :any)
  {
    console.log("deleted item ", itemIndex);
    this.resultList.splice(itemIndex, 1);

  }

}
