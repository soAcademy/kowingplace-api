# KowingPlace API

KowingPlace API is a RESTful web service that allows users to access and manage knowledge resources related to various topics, such as programming languages, algorithms, data structures, and more. This API is built using Node.js and MongoDB, and it provides a set of endpoints that allow users to perform CRUD (create, read, update, delete) operations on resources like topics, courses, lessons, quizzes, and resources.

## Getting Started

To get started with KowingPlace API, you need to have Node.js and MongoDB installed on your machine. Once you have these dependencies installed, you can clone this repository to your local machine and run the following commands:

npm install
npm start

The first command installs all the necessary dependencies for the project, and the second command starts the server. By default, the server runs on port 3000, so you can access it by navigating to `http://localhost:3000`.

## API Endpoints

The KowingPlace API provides the following endpoints:

### Topics

- `GET /topics`: Returns a list of all the topics in the database.
- `GET /topics/:id`: Returns the details of a specific topic, based on its ID.
- `POST /topics`: Creates a new topic in the database.
- `PUT /topics/:id`: Updates the details of a specific topic, based on its ID.
- `DELETE /topics/:id`: Deletes a specific topic, based on its ID.

### Courses

- `GET /courses`: Returns a list of all the courses in the database.
- `GET /courses/:id`: Returns the details of a specific course, based on its ID.
- `POST /courses`: Creates a new course in the database.
- `PUT /courses/:id`: Updates the details of a specific course, based on its ID.
- `DELETE /courses/:id`: Deletes a specific course, based on its ID.

### Lessons

- `GET /lessons`: Returns a list of all the lessons in the database.
- `GET /lessons/:id`: Returns the details of a specific lesson, based on its ID.
- `POST /lessons`: Creates a new lesson in the database.
- `PUT /lessons/:id`: Updates the details of a specific lesson, based on its ID.
- `DELETE /lessons/:id`: Deletes a specific lesson, based on its ID.

### Quizzes

- `GET /quizzes`: Returns a list of all the quizzes in the database.
- `GET /quizzes/:id`: Returns the details of a specific quiz, based on its ID.
- `POST /quizzes`: Creates a new quiz in the database.
- `PUT /quizzes/:id`: Updates the details of a specific quiz, based on its ID.
- `DELETE /quizzes/:id`: Deletes a specific quiz, based on its ID.

### Resources

- `GET /resources`: Returns a list of all the resources in the database.
- `GET /resources/:id`: Returns the details of a specific resource, based on its ID.
- `POST /resources`: Creates a new resource in the database.
- `PUT /resources/:id`: Updates the details of a specific resource, based on its ID.
- `DELETE /resources/:id`: Deletes a specific resource, based on its ID.

## Contributing

Contributions to KowingPlace API are always welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b my-new-feature`)
3. Make your changes and commit them (`git commit -m"feat: iniatial oh yeah"`)
4. Push your changes to the new branch (`git push origin my-new-feature`)
5. Submit a pull request

## License

KowingPlace API is released under the MIT License. Please see the LICENSE file for more information.

## Contact

If you have any questions or comments about KowingPlace API, please feel free to contact the project owner. Thank you for using KowingPlace API!
