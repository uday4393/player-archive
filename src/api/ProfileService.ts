import httpClient from "./http";
import { Profile } from "../interfaces";

const PROFILE_PATH = '/assignments/player/profile';

const getPlayerProfile = (profileId: string): Promise<Profile> => {
    return httpClient.get(`${PROFILE_PATH}/${profileId}`);
}

const PlayerProfileService = {
    getPlayerProfile,
};

export default PlayerProfileService;