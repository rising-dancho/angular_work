import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../_models/post';
import { AccountService } from '../_services/account.service';

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
  }

  onCreatePost() {
    // console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
    };

    this.accountService.createPost(post).subscribe({
      next: res =>{
        console.log(res);
      },
      error: err => {
        console.log(err);
      }

    });
  }
}
