import React, { useEffect, useState } from "react";

import imgSubTitle from '../assets/images/subtitle.png';

const PulseModal = ({ cardsInfo, setModalShow, curIndex, curSubIndex }) => {
	const [tab, setTab] = useState(0);

	const handleChange = (e) => {
		const selectElement = document.getElementById("tab");
		setTab(Number(selectElement.value));
	};

	return (
		<div
			className="fixed top-0 md:top-0 left-0 w-full h-full bg-[#000000CC] flex items-center justify-center z-[1000]"
			onClick={() => setModalShow(false)}
		>
			<div
				className="relative mx-4 md:mx-[40px] my-4 md:my-[52px] max-w-[1312px] h-[calc(100%-32px)] md:h-auto md:max-h-[calc(100%-100px)] rounded-[24px] bg-[#F7F7F7] flex flex-col items-center overflow-auto"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="hidden md:flex flex-row items-center justify-center bg-white gap-4 w-full rounded-tl-[24px] rounded-tr-[24px] h-[72px]">
					<img src={cardsInfo[curIndex].icon} alt="SVG Logo" />
					<span className="flex flex-col justify-center text-[#1A2141] font-montserrat text-[18px] font-semibold leading-[120%]">
						{cardsInfo[curIndex].type === "Pulse"
							? `${cardsInfo[curIndex].type + " " + cardsInfo[curIndex].title}`
							: `${cardsInfo[curIndex].title}`}
					</span>
				</div>

				<div className="xs:flex md:hidden w-full">
					<div className="flex flex-row p-4 items-center justify-between bg-white w-full rounded-tl-[24px] rounded-tr-[24px] h-[72px]">
						<div className="flex flex-row gap-4">
							<img src={cardsInfo[curIndex].icon} alt="SVG Logo" />
							<span className="flex flex-col justify-center text-[#1A2141] font-montserrat text-lg font-semibold leading-[120%]">
								{cardsInfo[curIndex].type === "Pulse"
									? `${
											cardsInfo[curIndex].type + " " + cardsInfo[curIndex].title
									  }`
									: `${cardsInfo[curIndex].title}`}
							</span>
						</div>
						<svg
							className="xs:flex md:hidden right-[20px] top-[20px] cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							onClick={() => setModalShow(false)}
						>
							<circle cx="16" cy="16" r="15.5" stroke="#1A2141" />
							<path
								d="M20.9497 11.0502L16 16M16 16L11.0503 11.0502M16 16L11.0503 20.9497M16 16L20.9497 20.9497"
								stroke="#1A2141"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				<div className="flex flex-col justify-center text-[#1A2141] px-5 py-3 w-[296px] md:w-full text-center font-montserrat text-[24px] font-semibold leading-[120%] md:p-[12px]">
					{cardsInfo[curIndex].cardInfo[curSubIndex].title}
				</div>

				<div className="hidden md:flex flex-row items-center justify-center pt-[12px] px-4 md:px-0">
					<div
						className="flex flex-row rounded-[40px] p-[4px] border-solid border-[1px]"
						style={{ borderColor: `${cardsInfo[curIndex].color}` }}
					>
						<div
							className={`px-[24px] py-[16px] rounded-[130px] cursor-pointer w-[211px] flex justify-center`}
							onClick={() => setTab(0)}
							style={{
								background: `${tab === 0 ? cardsInfo[curIndex].color : ""}`,
							}}
						>
							<span
								className="font-montserrat text-[20px] font-semibold leading-[120%]"
								style={{
									color: `${
										(curIndex === 1 || curIndex === 3) && tab === 0
											? "#FFF"
											: "#1A2141"
									}`,
								}}
							>
								Challenges
							</span>
						</div>
						<div
							className={`px-[24px] py-[16px] rounded-[130px] cursor-pointer`}
							onClick={() => setTab(1)}
							style={{
								background: `${tab === 1 ? cardsInfo[curIndex].color : ""}`,
							}}
						>
							<span
								className="text-[#1A2141] font-montserrat text-[20px] font-semibold leading-[120%]"
								style={{
									color: `${
										(curIndex === 1 || curIndex === 3) && tab === 1
											? "#FFF"
											: "#1A2141"
									}`,
								}}
							>
								With {cardsInfo[curIndex].subTitle === "Pulse Referrals & Admissions" ? 'Pulse R&A' : cardsInfo[curIndex].subTitle}
							</span>
						</div>
					</div>
				</div>

				<div className="xs:flex md:hidden w-full px-4 rounded-[130px]">
					<select
						id="tab"
						className="w-full flex items-center justify-center hover:text-[#1A2141] active:text-[#1A2141]"
						onChange={handleChange}
						style={{
							color: "#1A2141",
							padding: "12px 16px",
							border: "1px solid var(--Blue, #1A2141)",
							borderRadius: "40px",
						}}
					>
						<option value="0" className="text-[#1A2141]">
							Challenges
						</option>
						<option value="1" className="text-[#1A2141]">
							With {cardsInfo[curIndex].subTitle === "Pulse Referrals & Admissions" ? 'Pulse R&A' : cardsInfo[curIndex].subTitle}
						</option>
					</select>
				</div>

				<div
					className="flex flex-col gap-[24px] self-stretch m-4 mt-6 md:m-[24px] p-4 md:p-[40px] border-solid border-[2px] border-[#A1CFC2] rounded-[20px]"
					style={{
						background: `${tab === 1 ? "#1A2141" : "#FFF"}`,
						border: `2px solid ${cardsInfo[curIndex].color}`,
					}}
				>
					{tab === 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px]">
							<div
								className="flex flex-col gap-[32px] rounded-[24px] flex-1 basis-0 p-[40px]"
								style={{ background: `${cardsInfo[curIndex].color}`, height: curIndex === 3 && curSubIndex === 0 ? '253px' : '' }}
							>
								{curIndex === 0 && curSubIndex === 0 && (
									<>
										<div className="flex flex-col items-center gap-[24px] self-stretch">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="64"
												height="64"
												viewBox="0 0 64 64"
												fill="none"
											>
												<path
													d="M22.8796 18.2588H47.9596L54.7996 25.12V61.7129H22.8796V18.2588Z"
													stroke="#1A2141"
													strokeWidth="2"
												/>
												<path
													d="M19.8393 50.5621L3.87926 22.8329L31.5228 6.82353L35.584 13.8796"
													stroke="#1A2141"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M47.9594 22.8329V25.8824H50.9994"
													stroke="#1A2141"
													strokeWidth="2"
												/>
												<path
													d="M57.2312 22.169L60.5966 14.7536L31.5455 1.48704L29.8923 5.12968"
													stroke="#1A2141"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M26.6797 35.0306H50.9997"
													stroke="#1A2141"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M26.6797 41.1294H50.9997"
													stroke="#1A2141"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M26.6797 47.2282H50.9997"
													stroke="#1A2141"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<div className="flex flex-col items-center gap-[12px] self-stretch">
												<span className="text-[#1A2141] font-semibold font-montserrat text-[24px] leading-[120%] text-center">
													Patient Referral
												</span>
												<span className="text-[#1A2141] font-normal font-montserrat text-[16px] leading-[160%] text-center">
													Average Referral Packet Consists of Two Documents
													Averaging 35 Pages of Relevant Information
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center gap-[24px] self-stretch">
											<div className="flex flex-row gap-[4px]">
												<div className="flex flex-col justify-center">
													<svg
														width="45"
														height="44"
														viewBox="0 0 45 44"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<circle
															cx="22.5"
															cy="22"
															r="21"
															stroke="#1A2141"
															strokeWidth="2"
														/>
														<path
															d="M22.5 11V22L28.5 28"
															stroke="#1A2141"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<span className="text-[#1A2141] font-montserrat text-[40px] font-extrabold leading-[120%] flex flex-row justify-center">
													48<span className="text-[32px] font-normal">hr</span>
												</span>
											</div>
											<div className="flex flex-col gap-[12px] items-center self-stretch">
												<span className="text-[#1A2141] font-montserrat text-[24px] font-semibold leading-[120%]">
													Admitting Visit
												</span>
												<span className="text-[#1A2141] font-montserrat text-[16px] font-normal leading-[160%] text-center">
													Provider has only 48 hours. On average, over 30% of
													episodes have delayed starts of care.
												</span>
											</div>
										</div>
									</>
								)}

								{curIndex === 0 && curSubIndex === 1 && (
									<div className="flex flex-col items-center gap-[24px] self-stretch">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 64 64"
											fill="none"
										>
											<path
												d="M38.5096 25.1643L47.0638 39.6271"
												stroke="#1A2141"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M45.9174 47.4756H58.2637C60.6015 47.4756 62.4967 45.5805 62.4967 43.2426V17.6683L47.3284 2.5H32.6893C30.3515 2.5 28.4563 4.39518 28.4563 6.733V25.6933"
												stroke="#1A2141"
												strokeWidth="2"
												strokeLinejoin="round"
											/>
											<path
												d="M47.3284 2.5L62.4966 17.6683H50.8559C48.9077 17.6683 47.3284 16.0889 47.3284 14.1408V2.5Z"
												stroke="#1A2141"
												strokeWidth="2"
												strokeLinejoin="round"
											/>
											<path
												d="M21.376 29.5478C24.5135 24.2173 32.2227 24.2173 35.3601 29.5478L47.5386 50.2389C50.7219 55.6475 46.8224 62.4676 40.5465 62.4676H16.1896C9.91375 62.4676 6.01419 55.6475 9.19756 50.2389L21.376 29.5478Z"
												stroke="#1A2141"
												strokeWidth="2"
											/>
											<path
												d="M24.5984 34.4951C24.3969 32.2785 26.1422 30.3673 28.368 30.3673V30.3673C30.5937 30.3673 32.339 32.2785 32.1375 34.4951L30.9646 47.3973C30.8425 48.7403 29.7165 49.7686 28.368 49.7686V49.7686C27.0194 49.7686 25.8934 48.7403 25.7713 47.3973L24.5984 34.4951Z"
												stroke="#1A2141"
												strokeWidth="2"
											/>
											<circle
												cx="28.4562"
												cy="55.2361"
												r="2.822"
												stroke="#1A2141"
												strokeWidth="2"
											/>
										</svg>
										<span className="font-montserrat font-semibold text-[24px] leading-[120%] text-[#1A2141] text-center">
											76% Referral <br /> Rejection Rate
										</span>
									</div>
								)}

								{curIndex === 0 && curSubIndex === 2 && (
									<>
										<div className="flex flex-col md:flex-row items-center gap-[16px] self-stretch">
											<img src={imgSubTitle} width={133} height={43} />
											<span className="text-[#1A2141] font-montserrat font-semibold text-[24px] leading-[120%]"
												style={{ maxWidth: '255px' }}
											>
												Patients that require some form of coding correction
											</span>
										</div>
										<div className="flex flex-row justify-start gap-[10px]">
											<svg
												width="191"
												height="192"
												viewBox="0 0 191 192"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M95.0956 0.904297C118.767 0.904297 141.588 9.73294 159.096 25.6642C176.604 41.5955 187.541 63.4841 189.769 87.0506C191.997 110.617 185.355 134.167 171.142 153.097C156.929 172.027 136.167 184.975 112.915 189.411L104.005 142.706C115.631 140.488 126.012 134.013 133.119 124.549C140.225 115.084 143.546 103.309 142.432 91.5253C141.319 79.742 135.85 68.7977 127.096 60.8321C118.342 52.8664 106.931 48.4521 95.0956 48.4521V0.904297Z"
													fill="#296C85"
												/>
												<path
													d="M112.915 189.411C93.1882 193.174 72.7768 190.596 54.6058 182.045L74.8507 139.022C83.9362 143.298 94.1419 144.587 104.005 142.706L112.915 189.411Z"
													fill="#1B4758"
												/>
												<path
													d="M54.6059 182.045C35.0468 172.841 19.207 157.248 9.69712 137.836C0.18723 118.424 -2.42526 96.3512 2.29022 75.2554C7.00569 54.1596 18.7677 35.2999 35.6378 21.7844C52.5079 8.2689 73.4793 0.904286 95.0956 0.904297L95.0956 48.4521C84.2874 48.4521 73.8018 52.1344 65.3667 58.8921C56.9317 65.6499 51.0506 75.0798 48.6929 85.6277C46.3352 96.1756 47.6414 107.212 52.3964 116.918C57.1513 126.624 65.0712 134.421 74.8507 139.022L54.6059 182.045Z"
													fill="white"
												/>
												<path
													d="M161.487 99.6271H159.754V101.849H157.994V99.6271H152.628V98.3695L157.449 92.0676H159.391L154.85 98.0901H158.05V96.1199H159.754V98.0901H161.487V99.6271ZM169.002 92.0676V93.2833L165.201 101.849H163.259L166.934 93.6047H163.091V95.2675H161.4V92.0676H169.002ZM172.373 97.3355C171.675 97.3355 171.111 97.0887 170.682 96.5949C170.254 96.1012 170.04 95.4538 170.04 94.6527C170.04 93.8515 170.254 93.2041 170.682 92.7104C171.111 92.2167 171.675 91.9698 172.373 91.9698C173.072 91.9698 173.635 92.2167 174.064 92.7104C174.502 93.1948 174.721 93.8422 174.721 94.6527C174.721 95.4631 174.502 96.1152 174.064 96.6089C173.635 97.0933 173.072 97.3355 172.373 97.3355ZM178.242 92.0676H179.611L172.932 101.849H171.563L178.242 92.0676ZM172.373 96.3574C172.755 96.3574 173.049 96.2083 173.254 95.9103C173.468 95.6122 173.575 95.193 173.575 94.6527C173.575 94.1124 173.468 93.6932 173.254 93.3951C173.049 93.097 172.755 92.9479 172.373 92.9479C172.01 92.9479 171.716 93.1016 171.493 93.409C171.279 93.7071 171.172 94.1217 171.172 94.6527C171.172 95.1836 171.279 95.6028 171.493 95.9103C171.716 96.2083 172.01 96.3574 172.373 96.3574ZM178.787 101.947C178.088 101.947 177.525 101.7 177.096 101.206C176.668 100.712 176.453 100.065 176.453 99.2638C176.453 98.4627 176.668 97.8153 177.096 97.3215C177.525 96.8278 178.088 96.581 178.787 96.581C179.486 96.581 180.049 96.8278 180.478 97.3215C180.916 97.8153 181.134 98.4627 181.134 99.2638C181.134 100.065 180.916 100.712 180.478 101.206C180.049 101.7 179.486 101.947 178.787 101.947ZM178.787 100.969C179.16 100.969 179.453 100.82 179.667 100.521C179.881 100.214 179.989 99.7948 179.989 99.2638C179.989 98.7328 179.881 98.3183 179.667 98.0202C179.453 97.7128 179.16 97.5591 178.787 97.5591C178.414 97.5591 178.121 97.7081 177.907 98.0062C177.692 98.3043 177.585 98.7235 177.585 99.2638C177.585 99.8041 177.692 100.223 177.907 100.521C178.121 100.82 178.414 100.969 178.787 100.969Z"
													fill="white"
												/>
												<path
													d="M76.9678 163.486V173.268H75.1513V165.009H73.0832V163.486H76.9678ZM82.9883 173.407C82.2058 173.407 81.5071 173.212 80.8923 172.82C80.2775 172.42 79.7931 171.842 79.4391 171.088C79.0851 170.324 78.9081 169.42 78.9081 168.377C78.9081 167.334 79.0851 166.435 79.4391 165.68C79.7931 164.916 80.2775 164.339 80.8923 163.947C81.5071 163.547 82.2058 163.347 82.9883 163.347C83.7708 163.347 84.4694 163.547 85.0843 163.947C85.7084 164.339 86.1975 164.916 86.5515 165.68C86.9054 166.435 87.0824 167.334 87.0824 168.377C87.0824 169.42 86.9054 170.324 86.5515 171.088C86.1975 171.842 85.7084 172.42 85.0843 172.82C84.4694 173.212 83.7708 173.407 82.9883 173.407ZM82.9883 171.828C83.6869 171.828 84.2366 171.54 84.6371 170.962C85.047 170.384 85.2519 169.523 85.2519 168.377C85.2519 167.231 85.047 166.369 84.6371 165.792C84.2366 165.214 83.6869 164.926 82.9883 164.926C82.2989 164.926 81.7493 165.214 81.3394 165.792C80.9389 166.369 80.7386 167.231 80.7386 168.377C80.7386 169.523 80.9389 170.384 81.3394 170.962C81.7493 171.54 82.2989 171.828 82.9883 171.828ZM90.4898 168.754C89.7912 168.754 89.2276 168.507 88.7991 168.014C88.3706 167.52 88.1563 166.872 88.1563 166.071C88.1563 165.27 88.3706 164.623 88.7991 164.129C89.2276 163.635 89.7912 163.389 90.4898 163.389C91.1885 163.389 91.7521 163.635 92.1806 164.129C92.6184 164.613 92.8373 165.261 92.8373 166.071C92.8373 166.882 92.6184 167.534 92.1806 168.028C91.7521 168.512 91.1885 168.754 90.4898 168.754ZM96.3586 163.486H97.728L91.0488 173.268H89.6794L96.3586 163.486ZM90.4898 167.776C90.8718 167.776 91.1652 167.627 91.3701 167.329C91.5844 167.031 91.6915 166.612 91.6915 166.071C91.6915 165.531 91.5844 165.112 91.3701 164.814C91.1652 164.516 90.8718 164.367 90.4898 164.367C90.1265 164.367 89.8331 164.52 89.6095 164.828C89.3953 165.126 89.2881 165.54 89.2881 166.071C89.2881 166.602 89.3953 167.022 89.6095 167.329C89.8331 167.627 90.1265 167.776 90.4898 167.776ZM96.9035 173.365C96.2049 173.365 95.6413 173.119 95.2128 172.625C94.7843 172.131 94.57 171.484 94.57 170.683C94.57 169.881 94.7843 169.234 95.2128 168.74C95.6413 168.247 96.2049 168 96.9035 168C97.6022 168 98.1658 168.247 98.5943 168.74C99.0321 169.234 99.251 169.881 99.251 170.683C99.251 171.484 99.0321 172.131 98.5943 172.625C98.1658 173.119 97.6022 173.365 96.9035 173.365ZM96.9035 172.387C97.2762 172.387 97.5696 172.238 97.7839 171.94C97.9981 171.633 98.1052 171.214 98.1052 170.683C98.1052 170.152 97.9981 169.737 97.7839 169.439C97.5696 169.132 97.2762 168.978 96.9035 168.978C96.5309 168.978 96.2375 169.127 96.0232 169.425C95.809 169.723 95.7018 170.142 95.7018 170.683C95.7018 171.223 95.809 171.642 96.0232 171.94C96.2375 172.238 96.5309 172.387 96.9035 172.387Z"
													fill="white"
												/>
												<path
													d="M19.4259 99.6271H17.6932V101.849H15.9326V99.6271H10.5669V98.3695L15.3877 92.0676H17.3299L12.7886 98.0901H15.9885V96.1199H17.6932V98.0901H19.4259V99.6271ZM24.218 96.1059C25.1216 96.2177 25.8109 96.5251 26.286 97.0281C26.7611 97.5311 26.9986 98.1599 26.9986 98.9145C26.9986 99.4827 26.8543 99.9998 26.5655 100.466C26.2767 100.931 25.8389 101.304 25.252 101.583C24.6744 101.854 23.9665 101.989 23.1281 101.989C22.4294 101.989 21.754 101.891 21.1019 101.695C20.4592 101.49 19.9096 101.211 19.4531 100.857L20.2356 99.4455C20.5896 99.7436 21.0181 99.9811 21.5211 100.158C22.0335 100.326 22.5598 100.41 23.1001 100.41C23.7429 100.41 24.2459 100.279 24.6092 100.018C24.9818 99.7482 25.1681 99.3849 25.1681 98.9285C25.1681 98.472 24.9912 98.118 24.6372 97.8665C24.2925 97.6057 23.7615 97.4753 23.0442 97.4753H22.1499V96.2316L24.3717 93.5907H19.9282V92.0676H26.5934V93.2833L24.218 96.1059ZM30.2302 97.3355C29.5315 97.3355 28.9679 97.0887 28.5394 96.5949C28.1109 96.1012 27.8966 95.4538 27.8966 94.6527C27.8966 93.8515 28.1109 93.2041 28.5394 92.7104C28.9679 92.2167 29.5315 91.9698 30.2302 91.9698C30.9288 91.9698 31.4924 92.2167 31.9209 92.7104C32.3588 93.1948 32.5777 93.8422 32.5777 94.6527C32.5777 95.4631 32.3588 96.1152 31.9209 96.6089C31.4924 97.0933 30.9288 97.3355 30.2302 97.3355ZM36.0989 92.0676H37.4683L30.7891 101.849H29.4197L36.0989 92.0676ZM30.2302 96.3574C30.6121 96.3574 30.9055 96.2083 31.1105 95.9103C31.3247 95.6122 31.4319 95.193 31.4319 94.6527C31.4319 94.1124 31.3247 93.6932 31.1105 93.3951C30.9055 93.097 30.6121 92.9479 30.2302 92.9479C29.8669 92.9479 29.5734 93.1016 29.3499 93.409C29.1356 93.7071 29.0285 94.1217 29.0285 94.6527C29.0285 95.1836 29.1356 95.6028 29.3499 95.9103C29.5734 96.2083 29.8669 96.3574 30.2302 96.3574ZM36.6439 101.947C35.9452 101.947 35.3816 101.7 34.9531 101.206C34.5246 100.712 34.3104 100.065 34.3104 99.2638C34.3104 98.4627 34.5246 97.8153 34.9531 97.3215C35.3816 96.8278 35.9452 96.581 36.6439 96.581C37.3425 96.581 37.9061 96.8278 38.3346 97.3215C38.7725 97.8153 38.9914 98.4627 38.9914 99.2638C38.9914 100.065 38.7725 100.712 38.3346 101.206C37.9061 101.7 37.3425 101.947 36.6439 101.947ZM36.6439 100.969C37.0165 100.969 37.3099 100.82 37.5242 100.521C37.7385 100.214 37.8456 99.7948 37.8456 99.2638C37.8456 98.7328 37.7385 98.3183 37.5242 98.0202C37.3099 97.7128 37.0165 97.5591 36.6439 97.5591C36.2713 97.5591 35.9778 97.7081 35.7636 98.0062C35.5493 98.3043 35.4422 98.7235 35.4422 99.2638C35.4422 99.8041 35.5493 100.223 35.7636 100.521C35.9778 100.82 36.2713 100.969 36.6439 100.969Z"
													fill="#1A2141"
												/>
											</svg>
											<div className="flex flex-col gap-[12.421px] justify-center">
												<div className="flex flex-row gap-[9.315px]">
													<div className="flex flex-col justify-center">
														<div className="w-[12.421px] h-[12.421px] bg-[#296C85]"></div>
													</div>
													<span className="text-[#1A2141] font-montserrat text-[12.421px] font-normal leading-[160%]">
														Missed clinical evidence
													</span>
												</div>
												<div className="flex flex-row gap-[9.315px]">
													<div className="flex flex-col justify-center">
														<div className="w-[12.421px] h-[12.421px] bg-[#1B4758]"></div>
													</div>
													<span className="text-[#1A2141] font-montserrat text-[12.421px] font-normal leading-[160%]">
														Compliance risk
													</span>
												</div>
												<div className="flex flex-row gap-[9.315px]">
													<div className="flex flex-col justify-center">
														<div className="w-[12.421px] h-[12.421px] bg-[#FFF]"></div>
													</div>
													<span className="text-[#1A2141] font-montserrat text-[12.421px] font-normal leading-[160%]">
														Correct as coded
													</span>
												</div>
											</div>
										</div>
									</>
								)}

								{curIndex === 1 && curSubIndex === 0 && (
									<>
										<div className="flex flex-col gap-[24px] items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="64"
												height="64"
												viewBox="0 0 64 64"
												fill="none"
											>
												<path
													d="M38.5098 25.1643L47.064 39.6271"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M45.9172 47.4756H58.2634C60.6013 47.4756 62.4964 45.5805 62.4964 43.2426V17.6683L47.3282 2.5H32.6891C30.3512 2.5 28.4561 4.39518 28.4561 6.733V25.6933"
													stroke="white"
													strokeWidth="2"
													strokeLinejoin="round"
												/>
												<path
													d="M47.3281 2.5L62.4964 17.6683H50.8556C48.9074 17.6683 47.3281 16.0889 47.3281 14.1408V2.5Z"
													stroke="white"
													strokeWidth="2"
													strokeLinejoin="round"
												/>
												<path
													d="M21.376 29.5478C24.5135 24.2173 32.2227 24.2173 35.3601 29.5478L47.5386 50.2389C50.7219 55.6475 46.8224 62.4676 40.5465 62.4676H16.1896C9.91375 62.4676 6.01419 55.6475 9.19756 50.2389L21.376 29.5478Z"
													stroke="white"
													strokeWidth="2"
												/>
												<path
													d="M24.5984 34.4951C24.3969 32.2785 26.1422 30.3673 28.368 30.3673V30.3673C30.5937 30.3673 32.339 32.2785 32.1375 34.4951L30.9646 47.3973C30.8425 48.7403 29.7165 49.7686 28.368 49.7686V49.7686C27.0194 49.7686 25.8934 48.7403 25.7713 47.3973L24.5984 34.4951Z"
													stroke="white"
													strokeWidth="2"
												/>
												<circle
													cx="28.4563"
													cy="55.2361"
													r="2.822"
													stroke="white"
													strokeWidth="2"
												/>
											</svg>
											<div className="flex flex-col gap-[12px]">
												<span className="text-white text-[24px] font-montserrat font-semibold leading-[120%] text-center">
													Improve Compliance <br />& Reduce Risk
												</span>
												<span className="text-white text-[16px] font-montserrat font-normal leading-[160%] text-center">
													When an initial visit does not happen <br />
													within 48 hours, 12% of these patients
													<br />
													will readmit within 30 days
												</span>
											</div>
										</div>
									</>
								)}

								{curIndex === 1 && curSubIndex === 1 && (
									<>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
											<div className="relative flex flex-col p-5 w-[200px] h-[200px] gap-2 rounded-full items-center justify-center">
												<div className="absolute top-0 left-0 w-full h-1/2 border-solid border-t-2 border-l-2 border-r-2 border-[#1A2141] rounded-t-full"></div>
												<div className="absolute bottom-0 left-0 w-full h-1/2 border-solid border-b-2 border-l-2 border-r-2 border-white rounded-b-full"></div>
												<span className="text-[36px] text-center font-montserrat font-extrabold leading-[100%] text-white">
													41%
												</span>
												<span className="text-[14px] text-center font-montserrat font-normal leading-[160%] text-white">
													Nurses’ Time Spent in EHRs and Documentation.
												</span>
											</div>

											<div className="relative flex flex-col p-5 w-[200px] h-[200px] gap-2 rounded-full items-center justify-center">
												<div className="absolute top-0 left-0 w-full h-1/2 border-solid border-t-2 border-l-2 border-r-2 border-[#9BC418] rounded-t-full"></div>
												<div className="absolute bottom-0 left-0 w-full h-1/2 border-solid border-b-2 border-l-2 border-r-2 border-[#F7F7F7] rounded-b-full"></div>
												<span className="text-[36px] text-center font-montserrat font-extrabold leading-[100%] text-white">
													35-54%
												</span>
												<span className="text-[14px] text-center font-montserrat font-normal leading-[160%] text-white">
													Nurses that report burnout.
												</span>
											</div>
										</div>
									</>
								)}

								{curIndex === 1 && curSubIndex === 2 && (
									<>
										<div className="flex flex-row justify-center items-center">
											<svg
												width="186"
												height="168"
												viewBox="0 0 186 168"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M155.154 120.001C158.476 116.38 164.115 109.51 167.019 105.263C191.181 69.9215 189.832 26.9573 164.005 9.29969C144.337 -4.14727 116.145 0.959931 93.1469 19.7688C70.1486 0.959931 41.9566 -4.14727 22.2885 9.29969C-3.53843 26.9573 -4.88759 69.9215 19.275 105.263C22.8693 110.52 26.0734 114.409 30.2895 118.7"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinejoin="round"
												/>
												<circle
													cx="93.0466"
													cy="100.816"
													r="20.1603"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinejoin="round"
												/>
												<circle
													cx="140.196"
													cy="116.749"
													r="15.2828"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinejoin="round"
												/>
												<circle
													cx="45.2472"
													cy="116.749"
													r="15.2828"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinejoin="round"
												/>
												<path
													d="M124.913 166.5V152.843C124.913 135.244 110.646 120.977 93.0465 120.977V120.977C75.4472 120.977 61.1802 135.244 61.1802 152.843V166.5M78.0888 166.5V141.787M108.329 166.5V141.787"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M164.583 166.5V156.095C164.583 142.805 153.81 132.032 140.521 132.032C133.245 132.032 126.724 135.261 122.312 140.364M152.061 166.5V147.789"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M21.5098 166.5V156.095C21.5098 142.805 32.2828 132.032 45.5721 132.032C52.8477 132.032 59.3692 135.261 63.7814 140.364M34.2775 166.5V147.789"
													stroke="white"
													strokeWidth="2.60133"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M70.8924 35.6224V41.3541L59.4751 67.979H49.4908L60.3996 42.8795H51.8944V47.8717H44.0826V35.6224H70.8924ZM89.4421 47.3632C91.476 47.3632 93.3403 47.7947 95.0352 48.6575C96.7301 49.4895 98.0706 50.6913 99.0567 52.2629C100.074 53.8037 100.582 55.5756 100.582 57.5787C100.582 59.7666 100.012 61.708 98.8718 63.4029C97.7624 65.0669 96.237 66.3612 94.2956 67.2856C92.3851 68.1793 90.2434 68.6261 87.8705 68.6261C83.2482 68.6261 79.5965 67.2548 76.9155 64.5122C74.2345 61.7696 72.8941 57.8252 72.8941 52.679C72.8941 48.9811 73.6028 45.807 75.0204 43.1569C76.4687 40.4759 78.4871 38.4421 81.0757 37.0553C83.6642 35.6686 86.6687 34.9753 90.0893 34.9753C91.9382 34.9753 93.6947 35.1756 95.3588 35.5762C97.0228 35.9768 98.4404 36.5623 99.6114 37.3327L96.2833 43.8965C94.7117 42.7871 92.724 42.2324 90.3204 42.2324C87.9784 42.2324 86.0832 42.8795 84.6349 44.1738C83.1865 45.4681 82.3545 47.3324 82.1388 49.7669C83.9877 48.1644 86.4222 47.3632 89.4421 47.3632ZM87.3159 62.1086C88.6101 62.1086 89.6579 61.7388 90.4591 60.9992C91.2911 60.2596 91.7071 59.2581 91.7071 57.9947C91.7071 56.7621 91.2911 55.7759 90.4591 55.0364C89.6579 54.2968 88.5947 53.927 87.2696 53.927C85.9446 53.927 84.866 54.3122 84.034 55.0826C83.2019 55.8222 82.7859 56.8083 82.7859 58.0409C82.7859 59.2427 83.1865 60.2288 83.9878 60.9992C84.8198 61.7388 85.9291 62.1086 87.3159 62.1086ZM109.729 53.1412C107.294 53.1412 105.307 52.34 103.766 50.7376C102.225 49.1351 101.455 46.9472 101.455 44.1738C101.455 42.3557 101.809 40.7686 102.518 39.4128C103.227 38.0569 104.198 37.0245 105.43 36.3158C106.694 35.5762 108.127 35.2064 109.729 35.2064C112.194 35.2064 114.197 36.023 115.738 37.6563C117.279 39.2587 118.049 41.4312 118.049 44.1738C118.049 46.9472 117.279 49.1351 115.738 50.7376C114.197 52.34 112.194 53.1412 109.729 53.1412ZM128.866 35.6224H135.522L113.427 67.979H106.771L128.866 35.6224ZM109.729 48.7499C110.561 48.7499 111.224 48.3802 111.717 47.6406C112.21 46.901 112.456 45.7454 112.456 44.1738C112.456 42.6022 112.21 41.4466 111.717 40.707C111.224 39.9674 110.561 39.5976 109.729 39.5976C108.928 39.5976 108.265 39.9828 107.741 40.7532C107.248 41.4928 107.002 42.633 107.002 44.1738C107.002 45.7146 107.248 46.8702 107.741 47.6406C108.265 48.3802 108.928 48.7499 109.729 48.7499ZM132.563 68.395C130.098 68.395 128.095 67.5938 126.554 65.9914C125.044 64.389 124.289 62.201 124.289 59.4276C124.289 56.685 125.06 54.5125 126.601 52.9101C128.141 51.2768 130.129 50.4602 132.563 50.4602C135.029 50.4602 137.032 51.2768 138.573 52.9101C140.113 54.5125 140.884 56.685 140.884 59.4276C140.884 62.201 140.113 64.389 138.573 65.9914C137.032 67.5938 135.029 68.395 132.563 68.395ZM132.563 64.0038C133.395 64.0038 134.058 63.634 134.551 62.8944C135.044 62.1548 135.291 60.9992 135.291 59.4276C135.291 57.856 135.044 56.7004 134.551 55.9608C134.058 55.2213 133.395 54.8515 132.563 54.8515C131.731 54.8515 131.069 55.2213 130.576 55.9608C130.083 56.7004 129.836 57.856 129.836 59.4276C129.836 60.9992 130.083 62.1548 130.576 62.8944C131.069 63.634 131.731 64.0038 132.563 64.0038Z"
													fill="white"
												/>
											</svg>
										</div>
										<span className="text-[24px] text-center font-montserrat font-semibold leading-[120%] text-white">
											Patients successfully discharged to community and remain
											there.
										</span>
									</>
								)}

								{curIndex === 2 && curSubIndex === 0 && (
									<>
										<div className="flex flex-row justify-center items-start">
											<div className="relative flex flex-col p-5 w-[200px] h-[200px] gap-2 rounded-full items-center justify-center">
												<div className="absolute top-0 left-0 w-full h-1/2 border-solid border-t-2 border-l-2 border-r-2 border-[#1A2141] rounded-t-full"></div>
												<div className="absolute bottom-0 left-0 w-full h-1/2 border-solid border-b-2 border-l-2 border-r-2 border-[#F7F7F7] rounded-b-full"></div>
												<span className="text-[36px] text-center font-montserrat font-extrabold leading-[100%] text-[#1A2141]">
													54%
												</span>
												<span className="text-[14px] text-center font-montserrat font-normal leading-[160%] text-[#1A2141]">
													Patients receive less than 30 days of hospice benefit
												</span>
											</div>
										</div>
									</>
								)}

								{curIndex === 2 && curSubIndex === 1 && (
									<>
										<div className="flex flex-row justify-center items-start">
											<div className="relative flex flex-col p-5 w-[200px] h-[200px] gap-2 rounded-full items-center justify-center">
												<div className="absolute top-0 left-0 w-full h-1/2 border-solid border-t-2 border-l-2 border-r-2 border-[#1A2141] rounded-t-full"></div>
												<div className="absolute bottom-0 left-0 w-full h-1/2 border-solid border-b-2 border-l-2 border-r-2 border-[#F7F7F7] rounded-b-full"></div>
												<span className="text-[36px] text-center font-montserrat font-extrabold leading-[100%] text-[#1A2141]">
													80%
												</span>
												<span className="text-[14px] text-center font-montserrat font-normal leading-[160%] text-[#1A2141]">
													of Americans would prefer to recover or die at home,
													but
													<span className="text-[14px] text-center font-montserrat font-semibold leading-[160%] text-[#1A2141]">
														<br /> only 20% actually do
													</span>
												</span>
											</div>
										</div>
									</>
								)}

								{curIndex === 3 && curSubIndex === 0 && (
									<>
										<div className="flex flex-row justify-center items-center"
										>
											<svg
												width="182"
												height="176"
												viewBox="0 0 182 176"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M48.1953 8C46.0393 10.9534 44.7106 14.2268 44.124 16.5C42.7907 21.6667 39.724 35.9 38.124 51.5C36.524 67.1 42.7907 80.3333 46.124 85L54.8017 97.5M48.1953 8C50.9394 4.24079 55.0238 1 60.624 1C70.624 1 130.791 1 159.624 1C171.624 1 171.624 15 163.624 23C174.124 31.5 172.124 39.5 168.124 48C178.624 56 178.124 64.5 172.124 72C183.624 80 182.624 97.5 172.124 97.5C163.724 97.5 120.291 97.5 99.624 97.5C104.791 103.167 115.124 119.2 115.124 138C115.124 161.5 106.624 175 97.624 175C88.624 175 88.124 169 88.124 161C88.124 154.6 88.124 148 88.124 145.5L54.8017 97.5M48.1953 8H17.123C11.9564 12.3333 1.62305 28.2 1.62305 57C1.62305 85.8 11.9564 96 17.123 97.5H54.8017"
													stroke="white"
													strokeWidth="2"
													strokeLinejoin="round"
												/>
												<circle cx="24.623" cy="26.5" r="5.5" fill="white" />
												<path
													d="M78.8271 35.0339C81.1819 35.3252 82.9783 36.1263 84.2163 37.4372C85.4544 38.7481 86.0735 40.3868 86.0735 42.3531C86.0735 43.8339 85.6972 45.1812 84.9446 46.395C84.1921 47.6088 83.0511 48.5799 81.5217 49.3081C80.0166 50.0121 78.1717 50.3641 75.9868 50.3641C74.1661 50.3641 72.4061 50.1092 70.7068 49.5994C69.0318 49.0654 67.5995 48.3371 66.41 47.4146L68.4492 43.7368C69.3717 44.5137 70.4883 45.1327 71.7992 45.5939C73.1344 46.0309 74.506 46.2494 75.914 46.2494C77.589 46.2494 78.8999 45.9095 79.8467 45.2298C80.8177 44.5258 81.3032 43.579 81.3032 42.3895C81.3032 41.2 80.842 40.2775 79.9195 39.6221C79.0213 38.9423 77.6376 38.6025 75.7683 38.6025H73.4379V35.3617L79.2277 28.4794H67.6481V24.5103H85.0175V27.6783L78.8271 35.0339ZM108.041 24.5103V27.6783L98.1361 50H93.0746L102.651 28.5159H92.6376V32.8491H88.2315V24.5103H108.041ZM116.827 38.2383C115.006 38.2383 113.537 37.595 112.421 36.3084C111.304 35.0218 110.746 33.3346 110.746 31.2469C110.746 29.1592 111.304 27.472 112.421 26.1854C113.537 24.8988 115.006 24.2554 116.827 24.2554C118.647 24.2554 120.116 24.8988 121.233 26.1854C122.374 27.4477 122.944 29.1349 122.944 31.2469C122.944 33.3589 122.374 35.0582 121.233 36.3448C120.116 37.6072 118.647 38.2383 116.827 38.2383ZM132.12 24.5103H135.689L118.283 50H114.715L132.12 24.5103ZM116.827 35.6894C117.822 35.6894 118.587 35.301 119.121 34.5241C119.679 33.7473 119.958 32.6549 119.958 31.2469C119.958 29.8389 119.679 28.7465 119.121 27.9697C118.587 27.1928 117.822 26.8044 116.827 26.8044C115.88 26.8044 115.115 27.205 114.533 28.0061C113.974 28.7829 113.695 29.8632 113.695 31.2469C113.695 32.6306 113.974 33.723 114.533 34.5241C115.115 35.301 115.88 35.6894 116.827 35.6894ZM133.541 50.2549C131.72 50.2549 130.251 49.6116 129.134 48.325C128.018 47.0383 127.459 45.3512 127.459 43.2634C127.459 41.1757 128.018 39.4886 129.134 38.2019C130.251 36.9153 131.72 36.272 133.541 36.272C135.361 36.272 136.83 36.9153 137.947 38.2019C139.088 39.4886 139.658 41.1757 139.658 43.2634C139.658 45.3512 139.088 47.0383 137.947 48.325C136.83 49.6116 135.361 50.2549 133.541 50.2549ZM133.541 47.7059C134.512 47.7059 135.276 47.3175 135.835 46.5407C136.393 45.7396 136.672 44.6472 136.672 43.2634C136.672 41.8797 136.393 40.7994 135.835 40.0226C135.276 39.2215 134.512 38.821 133.541 38.821C132.57 38.821 131.805 39.2094 131.246 39.9862C130.688 40.763 130.409 41.8554 130.409 43.2634C130.409 44.6714 130.688 45.7639 131.246 46.5407C131.805 47.3175 132.57 47.7059 133.541 47.7059Z"
													fill="white"
												/>
												<path
													d="M54.0947 57.7645H55.4384V63.863H59.2215V65H54.0947V57.7645ZM60.1583 59.4804H61.4504V65H60.1583V59.4804ZM60.8095 58.5708C60.5752 58.5708 60.3788 58.4984 60.2204 58.3537C60.0619 58.2021 59.9826 58.016 59.9826 57.7955C59.9826 57.575 60.0619 57.3924 60.2204 57.2477C60.3788 57.0961 60.5752 57.0203 60.8095 57.0203C61.0438 57.0203 61.2402 57.0927 61.3987 57.2374C61.5572 57.3752 61.6364 57.5509 61.6364 57.7645C61.6364 57.9919 61.5572 58.1849 61.3987 58.3434C61.2471 58.495 61.0507 58.5708 60.8095 58.5708ZM68.3144 59.4804L65.9474 65H64.614L62.2469 59.4804H63.5907L65.3065 63.5736L67.074 59.4804H68.3144ZM74.1594 62.2712C74.1594 62.3608 74.1525 62.4883 74.1387 62.6536H69.8078C69.8836 63.0602 70.08 63.3841 70.3969 63.6253C70.7208 63.8596 71.1205 63.9767 71.596 63.9767C72.2024 63.9767 72.702 63.7769 73.0947 63.3772L73.7873 64.1731C73.5392 64.4694 73.2257 64.6934 72.8467 64.845C72.4677 64.9966 72.0404 65.0724 71.565 65.0724C70.9586 65.0724 70.4245 64.9518 69.9628 64.7106C69.5011 64.4694 69.1428 64.1352 68.8878 63.708C68.6398 63.2738 68.5157 62.7846 68.5157 62.2402C68.5157 61.7027 68.6363 61.2203 68.8775 60.7931C69.1256 60.359 69.4667 60.0213 69.9008 59.7801C70.3349 59.5389 70.8242 59.4183 71.3686 59.4183C71.9061 59.4183 72.385 59.5389 72.8053 59.7801C73.2326 60.0144 73.5633 60.3486 73.7976 60.7827C74.0388 61.21 74.1594 61.7061 74.1594 62.2712ZM71.3686 60.452C70.9551 60.452 70.6037 60.576 70.3143 60.8241C70.0317 61.0653 69.8595 61.3892 69.7974 61.7957H72.9294C72.8742 61.396 72.7054 61.0722 72.4229 60.8241C72.1403 60.576 71.7889 60.452 71.3686 60.452ZM78.3812 57.7645H81.5441C82.3159 57.7645 83.0015 57.9161 83.601 58.2193C84.2006 58.5156 84.6657 58.9394 84.9965 59.4907C85.3272 60.0351 85.4926 60.6656 85.4926 61.3823C85.4926 62.0989 85.3272 62.7329 84.9965 63.2842C84.6657 63.8285 84.2006 64.2523 83.601 64.5555C83.0015 64.8518 82.3159 65 81.5441 65H78.3812V57.7645ZM81.4821 63.863C82.0127 63.863 82.4778 63.7631 82.8775 63.5632C83.2841 63.3565 83.5942 63.0671 83.8078 62.695C84.0283 62.316 84.1385 61.8784 84.1385 61.3823C84.1385 60.8861 84.0283 60.452 83.8078 60.0799C83.5942 59.7009 83.2841 59.4115 82.8775 59.2116C82.4778 59.0049 82.0127 58.9015 81.4821 58.9015H79.7249V63.863H81.4821ZM86.7968 59.4804H88.0888V65H86.7968V59.4804ZM87.448 58.5708C87.2137 58.5708 87.0173 58.4984 86.8588 58.3537C86.7003 58.2021 86.6211 58.016 86.6211 57.7955C86.6211 57.575 86.7003 57.3924 86.8588 57.2477C87.0173 57.0961 87.2137 57.0203 87.448 57.0203C87.6823 57.0203 87.8786 57.0927 88.0371 57.2374C88.1956 57.3752 88.2749 57.5509 88.2749 57.7645C88.2749 57.9919 88.1956 58.1849 88.0371 58.3434C87.8855 58.495 87.6891 58.5708 87.448 58.5708ZM91.4901 65.0724C91.0422 65.0724 90.6047 65.0138 90.1774 64.8966C89.7502 64.7795 89.4091 64.6313 89.1541 64.4522L89.6503 63.4702C89.8983 63.6356 90.1946 63.77 90.5392 63.8733C90.8906 63.9698 91.2352 64.018 91.5728 64.018C92.3446 64.018 92.7305 63.8148 92.7305 63.4082C92.7305 63.2152 92.6306 63.0809 92.4308 63.0051C92.2378 62.9293 91.9243 62.8569 91.4901 62.788C91.0353 62.7191 90.6632 62.6399 90.3738 62.5503C90.0913 62.4607 89.8432 62.3056 89.6296 62.0851C89.4229 61.8577 89.3195 61.5442 89.3195 61.1445C89.3195 60.6208 89.5366 60.2039 89.9707 59.8938C90.4117 59.5768 91.0043 59.4183 91.7486 59.4183C92.1276 59.4183 92.5066 59.4631 92.8856 59.5527C93.2646 59.6354 93.5746 59.7491 93.8158 59.8938L93.3197 60.8758C92.8511 60.6001 92.3239 60.4623 91.7382 60.4623C91.3592 60.4623 91.0698 60.5209 90.87 60.638C90.677 60.7483 90.5805 60.8964 90.5805 61.0825C90.5805 61.2892 90.6839 61.4374 90.8906 61.527C91.1042 61.6097 91.4316 61.6889 91.8726 61.7647C92.3136 61.8336 92.6754 61.9129 92.9579 62.0024C93.2404 62.092 93.4816 62.2436 93.6815 62.4572C93.8882 62.6709 93.9915 62.9741 93.9915 63.3668C93.9915 63.8837 93.7676 64.2971 93.3197 64.6072C92.8718 64.9173 92.2619 65.0724 91.4901 65.0724ZM97.6367 65.0724C97.0647 65.0724 96.5513 64.9518 96.0965 64.7106C95.6417 64.4694 95.2869 64.1352 95.0319 63.708C94.7769 63.2738 94.6494 62.7846 94.6494 62.2402C94.6494 61.6958 94.7769 61.21 95.0319 60.7827C95.2869 60.3555 95.6383 60.0213 96.0862 59.7801C96.541 59.5389 97.0578 59.4183 97.6367 59.4183C98.181 59.4183 98.6565 59.5286 99.0631 59.7491C99.4765 59.9696 99.7866 60.2866 99.9934 60.7001L99.0011 61.2789C98.8426 61.0239 98.6427 60.8344 98.4016 60.7104C98.1673 60.5795 97.9089 60.514 97.6263 60.514C97.144 60.514 96.7443 60.6725 96.4273 60.9895C96.1103 61.2996 95.9518 61.7165 95.9518 62.2402C95.9518 62.7639 96.1069 63.1842 96.417 63.5012C96.734 63.8113 97.1371 63.9664 97.6263 63.9664C97.9089 63.9664 98.1673 63.9043 98.4016 63.7803C98.6427 63.6494 98.8426 63.4564 99.0011 63.2015L99.9934 63.7803C99.7797 64.1938 99.4662 64.5142 99.0527 64.7416C98.6462 64.9621 98.1742 65.0724 97.6367 65.0724ZM104.192 59.4183C104.888 59.4183 105.446 59.6216 105.866 60.0282C106.287 60.4348 106.497 61.0377 106.497 61.8371V65H105.205V62.0024C105.205 61.5201 105.091 61.1583 104.864 60.9171C104.636 60.669 104.312 60.545 103.892 60.545C103.416 60.545 103.041 60.6897 102.765 60.9791C102.49 61.2617 102.352 61.6717 102.352 62.2092V65H101.06V57.3304H102.352V60.1212C102.565 59.8938 102.827 59.7215 103.137 59.6044C103.454 59.4804 103.806 59.4183 104.192 59.4183ZM110.244 59.4183C111.058 59.4183 111.678 59.6147 112.105 60.0075C112.539 60.3934 112.756 60.9791 112.756 61.7647V65H111.536V64.3281C111.378 64.5693 111.151 64.7554 110.854 64.8863C110.565 65.0103 110.213 65.0724 109.8 65.0724C109.386 65.0724 109.025 65.0034 108.715 64.8656C108.405 64.7209 108.163 64.5245 107.991 64.2765C107.826 64.0215 107.743 63.7355 107.743 63.4185C107.743 62.9224 107.926 62.5262 108.291 62.2298C108.663 61.9266 109.245 61.775 110.038 61.775H111.464V61.6924C111.464 61.3065 111.347 61.0102 111.113 60.8034C110.885 60.5967 110.544 60.4933 110.089 60.4933C109.779 60.4933 109.473 60.5416 109.169 60.638C108.873 60.7345 108.622 60.8689 108.415 61.0412L107.908 60.1005C108.198 59.88 108.546 59.7112 108.952 59.5941C109.359 59.4769 109.79 59.4183 110.244 59.4183ZM110.069 64.1317C110.393 64.1317 110.679 64.0594 110.927 63.9147C111.182 63.7631 111.361 63.5495 111.464 63.2738V62.633H110.131C109.386 62.633 109.014 62.8776 109.014 63.3668C109.014 63.6011 109.107 63.7872 109.293 63.925C109.48 64.0628 109.738 64.1317 110.069 64.1317ZM115.644 60.2866C116.016 59.7078 116.671 59.4183 117.608 59.4183V60.6484C117.498 60.6277 117.398 60.6174 117.309 60.6174C116.805 60.6174 116.413 60.7655 116.13 61.0618C115.848 61.3513 115.706 61.7716 115.706 62.3229V65H114.414V59.4804H115.644V60.2866ZM124.132 59.4804V64.1628C124.132 66.106 123.14 67.0776 121.155 67.0776C120.625 67.0776 120.122 67.0087 119.646 66.8709C119.171 66.74 118.778 66.547 118.468 66.292L119.047 65.3204C119.288 65.5203 119.591 65.6788 119.956 65.7959C120.328 65.9199 120.704 65.982 121.083 65.982C121.689 65.982 122.134 65.8441 122.416 65.5685C122.699 65.2929 122.84 64.8725 122.84 64.3075V64.018C122.62 64.2592 122.351 64.4418 122.034 64.5659C121.717 64.6899 121.369 64.7519 120.99 64.7519C120.466 64.7519 119.991 64.6417 119.563 64.4212C119.143 64.1938 118.809 63.8768 118.561 63.4702C118.32 63.0636 118.199 62.5985 118.199 62.0748C118.199 61.5511 118.32 61.0894 118.561 60.6897C118.809 60.2832 119.143 59.9696 119.563 59.7491C119.991 59.5286 120.466 59.4183 120.99 59.4183C121.39 59.4183 121.751 59.4838 122.075 59.6147C122.406 59.7457 122.682 59.9455 122.902 60.2142V59.4804H124.132ZM121.186 63.6563C121.676 63.6563 122.075 63.5116 122.385 63.2221C122.702 62.9258 122.861 62.5434 122.861 62.0748C122.861 61.6131 122.702 61.2376 122.385 60.9481C122.075 60.6587 121.676 60.514 121.186 60.514C120.69 60.514 120.284 60.6587 119.967 60.9481C119.657 61.2376 119.501 61.6131 119.501 62.0748C119.501 62.5434 119.657 62.9258 119.967 63.2221C120.284 63.5116 120.69 63.6563 121.186 63.6563ZM131.02 62.2712C131.02 62.3608 131.013 62.4883 130.999 62.6536H126.668C126.744 63.0602 126.94 63.3841 127.257 63.6253C127.581 63.8596 127.981 63.9767 128.456 63.9767C129.063 63.9767 129.562 63.7769 129.955 63.3772L130.648 64.1731C130.399 64.4694 130.086 64.6934 129.707 64.845C129.328 64.9966 128.901 65.0724 128.425 65.0724C127.819 65.0724 127.285 64.9518 126.823 64.7106C126.361 64.4694 126.003 64.1352 125.748 63.708C125.5 63.2738 125.376 62.7846 125.376 62.2402C125.376 61.7027 125.497 61.2203 125.738 60.7931C125.986 60.359 126.327 60.0213 126.761 59.7801C127.195 59.5389 127.684 59.4183 128.229 59.4183C128.766 59.4183 129.245 59.5389 129.666 59.7801C130.093 60.0144 130.424 60.3486 130.658 60.7827C130.899 61.21 131.02 61.7061 131.02 62.2712ZM128.229 60.452C127.815 60.452 127.464 60.576 127.175 60.8241C126.892 61.0653 126.72 61.3892 126.658 61.7957H129.79C129.735 61.396 129.566 61.0722 129.283 60.8241C129.001 60.576 128.649 60.452 128.229 60.452ZM133.966 65.0724C133.518 65.0724 133.081 65.0138 132.654 64.8966C132.226 64.7795 131.885 64.6313 131.63 64.4522L132.126 63.4702C132.374 63.6356 132.671 63.77 133.015 63.8733C133.367 63.9698 133.711 64.018 134.049 64.018C134.821 64.018 135.207 63.8148 135.207 63.4082C135.207 63.2152 135.107 63.0809 134.907 63.0051C134.714 62.9293 134.4 62.8569 133.966 62.788C133.511 62.7191 133.139 62.6399 132.85 62.5503C132.567 62.4607 132.319 62.3056 132.106 62.0851C131.899 61.8577 131.796 61.5442 131.796 61.1445C131.796 60.6208 132.013 60.2039 132.447 59.8938C132.888 59.5768 133.48 59.4183 134.225 59.4183C134.604 59.4183 134.983 59.4631 135.362 59.5527C135.741 59.6354 136.051 59.7491 136.292 59.8938L135.796 60.8758C135.327 60.6001 134.8 60.4623 134.214 60.4623C133.835 60.4623 133.546 60.5209 133.346 60.638C133.153 60.7483 133.057 60.8964 133.057 61.0825C133.057 61.2892 133.16 61.4374 133.367 61.527C133.58 61.6097 133.908 61.6889 134.349 61.7647C134.79 61.8336 135.152 61.9129 135.434 62.0024C135.717 62.092 135.958 62.2436 136.158 62.4572C136.364 62.6709 136.468 62.9741 136.468 63.3668C136.468 63.8837 136.244 64.2971 135.796 64.6072C135.348 64.9173 134.738 65.0724 133.966 65.0724ZM142.546 59.4183C143.359 59.4183 143.979 59.6147 144.406 60.0075C144.84 60.3934 145.057 60.9791 145.057 61.7647V65H143.838V64.3281C143.679 64.5693 143.452 64.7554 143.155 64.8863C142.866 65.0103 142.515 65.0724 142.101 65.0724C141.688 65.0724 141.326 65.0034 141.016 64.8656C140.706 64.7209 140.465 64.5245 140.292 64.2765C140.127 64.0215 140.044 63.7355 140.044 63.4185C140.044 62.9224 140.227 62.5262 140.592 62.2298C140.964 61.9266 141.546 61.775 142.339 61.775H143.765V61.6924C143.765 61.3065 143.648 61.0102 143.414 60.8034C143.187 60.5967 142.845 60.4933 142.391 60.4933C142.081 60.4933 141.774 60.5416 141.471 60.638C141.174 60.7345 140.923 60.8689 140.716 61.0412L140.21 60.1005C140.499 59.88 140.847 59.7112 141.254 59.5941C141.66 59.4769 142.091 59.4183 142.546 59.4183ZM142.37 64.1317C142.694 64.1317 142.98 64.0594 143.228 63.9147C143.483 63.7631 143.662 63.5495 143.765 63.2738V62.633H142.432C141.688 62.633 141.316 62.8776 141.316 63.3668C141.316 63.6011 141.409 63.7872 141.595 63.925C141.781 64.0628 142.039 64.1317 142.37 64.1317ZM147.946 60.2866C148.318 59.7078 148.972 59.4183 149.91 59.4183V60.6484C149.799 60.6277 149.699 60.6174 149.61 60.6174C149.107 60.6174 148.714 60.7655 148.431 61.0618C148.149 61.3513 148.008 61.7716 148.008 62.3229V65H146.716V59.4804H147.946V60.2866ZM156.144 62.2712C156.144 62.3608 156.137 62.4883 156.123 62.6536H151.792C151.868 63.0602 152.065 63.3841 152.382 63.6253C152.705 63.8596 153.105 63.9767 153.581 63.9767C154.187 63.9767 154.687 63.7769 155.079 63.3772L155.772 64.1731C155.524 64.4694 155.21 64.6934 154.831 64.845C154.452 64.9966 154.025 65.0724 153.55 65.0724C152.943 65.0724 152.409 64.9518 151.947 64.7106C151.486 64.4694 151.127 64.1352 150.872 63.708C150.624 63.2738 150.5 62.7846 150.5 62.2402C150.5 61.7027 150.621 61.2203 150.862 60.7931C151.11 60.359 151.451 60.0213 151.885 59.7801C152.32 59.5389 152.809 59.4183 153.353 59.4183C153.891 59.4183 154.37 59.5389 154.79 59.7801C155.217 60.0144 155.548 60.3486 155.782 60.7827C156.023 61.21 156.144 61.7061 156.144 62.2712ZM153.353 60.452C152.94 60.452 152.588 60.576 152.299 60.8241C152.016 61.0653 151.844 61.3892 151.782 61.7957H154.914C154.859 61.396 154.69 61.0722 154.407 60.8241C154.125 60.576 153.774 60.452 153.353 60.452ZM58.8287 77L57.3506 74.881C57.2886 74.8879 57.1956 74.8914 57.0716 74.8914H55.4384V77H54.0947V69.7645H57.0716C57.6986 69.7645 58.243 69.8679 58.7047 70.0746C59.1733 70.2813 59.5316 70.5777 59.7797 70.9635C60.0278 71.3494 60.1518 71.8077 60.1518 72.3383C60.1518 72.8827 60.0174 73.3513 59.7487 73.744C59.4868 74.1368 59.1078 74.4297 58.6117 74.6226L60.2758 77H58.8287ZM58.7977 72.3383C58.7977 71.8766 58.6461 71.5217 58.3429 71.2736C58.0397 71.0256 57.5953 70.9015 57.0095 70.9015H55.4384V73.7854H57.0095C57.5953 73.7854 58.0397 73.6613 58.3429 73.4133C58.6461 73.1583 58.7977 72.8 58.7977 72.3383ZM66.72 74.2712C66.72 74.3608 66.7131 74.4883 66.6993 74.6536H62.3684C62.4442 75.0602 62.6406 75.3841 62.9576 75.6253C63.2814 75.8596 63.6811 75.9767 64.1566 75.9767C64.763 75.9767 65.2626 75.7769 65.6554 75.3772L66.3479 76.1731C66.0998 76.4694 65.7863 76.6934 65.4073 76.845C65.0283 76.9966 64.6011 77.0724 64.1256 77.0724C63.5192 77.0724 62.9851 76.9518 62.5234 76.7106C62.0617 76.4694 61.7034 76.1352 61.4485 75.708C61.2004 75.2738 61.0763 74.7846 61.0763 74.2402C61.0763 73.7027 61.1969 73.2203 61.4381 72.7931C61.6862 72.359 62.0273 72.0213 62.4614 71.7801C62.8955 71.5389 63.3848 71.4183 63.9292 71.4183C64.4667 71.4183 64.9456 71.5389 65.3659 71.7801C65.7932 72.0144 66.1239 72.3486 66.3582 72.7827C66.5994 73.21 66.72 73.7061 66.72 74.2712ZM63.9292 72.452C63.5157 72.452 63.1643 72.576 62.8749 72.8241C62.5923 73.0653 62.4201 73.3892 62.3581 73.7957H65.49C65.4349 73.396 65.266 73.0722 64.9835 72.8241C64.701 72.576 64.3495 72.452 63.9292 72.452ZM73.0284 71.4804L70.6613 77H69.3279L66.9609 71.4804H68.3046L70.0205 75.5736L71.788 71.4804H73.0284ZM76.1652 77.0724C75.6071 77.0724 75.104 76.9518 74.6561 76.7106C74.2082 76.4694 73.8568 76.1352 73.6018 75.708C73.3537 75.2738 73.2297 74.7846 73.2297 74.2402C73.2297 73.6958 73.3537 73.21 73.6018 72.7827C73.8568 72.3555 74.2082 72.0213 74.6561 71.7801C75.104 71.5389 75.6071 71.4183 76.1652 71.4183C76.7303 71.4183 77.2368 71.5389 77.6847 71.7801C78.1326 72.0213 78.4806 72.3555 78.7286 72.7827C78.9836 73.21 79.1111 73.6958 79.1111 74.2402C79.1111 74.7846 78.9836 75.2738 78.7286 75.708C78.4806 76.1352 78.1326 76.4694 77.6847 76.7106C77.2368 76.9518 76.7303 77.0724 76.1652 77.0724ZM76.1652 75.9664C76.6407 75.9664 77.0335 75.8079 77.3436 75.4909C77.6537 75.1739 77.8087 74.757 77.8087 74.2402C77.8087 73.7234 77.6537 73.3065 77.3436 72.9895C77.0335 72.6725 76.6407 72.514 76.1652 72.514C75.6897 72.514 75.297 72.6725 74.9869 72.9895C74.6837 73.3065 74.5321 73.7234 74.5321 74.2402C74.5321 74.757 74.6837 75.1739 74.9869 75.4909C75.297 75.8079 75.6897 75.9664 76.1652 75.9664ZM82.879 77.0724C82.3071 77.0724 81.7937 76.9518 81.3389 76.7106C80.8841 76.4694 80.5292 76.1352 80.2743 75.708C80.0193 75.2738 79.8918 74.7846 79.8918 74.2402C79.8918 73.6958 80.0193 73.21 80.2743 72.7827C80.5292 72.3555 80.8807 72.0213 81.3286 71.7801C81.7834 71.5389 82.3002 71.4183 82.879 71.4183C83.4234 71.4183 83.8989 71.5286 84.3055 71.7491C84.7189 71.9696 85.029 72.2866 85.2357 72.7001L84.2434 73.2789C84.0849 73.0239 83.8851 72.8344 83.6439 72.7104C83.4096 72.5795 83.1512 72.514 82.8687 72.514C82.3863 72.514 81.9867 72.6725 81.6697 72.9895C81.3527 73.2996 81.1942 73.7165 81.1942 74.2402C81.1942 74.7639 81.3492 75.1842 81.6593 75.5012C81.9763 75.8113 82.3794 75.9664 82.8687 75.9664C83.1512 75.9664 83.4096 75.9043 83.6439 75.7803C83.8851 75.6494 84.0849 75.4564 84.2434 75.2015L85.2357 75.7803C85.0221 76.1938 84.7086 76.5142 84.2951 76.7416C83.8886 76.9621 83.4165 77.0724 82.879 77.0724ZM88.4613 71.4183C89.2744 71.4183 89.8946 71.6147 90.3218 72.0075C90.7559 72.3934 90.973 72.9791 90.973 73.7647V77H89.7533V76.3281C89.5948 76.5693 89.3674 76.7554 89.0711 76.8863C88.7817 77.0103 88.4302 77.0724 88.0168 77.0724C87.6033 77.0724 87.2416 77.0034 86.9315 76.8656C86.6214 76.7209 86.3802 76.5245 86.2079 76.2765C86.0425 76.0215 85.9598 75.7355 85.9598 75.4185C85.9598 74.9224 86.1425 74.5262 86.5077 74.2298C86.8798 73.9266 87.4621 73.775 88.2545 73.775H89.6809V73.6924C89.6809 73.3065 89.5638 73.0102 89.3295 72.8034C89.1021 72.5967 88.761 72.4933 88.3062 72.4933C87.9961 72.4933 87.6895 72.5416 87.3863 72.638C87.09 72.7345 86.8384 72.8689 86.6317 73.0412L86.1252 72.1005C86.4146 71.88 86.7626 71.7112 87.1692 71.5941C87.5758 71.4769 88.0065 71.4183 88.4613 71.4183ZM88.2855 76.1317C88.6094 76.1317 88.8954 76.0594 89.1435 75.9147C89.3984 75.7631 89.5776 75.5495 89.6809 75.2738V74.633H88.3476C87.6033 74.633 87.2312 74.8776 87.2312 75.3668C87.2312 75.6011 87.3242 75.7872 87.5103 75.925C87.6964 76.0628 87.9548 76.1317 88.2855 76.1317ZM95.9492 76.7002C95.7976 76.8243 95.6115 76.9173 95.391 76.9793C95.1774 77.0413 94.95 77.0724 94.7088 77.0724C94.1024 77.0724 93.6338 76.9139 93.3031 76.5969C92.9723 76.2799 92.8069 75.8182 92.8069 75.2118V72.5553H91.8973V71.5217H92.8069V70.2607H94.099V71.5217H95.5771V72.5553H94.099V75.1808C94.099 75.4495 94.1644 75.6563 94.2953 75.801C94.4263 75.9388 94.6158 76.0077 94.8638 76.0077C95.1533 76.0077 95.3944 75.9319 95.5874 75.7803L95.9492 76.7002ZM97.012 71.4804H98.3041V77H97.012V71.4804ZM97.6632 70.5708C97.4289 70.5708 97.2325 70.4984 97.0741 70.3537C96.9156 70.2021 96.8363 70.016 96.8363 69.7955C96.8363 69.575 96.9156 69.3924 97.0741 69.2477C97.2325 69.0961 97.4289 69.0203 97.6632 69.0203C97.8975 69.0203 98.0939 69.0927 98.2524 69.2374C98.4109 69.3752 98.4901 69.5509 98.4901 69.7645C98.4901 69.9919 98.4109 70.1849 98.2524 70.3434C98.1008 70.495 97.9044 70.5708 97.6632 70.5708ZM102.481 77.0724C101.922 77.0724 101.419 76.9518 100.972 76.7106C100.524 76.4694 100.172 76.1352 99.9172 75.708C99.6691 75.2738 99.5451 74.7846 99.5451 74.2402C99.5451 73.6958 99.6691 73.21 99.9172 72.7827C100.172 72.3555 100.524 72.0213 100.972 71.7801C101.419 71.5389 101.922 71.4183 102.481 71.4183C103.046 71.4183 103.552 71.5389 104 71.7801C104.448 72.0213 104.796 72.3555 105.044 72.7827C105.299 73.21 105.427 73.6958 105.427 74.2402C105.427 74.7846 105.299 75.2738 105.044 75.708C104.796 76.1352 104.448 76.4694 104 76.7106C103.552 76.9518 103.046 77.0724 102.481 77.0724ZM102.481 75.9664C102.956 75.9664 103.349 75.8079 103.659 75.4909C103.969 75.1739 104.124 74.757 104.124 74.2402C104.124 73.7234 103.969 73.3065 103.659 72.9895C103.349 72.6725 102.956 72.514 102.481 72.514C102.005 72.514 101.612 72.6725 101.302 72.9895C100.999 73.3065 100.847 73.7234 100.847 74.2402C100.847 74.757 100.999 75.1739 101.302 75.4909C101.612 75.8079 102.005 75.9664 102.481 75.9664ZM109.794 71.4183C110.49 71.4183 111.048 71.6216 111.468 72.0282C111.889 72.4348 112.099 73.0377 112.099 73.8371V77H110.807V74.0024C110.807 73.5201 110.693 73.1583 110.466 72.9171C110.238 72.669 109.915 72.545 109.494 72.545C109.019 72.545 108.643 72.6897 108.368 72.9791C108.092 73.2617 107.954 73.6717 107.954 74.2092V77H106.662V71.4804H107.892V72.1936C108.106 71.9386 108.374 71.7457 108.698 71.6147C109.022 71.4838 109.387 71.4183 109.794 71.4183ZM115.444 77.0724C114.996 77.0724 114.558 77.0138 114.131 76.8966C113.704 76.7795 113.362 76.6313 113.108 76.4522L113.604 75.4702C113.852 75.6356 114.148 75.77 114.493 75.8733C114.844 75.9698 115.189 76.018 115.526 76.018C116.298 76.018 116.684 75.8148 116.684 75.4082C116.684 75.2152 116.584 75.0809 116.384 75.0051C116.191 74.9293 115.878 74.8569 115.444 74.788C114.989 74.7191 114.617 74.6399 114.327 74.5503C114.045 74.4607 113.797 74.3056 113.583 74.0851C113.376 73.8577 113.273 73.5442 113.273 73.1445C113.273 72.6208 113.49 72.2039 113.924 71.8938C114.365 71.5768 114.958 71.4183 115.702 71.4183C116.081 71.4183 116.46 71.4631 116.839 71.5527C117.218 71.6354 117.528 71.7491 117.769 71.8938L117.273 72.8758C116.804 72.6001 116.277 72.4623 115.692 72.4623C115.313 72.4623 115.023 72.5209 114.823 72.638C114.63 72.7483 114.534 72.8964 114.534 73.0825C114.534 73.2892 114.637 73.4374 114.844 73.527C115.058 73.6097 115.385 73.6889 115.826 73.7647C116.267 73.8336 116.629 73.9129 116.911 74.0024C117.194 74.092 117.435 74.2436 117.635 74.4572C117.842 74.6709 117.945 74.9741 117.945 75.3668C117.945 75.8837 117.721 76.2971 117.273 76.6072C116.825 76.9173 116.215 77.0724 115.444 77.0724Z"
													fill="white"
												/>
											</svg>
										</div>
									</>
								)}

								{curIndex === 3 && curSubIndex === 1 && (
									<>
										<div className="flex flex-row justify-center items-center">
											<svg
												width="228"
												height="228"
												viewBox="0 0 228 228"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="115"
													cy="40"
													r="39"
													stroke="#9BC418"
													strokeWidth="2"
												/>
												<circle
													cx="53"
													cy="86"
													r="16"
													stroke="#9BC418"
													strokeWidth="2"
												/>
												<path
													d="M124 32V33V32ZM137 32V31V32ZM105 32V33V32ZM107 18H122V16H107V18ZM107 31V18H105V31H107ZM92 33L105 33V31L92 31L92 33ZM92 48V33H90V48H92ZM105 48H92V50H105V48ZM107 63V50H105V63H107ZM122 63H107V65H122V63ZM122 50V63H124V50H122ZM137 48H124V50H137V48ZM137 33V48H139V33H137ZM124 33L137 33V31L124 31V33ZM122 18V31H124V18H122ZM124 31H122C122 32.1046 122.895 33 124 33V31ZM139 33C139 31.8954 138.105 31 137 31V33H139ZM137 50C138.105 50 139 49.1046 139 48H137V50ZM124 50V48C122.895 48 122 48.8954 122 50H124ZM122 65C123.105 65 124 64.1046 124 63H122V65ZM105 63C105 64.1046 105.895 65 107 65V63H105ZM105 50H107C107 48.8954 106.105 48 105 48V50ZM90 48C90 49.1046 90.8954 50 92 50V48H92H90ZM92 31C90.8954 31 90 31.8954 90 33H92H92L92 31ZM105 31V33C106.105 33 107 32.1046 107 31H105ZM122 18H124C124 16.8954 123.105 16 122 16V18ZM107 16C105.895 16 105 16.8954 105 18H107V18V16Z"
													fill="#9BC418"
												/>
												<path
													d="M61 130C61 116.745 71.7452 106 85 106H183C196.255 106 207 116.745 207 130V163H61V130Z"
													stroke="#9BC418"
													strokeWidth="2"
												/>
												<path
													d="M61.5 136.5L23.9608 98.9399C23.3456 98.3243 23 97.4896 23 96.6194V83C23 76.9249 18.0751 72 12 72V72C5.92487 72 1 76.9249 1 83V214C1 220.075 5.92487 225 12 225V225C18.0751 225 23 220.075 23 214V192C23 189.791 24.7909 188 27 188H201C203.209 188 205 189.791 205 192V214C205 220.075 209.925 225 216 225V225C222.075 225 227 220.075 227 214V157C227 145.954 218.046 137 207 137V137"
													stroke="#9BC418"
													strokeWidth="2"
												/>
												<path
													d="M103.603 132.269C105.278 132.269 106.783 132.597 108.118 133.252C109.453 133.884 110.497 134.794 111.249 135.983C112.002 137.173 112.378 138.545 112.378 140.098C112.378 141.749 111.966 143.206 111.14 144.468C110.315 145.706 109.198 146.665 107.79 147.345C106.382 148.024 104.804 148.364 103.056 148.364C99.5607 148.364 96.8418 147.272 94.8997 145.087C92.9819 142.902 92.023 139.77 92.023 135.692C92.023 132.828 92.5449 130.388 93.5888 128.373C94.6327 126.334 96.0892 124.792 97.9585 123.748C99.852 122.68 102.037 122.146 104.513 122.146C105.824 122.146 107.05 122.292 108.191 122.583C109.356 122.85 110.363 123.251 111.213 123.785L109.465 127.353C108.203 126.528 106.589 126.115 104.622 126.115C102.17 126.115 100.253 126.868 98.8688 128.373C97.4851 129.878 96.7932 132.051 96.7932 134.891V134.927C97.5458 134.054 98.5047 133.398 99.6699 132.961C100.835 132.5 102.146 132.269 103.603 132.269ZM102.801 144.65C104.282 144.65 105.484 144.262 106.406 143.485C107.329 142.684 107.79 141.628 107.79 140.317C107.79 138.982 107.329 137.926 106.406 137.149C105.484 136.372 104.246 135.983 102.692 135.983C101.163 135.983 99.9127 136.396 98.9416 137.222C97.9949 138.047 97.5215 139.091 97.5215 140.353C97.5215 141.591 97.9827 142.623 98.9052 143.448C99.852 144.249 101.151 144.65 102.801 144.65ZM118.049 148.255C117.223 148.255 116.519 147.976 115.937 147.417C115.354 146.835 115.063 146.106 115.063 145.233C115.063 144.334 115.342 143.606 115.9 143.048C116.483 142.489 117.199 142.21 118.049 142.21C118.898 142.21 119.602 142.489 120.161 143.048C120.743 143.606 121.035 144.334 121.035 145.233C121.035 146.106 120.743 146.835 120.161 147.417C119.578 147.976 118.874 148.255 118.049 148.255ZM140.986 134.6C142.321 135.207 143.341 136.032 144.045 137.076C144.773 138.095 145.137 139.297 145.137 140.681C145.137 142.234 144.7 143.594 143.826 144.759C142.977 145.924 141.763 146.823 140.185 147.454C138.607 148.061 136.774 148.364 134.686 148.364C132.599 148.364 130.766 148.061 129.188 147.454C127.634 146.823 126.433 145.924 125.583 144.759C124.733 143.594 124.308 142.234 124.308 140.681C124.308 139.297 124.66 138.095 125.364 137.076C126.068 136.032 127.076 135.207 128.387 134.6C127.367 134.041 126.578 133.313 126.02 132.415C125.486 131.492 125.219 130.436 125.219 129.247C125.219 127.815 125.607 126.564 126.384 125.496C127.185 124.428 128.302 123.603 129.734 123.02C131.166 122.438 132.817 122.146 134.686 122.146C136.58 122.146 138.243 122.438 139.675 123.02C141.107 123.603 142.224 124.428 143.025 125.496C143.826 126.564 144.227 127.815 144.227 129.247C144.227 130.436 143.948 131.48 143.389 132.378C142.831 133.277 142.03 134.017 140.986 134.6ZM134.686 125.86C133.205 125.86 132.028 126.176 131.154 126.807C130.305 127.438 129.88 128.324 129.88 129.465C129.88 130.558 130.305 131.432 131.154 132.087C132.028 132.718 133.205 133.034 134.686 133.034C136.191 133.034 137.381 132.718 138.255 132.087C139.129 131.432 139.566 130.558 139.566 129.465C139.566 128.324 139.117 127.438 138.218 126.807C137.345 126.176 136.167 125.86 134.686 125.86ZM134.686 144.65C136.434 144.65 137.818 144.286 138.837 143.558C139.857 142.829 140.367 141.822 140.367 140.535C140.367 139.273 139.857 138.278 138.837 137.549C137.818 136.821 136.434 136.457 134.686 136.457C132.938 136.457 131.567 136.821 130.572 137.549C129.576 138.278 129.079 139.273 129.079 140.535C129.079 141.822 129.576 142.829 130.572 143.558C131.567 144.286 132.938 144.65 134.686 144.65ZM153.533 136.238C151.713 136.238 150.244 135.595 149.127 134.308C148.011 133.022 147.452 131.335 147.452 129.247C147.452 127.159 148.011 125.472 149.127 124.185C150.244 122.899 151.713 122.255 153.533 122.255C155.354 122.255 156.823 122.899 157.939 124.185C159.08 125.448 159.651 127.135 159.651 129.247C159.651 131.359 159.08 133.058 157.939 134.345C156.823 135.607 155.354 136.238 153.533 136.238ZM168.827 122.51H172.396L154.99 148H151.421L168.827 122.51ZM153.533 133.689C154.529 133.689 155.293 133.301 155.827 132.524C156.386 131.747 156.665 130.655 156.665 129.247C156.665 127.839 156.386 126.746 155.827 125.97C155.293 125.193 154.529 124.804 153.533 124.804C152.587 124.804 151.822 125.205 151.239 126.006C150.681 126.783 150.402 127.863 150.402 129.247C150.402 130.631 150.681 131.723 151.239 132.524C151.822 133.301 152.587 133.689 153.533 133.689ZM170.247 148.255C168.427 148.255 166.958 147.612 165.841 146.325C164.724 145.038 164.166 143.351 164.166 141.263C164.166 139.176 164.724 137.489 165.841 136.202C166.958 134.915 168.427 134.272 170.247 134.272C172.068 134.272 173.537 134.915 174.653 136.202C175.794 137.489 176.365 139.176 176.365 141.263C176.365 143.351 175.794 145.038 174.653 146.325C173.537 147.612 172.068 148.255 170.247 148.255ZM170.247 145.706C171.218 145.706 171.983 145.318 172.541 144.541C173.1 143.74 173.379 142.647 173.379 141.263C173.379 139.88 173.1 138.799 172.541 138.023C171.983 137.222 171.218 136.821 170.247 136.821C169.276 136.821 168.512 137.209 167.953 137.986C167.395 138.763 167.116 139.855 167.116 141.263C167.116 142.671 167.395 143.764 167.953 144.541C168.512 145.318 169.276 145.706 170.247 145.706Z"
													fill="white"
												/>
												<path
													d="M42.1255 199.608C42.9395 199.608 43.6461 199.742 44.2454 200.01C44.8537 200.279 45.3188 200.663 45.6408 201.164C45.9628 201.665 46.1239 202.26 46.1239 202.949C46.1239 203.629 45.9628 204.223 45.6408 204.733C45.3188 205.234 44.8537 205.619 44.2454 205.887C43.6461 206.156 42.9395 206.29 42.1255 206.29H40.0055V209H38.2612V199.608H42.1255ZM42.045 204.814C42.8053 204.814 43.3822 204.653 43.7758 204.331C44.1694 204.009 44.3662 203.548 44.3662 202.949C44.3662 202.349 44.1694 201.889 43.7758 201.567C43.3822 201.245 42.8053 201.084 42.045 201.084H40.0055V204.814H42.045ZM50.3763 201.755C51.4319 201.755 52.2369 202.01 52.7915 202.519C53.355 203.02 53.6368 203.781 53.6368 204.8V209H52.0535V208.128C51.8478 208.441 51.5526 208.682 51.168 208.852C50.7923 209.013 50.3361 209.094 49.7994 209.094C49.2627 209.094 48.7931 209.004 48.3906 208.826C47.988 208.638 47.675 208.383 47.4513 208.061C47.2367 207.73 47.1293 207.359 47.1293 206.947C47.1293 206.303 47.3664 205.789 47.8405 205.404C48.3235 205.011 49.0793 204.814 50.108 204.814H51.9596V204.706C51.9596 204.206 51.8075 203.821 51.5034 203.553C51.2082 203.284 50.7655 203.15 50.1751 203.15C49.7726 203.15 49.3745 203.213 48.9809 203.338C48.5963 203.463 48.2698 203.637 48.0015 203.861L47.344 202.64C47.7197 202.354 48.1714 202.135 48.6992 201.983C49.2269 201.831 49.786 201.755 50.3763 201.755ZM50.1483 207.873C50.5687 207.873 50.9399 207.779 51.2619 207.591C51.5929 207.394 51.8254 207.117 51.9596 206.759V205.927H50.2288C49.2627 205.927 48.7797 206.245 48.7797 206.88C48.7797 207.184 48.9004 207.426 49.1419 207.605C49.3835 207.783 49.7189 207.873 50.1483 207.873ZM60.0962 208.611C59.8994 208.772 59.6579 208.893 59.3717 208.973C59.0944 209.054 58.7992 209.094 58.4861 209.094C57.699 209.094 57.0907 208.888 56.6614 208.477C56.232 208.065 56.0173 207.466 56.0173 206.679V203.231H54.8366V201.889H56.0173V200.252H57.6945V201.889H59.6132V203.231H57.6945V206.639C57.6945 206.987 57.7795 207.256 57.9494 207.444C58.1194 207.622 58.3654 207.712 58.6874 207.712C59.0631 207.712 59.3762 207.614 59.6266 207.417L60.0962 208.611ZM61.4759 201.835H63.1531V209H61.4759V201.835ZM62.3212 200.654C62.0171 200.654 61.7622 200.56 61.5564 200.373C61.3507 200.176 61.2478 199.934 61.2478 199.648C61.2478 199.362 61.3507 199.125 61.5564 198.937C61.7622 198.74 62.0171 198.642 62.3212 198.642C62.6254 198.642 62.8803 198.736 63.086 198.924C63.2918 199.102 63.3946 199.33 63.3946 199.608C63.3946 199.903 63.2918 200.153 63.086 200.359C62.8892 200.556 62.6343 200.654 62.3212 200.654ZM72.09 205.458C72.09 205.574 72.081 205.74 72.0631 205.954H66.4412C66.5396 206.482 66.7945 206.902 67.206 207.215C67.6264 207.52 68.1452 207.672 68.7624 207.672C69.5496 207.672 70.1981 207.412 70.708 206.893L71.6069 207.927C71.2849 208.311 70.8779 208.602 70.3859 208.799C69.894 208.996 69.3394 209.094 68.7222 209.094C67.935 209.094 67.2418 208.937 66.6425 208.624C66.0432 208.311 65.578 207.877 65.2471 207.323C64.925 206.759 64.764 206.124 64.764 205.418C64.764 204.72 64.9206 204.094 65.2336 203.539C65.5557 202.976 65.9984 202.537 66.562 202.224C67.1255 201.911 67.7606 201.755 68.4672 201.755C69.165 201.755 69.7866 201.911 70.3323 202.224C70.8869 202.528 71.3162 202.962 71.6203 203.526C71.9334 204.08 72.09 204.724 72.09 205.458ZM68.4672 203.096C67.9306 203.096 67.4744 203.257 67.0987 203.579C66.7319 203.892 66.5083 204.313 66.4278 204.841H70.4933C70.4217 204.322 70.2026 203.901 69.8358 203.579C69.4691 203.257 69.0129 203.096 68.4672 203.096ZM77.7665 201.755C78.6699 201.755 79.3945 202.018 79.9401 202.546C80.4857 203.074 80.7586 203.857 80.7586 204.894V209H79.0814V205.109C79.0814 204.483 78.9338 204.013 78.6386 203.7C78.3434 203.378 77.923 203.217 77.3774 203.217C76.7602 203.217 76.2727 203.405 75.9149 203.781C75.5571 204.147 75.3782 204.68 75.3782 205.377V209H73.701V201.835H75.2977V202.761C75.575 202.43 75.9238 202.179 76.3442 202.01C76.7646 201.84 77.2387 201.755 77.7665 201.755ZM87.1932 208.611C86.9964 208.772 86.7549 208.893 86.4686 208.973C86.1913 209.054 85.8962 209.094 85.5831 209.094C84.7959 209.094 84.1877 208.888 83.7583 208.477C83.329 208.065 83.1143 207.466 83.1143 206.679V203.231H81.9335V201.889H83.1143V200.252H84.7915V201.889H86.7101V203.231H84.7915V206.639C84.7915 206.987 84.8764 207.256 85.0464 207.444C85.2163 207.622 85.4623 207.712 85.7843 207.712C86.16 207.712 86.4731 207.614 86.7236 207.417L87.1932 208.611ZM90.7867 209.094C90.2053 209.094 89.6373 209.018 89.0827 208.866C88.5281 208.714 88.0854 208.521 87.7544 208.289L88.3984 207.014C88.7205 207.229 89.1051 207.403 89.5523 207.537C90.0085 207.663 90.4558 207.725 90.8941 207.725C91.8959 207.725 92.3968 207.461 92.3968 206.934C92.3968 206.683 92.2671 206.509 92.0077 206.41C91.7573 206.312 91.3503 206.218 90.7867 206.129C90.1964 206.039 89.7133 205.936 89.3377 205.82C88.9709 205.704 88.6489 205.503 88.3716 205.216C88.1033 204.921 87.9691 204.514 87.9691 203.995C87.9691 203.315 88.2508 202.774 88.8144 202.372C89.3869 201.96 90.1561 201.755 91.1222 201.755C91.6141 201.755 92.1061 201.813 92.5981 201.929C93.0901 202.036 93.4926 202.184 93.8057 202.372L93.1616 203.646C92.5534 203.289 91.8691 203.11 91.1088 203.11C90.6168 203.11 90.2411 203.186 89.9817 203.338C89.7312 203.481 89.606 203.673 89.606 203.915C89.606 204.183 89.7402 204.375 90.0085 204.492C90.2858 204.599 90.7107 204.702 91.2832 204.8C91.8557 204.89 92.3253 204.993 92.692 205.109C93.0588 205.225 93.3718 205.422 93.6312 205.699C93.8996 205.977 94.0338 206.37 94.0338 206.88C94.0338 207.551 93.7431 208.088 93.1616 208.49C92.5802 208.893 91.7886 209.094 90.7867 209.094ZM110.363 201.835L107.72 209H106.11L104.258 204.062L102.38 209H100.77L98.1397 201.835H99.723L101.615 207.122L103.587 201.835H104.996L106.928 207.148L108.874 201.835H110.363ZM111.516 201.835H113.193V209H111.516V201.835ZM112.361 200.654C112.057 200.654 111.802 200.56 111.597 200.373C111.391 200.176 111.288 199.934 111.288 199.648C111.288 199.362 111.391 199.125 111.597 198.937C111.802 198.74 112.057 198.642 112.361 198.642C112.666 198.642 112.921 198.736 113.126 198.924C113.332 199.102 113.435 199.33 113.435 199.608C113.435 199.903 113.332 200.153 113.126 200.359C112.929 200.556 112.675 200.654 112.361 200.654ZM115.395 199.044H117.072V209H115.395V199.044ZM119.273 199.044H120.95V209H119.273V199.044ZM44.8358 221.458C44.8358 221.574 44.8268 221.74 44.8089 221.954H39.187C39.2854 222.482 39.5404 222.902 39.9518 223.215C40.3723 223.52 40.8911 223.672 41.5083 223.672C42.2954 223.672 42.9439 223.412 43.4538 222.893L44.3528 223.927C44.0307 224.311 43.6237 224.602 43.1318 224.799C42.6398 224.996 42.0852 225.094 41.468 225.094C40.6809 225.094 39.9876 224.937 39.3883 224.624C38.789 224.311 38.3239 223.877 37.9929 223.323C37.6709 222.759 37.5099 222.124 37.5099 221.418C37.5099 220.72 37.6664 220.094 37.9795 219.539C38.3015 218.976 38.7443 218.537 39.3078 218.224C39.8713 217.911 40.5064 217.755 41.2131 217.755C41.9108 217.755 42.5325 217.911 43.0781 218.224C43.6327 218.528 44.062 218.962 44.3662 219.526C44.6792 220.08 44.8358 220.724 44.8358 221.458ZM41.2131 219.096C40.6764 219.096 40.2202 219.257 39.8445 219.579C39.4778 219.892 39.2541 220.313 39.1736 220.841H43.2391C43.1675 220.322 42.9484 219.901 42.5817 219.579C42.2149 219.257 41.7587 219.096 41.2131 219.096ZM50.8122 225L48.974 222.518L47.1224 225H45.2708L48.0616 221.364L45.3916 217.835H47.2566L49.0143 220.183L50.772 217.835H52.5833L49.8998 221.337L52.7041 225H50.8122ZM57.9133 217.755C58.611 217.755 59.2327 217.907 59.7783 218.211C60.3329 218.515 60.7667 218.944 61.0798 219.499C61.3929 220.053 61.5494 220.693 61.5494 221.418C61.5494 222.142 61.3929 222.786 61.0798 223.35C60.7667 223.904 60.3329 224.334 59.7783 224.638C59.2327 224.942 58.611 225.094 57.9133 225.094C56.9472 225.094 56.1824 224.772 55.6189 224.128V227.603H53.9417V217.835H55.5384V218.774C55.8157 218.434 56.1556 218.179 56.5581 218.01C56.9696 217.84 57.4213 217.755 57.9133 217.755ZM57.7254 223.658C58.3426 223.658 58.848 223.453 59.2416 223.041C59.6441 222.63 59.8454 222.088 59.8454 221.418C59.8454 220.747 59.6441 220.206 59.2416 219.794C58.848 219.383 58.3426 219.177 57.7254 219.177C57.3229 219.177 56.9606 219.271 56.6386 219.459C56.3166 219.637 56.0617 219.897 55.8738 220.237C55.686 220.577 55.5921 220.97 55.5921 221.418C55.5921 221.865 55.686 222.258 55.8738 222.598C56.0617 222.938 56.3166 223.202 56.6386 223.39C56.9606 223.569 57.3229 223.658 57.7254 223.658ZM69.8756 221.458C69.8756 221.574 69.8666 221.74 69.8487 221.954H64.2268C64.3252 222.482 64.5801 222.902 64.9916 223.215C65.412 223.52 65.9308 223.672 66.548 223.672C67.3352 223.672 67.9837 223.412 68.4936 222.893L69.3925 223.927C69.0705 224.311 68.6635 224.602 68.1715 224.799C67.6796 224.996 67.125 225.094 66.5078 225.094C65.7206 225.094 65.0274 224.937 64.4281 224.624C63.8288 224.311 63.3636 223.877 63.0327 223.323C62.7106 222.759 62.5496 222.124 62.5496 221.418C62.5496 220.72 62.7062 220.094 63.0192 219.539C63.3413 218.976 63.784 218.537 64.3476 218.224C64.9111 217.911 65.5462 217.755 66.2528 217.755C66.9506 217.755 67.5722 217.911 68.1179 218.224C68.6725 218.528 69.1018 218.962 69.4059 219.526C69.719 220.08 69.8756 220.724 69.8756 221.458ZM66.2528 219.096C65.7162 219.096 65.26 219.257 64.8843 219.579C64.5175 219.892 64.2939 220.313 64.2134 220.841H68.2789C68.2073 220.322 67.9882 219.901 67.6214 219.579C67.2547 219.257 66.7985 219.096 66.2528 219.096ZM73.0833 218.882C73.5663 218.13 74.4161 217.755 75.6326 217.755V219.351C75.4895 219.324 75.3598 219.311 75.2435 219.311C74.5905 219.311 74.0806 219.503 73.7139 219.888C73.3471 220.264 73.1638 220.809 73.1638 221.525V225H71.4866V217.835H73.0833V218.882ZM77.0554 217.835H78.7325V225H77.0554V217.835ZM77.9007 216.654C77.5965 216.654 77.3416 216.56 77.1359 216.373C76.9301 216.176 76.8273 215.934 76.8273 215.648C76.8273 215.362 76.9301 215.125 77.1359 214.937C77.3416 214.74 77.5965 214.642 77.9007 214.642C78.2048 214.642 78.4597 214.736 78.6654 214.924C78.8712 215.102 78.974 215.33 78.974 215.608C78.974 215.903 78.8712 216.153 78.6654 216.359C78.4687 216.556 78.2137 216.654 77.9007 216.654ZM87.6694 221.458C87.6694 221.574 87.6604 221.74 87.6426 221.954H82.0206C82.119 222.482 82.374 222.902 82.7854 223.215C83.2059 223.52 83.7247 223.672 84.3419 223.672C85.129 223.672 85.7775 223.412 86.2874 222.893L87.1864 223.927C86.8643 224.311 86.4573 224.602 85.9654 224.799C85.4734 224.996 84.9188 225.094 84.3016 225.094C83.5145 225.094 82.8212 224.937 82.2219 224.624C81.6226 224.311 81.1575 223.877 80.8265 223.323C80.5045 222.759 80.3435 222.124 80.3435 221.418C80.3435 220.72 80.5 220.094 80.8131 219.539C81.1351 218.976 81.5779 218.537 82.1414 218.224C82.7049 217.911 83.34 217.755 84.0467 217.755C84.7444 217.755 85.3661 217.911 85.9117 218.224C86.4663 218.528 86.8956 218.962 87.1998 219.526C87.5129 220.08 87.6694 220.724 87.6694 221.458ZM84.0467 219.096C83.51 219.096 83.0538 219.257 82.6781 219.579C82.3114 219.892 82.0877 220.313 82.0072 220.841H86.0727C86.0012 220.322 85.782 219.901 85.4153 219.579C85.0485 219.257 84.5923 219.096 84.0467 219.096ZM93.3459 217.755C94.2494 217.755 94.9739 218.018 95.5195 218.546C96.0652 219.074 96.338 219.857 96.338 220.894V225H94.6608V221.109C94.6608 220.483 94.5132 220.013 94.218 219.7C93.9229 219.378 93.5024 219.217 92.9568 219.217C92.3396 219.217 91.8521 219.405 91.4943 219.781C91.1365 220.147 90.9576 220.68 90.9576 221.377V225H89.2804V217.835H90.8771V218.761C91.1544 218.43 91.5032 218.179 91.9237 218.01C92.3441 217.84 92.8182 217.755 93.3459 217.755ZM101.818 225.094C101.076 225.094 100.41 224.937 99.8192 224.624C99.2288 224.311 98.7682 223.877 98.4372 223.323C98.1062 222.759 97.9408 222.124 97.9408 221.418C97.9408 220.711 98.1062 220.08 98.4372 219.526C98.7682 218.971 99.2244 218.537 99.8058 218.224C100.396 217.911 101.067 217.755 101.818 217.755C102.525 217.755 103.142 217.898 103.67 218.184C104.207 218.47 104.609 218.882 104.878 219.418L103.589 220.17C103.384 219.839 103.124 219.593 102.811 219.432C102.507 219.262 102.172 219.177 101.805 219.177C101.179 219.177 100.66 219.383 100.249 219.794C99.8371 220.197 99.6313 220.738 99.6313 221.418C99.6313 222.097 99.8326 222.643 100.235 223.054C100.647 223.457 101.17 223.658 101.805 223.658C102.172 223.658 102.507 223.578 102.811 223.417C103.124 223.247 103.384 222.996 103.589 222.665L104.878 223.417C104.6 223.953 104.193 224.369 103.657 224.665C103.129 224.951 102.516 225.094 101.818 225.094ZM112.958 221.458C112.958 221.574 112.949 221.74 112.931 221.954H107.309C107.408 222.482 107.663 222.902 108.074 223.215C108.495 223.52 109.013 223.672 109.631 223.672C110.418 223.672 111.066 223.412 111.576 222.893L112.475 223.927C112.153 224.311 111.746 224.602 111.254 224.799C110.762 224.996 110.208 225.094 109.59 225.094C108.803 225.094 108.11 224.937 107.511 224.624C106.911 224.311 106.446 223.877 106.115 223.323C105.793 222.759 105.632 222.124 105.632 221.418C105.632 220.72 105.789 220.094 106.102 219.539C106.424 218.976 106.867 218.537 107.43 218.224C107.994 217.911 108.629 217.755 109.335 217.755C110.033 217.755 110.655 217.911 111.2 218.224C111.755 218.528 112.184 218.962 112.489 219.526C112.802 220.08 112.958 220.724 112.958 221.458ZM109.335 219.096C108.799 219.096 108.343 219.257 107.967 219.579C107.6 219.892 107.376 220.313 107.296 220.841H111.361C111.29 220.322 111.071 219.901 110.704 219.579C110.337 219.257 109.881 219.096 109.335 219.096ZM121.014 217.755C122.07 217.755 122.875 218.01 123.43 218.519C123.993 219.02 124.275 219.781 124.275 220.8V225H122.692V224.128C122.486 224.441 122.191 224.682 121.806 224.852C121.43 225.013 120.974 225.094 120.438 225.094C119.901 225.094 119.431 225.004 119.029 224.826C118.626 224.638 118.313 224.383 118.089 224.061C117.875 223.73 117.767 223.359 117.767 222.947C117.767 222.303 118.004 221.789 118.479 221.404C118.962 221.011 119.717 220.814 120.746 220.814H122.598V220.706C122.598 220.206 122.446 219.821 122.142 219.553C121.846 219.284 121.404 219.15 120.813 219.15C120.411 219.15 120.013 219.213 119.619 219.338C119.234 219.463 118.908 219.637 118.64 219.861L117.982 218.64C118.358 218.354 118.81 218.135 119.337 217.983C119.865 217.831 120.424 217.755 121.014 217.755ZM120.786 223.873C121.207 223.873 121.578 223.779 121.9 223.591C122.231 223.394 122.464 223.117 122.598 222.759V221.927H120.867C119.901 221.927 119.418 222.245 119.418 222.88C119.418 223.184 119.539 223.426 119.78 223.605C120.022 223.783 120.357 223.873 120.786 223.873ZM133.208 225.134C132.484 225.134 131.781 225.031 131.102 224.826C130.431 224.62 129.898 224.347 129.505 224.007L130.109 222.652C130.493 222.956 130.963 223.207 131.517 223.403C132.081 223.591 132.645 223.685 133.208 223.685C133.906 223.685 134.425 223.573 134.764 223.35C135.113 223.126 135.288 222.831 135.288 222.464C135.288 222.196 135.189 221.977 134.993 221.807C134.805 221.628 134.563 221.489 134.268 221.391C133.973 221.292 133.57 221.181 133.06 221.055C132.345 220.885 131.763 220.715 131.316 220.545C130.878 220.375 130.498 220.112 130.176 219.754C129.863 219.387 129.706 218.895 129.706 218.278C129.706 217.759 129.845 217.289 130.122 216.869C130.408 216.44 130.833 216.1 131.397 215.849C131.969 215.599 132.667 215.474 133.49 215.474C134.062 215.474 134.626 215.545 135.18 215.688C135.735 215.831 136.214 216.037 136.616 216.305L136.066 217.661C135.655 217.419 135.225 217.236 134.778 217.111C134.331 216.985 133.897 216.923 133.476 216.923C132.788 216.923 132.273 217.039 131.933 217.272C131.602 217.504 131.437 217.813 131.437 218.197C131.437 218.466 131.531 218.685 131.719 218.855C131.916 219.025 132.162 219.159 132.457 219.257C132.752 219.356 133.154 219.468 133.664 219.593C134.362 219.754 134.934 219.924 135.382 220.103C135.829 220.273 136.209 220.536 136.522 220.894C136.844 221.252 137.005 221.735 137.005 222.343C137.005 222.862 136.862 223.332 136.576 223.752C136.299 224.173 135.874 224.508 135.301 224.758C134.729 225.009 134.031 225.134 133.208 225.134ZM138.735 215.608H142.841C143.842 215.608 144.732 215.805 145.511 216.198C146.289 216.583 146.893 217.133 147.322 217.849C147.751 218.555 147.966 219.374 147.966 220.304C147.966 221.234 147.751 222.057 147.322 222.773C146.893 223.479 146.289 224.029 145.511 224.423C144.732 224.808 143.842 225 142.841 225H138.735V215.608ZM142.76 223.524C143.449 223.524 144.053 223.394 144.571 223.135C145.099 222.867 145.502 222.491 145.779 222.008C146.065 221.516 146.208 220.948 146.208 220.304C146.208 219.66 146.065 219.096 145.779 218.613C145.502 218.121 145.099 217.746 144.571 217.486C144.053 217.218 143.449 217.084 142.76 217.084H140.479V223.524H142.76ZM149.659 217.835H151.336V225H149.659V217.835ZM150.504 216.654C150.2 216.654 149.945 216.56 149.739 216.373C149.534 216.176 149.431 215.934 149.431 215.648C149.431 215.362 149.534 215.125 149.739 214.937C149.945 214.74 150.2 214.642 150.504 214.642C150.808 214.642 151.063 214.736 151.269 214.924C151.475 215.102 151.578 215.33 151.578 215.608C151.578 215.903 151.475 216.153 151.269 216.359C151.072 216.556 150.817 216.654 150.504 216.654ZM158.046 225.134C157.097 225.134 156.239 224.928 155.469 224.517C154.709 224.097 154.11 223.52 153.672 222.786C153.242 222.053 153.028 221.225 153.028 220.304C153.028 219.383 153.247 218.555 153.685 217.822C154.123 217.088 154.723 216.516 155.483 216.104C156.252 215.684 157.111 215.474 158.059 215.474C158.828 215.474 159.531 215.608 160.166 215.876C160.801 216.144 161.337 216.534 161.776 217.043L160.649 218.103C159.969 217.37 159.132 217.003 158.14 217.003C157.496 217.003 156.919 217.146 156.409 217.433C155.899 217.71 155.501 218.099 155.215 218.6C154.928 219.101 154.785 219.669 154.785 220.304C154.785 220.939 154.928 221.507 155.215 222.008C155.501 222.509 155.899 222.902 156.409 223.189C156.919 223.466 157.496 223.605 158.14 223.605C159.132 223.605 159.969 223.233 160.649 222.491L161.776 223.564C161.337 224.074 160.796 224.463 160.152 224.732C159.517 225 158.815 225.134 158.046 225.134ZM163.993 225.094C163.689 225.094 163.429 224.991 163.215 224.785C163 224.571 162.893 224.302 162.893 223.98C162.893 223.649 162.996 223.381 163.201 223.175C163.416 222.969 163.68 222.867 163.993 222.867C164.306 222.867 164.565 222.969 164.771 223.175C164.986 223.381 165.093 223.649 165.093 223.98C165.093 224.302 164.986 224.571 164.771 224.785C164.557 224.991 164.297 225.094 163.993 225.094Z"
													fill="white"
												/>
											</svg>
										</div>
									</>
								)}

								{curIndex === 3 && curSubIndex === 2 && (
									<>
										<div className="flex flex-row justify-center items-start">
											<div className="relative flex flex-col p-5 w-[200px] h-[200px] gap-2 rounded-full items-center justify-center">
												<div className="absolute top-0 left-0 w-full h-1/2 border-solid border-t-2 border-l-2 border-r-2 border-[#9BC418] rounded-t-full"></div>
												<div className="absolute bottom-0 left-0 w-full h-1/2 border-solid border-b-2 border-l-2 border-r-2 border-[#F7F7F7] rounded-b-full"></div>
												<span className="text-[36px] text-center font-montserrat font-extrabold leading-[100%] text-white">
													47.9%
												</span>
												<span className="text-[14px] text-center font-montserrat font-normal leading-[160%] text-white">
													received visits on at least 2 of the final 3 days of
													their life.
												</span>
											</div>
										</div>
									</>
								)}
							</div>
							<div className="flex flex-col justify-center flex-1 basis-0 gap-[20px]">
								<span className="text-[#1A2141] font-montserrat text-left text-[24px] font-semibold leading-[120%]">
									Without {cardsInfo[curIndex].subTitle}
								</span>
								<ul className="list-disc flex flex-col gap-[20px] pl-[20px]"
									style={{ padding: '0px', marginTop: '0px', paddingLeft: '15px' }}
								>
									{cardsInfo[curIndex].cardInfo[curSubIndex].challenges.map(
										(challenge, index) => (
											<li
												key={index}
												className="text-[#1A2141] font-montserrat text-[16px] font-normal leading-[150%]"
											>
												{challenge}
											</li>
										),
									)}
								</ul>
							</div>
						</div>
					) : (
						<div className="flex md:flex-row flex-col gap-[40px] rounded-[20px]">
							<img
								className="w-full md:w-[70%] h-auto md:h-[445px] object-contain"
								src={
									cardsInfo[curIndex].cardInfo[curSubIndex].nonChallenges.src
								}
								alt="NonChallenge"
							/>
							<div className="flex flex-col gap-[20px] justify-center">
								<span className="flex text-2xl font-semibold leading-[120%] text-white">
									{
										cardsInfo[curIndex].cardInfo[curSubIndex].nonChallenges
											.shortTitle
									}
								</span>
								<ul className="list-disc flex flex-col px-4 md:px-0 gap-[20px]">
									{cardsInfo[curIndex].cardInfo[
										curSubIndex
									].nonChallenges.contents.map((content, index) => (
										<li
											key={index}
											className="text-white font-montserrat text-[16px] font-normal leading-[150%]"
										>
											{content}
										</li>
									))}
								</ul>
								<div className="flex flex-row gap-[8px]">
									<a
										href={
											cardsInfo[curIndex].cardInfo[curSubIndex].nonChallenges
												.cta
										}
										className="text-[16px] font-semibold font-montserrat leading-[120%] !hover:text-[#9BC418] text-[#9BC418]"
									>
										Learn More
									</a>
									<div className="flex flex-col justify-center h-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="17"
											viewBox="0 0 16 17"
											fill="none"
										>
											<path
												d="M8 4.5L12 8.5M12 8.5L8 12.5M12 8.5H4"
												stroke="#9BC418"
												strokeWidth="1.6"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<svg
					className="md:absolute md:block hidden right-[20px] top-[20px] cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					onClick={() => setModalShow(false)}
				>
					<circle cx="16" cy="16" r="15.5" stroke="#1A2141" />
					<path
						d="M20.9497 11.0502L16 16M16 16L11.0503 11.0502M16 16L11.0503 20.9497M16 16L20.9497 20.9497"
						stroke="#1A2141"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default PulseModal;
