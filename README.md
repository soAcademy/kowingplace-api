# KowingPlace API

KowingPlace API is a RESTful web service that allows users to access and manage knowledge resources related to various topics, such as programming languages, algorithms, data structures, and more. This API is built using Node.js and MongoDB, and it provides a set of endpoints that allow users to perform CRUD (create, read, update, delete) operations on resources like topics, courses, lessons, quizzes, and resources.

## Getting Started

To get started with KowingPlace API, you need to have Node.js and MongoDB installed on your machine. Once you have these dependencies installed, you can clone this repository to your local machine and run the following commands:

npm install
npm start

The first command installs all the necessary dependencies for the project, and the second command starts the server. By default, the server runs on port 7470, so you can access it by navigating to `http://localhost:7470`.

## API Endpoints

The KowingPlace API provides the following endpoints:

### Create

- `/kowing/createUserExternal`: Create UserExternal in the database.
- `/kowing/createUserInternal`: Create UserInternal in the databaase.
- `/kowing/createRoomInternal`: Create meeting room for co-work in the database.
- `/kowing/createFacility`: Create facilities for co-working in the database.
- `/kowing/createTimeOpenClose`: Create time open and close for co-working in the database.
- `/kowing/getVerifyCodeByUserConfirmBooking` : create the booking data from userExternal booking the room meeting. and then create verify the code for userExternal to show when they are arrive at co-working shop.
- `/kowing/createTimeOpenClose` : create time open and close in the database.

### Read

- `/kowing/getCoWorkUserChoose`: show the unique co-working by userId.
- `/kowing/getRoomByCoWorkId`: show the room meeting in the co-working space shop.
- `/kowing/getCoworkByUserId`: show the co-working space by userInternal.
- `/kowing/showBookDetailInternalByCoWork`: show the all booking from userExternal such as all booked meeting room, all booked user, all booked time and status of booking.
- `/kowing/getFacilities`: show all the facilities in the data base.
- `/kowing/getCoworks`: show all the coWorks in database.
- `/kowing/getCalendarBookingByCoWorkId` : get time and open close in the database by coworking Id.
- `/kowing/loginUserExternal` : for validate the email, password of user external and create the token.
- `/kowing/loginUserInternal` : for validate the email, password of user external and create the token.
- `/kowing/bookDurationRoom` : show the duration for bookinr the room meeting from database.

### Update

- `/kowing/updateCoWorkDetail`: edit the information about c0-working detail such as name, description, location, picture, tel and facilities(can update in many) in database by coworkId
- `/kowing/updateRoomInternal`: edit the room meeting datail in database by branchToRoomId, coWorkId, name, capacity, rate
- `/kowing/getStatusUserBookInternal`: update the status of userExternal in database.
- `/kowing/updateCalendarBookingByCoWorkId`: Updates the details time open - close by specific coworking space.
- `/kowing/forgetPasswordUserExternal`: update the old password of user in database.
- `/kowing/forgetPasswordUserInternal` : update the old password of user in database.

### Delete

- `/kowing/deleteCoWork`: delete coworking space from database by specific Id.

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

hello
