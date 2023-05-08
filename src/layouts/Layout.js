
import styles from './Layout.module.css'

import Header from "../components/Header";
// import NavBar from "../components/NavBar";
import TextBox from "../text/TextBox";
import Title from "../text/Title";
import HorizontalLine from "../utils/HorizontalLine";
import Links from '../Links';


export default function Layout({ className, children }) {
    
    const classes = className + ' ' + styles.Layout
    
    return (
        <div className={classes}>
            <Header>
                <Title />
                <Links />
                {/* <NavBar /> */}
            </Header>
            
            { children }

            {/* Make a Footer */}
            <div>
                <HorizontalLine />
                <TextBox> {'->'} Thank you for visiting my website!</TextBox>
            </div>
        </div>
    );
};
