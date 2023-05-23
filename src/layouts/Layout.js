
import styles from './Layout.module.css'

import Header from "../components/Header";
import Footer from '../components/Footer';


export default function Layout({ className, children }) {
    return (
        <div className={styles.Layout}>
            <Header />
            
            { children }

            <Footer />
        </div>
    );
};
