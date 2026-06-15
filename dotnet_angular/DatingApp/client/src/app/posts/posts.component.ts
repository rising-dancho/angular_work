import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../_models/post';
import { AccountService } from '../_services/account.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
    this.getPost();
  }

  onCreatePost() {
    // console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
    };

    this.accountService.createPost(post).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getPost() {
    this.accountService
      .getPost()
      .pipe(
        map((response: { [key: string]: any }) => {
          let posts = [];
          for (let key in response) {
            posts.push(response[key]);
          }
          console.log('posts', posts);
          return posts;
        }),
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
