import { Component } from "@angular/core";
import { Student } from "./models/student.model";
import { StudentService } from "./services/student.service";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    message: string = 'Simple message';
    students: Student[] = [];
    logging: string = '';
    test: any;

    // Dependency Injection
    constructor(private studentService: StudentService) {
        this.updateStudentList();
    }

    changeMessage() {
        this.message = 'Message modifié';
    }

    updateStudentList() {
        this.students = this.studentService.getStudents();
    }

    deleteStudent(lastname: string) {
        // Altération de la source de données (copiée au niveau du composant)
        // this.students = this.students.filter(student => student.lastname != lastname);

        // Altération de la source de données (au niveau du service)
        this.studentService.deleteStudent(lastname);
        this.updateStudentList(); // mise à jour côté composant
    }

    goToDetails(lastname: string) {
        //this.logging = lastname;
    }

    addStudent(student: Student) {
        this.studentService.addStudent(student);
        this.updateStudentList();
    }
}