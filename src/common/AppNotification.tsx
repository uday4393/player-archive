import React from 'react';

export enum NotificationType {
    Error,
    Success,
    Null
}

type Notification = {
    message: string,
    type: NotificationType,
    showNotification: boolean,
    closeNotification: Function
}

export const AppNotification: React.FC<Notification> = ({ message, type, showNotification, closeNotification }) => {

    if (!showNotification) {
        return null;
    }

    return (
        <div className={`text-white p-5 my-5 rounded-md relative max-w-screen-sm mx-auto ${type === NotificationType.Error ? "bg-red-500" : "bg-green-500"}`}>
            {message}
            <button className="absolute top-1 right-1" onClick={() => closeNotification()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}