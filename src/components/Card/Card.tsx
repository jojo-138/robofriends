import { IUsers } from "../../features/fetchRobots/robotsSlice";

const Card = ({ id,name,email }: IUsers) => {
  return (
        <div className="dib bg-light-green br3 shadow-5 ma2">
            <img src={`https://robohash.org/${id}.png?size=200x200`} alt="robohash"/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default Card;