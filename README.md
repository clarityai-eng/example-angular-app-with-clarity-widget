# Example Angular app with Clarity Widget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `npm install` to download all dependencies and `npm start` for a dev server. 

Navigate to http://localhost:4200/. 

The app will automatically reload if you change any of the source files.

## What is it?

This project is an example of how to integrate ClarityAI Widgets inside an Angular app. You will need to update the configuration properties in the clarity-widget component [clarity-organization-widget.component.ts](src/app/clarity-funds-widget/clarity-widget.component.ts) with the right domain and token (to get a valid token go to the user administration menu in ClarityAI webapp):

```
  widgetOriginDomain = 'https://go.clarity.ai'
  apiToken = 'YOUR_API_TOKEN'
  fund = 'A_FUND_ISIN'
  scoresIds = 'METRIC_ID_1, METRIC_ID_2'
  customizationObject = {
    fontFamily: 'Times New Roman',
    // Google fonts can also be used: 
    // gFontFamily: 'Times+New+Roman',
    baseFontSize: '12px',
    fontColor: 'rgb(16, 21, 46)',
    tables: {
      headerBgColor: '#ddd',
      bodyBgColor: '#fff',
      borderColor: '#ddd',
    },
  }
```

Once you have updated the configuration you should see the widget in the sample page.

## What and where to look
`clarity-organization-widget.component.ts` is an example component that can be used more or less as it is (you will need to copy also the definition file `clarity-ai-widget.d.ts` that is inside the component folder or the compiler might complain about the import).
This component contains an example on how the library at package `@clarity-ai/widget` can be used.

## Clarity widget library
It provides a simple API to load and add widgets to a given container.

### Load: `widget.load(domain)`

Injects the Clarity Widget javascript from the provided domain (with protocol):

```javascript
  widget.load('https://go.clarity.ai');
```

You can call it more than once, if the js is already loaded it won't inject it again.

### Refresh: `widget.refresh(DomElement)`

Adds the widget to the DOM Element Node provided as first argument:

```javascript
   widget.refresh(someElement);
```

The element should look like this: 

```html
    <div
      data-clarity-widget
      data-lang="en"
      data-module="some-module"
      data-entities="funds"
      data-fund="SomeFundIsin"
      data-sections="KEY_SCORES"
      data-style-attributes-json="{}"
      data-custom-css="//example.com/test.css"
      data-token="your-token"
      data-end-user-id="some-user-id"
    ></div>
```
 * `data-clarity-widget` (Mandatory): This is a mandatory attribute 
 * `data-token` (Mandatory): The token for the Clarity API
 * `data-module` (Mandatory): The module this widget should show (ie: "esg-impact")
 * `data-entities` (Mandatory): The entities the widget will be working with (either "funds" or "portfolios")
 * `data-{entity}` (Mandatory): The identifier for the entity being used (attribute key should be either
 "data-fund" or "data-portfolio")
 * `data-style-attributes-json`: A JSON String with properties to override some styles in the application. There are
 several options to customize:
    ```json
       {
           "fontColor": "rgb(16, 21, 46)",
            // Google fonts can also be used like this `gFontFamily: 'Times+New+Roman',`
           "fontFamily": "Times New Roman",
           "baseFontSize": "12px",
           "tables": {
               "headerBgColor": "#ddd",
               "bodyBgColor": "#fff",
               "borderColor": "#ddd"
           }
       }
    ``` 
 * `data-custom-css`: Alternatively a CSS can be provided by url to customize the widget styles.
 * `data-end-user-id`: A unique user id.
 * `data-sections`: The optional sections that you want to add to the widget (ie: 'KEY_SCORES').

## Contributing

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
