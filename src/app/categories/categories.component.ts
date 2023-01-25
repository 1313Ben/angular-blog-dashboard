import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  onSubmit(categoryform: any) {
    let categoryData = {
      category: categoryform.value.category
    }
    console.log(categoryData)
  }
}
