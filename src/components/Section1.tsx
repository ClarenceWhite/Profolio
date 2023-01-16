import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import { DefaultSection } from "../elements/DefaultSection";

const MyList = () => {
    return (
        <ul>

            <li style={{ margin: '20px 0', color: "#f5bf0f" }}><a href="https://github.com/ClarenceWhite/Dodgy-Coder-Shopping-Mall">Dodgy Coders' Online Mall</a>
                <p>
                    A simple mall system based on distribution, high fault tolerance and high scalability
                </p>
            </li>

            <li style={{ margin: '20px 0', color: "#387BDF" }}><a href="https://github.com/ClarenceWhite/PersonalBlog">"Portfolio & Blog WebSite"</a>
                <p>
                    My own Portfolio & Blog Website using Java Spring Framework and React
                </p>
            </li>

            <li style={{ margin: '20px 0', color: "#46912B" }}><a href="https://github.com/ClarenceWhite/DublinBus">"Dublin Bus"</a>
                <p>
                    A website that predicts bus travel times based on machine learning
                </p>
            </li>

            <li style={{ margin: '20px 0', color: "#ad42f5" }}><a href="https://github.com/ClarenceWhite/Java-Asteroids">"Asteroids"</a>
                <p>
                    An Asteroids game written in Java
                </p>
            </li>

            <li style={{ margin: '20px 0', color: "#f542a7" }}><a href="https://github.com/ClarenceWhite/DublinBikes">"Dublin Bike"</a>
                <p>
                    A website that predicts the usage of shared bicycles based on machine learning
                </p>
            </li>

            <li><a href="https://github.com/ClarenceWhite">And much more..</a>
            </li>

            <li style={{ margin: '20px 0', color: "#f50f0f"}}>
                <p>
                    I'm always motivated to learn and practice!
                </p>
            </li>

        </ul>
    );
}

const Section1 = () => {
    const text = "Stuffs I've made".split(" ");
    const subText =
        "".split(" ");

    return (
        <DefaultSection>
            <div>
                <h1 className="overflow-hidden text-4xl leading-loose font-bold">
                    {text.map((word, index) => (
                        <span
                            key={index}
                            className="text-animate-up whitespace-pre inline-block overflow-hidden"
                            style={{
                                // @ts-ignore
                                "--start": "150ms",
                                "--delay": `${index * 0.1}s`,
                            }}
                        >
                            {index === 2 ? (
                                <RoughNotation
                                    type="underline"
                                    show={true}
                                    strokeWidth={3}
                                    animationDuration={400}
                                    animationDelay={1000}
                                    color="	
									rgb(255,255,0)"
                                >
                                    {word}
                                </RoughNotation>
                            ) : (
                                word
                            )}
                            {index !== text.length - 1 && " "}
                        </span>
                    ))}
                </h1>
                <h5>
                    <MyList />
                </h5>
                <h3 className="font-medium overflow-hidden text-2xl leading-loose text-gray-400">
                    {subText.map((word, index) => (
                        <span
                            key={index}
                            className="text-animate-up whitespace-pre inline-block"
                            style={{
                                // @ts-ignore
                                "--start": "600ms",
                                "--delay": `${index * 0.1}s`,
                            }}
                        >
                            {index === 3 || index === 5 || index === 7 ? (
                                <span className="font-serif italic text-white text-4xl">
                                    {word}
                                </span>
                            ) : (
                                word
                            )}
                            {index !== subText.length - 1 && " "}
                        </span>
                    ))}
                </h3>
            </div>
        </DefaultSection>
    );
};

export default Section1;
