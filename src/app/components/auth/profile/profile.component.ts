import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    user!: User

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(data => {
            console.log(data)
            this.user = data[0]
            console.log(this.user)
        })
    }

}
