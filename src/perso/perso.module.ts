import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { StudentListComponent } from "./students/student-list.component";

@NgModule({
    bootstrap: [
        StudentListComponent
    ],
    imports: [
        NativeScriptModule
    ],
    declarations: [
        StudentListComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class PersoModule { }
