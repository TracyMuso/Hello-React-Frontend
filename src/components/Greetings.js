import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/reducer/api';

const Greetings = () => {
    const greeting = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);

    return (
        <h1>{greeting.message}</h1>
    );
};

export default Greetings;