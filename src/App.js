import PlaceIcon from '@mui/icons-material/Place';

import styles from './App.module.css';

import MainBody from './MainBody';
import Header from './components/Header'
import Title from './text/Title';
import NavBar from './components/NavBar';
import TextBox from './text/TextBox';
import Projects from './Projects';

import { HorizontalLine } from './common/HorizontalLine';


export default function App() {
    return (
        <div className={styles.App}>
            {/* Headers should have 2 child elements: Title + Menu */}
            {/* Should I hard code Header? */}
            <Header>
                {/* Start of Header */}
                <Title />

                {/* End of Header! */}
                {/* Navigation Menu - wraps around for mobile (Header Specific media query) */}
                {/* <NavBar /> */}
            </Header>

            <MainBody>
                {/* SECTION: Location, Role / Title  */}
                <div>
                    <h4>
                        <PlaceIcon />
                        London, UK
                    </h4>
                    <h2>Software Engineer</h2>
                </div>
                
                <HorizontalLine />
                
                {/* Different Font!! */}
                <TextBox>
                    I am a sofware developer from London -
                    I specialise in Python, JavaScript, and various other things.
                </TextBox>

                <HorizontalLine />

                <div>
                    LINKS
                </div>
            </MainBody>

            {/* <div className={styles.Split}>    
                <Projects />
            </div> */}

            <div>
                <HorizontalLine />
                <h3>Projects</h3>
                <Projects />
            </div>

            {/* <HorizontalLine />
            <div>
                FOOTER
            </div> */}

        </div>
    );
};
