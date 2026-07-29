# Hands-On 4 — Template-Driven Forms & Validation

## How to run
npm install && npm start
Visit http://localhost:4200/enroll

## What's included (builds on Hands-On 3)
- EnrollmentFormComponent using #enrollForm="ngForm", ngModel on all fields, (ngSubmit)
- required / minlength / email / requiredTrue-style validators via HTML attributes
- Per-field error messages shown after `touched`
- ng-valid/ng-invalid + ng-touched CSS styling (see styles.css)
- Reset button (enrollForm.resetForm()) and success message on valid submit
- Route added: /enroll -> EnrollmentFormComponent
