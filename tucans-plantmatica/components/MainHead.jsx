import React from 'react';
import Head from "next/head";
import icon from "../public/favicon.ico";
export default function MainHead(props) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="plantmatica" key="Plantmatica, herbolaria, plantmatica, PlantMatica, plantas, Tucans Software, remedios medicinales, tucans software, herbolaria mexico, medicina alternativa, cecyt 9" />
                <title> {props.tituloPestana} </title>
                <link rel="shortcut icon" href={props.icon} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;1,300&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <script href="https://upload-widget.cloudinary.com/1.45.44/global/all.js?fbclid=IwAR2e-q8aU70pPGJZ3vJzcn1AniegKJh_ySpvMjAC_AXuXfER4FTYW76sZmk"></script>
            </Head>
        </div>
    )
}