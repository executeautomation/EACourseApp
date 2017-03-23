import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'app/courses/create-course.component.html'
})
export class CreateCourseComponent {

    constructor(private route: Router) { }

    levels = ['Beginner', 'Intermediate', 'Advanced'];

    Cancel() {
        this.route.navigate(['/course']);
    }
}