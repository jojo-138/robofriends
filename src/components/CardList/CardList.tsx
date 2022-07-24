import { useEffect } from 'react';
import { selectStatus, selectUsers } from '../../features/fetchRobots/robotsSlice';
import { selectInput } from '../../features/setSearchField/searchField';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRobots } from '../../features/fetchRobots/robotsSlice';
import Card from '../Card/Card';

const CardList = () => {
    const users = useAppSelector(selectUsers);
    const status = useAppSelector(selectStatus);
    const input = useAppSelector(selectInput);
    const dispatch = useAppDispatch();

    useEffect (() => {
        dispatch(fetchRobots());
    }, [dispatch]);
    
    const filteredUser = users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));

    const user = filteredUser.map(user => {
        return (
            <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
        );
    });

    return (
        <div className="container bn pa3 f7 ma3 vh-75 overflow-y-auto" data-testid="card-list">
            {
                status === 'loading' ? 
                <>Fetching robofriends...</>
                :
                user
            }
        </div>
    );
};

export default CardList;
