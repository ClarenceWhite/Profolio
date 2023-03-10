import React from "react";
import { RoughNotation } from "react-rough-notation";
import { DefaultSection } from "../elements/DefaultSection";

const Section3 = () => {
	return (
		<DefaultSection>
			<div className="extra-wrapper">
				<div
					style={{
						// @ts-ignore
						"--opacity": "0",
					}}
					className={`relative z-10 text-xl text-gray-400 py-12 px-8 rounded-2xl bg-[var(--box-bg)] border border-gray-400 border-opacity-10 shadow-md space-y-4 w-full text-center`}
				>
					<span className="font-serif italic text-4xl text-white">
						<RoughNotation
							type="bracket"
							brackets={["left", "right"]}
							show={true}
							strokeWidth={3}
							animationDuration={400}
							animationDelay={1000}
							color="rgb(255,255,0)"
						>
							<a>Bye</a>✨
						</RoughNotation>
					</span>{" "}
					<p className="text-gray-500 text-base">
						You can checkout my <a href="https://github.com/ClarenceWhite">Github</a> as well 🤓
					</p>
				</div>
			</div>
		</DefaultSection>
	);
};

export default Section3;