import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/states/app.state';
import { add } from 'src/app/states/posts/posts.actions';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public form !: FormGroup
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  add() : void
  {
    if(!this.form.valid){
      return
    }
    const post : Post = {
      title : this.form.value.title,
      description : this.form.value.description,
    }
    this.store.dispatch(add({post : post}))
  }

  showDescriptionErrors() : string | any
  {
    const description = this.form.get('description')
    if(description?.touched && description?.valid){
      if(description?.errors!['required']){
        return 'Description is required'
      }
      if(description?.errors!['minlength']){
        return 'Description should be min 10 characters'
      }
    }
  }
}
