import Layout from "./layouts/Layout";
import Projects from "./Projects";
import HorizontalLine from "./utils/HorizontalLine";
import SplitPane from "./containers/SplitPane";
import Spotlight from "./Spotlight";
import About from "./containers/About";

export default function App() {
    return (
        <Layout>
            <HorizontalLine />
            <SplitPane left={<About />} right={<Spotlight />} />
            <HorizontalLine />
            <h1>Projects</h1>
            <Projects />
            <HorizontalLine />
        </Layout>
    );
}
