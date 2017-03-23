import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { BrowserModule } from '@angular/platform-browser';
import { CourseAppComponents } from './course-app.component';
import { CourseListCompnent } from './courses/courselist.component';
import { CourseThumbnailComponent } from './courses/courseThumbnail.component';
import { NavigationComponent } from './nav/nav.component';
import { CourseService } from './shared/service.component';
import { ToastrService } from './common/toastr.service';
import { CourseDetails } from './courses/course-details/courseDetails.component';
import { appRoutes } from './routes';
import { CreateCourseComponent } from './courses/create-course.component'


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        CourseAppComponents,
        CourseListCompnent,
        CourseThumbnailComponent,
        NavigationComponent,
        CourseDetails,
        CreateCourseComponent],
    bootstrap: [CourseAppComponents],
    providers: [
        CourseService,
        ToastrService,
        {
            provide: 'canDeactiveCreateEvent',
            useValue: checkDirtyState
        }
    ]
})
export class AppModule { }

function checkDirtyState(){
    return false;
}