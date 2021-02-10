import React from 'react';
import Title from '../../layaut/Title';
import Alert from '../../layaut/Alert'

const HireMePage = ({ handleChange, handleSubmit, messagesAlert, loadingEmail }) => (
	
	<section className="hireMe">
		<div className="container py-5 w-50">
			<Title 
				title='Hire Me.'
				text=''
			/>
			
			<p>I am available for freelance work. Connect with me via phone:
				<span className="text-light font-weight-bold"> (+57)-311-667-2266</span> or email: <span className="text-light font-weight-bold">ov1356272@gmail.com</span>
			</p>

			<form 
				className="needs-validation"
				onSubmit={handleSubmit}
				noValidate
			>
				<div className="form-group">
					<input 
						name="name"
						type="text" 
						className="form-control" 
						placeholder="Your Name *"
						autoComplete="off"
						onChange={handleChange}
						required			 
					/>

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
					<input 
						name="email"
						type="email" 
						className="form-control" 
						placeholder="Your Email *"
						onChange={handleChange}
						required
					/>

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
					<input 
						name="subject"
						type="text" 
						className="form-control" 
						placeholder="Write a Subect"
						autoComplete="off"
						onChange={handleChange}
						required
					/>

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<div className="form-group">
					<textarea
						name="message" 
						rows="2" 
						className="form-control" 
						placeholder="Your Message"
						autoComplete="off"
						onChange={handleChange}
						required
					></textarea>

					<div className="valid-feedback">Valid.</div>
					<div className="invalid-feedback">Please fill out this field.</div>
				</div>

				<button 
					className="btn btn-color font-weight-bold mt-3"
					type="submit"
					disabled={ Object.keys(messagesAlert).length > 0 || loadingEmail }
				>SUBMIT</button>
			</form>
		</div>

		{
			loadingEmail ? <Alert 
					typeAlert='alert-success'
					messageAlert='Loading email...'
					index={0}
					sendLoading={true}
				/>
			: null 
		}

		{
			Object.keys(messagesAlert).length > 0 
			? messagesAlert.message.map((messageAlert, index) => (
				<Alert 
					key={index}
					typeAlert={messagesAlert.ok}
					messageAlert={messageAlert}
					index={index}
				/> 
			))
			: null
		}
	</section>
)

export default HireMePage;