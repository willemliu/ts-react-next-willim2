import React from 'react';

declare var window: any;

const currentYear = new Date().getFullYear();
export function Footer() {
    function handleContact() {
        window.appInsights.trackEvent('Spin logo');
    }

    return (
        <footer>
            <a
                href="mailto:webmaster@willim.nl?subject=WilliM"
                onClick={handleContact}
            >
                Contact
            </a>
            &nbsp;|&nbsp;
            <a
                href="https://raw.githubusercontent.com/willemliu/ts-react-next-willim2/master/privacy.txt"
                onClick={handleContact}
            >
                Privacy
            </a>
            &nbsp;|&nbsp;&copy; 2013 - {currentYear} |&nbsp;
            <a target="_blank" href="https://github.com/willemliu">
                Github
            </a>
            <style jsx={true}>{`
                footer {
                    color: #666;
                    font-family: tahoma, sans-serif;
                    font-size: 0.8rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 2rem 0 1rem 0;
                }
            `}</style>
        </footer>
    );
}
