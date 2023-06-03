import Layout from "./layouts/Layout";
import Projects from "./Projects";
import HorizontalLine from "./utils/HorizontalLine";
import About from "./containers/About";

export default function App() {
    return (
        <Layout>
            <HorizontalLine />
            <About />
            <HorizontalLine />
            <Projects />
            <HorizontalLine />
        </Layout>
    );
}
