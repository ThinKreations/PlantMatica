import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles2 from "../styles/Home.module.css";
import git_logo from "../src/git_icon.png";

export default function Footy(){

return(

    <div>
        <font face="Work Sans" color="#FAFAFA">
                    <footer className={styles2.footy}>
                        <table className={styles2.footy_t}>
                            <tbody><tr>
                                <td className={styles2.footy_t_1}>
                                    <a><h2>{`© 2021 Tucan's Software`}</h2></a>
                                </td>
                                <td className={styles2.footy_t_2}>
                                    <Link href="https://github.com/ThinKreations/PlantMatica" passHref>
                                        <a target="_blank">
                                            <Image src={git_logo} className={styles2.git_logo} width={'50%'} height={'50%'} />
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            </tbody></table>
                    </footer>
                </font>
    </div>

)

}