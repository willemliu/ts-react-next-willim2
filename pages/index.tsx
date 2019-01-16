import React, { PureComponent } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Head from 'next/head';

export default class Index extends PureComponent<any, any> {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>WilliM - Vanilla web-development</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="body">
                    <div className="logo">
                        <Logo src="/static/img/willim-logo-sq-small.png"/>
                    </div>
                    <div className="logo">
                        <Logo src="/static/img/willim-logo.png" spin={true}/>
                    </div>

                    <div className="subtitle">Vanilla web-development</div>
                </div>

                <Footer/>
                <style jsx>{`
                `}</style>
                <style jsx global>{`
                    html, body {
                        padding: 0;
                        margin: 0;
                        height: 100vh;
                    }
                    #__next {
                        min-height: 100vh;
                        position: relative;
                    }
                    .logo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top: 5rem;
                        user-select: none;
                    }
                    .body {
                        padding-bottom: 60px;
                    }
                    .subtitle {
                        margin-top: 9rem;
                        text-align: center;
                        font-family: tahoma, sans-serif;
                        user-select: none;
                    }
                    footer {
                        position: absolute;
                        bottom: 0;
                        width: 100vw;
                        height: 20px;
                    }
                `}</style>
                </React.Fragment>
        );
    }
}