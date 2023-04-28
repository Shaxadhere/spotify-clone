import { AiOutlineFileText, AiOutlineFile, AiOutlineHome, AiOutlineVideoCamera, AiFillBackward, AiFillForward } from 'react-icons/ai';
import { FiGrid, FiRepeat, FiShuffle } from 'react-icons/fi';
import { BiChevronDownCircle, BiUser } from 'react-icons/bi';
import { BsAlarm, BsBell, BsChevronDown, BsFillPauseFill, BsFillPlayFill, BsGear } from 'react-icons/bs';

export const icons = {
    home: AiOutlineHome,
    browse: FiGrid,
    albums: AiOutlineFileText,
    artists: BiUser,
    videos: AiOutlineVideoCamera,
    recentlyPlayed: BsAlarm,
    localFiles: AiOutlineFile,
    chevronDown: BiChevronDownCircle,
    notification: BsBell,
    settings: BsGear,
    shuffle:FiShuffle,
    repeat:FiRepeat,
    nextTrack: AiFillForward,
    previousTrack: AiFillBackward,
    play: BsFillPlayFill,
    pause: BsFillPauseFill,
}