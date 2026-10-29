import './likebutton.css';
import { useState } from 'react';

export default function CreateButton() {
let [isLiked, setIsLiked] = useState(false);

let toggleLike = () => {
    setIsLiked(!isLiked);
   
};

return (
    <div>
        <p onClick={toggleLike}>
            <i
                className="fa-solid fa-heart"
                style={{ color: isLiked ? "red" : "black" }}
            ></i>
        </p>

        <p>{isLiked ? "Liked ❤️" : "Not Liked"}</p>
    </div>
);


}
// style={{color:isLiked?"red":"black"}}
//<p>{isLiked?"Liked Heart":"Not Liked"}</p>