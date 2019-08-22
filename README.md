# Booking Seats

Basic front end to select seat booking. Shows layout of seat booking and when a user clicks on a seat they are presented with their booking information in the style of a ticket.  Users are be able to see the booking information, such as seat number, availability and price.

# Assumptions

Kept as basic as possible without spending too much effort

Data is providied in specific ordering

No specific seat plan layouts

User only able to click 1 seat at a time

Simple mount test and component render included

frontend and backend are not integrated in this app.

using json file

To allow non blocking request all requests should be promised using `Promise` or `Bluebird` or anythign else suitable as `express` is single-threaded


# Frontend

## Set up

Clone repo

you may need to update or add ip of server being used for CSP settings in `client\public\index.html`

```bash
cd client
yarn
yarn start-frontend
```


# Backend

## Set up

```bash
cd api
yarn
yarn start-backend
```




a demo can be found here http://52.56.180.211:3003/
