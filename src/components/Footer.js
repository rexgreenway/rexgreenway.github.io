import Container from "../containers/Container";
import Links from "../Links";
import HorizontalLine from "./HorizontalLine";

export default function Footer() {
    return (
        <div id="footer">
            <HorizontalLine />
            <Container>
                <Links />
            </Container>
        </div>
    );
}
