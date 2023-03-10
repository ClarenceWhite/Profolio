import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo-white.svg";
import { RoughNotation } from "react-rough-notation";

const Nav = () => {
    const [showGithub, setShowGithub] = useState(false);


    const [top, setTop] = useState(true);
    const handleScroll = () => {
        const position = window.pageYOffset;
        position < 10 ? setTop(true) : setTop(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        
        <nav
            className={`fixed w-full z-50 top-0 px-6 py-4 ${!top &&
                `backdrop-blur-3xl border-b-2 border-neutral-900 border-opacity-50`
                } flex justify-between items-center`}
        >

            <div className="flex gap-4 items-center" style={{ position: "relative", top: 0, right: 0 }}>
                <a
                    href="http://baizeyu.info"
                    target={`_blank`}
                    rel="noreferrer"
                    className="justify-center bg-transparent bg-opacity-25 border border-green-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-50 hover:shadow-md"
                >
                    <RoughNotation
                        type="underline"
                        show={showGithub}
                        strokeWidth={3}
                        animationDuration={400}
                        animationDelay={0}
                        padding={0}
                        color="	
						rgb(255,255,0)"
                    >
                        <span className="lg:inline-block hidden">
                            Back to Homepage
                        </span>
                    </RoughNotation>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="lg:mr-0 mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        ></path>
                    </svg> */}
                </a>

            </div>

            <div className="flex gap-4 items-center" style={{ position: "relative", top: 0, right: 0 }}>
                <a
                    // onMouseOver={() => setShowGithub(true)}
                    // onTouchStart={() => setShowGithub(true)}
                    // onMouseOut={() => setShowGithub(false)}
                    // onTouchEnd={() => setShowGithub(false)}
                    href="https://github.com/ClarenceWhite/"
                    target={`_blank`}
                    rel="noreferrer"
                    className="justify-center bg-transparent bg-opacity-25 border border-green-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-50 hover:shadow-md"
                >
                    <RoughNotation
                        type="underline"
                        show={showGithub}
                        strokeWidth={3}
                        animationDuration={400}
                        animationDelay={0}
                        padding={0}
                        color="	
						rgb(255,255,0)"
                    >
                        <span className="lg:inline-block hidden">
                            Github
                        </span>
                    </RoughNotation>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="lg:mr-0 mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        ></path>
                    </svg>
                </a>

            </div>


        </nav>
    );
};

export default Nav;
