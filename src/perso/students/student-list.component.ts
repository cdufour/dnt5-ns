import { Component } from "@angular/core";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent {
    message: string = 'Simple message';

    changeMessage() {
        this.message = 'Message modifié';
    }
}