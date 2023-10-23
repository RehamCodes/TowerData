import { Component} from "@angular/core";

@Component({
  selector: "parent.component",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent {
  
  isTableVisible: boolean = false;
 
  constructor() {
   
    console.log("Initial value of isTableVisible:", this.isTableVisible);
  }
  
}

