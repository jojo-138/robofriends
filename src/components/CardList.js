import { Card } from './Card';

export const CardList = ({ users,input }) => {
    const filteredUser = users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
    const user = filteredUser.map(user => {
        return (
            <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
        );
    });
    return (
        <div className="container bn pa3 f7 ma3 vh-75 overflow-y-auto">
            {user}
        </div>
    );
};