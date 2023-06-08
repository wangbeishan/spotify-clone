import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
                                    .from('liked_songs')
                                    .select('*, song(*)')
                                    .eq('user_id', session?.user?.id)
                                    .order('created_at', {ascending: false})

    if (!data) {
        console.log(error);
        return [];
    }

    return data.map((item) => ({
        ...item.songs
    }))
}

export default getLikedSongs;