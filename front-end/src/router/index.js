import {HomePage} from "../components/pages/HomePage";
import { AboutPage } from "../components/pages/AboutPage";
import { LoginPage } from "../components/pages/LoginPage";
import {MenuPage} from '../components/pages/MenuPage';
import { NotFoundPage } from "../components/pages/NotFoundPage";

export const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/menu', element:<MenuPage/>},
    {path: '*', element:<NotFoundPage/>}
]

export const navLinks = [
    {path: '/', title:'Home'},
    {path: '/about', title:'About'},
    {path: '/menu', title:'Menu'},
    {path: '/booking', title:'Reservations'},
    {path: '/login', title:'Login'},
]