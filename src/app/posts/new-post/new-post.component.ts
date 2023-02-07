import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  permaLink: string = ""

  onTitleChanged($event:any) {
    //console.log($event.target.value)
    const title = $event.target.value;
    this.permaLink = title.replace(/\s/g, "-");
    console.log(this.permaLink)
  }
}
