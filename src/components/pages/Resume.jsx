import Button from 'react-bootstrap/Button';

export default function Resume() {

	// Function will execute on click of button
	// will download a file
	// const onButtonClick = () => {
	// 	// using Java Script method to get PDF file
	// 	fetch('ENSE resume.pdf').then(response => {
	// 		response.blob().then(blob => {
	// 			// Creating new object of PDF file
	// 			const fileURL = window.URL.createObjectURL(blob);
	// 			// Setting various property values
	// 			let alink = document.createElement('a');
	// 			alink.href = fileURL;
	// 			alink.download = 'ENSE resume.pdf';
	// 			alink.click();
	// 		})
	// 	})
	// }

    return (
        <div className='background'>
			<div className='qualifications'>
				<div className='certificateContainer'>
					<img src="/content/Screen Shot 2023-02-22 at 7.20.49 PM.png" alt='my certification from General Assembly' className="certificate"></img>
				</div>

				<div className='resume'>
					<center>
						<h3>My Resume</h3>
						<a href='https://drive.google.com/drive/folders/1sFoTrm961pRG26RDRp8n_wZAQ3al1hHo?usp=sharing'>
							<Button variant="primary">
							Explore
							</Button>{' '}
						</a>
					</center>
				</div>
			</div>
        </div>
    )
}
