import React from 'react'
import PopupList from './PopupList';
import PopupWrite from './PopupWrite';

const Popup = ({ closePopup }) => {
    const closePopupHandler = () => {
        closePopup();
    };

    return (
        <div>
            <div className="popup_wrap">
                <div className="comment">
                    <PopupList />
                    <PopupWrite />
                </div>
                <button className="close_button" onClick={closePopupHandler}>
                    <span>close</span>
                </button>
            </div>
        </div>
    )
}

export default Popup
