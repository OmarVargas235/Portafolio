import React from 'react';
import Title from '../../layaut/Title';
import Alert from '../../layaut/Alert'

const HireMePage = ({ handleChange, handleSubmit, messagesAlert, loadingSendEmail, isEN, translate }) => (
	<section className="hireMe" id="contact">
		<div className="container py-5 w-50">
			<Title 
				title={`${isEN ? translate('TITLE') : translate('TITULO')}`}
				text=''
			/>
			
			<p>{isEN ? translate('DESCRIPTION') : translate('DESCRIPCION')}
				<span className="text-light font-weight-bold"> (+58)-412-4179433</span> {isEN ? 'or email'  : 'o correo'}: <span className="text-light font-weight-bold">ov1356272@gmail.com</span>
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
						placeholder={`${isEN ? translate('placeholderName') : translate('placeholderNombre')} *`}
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
						placeholder={`${isEN ? translate('placeholderEmail') : translate('placeholderCorreo')} *`}
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
						placeholder={`${isEN ? translate('placeholderSubject') : translate('placeholderTema')}`}
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
						placeholder={`${isEN ? translate('placeholderMessage') : translate('placeholderMensaje')}`}
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
					disabled={ Object.keys(messagesAlert).length > 0 || loadingSendEmail }
				>{isEN ? 'SUBMIT' : 'ENVIAR'}</button>
			</form>
		</div>

		{
			loadingSendEmail ? <Alert 
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