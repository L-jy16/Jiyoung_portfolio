import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PopupContent from './PopupContent'

const PopupList = () => {
    const [repleList, setRepleList] = useState([]);

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
        <div className="comment__view__wrap">
            {repleList.map((reple, idx) => {
                return (
                    <PopupContent reple={reple} key={idx} />
                )
            })}

        </div>
    )
}

export default PopupList