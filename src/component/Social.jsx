
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter   } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/honghoangtan'
    },
    {
        icon: <FaLinkedin />,
        path: ''
    },
    {
        icon: <FaYoutube />,
        path: ''
    },
    {
        icon: <FaTwitter />,
        path: ''
    },
]

function Social({ containerStyle, iconStyles}) {
    return ( 
        <div className={containerStyle}>
            {
                socials.map((item, index) => {
                    return (
                        <Link key={index} to={item.path} className={iconStyles} onClick={(e) => {
                            e.preventDefault();
                            window.open(item.path, "_blank", "noopener,noreferrer");
                          }}>
                            {item.icon}
                        </Link>
                    )
                })
            }
        </div>
     );
}

export default Social;