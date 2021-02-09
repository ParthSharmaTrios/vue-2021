import Users from '../components/Users'
import UserCard  from "@/components/UserCard";

const routes = [

    {
        path: '/',
        component: Users
    },
    { path: '/profile/:id', component: UserCard}
]

export default routes