import Container from "../containers/Container";
import TextBox from "../text/TextBox";
import HorizontalLine from "../utils/HorizontalLine";

export default function Footer() {
    return (
        <Container>
            <HorizontalLine />
            <TextBox> {'->'} Thank you for visiting my website!</TextBox>
        </Container>
    )
}