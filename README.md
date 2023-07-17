# Angular SPA Application : Dashboard
![Screenshot from 2023-07-17 11-02-15](https://github.com/ashok2811/uh-dash/assets/29013031/e6c4e54f-95eb-43db-b989-1eefc40cd79f)

### Video
[![](https://markdown-videos.vercel.app/youtube/P5kbtp1j9yA)](https://youtu.be/P5kbtp1j9yA)
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

1. Start the backend server in /backend folder:

   ```shell
   node server.js
   ```

   The JSON data will be served at `localhost:3000/data` from a Node-Express Server. It can be used to Re-configure or Update, or fetch the dat a from some third part API or Storage and serve to our frontend;

1. Open another terminal and start the Angular development server:

   ```shell
   ng serve
   ```

   The application will be accessible at `localhost:4200`. (if not then look in the terminal for port number)

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
