import React, { PureComponent } from "react";

declare var window: any;

export interface Props {
    className?: string;
    spin?: boolean;
    src: string;
}

export default class Logo extends PureComponent<Props, any> {
    state: any = {
        spin: true
    };

    constructor (props: Props) {
        super(props);
        this.state = {
            spin: props.spin ? props.spin : false
        };
    }

    handleAnimationEnd = () => {
        this.setState({
            spin: false
        });
    }

    handleClick = () => {
        window.appInsights.trackEvent('Spin logo', {src: this.props.src});
        this.setState({
            spin: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <img className={`${this.props.className ? this.props.className : ''} ${this.state.spin ? 'spin' : ''}`} src={this.props.src} onClick={this.handleClick} onAnimationEnd={this.handleAnimationEnd}/>
                <style jsx={true}>{`
                    img {
                        display: block;
                        max-width: 100%;
                        height: auto;
                    }

                    .spin {
                        animation: spin .3s linear forwards;
                    }

                    @keyframes spin {
                        100% {
                            transform: rotate(180deg);
                        }
                    }
                `}</style>
            </React.Fragment>
        );
    }
}
