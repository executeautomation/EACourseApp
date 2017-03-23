import { Component, Input } from '@angular/core';

@Component({
    selector: 'course-thumb',
    template: `
        <div [routerLink]="['/course', course.id]" class="well hoverwell thumbnail">
            <h2> {{course.Name}} </h2>
            <hr />
            <div> Release Date: {{course.ReleaseDate}} </div>
            <div> Duration: {{course.Duration}} </div>
            <div> Level: {{course.Level}} </div>
            <div [ngClass]=setProperties() [ngSwitch]="course?.ReleaseDate">
                Event Date: {{course?.ReleaseDate}} 
                <span *ngSwitchCase="'9/26/2017'">(4th quater) </span>
                <span *ngSwitchCase="'6/26/2017'">(2nd quater) </span>
                <span *ngSwitchDefault>(Any quater) </span>
            </div>
        </div>
    `
    , styles: [`
        .color {color: green !important}
        .bold {font-weight: bold;}
        .well div {color: white;}`
    ]
})
export class CourseThumbnailComponent {
    @Input() course: any
    someproperty: any = "Some value"
    printfoo() {
        console.log("Calling printfoo");
    }

    setProperties() {
        if (this.course && this.course.date === "9/26/2017")
            return ["bold color"]
        return []
    }

    // setNgStyle() {
    //     if (this.course && this.course.location.city === "Chennai")
    //         return { color: "yellow", 'font-weight': "bold" }
    //     return {}
    // }

}
