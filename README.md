# Start on dev mode

First, start heartbeat-server.

Then:
```
ng build
ng serve
```

# Start on docker

First start heartbeat-server.

Then:
[start on docker](./docker/README.md)

# Deploy with ansible

Use provided script to deploy on any environment: ./deploy.sh

For manual deployment, check: [simply deploy with ansible even in your local host](./deployment/README.md)

# Analytics

Heartbeat uses [matomo](https://github.com/matomo-org/matomo) as web analytics tool.

Simply configured with three properties in `src/analytics/matomo.conf.js`:

* matomoEnabled=false; // enable/disable matomo
* matomoUrl=""; // matomo server URL
* matomoSiteId=""; // site id registered within matomo server

# Credit authorships :
 - write.svg : http://www.flaticon.com/free-icon/poetry-symbol-of-a-feather-in-ink-container_45820
 - poet.svg : http://www.flaticon.com/free-icon/user-male-black-shape_34368
 - pdf.svg : http://www.flaticon.com/free-icon/pdf-file-symbol_51110
 - pdfperso.svg : http://www.flaticon.com/free-icon/pdf-file-format-symbol_29153
 - wiki.svg : http://www.flaticon.com/free-icon/wikipedia-logotype-of-earth-puzzle_48930
 - visible.svg : http://www.flaticon.com/free-icon/visible-opened-eye-interface-option_58976
 - invisible.svg : http://www.flaticon.com/free-icon/invisible_59394
 - save.svg : http://www.flaticon.com/free-icon/save-file-option_25398
 - edit.svg : http://www.flaticon.com/free-icon/write_51768
 - cancel.svg : http://www.flaticon.com/free-icon/cancel-or-close-cross-symbol_13013
 - check.svg : http://www.flaticon.com/free-icon/white-check-mark-inside-a-circle_23772
 - signon.svg : http://www.flaticon.com/free-icon/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign_39632
 - menu.svg : http://www.flaticon.com/free-icon/menu-button_60510
 - aptoide_phone.png : http://www.flaticon.com/free-icon/smartphone_15874
 - export.svg : http://www.flaticon.com/free-icon/export-file_70447
 - read.svg : http://www.flaticon.com/free-icon/man-reading_43455
 - list.svg : http://www.flaticon.com/free-icon/shopping-list_1351
 - delete.svg : http://www.flaticon.com/free-icon/delete-photo_61391

# Free icons :
 - loading.gif : created with http://spiffygif.com/

