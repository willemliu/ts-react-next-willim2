import React, { useState } from 'react';

declare var window: any;

export interface Props {
    className?: string;
    spin?: boolean;
    src: string;
}

export function Logo(props: Props) {
    const [spin, setSpin] = useState(props.spin ? props.spin : false);

    function handleAnimationEnd() {
        setSpin(false);
    }

    function handleClick() {
        window.appInsights.trackEvent('Spin logo', { src: props.src });
        setSpin(true);
    }

    return (
        <>
            <img
                className={`${props.className ? props.className : ''} ${
                    spin ? 'spin' : ''
                }`}
                src={props.src}
                onClick={handleClick}
                onAnimationEnd={handleAnimationEnd}
            />
            <style jsx={true}>{`
                img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }

                .spin {
                    animation: spin 0.3s linear forwards;
                }

                @keyframes spin {
                    100% {
                        transform: rotate(180deg);
                    }
                }
            `}</style>
        </>
    );
}
