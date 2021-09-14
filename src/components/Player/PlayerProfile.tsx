import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppNotification, NotificationType } from '../../common/AppNotification';
import { LABELS, MESSAGES } from '../../constants';
import { Profile } from '../../interfaces';
import PlayerProfileService from '../../api/ProfileService';
import { AppEmpty } from '../../common/AppEmpty';

export const PlayerProfile: React.FC<any> = () => {
    const [message, setMessage] = useState<string>('');
    const { profileId } = useParams<{ profileId: string }>();
    const { status } = useParams<{ status: string }>();
    const [profile, setProfile] = useState<Profile>();
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Null);

    useEffect(() => {
        const fetchProfile = async () => setProfile(await PlayerProfileService.getPlayerProfile(String(profileId)))
        fetchProfile();
    }, [profileId]);

    const closeNotification = (): void => {
        setShowNotification(false)
        setNotificationType(NotificationType.Null)
        setMessage('')
    }
    
    if (!profile) {
        return <AppEmpty message={MESSAGES.PROFILE_EMPTY} />
    }
    if (profile && status !== 'true') {
        return <AppEmpty message={MESSAGES.PLAYER_NOT_DISPLAYED} />
    }

    return (
        <>
            <h1 className="text-xl font-semibold text-center p-5">{LABELS.profile.TITLE}</h1>
            {showNotification && <AppNotification message={message} type={notificationType} showNotification={showNotification} closeNotification={closeNotification} />}
            
            <div className="grid grid-cols-1 place-items-center gap-x-8 gap-y-2 md:gap-x-6 md:gap-y-4 md:grid-cols-1 lg:grid-cols-1 m-4 mt-0">
                <label>Id: <strong>{profile.id}</strong></label>
                <label>Active: <strong>{ status }</strong></label>
                <label>Age: <strong>{ profile.profile.age }</strong></label>
                <label>Role: <strong>{ profile.profile.role }</strong></label>
                <label>Team: <strong>{ profile.profile.team }</strong></label>
            </div>
        </>
    );
}