import React from 'react';
import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>WilliM - Vanilla web-development</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content="Vanilla web-development" />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/static/img/favicon.ico"
                />
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `var appInsights=window.appInsights||function(a){ function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c }({ instrumentationKey:"29bb20e8-d77a-492d-8d1c-5c21ee8ce167" }); window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();`,
                    }}
                />
            </Head>
            <div className="body">
                <div className="logo">
                    <Logo src="/static/img/willim-logo-sq-small.png" />
                </div>
                <div className="logo">
                    <Logo src="/static/img/willim-logo.png" spin={true} />
                </div>

                <div className="subtitle">Vanilla web-development</div>
            </div>

            <Footer />
            <style jsx={true} global={true}>{`
                html,
                body {
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
        </>
    );
}
