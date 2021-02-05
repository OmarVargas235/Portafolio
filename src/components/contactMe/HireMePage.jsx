import React from 'react';
import Title from '../../layaut/Title';

const HireMePage = () => (
	
	<section className="hireMe">
		<div className="container py-5 w-50">
			<Title 
				title='Hire Me.'
				text=''
			/>
			
			<p>I am available for freelance work. Connect with me via phone:
				<span className="text-light font-weight-bold"> (713)-489-3015</span> or email: <span className="text-light font-weight-bold">ov1356272@gmail.com</span>
			</p>

			<form className="needs-validation" noValidate>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Your Name *" required />

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
				</div>

				<div className="form-group">
					<input type="email" className="form-control" placeholder="Your Email *" required />

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
					<input type="text" className="form-control" placeholder="Write a Subect" required />

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
					<textarea rows="2" className="form-control" placeholder="Your Message" required></textarea>

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<button className="btn btn-color font-weight-bold mt-3">SUBMIT</button>
			</form>
		</div>
	</section>
)

export default HireMePage;