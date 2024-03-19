import {HomePage} from "../components/pages/HomePage";

export const routes = [
    {path: '/', element: <HomePage/>},
    //{path: '/booking', element: <BookingPage/>},
    // {path: '/booking-confirmation', element: <BookingConfirmationPage/>},
    // {path: '*', element:<NotFoundPage/>}
]

export const navLinks = [
    {path: '/', title:'Home'},
    {path: '/about', title:'About'},
    {path: '/menu', title:'Menu'},
    {path: '/booking', title:'Reservations'},
    {path: '/order', title:'Order Online'},
    {path: '/login', title:'Login'}
]