import PlaceIcon from '@mui/icons-material/Place';

import Layout from './layouts/Layout'
import MainBody from './containers/MainBody';
import TextBox from './text/TextBox';
import Projects from './Projects';

import HorizontalLine from './utils/HorizontalLine';
import SplitPane from './containers/SplitPane';
import Spotlight from './Spotlight';


export default function App() {

    const left = (
        <MainBody>
            <div>
                <h2>
                    <PlaceIcon />   London, UK
                </h2>
                <h1>Software Engineer</h1>
            </div>
            
            <HorizontalLine />

            <TextBox>
                Specialising in AI Software Development,
                I have a passion for object oriented elegant
                programming solutions.
            </TextBox>

            <HorizontalLine />

            <h3>
                PYTHON -
                JAVASCRIPT -
                GCP -
                K8S -
                DOCKER -
                & MORE
            </h3>

        </MainBody>
    )

    const right = (
        <Spotlight />
    )
    
    return (
        <Layout>
            <HorizontalLine />
            <SplitPane
                left={left}
                right={right}
            />
            <HorizontalLine />
            <h1>Projects</h1>
            <Projects />
            <HorizontalLine />
        </Layout>
    );
};
