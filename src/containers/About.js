import PlaceIcon from "@mui/icons-material/Place";

import styles from "./About.module.css";

import HorizontalLine from "../utils/HorizontalLine";
import Container from "./Container";
import SplitPane from "./SplitPane";
import Card from "./Card";
import Carousel from "../containers/Carousel";

import { ReactComponent as Python } from "../assets/icons/python-plain.svg";
import { ReactComponent as JS } from "../assets/icons/javascript-plain.svg";
import { ReactComponent as Docker } from "../assets/icons/docker-plain.svg";
import { ReactComponent as GCP } from "../assets/icons/googlecloud-plain.svg";
import { ReactComponent as GO } from "../assets/icons/go-original-wordmark.svg";
import { ReactComponent as K8s } from "../assets/icons/kubernetes-plain.svg";

function About() {
    return (
        <>
            <SplitPane
                className={styles.About}
                left={
                    <Container>
                        <div>
                            <h2>
                                <PlaceIcon /> London, UK
                            </h2>
                            <h1>Software Engineer</h1>
                        </div>
                        <HorizontalLine />
                        <p>
                            Specialising in AI Software Development, I have a
                            passion for object oriented elegant programming
                            solutions.
                        </p>
                    </Container>
                }
                right={
                    <Card className={styles.EdEx}>
                        <h3>Experience:</h3>
                        <div>
                            <small>AI Software Engineer</small>
                            <p>PwC (Sept. 2021 - Present)</p>
                        </div>

                        <h3>Education:</h3>
                        <div>
                            <small>University of Liverpool</small>
                            <p>MSc Data Science & AI - Distinction</p>
                            <br />
                            <small>University of Liverpool</small>
                            <p>BSc Mathematics - 1st Class</p>
                        </div>
                    </Card>
                }
            />
            <Carousel>
                <Python className={styles.Logo} />
                <Docker className={styles.Logo} />
                <JS className={styles.Logo} />
                <GCP className={styles.Logo} />
                <GO className={styles.Logo} />
                <K8s className={styles.Logo} />
            </Carousel>
        </>
    );
}

export default About;
