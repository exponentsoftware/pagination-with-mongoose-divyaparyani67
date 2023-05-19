# Title
Build APIs with Pagination in Mongoose

## Introduction

One of the most important things to make a website friendly is the response time, and pagination comes for this reason. For example, this bezkoder.com website has hundreds of tutorials, and we don’t want to see all of them at once. Pagination means displaying a small number of all, by a page.

If there are only few pages, we can fetch all items and paginate on the client side. It gives us benefit of faster subsequent page loads.

But in case we have large number of pages, make paging on client side will make our client app download all the data at first which might not be needed. So let the server do the work.

Server side pagination is better for:

- Large data set
- Faster initial page load
- Accessibility for those not running JavaScript
- Complex view business logic

## Assignment

In the previous assignment, you must have created CRUD APIs for Tutorials. 
In this assignment, we would be building on the previous assignment and will be adding pagination to the previous project.

Keeping the previous project structure the same, we will be adding pagination to the existing project taking a reference from the [Bezkoder mongoose pagination tutorial](https://www.bezkoder.com/node-js-mongodb-pagination/)

## Releases

1. Use the exisiting Node.js project and check of additional dependencies.

2. Connect to a MongoDB database: Connect to a MongoDB database using Mongoose to interact with the database.

3. Set up pagination: Set up pagination using the Mongoose pagination module. This module allows you to easily control the pagination on your MongoDB queries.

4. Build the query: Build the query that will be used to retrieve the data from the database.

5. Create the route: Create the route that will receive the page number and size.

6. Retrieve the data: Retrieve the data from the database using the query and the page number and size.

7. Return the response: Return the response in the form of a JSON object with the paginated data.

8. Test the API: Test the API using a tool like Postman.

9. Customize the response: Customize the response by adding additional data such as the total number of pages, total number of results, etc.

10. Handle errors: Handle any errors that may occur during the API call.

