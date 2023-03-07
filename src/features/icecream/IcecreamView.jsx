import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice creams -{numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())} >Order Ice cream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Ice creams</button>
        </div>
    );
};

export default IcecreamView;