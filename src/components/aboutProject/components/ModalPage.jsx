import React from 'react';
import BtnArrow from '../../../layaut/BtnArrow';
import { ReactComponent   as FullScreen1} from '../../../asset/icons/fullScreen1.svg';
import {ReactComponent as FullScreen2} from '../../../asset/icons/fullScreen2.svg';
import { ReactComponent as Close } from '../../../asset/icons/close.svg';
import { ReactComponent as ArrowLeft } from '../../../asset/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../../asset/icons/arrow_right.svg';

const ModalPage = ({ index, data, fullscreen, setFullscreen, modalRef, numberImg, nextOrPrevImg, setImgCarouselActive }) => (
									
	<div className="modal fade pr-0" id={`modal-${index}`} ref={modalRef}>
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header d-flex justify-content-end align-items-center">
					{
						fullscreen ? <FullScreen2 onClick={() => setFullscreen(false)} /> 
						: <FullScreen1 onClick={() => setFullscreen(true)} />
					}
					<Close 
						type="button" 
						className="ml-3" 
						data-dismiss="modal"
						onClick={() => setTimeout(() => setImgCarouselActive(numberImg), 200)}
					/>
				</div>

				<div className="modal-body px-5">
					<div id="myCarousel" className="carousel slide" data-interval="false">

						<div className="carousel-inner">
							{
								data.gallery.map((img, i) => (
									<div 
										className={`carousel-item ${index === i ? 'active' : ''}`} 
										key={i}
									>
										<img src={img} alt="img" className="img-fluid" />
									</div>
								))
							}
						</div>
						
						<BtnArrow 
							classCarrousel='carousel-control-prev'
							dataSlide='prev'
							nextOrPrevImg={nextOrPrevImg}
							Icon={ArrowLeft}
						/>

						<BtnArrow 
							classCarrousel='carousel-control-next'
							dataSlide='next'
							nextOrPrevImg={nextOrPrevImg}
							Icon={ArrowRight}
						/>
					</div>
				</div>

				<div className="modal-footer">
					<p>{ numberImg + 1 } of { data.gallery.length }</p>
				</div>
			</div>
		</div>
	</div>
)

export default ModalPage;