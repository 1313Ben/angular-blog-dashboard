import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{

  permaLink: string = "";
  imgSrc: any = "./assets/placeholder-image.png";
  selectedImg: any;

  categories: Array<object> | any;

  postForm: FormGroup | any;

  isDisabled: boolean = true;

  constructor(private categoryService: CategoriesService, private fb: FormBuilder) { 
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      permalink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      postImg: ['', Validators.required],
      content: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val;
    })
  }

  get formControls() {
    return this.postForm.controls
  }

  onTitleChanged($event:any) {
    //console.log($event.target.value)
    const title = $event.target.value;
    this.permaLink = title.replace(/\s/g, "-");
    console.log(this.permaLink)
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0]
  }

  onSubmit() {
    console.log(this.postForm.value)
  }
}
