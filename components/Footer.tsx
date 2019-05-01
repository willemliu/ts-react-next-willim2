import React, { PureComponent } from "react";

declare var window: any;

export default class Footer extends PureComponent<any, any> {
    state: any = {
        currentYear: (new Date()).getFullYear()
    };

    handleContact = () => {
        window.appInsights.trackEvent('Spin logo');
    }

    render() {
        return (
            <footer>
                <a href="mailto:webmaster@willim.nl?subject=WilliM" onClick={this.handleContact}>Contact</a>&nbsp;| &copy; 2013 - {this.state.currentYear} |&nbsp;<a target="_blank" href="https://github.com/willemliu">Github</a>
                <style jsx={true}>{`
                    footer {
                        color: #666;
                        font-family: tahoma, sans-serif;
                        font-size: .8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 2rem 0 1rem 0;
                    }
                `}</style>
            </footer>
        );
    }
}