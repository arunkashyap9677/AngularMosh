import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: string[] = [];
  totalAuthors: number = 3;
  constructor(authorService: AuthorService)
  {
    this.authors =  authorService.getAuthors();
  }

  ngOnInit(): void {
  }

}
