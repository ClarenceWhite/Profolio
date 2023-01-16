import React from "react";
import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";
import { DefaultSection } from "../elements/DefaultSection";
import hero from "../styles/hero.css"

export const Hero = () => {
	const textSub = "I am a full-stack development engineer. I mainly focus on the construction of the Java background system and the production of simple front-end websites using libraries such as React. I also have some learning and understanding of machine learning and big data development. I am very eager to learn and practice more and more difficult technologies, and I enjoy the process of turning plans/ideals into reality, which is also my creed in life - the unity of knowledge and action. I also have many hobbies, such as reading, fitness, classical music and so on.".split(" ");
	const textMain = "Hi! I'm".split(" ");
	return (
		
		<DefaultSection>
			<div className="text-left">
			
				<p className="overflow-hidden">
					{textSub.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre"
							style={{
								// @ts-ignore
								"--start": "150ms",
								"--delay": `${index * 0.1}s`,
                                "font-size": "20px"
							}}
						>
							{word}
							{index !== textSub.length - 1 && " "}
						</span>
					))}
				</p>
				
				<div style={{ position: "absolute", top: 150, left: 150 }}>
				<h1 className="text-5xl font-bold overflow-hidden">
					{textMain.map((word, index) => (
						<span
							key={index}
							className="whitespace-pre text-animate-up "
							style={{
								// @ts-ignore
								"--start": "400ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{word}{" "}
						</span>
					))}
					<RoughNotation
						type="box"
						show={true}
						strokeWidth={3}
						animationDuration={600}
						animationDelay={1500}
						color="	
						rgb(255,255,0)"
					>
						<span className="nametag"  >白泽宇</span>
					</RoughNotation>
				</h1>
				<div className="scroll-down-container" style={{ position: "relative", bottom: -450, left: "10%", transform: "translateX(-50%)", display: "flex" }}>
					<div className="scroll-down-arrow bounce" style={{ width: "24px", height: "24px", fill: "white", marginRight: "8px", animationName: "bounce", animationDuration: "1s", animationIterationCount: "infinite"}}>
						<svg viewBox="0 0 24 24">
							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</div>
					<div className="scroll-down-text" style={{ color: "WHITE", fontSize: "16px"}}>Scroll down</div>
				</div>
				</div>
				
				</div>
		</DefaultSection>
	);
};
