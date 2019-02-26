# Upgrade to angular 7

source: [Upgrade to Angular 7 — Within 10 Minutes](https://medium.com/@jeroenouw/upgrade-to-angular-7-beta-within-10-minutes-c14fc380edd)

```bash
#!/bin/bash

count_steps=9
current_step=0

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest --save

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install @angular-devkit/build-angular@latest @angular/compiler-cli@latest @angular/cli@latest @angular/language-service@latest --save-dev

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install core-js@latest zone.js@latest --save

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install @types/jasmine@latest @types/node@latest codelyzer@latest karma@latest karma-chrome-launcher@latest karma-cli@latest karma-jasmine@latest karma-jasmine-html-reporter@latest jasmine-core@latest jasmine-spec-reporter@latest protractor@latest tslint@latest --save-dev

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install typescript@latest --save-dev

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install rxjs@latest rxjs-compat@latest --save

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install rxjs-tslint@latest --save-dev

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install webpack@latest --save-dev

current_step=$((current_step + 1))
echo "$current_step/$count_steps"
npm install typescript@3.2.4
```
