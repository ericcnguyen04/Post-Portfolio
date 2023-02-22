export default function Resume() {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('ENSE resume.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'ENSE resume.pdf';
				alink.click();
			})
		})
	}

    return(
        <div>
            <h3>Click on below button to download PDF file</h3>
            <button onClick={onButtonClick}>
                Download PDF
            </button>
        </div>
    )
}
