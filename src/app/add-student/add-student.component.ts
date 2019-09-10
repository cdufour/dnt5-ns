import { Component, EventEmitter, Output } from "@angular/core";
import { Student } from "../students/models/student.model";

@Component({
    selector: 'add-student',
    templateUrl: './add-student.component.html'
})
export class AddStudentComponent {
    newStudent: Student = new Student('', '');
    log: string = '';
    @Output() studentAdded: EventEmitter<any> = new EventEmitter();

    addStudent() {
        this.log = this.newStudent.firstname + ' ' + this.newStudent.lastname;

        // le composant enfant "add-student" émet un évènement (notification)
        this.studentAdded.emit(this.newStudent);
    }
}