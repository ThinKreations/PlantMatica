import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import git_logo from "../src/git_icon.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles2 from "../styles/Home.module.css";

export default function Menusup({ children }) {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return (

        <>
            <div className={styles.container_0} style={{ margin: '0', padding: '0' }} >
                <font face="Work Sans" color="white">
                    <div className={styles.head}>
                        <div className={styles.logo1}>
                           <Link href="#" ><Image src={logo_1_w} width={'148%'} height={'60%'}  /></Link>
                        </div>
                        <font face="Work Sans" color="white">
                        <div className={styles.botonera}>
                            <div className={styles.dropdown}>
                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Inicio`}</b></font></button>
                            
                            </div>
                            <div className={styles.dropdown}>
                            <button className={styles.dropbtn}><font face="Work Sans" color="white"><b>{`Cuenta`}</b></font></button>
                                <div className={styles.dropdownContent}>
                                    <a href="#">{`Link 1`}</a>
                                    <a href="#">{`Link 2`}</a>
                                    <a href="#">{`Link 3`}</a>
                                </div>
                            </div>
                            
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                        </font>
                    </div>

                </font>
                
                
            </div>
        </>

    )

}
