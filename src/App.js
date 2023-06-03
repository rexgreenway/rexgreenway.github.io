import Layout from "./layouts/Layout";
import Projects from "./Projects";
import HorizontalLine from "./utils/HorizontalLine";
import About from "./containers/About";
import Carousel from "./containers/Carousel";

import { ReactComponent as Python } from "./assets/icons/python-plain.svg";
import { ReactComponent as JS } from "./assets/icons/javascript-plain.svg";
import { ReactComponent as Docker } from "./assets/icons/docker-plain.svg";
import { ReactComponent as GCP } from "./assets/icons/googlecloud-plain.svg";
import { ReactComponent as GO } from "./assets/icons/go-original-wordmark.svg";
import { ReactComponent as K8s } from "./assets/icons/kubernetes-plain.svg";

import styles from "./App.module.css";

export default function App() {
    return (
        <Layout>
            <HorizontalLine />
            <About />
            <Carousel>
                <Python className={styles.Logo} />
                <Docker className={styles.Logo} />
                <JS className={styles.Logo} />
                <GCP className={styles.Logo} />
                <GO className={styles.Logo} />
                <K8s className={styles.Logo} />
            </Carousel>
            <HorizontalLine />
            <Projects />
            <HorizontalLine />
        </Layout>
    );
}
