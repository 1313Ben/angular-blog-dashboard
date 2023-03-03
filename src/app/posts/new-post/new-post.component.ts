import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{

  permaLink: string = "";
  defaultImgURL: string = "./assets/placeholder-image.png"
  imgSrc: any = this.defaultImgURL;
  selectedImg: any;

  categories: Array<object> | any;

  postForm: FormGroup | any;

  isDisabled: boolean = true;

  post: any;

  formStatus: string = "Add New"

  docId: string | any;

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder,
    private postService: PostsService,
    private route: ActivatedRoute
  ) { 
  
    this.route.queryParams.subscribe(val => {
      // console.log(val['id']);
      this.docId = val['id'];
      this.postService.loadOneData(val['id']).subscribe(post => {
        //console.log(post)
        this.post = post;
        this.postForm = this.fb.group({
          title: [this.post.title, [Validators.required, Validators.minLength(10)]],
          permalink: [this.post.permalink, Validators.required],
          excerpt: [this.post.excerpt, [Validators.required, Validators.minLength(50)]],
          category: [`${this.post.category.categoryId}-${this.post.category.category}`, Validators.required],
          postImg: ['', Validators.required],
          content: [this.post.content, Validators.required]
        })
        this.imgSrc = this.post.postImgPath
        this.formStatus = "Edit"
      })
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
    //console.log(this.permaLink)
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
    let splitted = this.postForm.value.category.split('-')
    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.title,
      category: {
        categoryId: splitted[0],
        category: splitted[1]
      },
      postImgPath: '',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    }
    // console.log(postData)
    this.postService.uploadImage(this.selectedImg, postData, this.formStatus, this.docId);
    this.postForm.reset();
    this.imgSrc = this.defaultImgURL;
  }
}
