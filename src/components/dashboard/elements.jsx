import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa'

export const Elements= [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Play All',
        path: '/playall',
        icon: <AiIcons.AiFillPlayCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Uploads',
        path: '/uploads',
        icon: <AiIcons.AiOutlineCloudUpload/>,
        cName: 'nav-text'
    },
    {
        title: 'Deleted',
        path: '/deleted',
        icon: <AiIcons.AiFillDelete/>,
        cName: 'nav-text'
    },
    {
        title: 'My Downloads',
        path: '/mydownloads',
        icon: <FaIcons.FaCloudDownloadAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting/>,
        cName: 'nav-text'
    },
]