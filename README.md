# Angular SPA Application : Dashboard

Author: Ashok Kumar Chaudhary

## Description

This is a single-page analytics application built with Angular that allows users to view and configure various metrics through Key Performance Indicators (KPIs) and charts. The application provides features such as customizing metric properties, searching for specific metrics/values, and includes state management using NgRx. It also includes test cases to ensure correct functionality.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/ashok2811/uh-dash.git
   cd uh-dash
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Run the automation script
   ```shell
   bash run.sh
   ```

or

1. Start the backend server:

   ```shell
   node server.js
   ```

   The JSON data will be served at `localhost:3000/data`.

1. Start the Angular development server:

   ```shell
   ng serve
   ```

   The application will be accessible at `localhost:4200`.

## Configuration

To configure the metrics' properties, follow these steps:

1. Open the application in your browser at `localhost:4200`.

2. Use the provided `data.json` to customize the metrics' properties, such as position, chart type, height, and width.

3. Use the search functionality to find specific metrics/values on the page.

## Testing

To run the test cases for the application, use the following command:

```shell
ng test
```

The tests will be executed, and the results will be displayed in the console.

## License

This project is licensed under the [MIT License](LICENSE).

---
