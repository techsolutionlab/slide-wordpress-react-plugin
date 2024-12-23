import React from "react";
import imgMuse from "../assets/images/Muse.png";
import imgPulse from "../assets/images/Pulse.png";

const Navigation = ({ cardsInfo, curIndex, setTranslatePosition }) => {
	const setPosition = (index, subIndex) => {
		let position = 296;
		for (let j = 0; j < index; j++) {
			position += 480 * cardsInfo[j].cardInfo.length + 336;
		}
		position += 480 * subIndex;
		setTranslatePosition(position);
	};
	return (
		<div>
			<div
				className="hidden relative md:flex flex-row items-center justify-center flex-shrink-0 h-[53px]"
				style={{ background: "#F7F7F7" }}
			>
				<div className="px-4">
					<img src={imgPulse} width={80} height={21} alt="Pulse Logo" />
				</div>

				{cardsInfo.map((cardInfo, index) => (
					<div
						className="flex flex-row gap-[8px] px-[16px] py-4 cursor-pointer"
						onClick={() => setPosition(index, 0)}
					>
						<span
							className={`flex flex-col justify-center text-[#1A2141] font-montserrat text-base  leading-[120%] ${
								curIndex === index ? "font-bold" : "font-medium"
							}`}
							style={{}}
						>
							{cardsInfo[index].title}
						</span>
					</div>
				))}

				<div className="px-4">
					<img src={imgMuse} width={80} height={21} alt="Muse Logo" />
				</div>
			</div>

			<div className="xs:flex md:hidden">
				<div className="flex flex-col w-full justify-center items-center"
					style={{ paddingTop: '48px', paddingBottom: '24px' }}
				>
					<div>
						{cardsInfo[curIndex].title !== "Muse" && (
							<img src={imgPulse} width={120} height={31} alt="Muse Logo1" />
						)}
						{cardsInfo[curIndex].title === "Muse" && (
							<img src={imgMuse} width={120} height={31} alt="Muse Logo2" />
						)}
					</div>
					<div className="mt-[5px] leading-[160%] text-[10.5px] font-montserrat text-[#777]">
						{cardsInfo[curIndex].title}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
