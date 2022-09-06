import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter<void>()

    constructor(private navigationService: NavigationService) { }

    ngOnInit(): void {
    }

    showSidenav() {
        this.toggleSidenav.emit()
    }

    onSelect(screenName: string) {
        this.navigationService.setScreen(screenName)
    }

}
