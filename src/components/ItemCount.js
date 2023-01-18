import { useEffect, useState } from 'react';
const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial + 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            {count}
            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
            {
                stock && count
                    ? <button className="btn btn-outline-secondary" onClick={() => onAdd(count)}>Comprar</button>
                    : <button className="btn btn-outline-secondary">Comprar</button>
            }

        </>
    )
}
export default ItemCount;