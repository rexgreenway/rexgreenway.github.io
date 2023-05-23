
import styles from './Layout.module.css'

import Header from "../components/Header";
// import NavBar from "../components/NavBar";
import Title from "../text/Title";
import Links from '../Links';
import Footer from '../components/Footer';


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

            <Footer />
        </div>
    );
};
