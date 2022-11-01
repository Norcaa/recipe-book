import { Component, Input, OnInit } from '@angular/core';
import { ShareService } from 'ngx-sharebuttons';

@Component({
    selector: 'app-share-button',
    templateUrl: './share-button.component.html',
    styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {

    @Input()
    type!: string; 

    @Input()
    tooltip!: string;

    constructor(private share: ShareService) {
    }

    ngOnInit() {}

}
