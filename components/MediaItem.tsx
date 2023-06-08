import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imgaeUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id)
        }
    }

    return (
        <div
            onClick={handleClick}
            className=" flex items-center gap-x-3 cursor-pointer hover:text-neutral-800/50
                 w-full p-2 rounded-md
            "
        >
            <div className="
                 relative rounded-md min-w-[48px] min-h-[48px] overflow-hidden
            ">
                <Image
                    fill
                    src={imgaeUrl || '/images/liked.png'}
                    alt="Media Item"
                    className=" object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="
                     text-white truncate    
                ">
                    {data.title}
                </p>
                <p className="
                    text-neutral-400 text-sm truncate
                ">
                    {data.author}
                </p>
            </div>
        </div>
    );
}

export default MediaItem;