import { Student } from "../models/student.model";
import { Injectable } from "@angular/core";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";


@Injectable({
    providedIn: "root" // provider for service
})
export class StudentService {
    students: Student[] = [
        new Student('Francesco', 'Totti'),
        new Student('François', 'Tout'),
        new Student('Frances', 'Todo'),
    ];

    getStudents(): Student[] {
        return this.students;
    }

    deleteStudent(lastname: string) {
        this.students = 
            this.students.filter(student => student.lastname != lastname);
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    getStudentsJson() {
        //return getJSON("http://localhost:8080");
        return getJSON('https://httpbin.org/get');
    }
}