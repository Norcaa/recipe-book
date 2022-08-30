import { Directionality } from '@angular/cdk/bidi';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss'],
})
export class BasicLayoutComponent implements OnInit {

  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;
  @ViewChild('content', { static: true })
  content!: MatSidenavContent;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: unknown
  ) {}

  ngOnInit(): void {}
}
