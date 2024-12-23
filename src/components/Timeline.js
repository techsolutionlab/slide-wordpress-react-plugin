import React from 'react';
import ArrowBack from '../assets/svgs/Arrow-Back.svg';
import ArrowNext from '../assets/svgs/Arrow-Next.svg';

const Timeline = ( {
	cardsInfo,
	curIndex,
	curSubIndex,
	setTranslatePosition,
} ) => {
	const setPosition = ( index, subIndex ) => {
		let position = 296;
		for ( let j = 0; j < index; j++ ) {
			position += 480 * cardsInfo[ j ].cardInfo.length + 336;
		}
		position += 480 * subIndex;
		setTranslatePosition( position );
	};

	return (
		<div className="relative flex flex-row items-center justify-center px-5 py-6 my-6 md:my-10 h-[56px] flex-shrink-0">
			<div
				className="flex justify-center items-center p-4 bg-[#A1CFC2] rounded-full cursor-pointer pulse-arrow-button"
				onClick={ () => { setPosition( curIndex - 1 < 0 ? cardsInfo.length - 1 : curIndex - 1, 0 )} }
			>
				<img
					src={ ArrowBack }
					width={ 16 }
					height={ 16 }
					alt="Prev Logo"
				/>
			</div>
			<div className="relative h-full flex mx-10 gap-4 flex-row items-center">
				{ Array.from(
					{ length: cardsInfo[ curIndex ].cardInfo.length },
					( _, i ) =>
						i === curSubIndex ? (
							<div
								key={ i }
								className="flex flex-col justify-center items-center bg-white border-solid border-[2px] border-[#1A2141] w-[42px] h-[42px] flex-shrink-0 z-[20] rounded-full cursor-pointer"
								onClick={ () => setPosition( curIndex, i ) }
							>
								<div className="flex flex-col justify-center items-center bg-[#1A2141] w-[34px] h-[34px] flex-shrink-0 rounded-full">
									<span className="text-[#F7F7F7] text-center font-montserrat font-semibold text-[18px]">
										{ i + 1 }
									</span>
								</div>
							</div>
						) : (
							<div
								key={ i }
								className="circle flex flex-col justify-center items-center bg-[#A1CFC2] w-[34px] h-[34px] flex-shrink-0 rounded-full z-[20] cursor-pointer"
								onClick={ () => setPosition( curIndex, i ) }
							>
								<div className="flex flex-col justify-center items-center bg-[#A1CFC2] w-[34px] h-[34px] flex-shrink-0 rounded-full">
									<span className="text-[#1A2141] text-center font-montserrat font-semibold text-[18px]">
										{ i + 1 }
									</span>
								</div>
							</div>
						)
				) }
			</div>

			<div
				className={ `absolute top-[27px] h-[2px] bg-[#A1CFC2] z-[5] `}
				style={{
					width: curIndex !== 2 ? '230px' : '180px'
					// 222, 176
				}}
			></div>

			<div
				className="flex justify-center items-center p-4 bg-[#A1CFC2] pulse-arrow-button rounded-full cursor-pointer"
				onClick={ () =>
					setPosition(
						curIndex + 1 > cardsInfo.length - 1
							? 0
							: curIndex + 1,
						0
					)
				}
			>
				<img
					src={ ArrowNext }
					width={ 16 }
					height={ 16 }
					alt="Prev Logo"
				/>
			</div>
		</div>
	);
};

export default Timeline;
