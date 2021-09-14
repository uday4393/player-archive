import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AppNotification, NotificationType } from '../../common/AppNotification';
import { ERRORS, LABELS, MESSAGES } from '../../constants';
import { Player } from '../../interfaces';
import PlayerSearchService from '../../api/PlayerSearchService';

const schema = yup.object().shape({
    profileId: yup.string().required(ERRORS.player.ID_REQUIRED),
});

export const PlayerSearch: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Player>({
        resolver: yupResolver(schema)
    });

    let history = useHistory();
    const onSubmit = handleSubmit(async (searchObject: any) => {
        history.push(`/`);
        try {
            const player: Player = await PlayerSearchService.getPlayer(searchObject.profileId);
            history.push(`/${player['profile-id']}/${player.active}`)
            reset();
            setMessage(MESSAGES.PLAYER_FOUND);
            setNotificationType(NotificationType.Success)
        } catch (e: any) {
            setMessage(e.message);
            setMessage(MESSAGES.PLAYER_NOT_FOUND);
            setNotificationType(NotificationType.Error)
        } finally {
            setShowNotification(true);
        }
    });

    const closeNotification = (): void => {
        setShowNotification(false)
        setNotificationType(NotificationType.Null)
        setMessage('')
    }

    return (
        <>
            <h1 className="text-xl font-semibold text-center p-5">{LABELS.player.SEARCH}</h1>
            {showNotification && <AppNotification message={message} type={notificationType} showNotification={showNotification} closeNotification={closeNotification} />}
            
            <form onSubmit={onSubmit}>
                <div className="max-w-screen-md mx-auto">
                    <div className="bg-white shadow-md rounded px-8 py-5 mb-4">
                        <div className="mb-4">
                            <label className="form-label" htmlFor="profileId">{LABELS.player.SEARCH_LABEL}</label>
                            <input {...register("profileId")} className="form-input" id="profileId" type="text" placeholder={LABELS.player.SEARCH_PLACEHOLDER}></input>
                            {errors.profileId && <p className="form-error">{errors.profileId.message}</p>}
                        </div>
                        <div className="flex justify-center">
                            <button className="form-btn">{LABELS.player.BUTTON_LABEL}</button>
                        </div>
                    </div>
                </div>
            </form> 
        </>
    );
}