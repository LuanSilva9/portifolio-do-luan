import './Rodape.css'

import { Link } from 'react-router-dom'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Rodape() {
    return (
        <footer>
            <div className="links">
                <li>
                    <Link to="https://www.instagram.com/luan.alvessss"><InstagramIcon/></Link>
                </li>

                <li>
                    <Link to="https://www.youtube.com/@luansilva2586"><YouTubeIcon/></Link>
                </li>

                <li>
                    <Link to="https://www.linkedin.com/in/luan-alves-0706a5282/"><LinkedInIcon/></Link>
                </li>

                <li>
                    <Link to="https://github.com/LuanSilva9"><GitHubIcon/></Link>
                </li>
            </div>

            <div className="end">
                <h2 className="title">
                    &copy; Portifolio do Luan 2024
                </h2>
            </div>

        </footer>
    )
}