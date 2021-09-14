import httpClient from "./http";
import { Player } from "../interfaces";

const PLAYER_SEARCH_PATH = '/assignments/player/data';

const getPlayer = (searchTerm: string): Promise<Player> => {
    return httpClient.get(`${PLAYER_SEARCH_PATH}/${searchTerm}.json`);
}

const PlayerSearchService = {
    getPlayer,
};

export default PlayerSearchService;