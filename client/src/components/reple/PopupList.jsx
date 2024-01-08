import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import PopupContent from './PopupContent';

const PopupList = () => {
    const [repleList, setRepleList] = useState([]);
    const commentViewRef = useRef(null);

    useEffect(() => {
        const fetchRepleData = async () => {
            try {
                const response = await axios.post("/api/reple/getReple");
                if (response.data.success) {
                    setRepleList([...response.data.repleList]);
                    console.log(response);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchRepleData();
    }, [repleList]);

    return (
        <div className="comment__view__wrap" ref={commentViewRef}>
            {repleList.map((reple, idx) => (
                <PopupContent reple={reple} key={idx} />
            ))}
        </div>
    );
};

export default PopupList;