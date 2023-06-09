import { Song } from "@/types";
import usePlayer from "./usePlayer";
// import useAuthModal from "./useAuthModal";
// import { useUser } from "./useUser";
// import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    // const subsscribeModal = useSubscribeModal();
    // const authModal = useAuthModal();
    // const { user, subscription } = useUser();

    const onPlay = (id: string) => {
        player.setId(id);
        player.setIds(songs.map((song) => song.id));
        }
        return onPlay;
}

export default useOnPlay;