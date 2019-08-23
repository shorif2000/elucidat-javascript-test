# Booking Seats

Basic front end to select seat booking. Shows layout of seat booking and when a user clicks on a seat they are presented with their booking information in the style of a ticket.  Users are be able to see the booking information, such as seat number, availability and price.

Express api with only following allowed actions

/seatData [GET REQUEST] can take one query parameter, seatNumber and return a json response in the following format

    {
        "seatNumber": "1A",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": true
    }
    
/bookSeat [POST REQUEST] can take one body parameter, seatNumber and alter the state of the seat availability and return the details of the seat in the same format as /seatData.

/availableSeats [GET REQUEST] will take one optional query parameter disabled. If disabled is false it will return all the available seats. If it is true, it will return only the disabled seats that are disability accessible. The return value should be a json response in the following format

    {
        seats: ["1A", "2A", "3A"]
    }
    
/cheapestSeat [GET REQUEST] will take no parameters and will return the cheapest, available seat(s) in the following format

    {
        seats: ["1A"]
    }

# Assumptions

Kept as basic as possible without spending too much effort

Data is provided in specific ordering

No specific seat plan layouts

User only able to click 1 seat at a time

Basic render and integration test

frontend and backend are not integrated in this app.

using json file

To allow non blocking request all requests should be async'ed using `Promise` or `Bluebird` or anything else suitable as `express` is single-threaded


# Frontend

## Set up

Clone repo

you may need to update or add ip of server being used for CSP settings in `client\public\index.html`

```bash
cd client
yarn
yarn start-frontend
```


a demo can be found here http://52.56.180.211:3003/

# Backend

## Set up

```bash
cd api
yarn
yarn start-backend
```



a demo can be found here http://52.56.180.211:9013

