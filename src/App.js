import PlaceIcon from '@mui/icons-material/Place';

import styles from './App.module.css';

import MainBody from './MainBody';
import Header from './components/Header'
import Title from './text/Title';
import NavBar from './components/NavBar'
import TextBox from './text/TextBox';
import Projects from './Projects';

import HorizontalLine from './utils/HorizontalLine';
import Links from './Links';


export default function App() {
    return (
        <div className={styles.App}>
            <Header>
                <Title />
                <NavBar />
            </Header>

            <MainBody>
                <div>
                    <h4>
                        <PlaceIcon />   London, UK
                    </h4>
                    <h2>Software Engineer</h2>
                </div>
                
                <HorizontalLine />

                <TextBox>
                    Specialising in AI Software Development, I have a passion for object oriented elegant programming solutions.
                    {/* Primarily working in Python I have experience with K8s, GCP, as well as frameworks such as Flask, ReactJS. */}
                </TextBox>

            </MainBody>

            <div>
                <HorizontalLine />
                <h3>Projects</h3>
                <Projects />
            </div>

            <div>
                <HorizontalLine />
                <TextBox> {'->'} Thank you for visiting my website!</TextBox>
            </div>
        </div>
    );
};
