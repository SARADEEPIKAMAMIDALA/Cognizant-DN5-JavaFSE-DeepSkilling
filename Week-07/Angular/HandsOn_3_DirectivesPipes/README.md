# Hands-On 3 — Directives & Pipes (Built-in and Custom)

## How to run
npm install && npm start

## What's included (builds on Hands-On 2)
- *ngIf / *ngFor(trackBy) / *ngSwitch in CourseListComponent & CourseCardComponent
- Simulated loading state (setTimeout, 1.5s) with *ngIf/else empty-state template
- [ngClass] and [ngStyle] driven by gradeStatus/credits/enrolled, refactored into class getters
- Custom appHighlight attribute directive (@HostListener mouseenter/mouseleave, configurable colour input)
- Custom creditLabel pipe (pipes/credit-label.pipe.ts) with unit tests
