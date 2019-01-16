import React, { PureComponent } from "react";

export default class Footer extends PureComponent<any, any> {
    state: any = {
        currentYear: (new Date()).getFullYear()
    };

    render() {
        return (
            <footer>
                <a href="mailto:webmaster@willim.nl?subject=WilliM">Contact</a>&nbsp;| &copy; 2013 - {this.state.currentYear} |&nbsp;<a target="_blank" href="https://github.com/willemliu">Github</a>
                <style jsx>{`
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