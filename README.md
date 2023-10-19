# Tower Data Visualization

This project is a web application built with Angular, Material, and Chart.js to visualize tower data. It includes a data table to display tower information and a bar chart to show the total number of cell towers implemented.

## Getting Started

To run the application locally, follow the steps below:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/RehamCodes/angular-dashbored.git
   ```

2. Navigate to the project's directory:

   ```
   cd angular-dashbored
   ```

3. Install the dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   ng serve
   ```

5. Open your web browser and navigate to `http://localhost:4200` to see the application in action.

## Functionality

The application consists of two main components: the data table and the bar chart.

### Data Table

The data table component (`table-pagination.component`) displays tower data in a paginated and sortable format. It utilizes Angular Material's `MatTable` and `MatPaginator` to provide an interactive and user-friendly experience. The tower data is retrieved from a backend API and displayed in a tabular format, with columns for tower ID, height, ect...

#### Features

- Pagination: The data table supports pagination, allowing the user to navigate through the data by clicking on the page numbers or using the previous/next buttons.

### Bar Chart

The bar chart component (`chart.component`) visualizes the total number of cell towers implemented. It uses Chart.js library to render a bar chart with the tower count on the y-axis and the time period on the x-axis. The bar chart provides a visual representation of tower deployment over time.

#### Features

- Data Visualization: The bar chart displays the total number of cell towers implemented over a specific time period. Each bar represents the tower count for a particular period, allowing the user to identify trends and patterns easily.



## Acknowledgments

The Tower Data Visualization project is based on various open-source libraries and frameworks, including:

- Angular: https://angular.io/
- Angular Material: https://material.angular.io/
- Chart.js: https://www.chartjs.org/




