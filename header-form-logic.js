document.addEventListener('DOMContentLoaded', function () {
	initializePostcodeLookup(
		'#delivery-search',
		'#delivery-search-button',
		'#Delivery-Address-First-Line',
		'#Delivery-Address-City',
		'#Delivery-Address-Postcode',
		'Delivery'
	);
	initializePostcodeLookup(
		'#billing-search',
		'#billing-search-button',
		'#Billing-Address-First-Line',
		'#Billing-Address-City',
		'#Billing-Address-Postcode',
		'Billing'
	);

	initializeFormNavigation();
	initializeCheckboxToggle(
		'#Company-Details-VAT-registered-checkbox',
		'#Company-Details-VAT-registration'
	);
	initializeCompanyTypeSelection();
	initializeDatePicker('#Company-Details-Date-picker');

	initializePostcodeLookup(
		'#reg-search',
		'#reg-search-button',
		'#Reg-Address-First-Line',
		'#Reg-Address-City',
		'#Reg-Address-Postcode',
		'Register'
	);

	initializePostcodeLookup(
		'#trading-search',
		'#trading-search-button',
		'#Trading-Address-First-Line',
		'#Trading-Address-City',
		'#Trading-Address-Postcode',
		'Trading'
	);
	initializePostcodeLookup(
		'#bank-search',
		'#bank-search-button',
		'#Bank-Address-First-Line',
		'#Bank-Address-City',
		'#Bank-Address-Postcode',
		'Bank'
	);
	initializeMultiSelect('#criteria_other_providers', 'Select Other providers');
	initializeMultiSelect('#Criteria-Channels', 'Select Channels');
	addDefaultOptionToSelect('set-default-select', 'Select');
	addDefaultOptionToSelect('select-modern', 'Select your address');
	initializeMultiStepForm();
	toggleButtonWithClass('#confirm_agreement_chkbox', '#partner_agreement_btn');
	switchForm(
		'#confirm_agreement_chkbox',
		'#partner_agreement_btn',
		'#partner_agreement_form',
		'#partner_agreement_confirmation_form'
	);
	setCurrentDate('#partner_agreement_confirmation_cur_date');
	// Usage: Set the IP address in the target element
	setIPAddress('#partner_agreement_confirmation_ip');
	initializePdfHandler('#partner_agreement_confirmation_btn', {
		curForm: '#partner_agreement_confirmation_form',
		nextForm: '#self_billing_agreement_form',
		formSelector: '#partner_agreement_form',
		title: 'Partner Agreement Confirmation',
		downloadFilename: 'partner_agreement.pdf',
		emailFieldName: 'email',
		webhookUrl:
			'https://prod-46.uksouth.logic.azure.com/workflows/0725daa15e4a42f996ff2c9b61d9b15f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9QTEWPyCdVCJrlTJe5VznGwnAVf_q9N3EthSalMQ8hA',
	});

	toggleButtonWithClass(
		'#confirm_self_billing_agree_chkbox',
		'#self_billing_agreement_btn'
	);
	switchForm(
		'#confirm_self_billing_agree_chkbox',
		'#self_billing_agreement_btn',
		'#self_billing_agreement_form',
		'#confirmation_self_billing_agree_form'
	);
	setCurrentDate('#self_billing_cur_date');
	setIPAddress('#self_billing_ip');
	initializePdfHandler('#self_billing_confirmation_btn', {
		curForm: '#confirmation_self_billing_agree_form',
		nextForm: '#confirmation_self_billing_agree_form',
		formSelector: '#self_billing_agreement_form',
		title: 'Self Billing Agreement Confirmation',
		downloadFilename: 'Self-Billing Agreement.pdf',
		emailFieldName: 'email',
		webhookUrl:
			'https://prod-09.uksouth.logic.azure.com:443/workflows/adc2994fde0c492981e334d10318e3cc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ODswH80OD7bbrkK12RH3snBpuArTY2Xkurs26K6jDwg',
	});
	initializeFileUpload('vat-file-upload');
	initializeVATUploadCheckbox(
		'Company-Details-VAT-registered-checkbox',
		'vat-file-upload'
	);
	hideElementsBySelector('.choices__input--cloned');
	addDynamicPlaceholder('.choices', 'Select');
	sameAsAddr(
		'Trading-Address',
		'Trading-Address-First-Line',
		'Trading-Address-Second-Line',
		'Trading-Address-Third-Line',
		'Trading-Address-City',
		'Trading-Address-Postcode'
	);
	sameAsAddr(
		'Billing-Address',
		'Billing-Address-First-Line',
		'Billing-Address-Second-Line',
		'Billing-Address-Third-Line',
		'Billing-Address-City',
		'Billing-Address-Postcode'
	);
	sameAsAddr(
		'Delivery-Address',
		'Delivery-Address-First-Line',
		'Delivery-Address-Second-Line',
		'Delivery-Address-Third-Line',
		'Delivery-Address-City',
		'Delivery-Address-Postcode'
	);

	otherEvent('Trading-Address', 'addr-trading');
	otherEvent('Billing-Address', 'addr-billing');
	otherEvent('Delivery-Address', 'addr-delivery');

	copyContactDetails(
		'Contact-Master-User',
		'Master-Contacts-Title',
		'Master-Contacts-First-Name',
		'Master-Contact-Last-Name',
		'Master-Contact-Role-Dropdown',
		'Master-Contacts-Job-title',
		'Master-Contacts-Mobile-Phonenumber',
		'Master-Contacts-Email',
		'Master-Contacts-Authorised-signatory-checkbox',
		'Master-Contacts-Portal-user-checkbox'
	);
	copyContactDetails(
		'Contacts-Renewal-Contact',
		'Renewal-Contacts-Title',
		'Renewal-Contacts-First-Name',
		'Renewal-Contact-Last-Name',
		'Renewal-Contact-Role-Dropdown',
		'Renewal-Contacts-Job-title',
		'Renewal-Contacts-Mobile-Phonenumber',
		'Renewal-Contacts-Email',
		'Renewal-Contacts-Authorised-signatory-checkbox',
		'Renewal-Contacts-Portal-user-checkbox'
	);
	copyContactDetails(
		'Contacts-Financial-Contact',
		'Financial-Contacts-Title',
		'Financial-Contacts-First-Name',
		'Financial-Contact-Last-Name',
		'Financial-Contact-Role-Dropdown',
		'Financial-Contacts-Job-title',
		'Financial-Contacts-Mobile-Phonenumber',
		'Financial-Contacts-Email',
		'Financial-Contacts-Authorised-signatory-checkbox',
		'Financial-Contacts-Portal-user-checkbox'
	);

	otherEvent('Contact-Master-User', 'contacts-master-page');
	otherEvent('Contacts-Renewal-Contact', 'contacts-renewal-page');
	otherEvent('Contacts-Financial-Contact', 'contacts-financial-page');
	// Usage: Call this function for any dropdown class or ID
	setDropdownColor('.select-field');
});

function setDropdownColor(
	selector,
	defaultColor = '#b1b1b1',
	selectedColor = 'rgb(0, 0, 0)'
) {
	const dropdowns = document.querySelectorAll(selector);

	dropdowns.forEach((dropdown) => {
		function updateColor() {
			dropdown.style.color = dropdown.value ? selectedColor : defaultColor;
		}

		// Initialize color on page load
		updateColor();

		// Update color on selection change
		dropdown.addEventListener('change', updateColor);
	});
}

function moveNext(current, nextId) {
	let value = current.value.replace(/\D/g, ''); // Remove non-digits
	current.value = value;
	if (current.value.length === 2) {
		document.getElementById(nextId).focus(); // Move to the next field
	}
}

async function generatePDFPartner(title, formData) {
	try {
		// Hide .no-print elements at the start of the try block
		document.querySelectorAll('.no-print').forEach((el) => {
			el.style.display = 'none';
		});

		// Clone content safely
		let extractedContent = document.createElement('div');
		extractedContent.innerHTML = Array.from(
			document.querySelectorAll('#pdf-content .w-embed')
		)
			.map((element) => element.outerHTML)
			.join('');

		extractedContent.style.fontSize = '9px'; // Adjust as needed
		// Change font size for headers (h1 to h6)
		extractedContent
			.querySelectorAll('h1')
			.forEach((el) => (el.style.fontSize = '17px'));
		extractedContent
			.querySelectorAll('h2')
			.forEach((el) => (el.style.fontSize = '15px'));
		extractedContent
			.querySelectorAll('h3')
			.forEach((el) => (el.style.fontSize = '13px'));
		extractedContent
			.querySelectorAll('h4')
			.forEach((el) => (el.style.fontSize = '12px'));
		extractedContent
			.querySelectorAll('h5')
			.forEach((el) => (el.style.fontSize = '11px'));
		extractedContent
			.querySelectorAll('h6')
			.forEach((el) => (el.style.fontSize = '10px'));

		extractedContent.style.lineHeight = '1.3'; // Adjust as needed, 1 is compact
		extractedContent
			.querySelectorAll('h1, h2, h3, h4, h5, h6')
			.forEach((el) => {
				el.style.lineHeight = '1'; // Adjust as needed (1 is compact, 1.2 is standard)
			});
		// Delay to allow images and styles to load properly
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Define high-quality PDF options
		const options = {
			margin: [15, 15, 15, 15], // Reduce margins slightly
			filename: title,
			image: { type: 'jpeg', quality: 1 }, // Use PNG for higher quality
			html2canvas: {
				scale: 1, // Increase scale for high resolution
				useCORS: true,
				logging: false,
				scrollX: 0,
				scrollY: 0,
				allowTaint: true,
			},
			jsPDF: {
				unit: 'mm',
				format: 'a4',
				orientation: 'portrait',
				precision: 12, // Keep precision high
			},
		};

		// Convert content to PDF
		const pdf = await html2pdf()
			.set(options)
			.from(extractedContent)
			.toPdf()
			.get('pdf');
		const firstName =
			document.getElementById('Contacts-First-Name').value || '';
		const lastName = document.getElementById('Contact-Last-Name').value || '';
		const companyName =
			document.getElementById('Company-Details-Company-name').value || '';
		// Get current date in DD/MM/YYYY format
		const today = new Date();
		const formattedDate = `${today.getDate()}/${
			today.getMonth() + 1
		}/${today.getFullYear()}`;
		// Get total number of pages
		const totalPages = pdf.internal.getNumberOfPages();

		// Get the footer HTML content
		//let footerContent = document.querySelector("#pdf-footer").innerHTML;

		// Add footer content to the last page
		pdf.setPage(totalPages);

		// Get page width and height
		const pageWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();

		// Draw a grey rectangle for the footer background
		const footerHeight = 30; // Height of the footer background
		pdf.setFillColor(200, 200, 200); // Grey color (RGB)
		pdf.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, 'F'); // 'F' for fill

		// Set font for the footer text
		pdf.setFontSize(10);
		pdf.setTextColor(0, 0, 0); // Black text

		// Add the footer text content (left side)
		pdf.text('Signed by: Tom Wollin', 25, pageHeight - footerHeight + 10); // Left signature
		pdf.text('On behalf of: plan.com', 25, pageHeight - footerHeight + 15);
		pdf.text(`Date: ${formattedDate}`, 25, pageHeight - footerHeight + 20);

		// Add the footer text content (right side)
		pdf.text(
			`Signed by: ${firstName} ${lastName}`,
			pageWidth / 2 + 25,
			pageHeight - footerHeight + 10
		); // Right signature
		pdf.text(
			`On behalf of: ${companyName}`,
			pageWidth / 2 + 25,
			pageHeight - footerHeight + 15
		);
		pdf.text(
			`Date: ${formattedDate}`,
			pageWidth / 2 + 25,
			pageHeight - footerHeight + 20
		);

		// Save the PDF
		await pdf.save('Partner Agreement.pdf');

		// Show them again at the end of the try block
		document.querySelectorAll('.no-print').forEach((el) => {
			el.style.display = '';
		});

		return pdf;
	} catch (error) {
		// Always restore header/footer even if it breaks
		document.querySelectorAll('.no-print').forEach((el) => {
			el.style.display = '';
		});
		console.error('Error generating PDF:', error);
		throw error;
	}
}

function copyContactDetails(
	eventID,
	title,
	firstname,
	lastname,
	role,
	jobtitle,
	mobile,
	email,
	authorised,
	portal
) {
	document.getElementById(eventID).addEventListener('change', function () {
		if (this.value === 'Same as Primary Contact') {
			// Define mappings between source and target elements
			const fieldMappings = [
				{ source: 'Contacts-Title', target: title },
				{ source: 'Contacts-First-Name', target: firstname },
				{ source: 'Contact-Last-Name', target: lastname },
				{ source: 'Contact-Role-Dropdown', target: role },
				{ source: 'Contacts-Job-title', target: jobtitle },
				{ source: 'Contacts-Mobile-Phonenumber', target: mobile },
				{ source: 'Contacts-Email', target: email },
				{
					source: 'Contacts-Authorised-signatory-checkbox',
					target: authorised,
					type: 'checkbox',
				},
				{
					source: 'Contacts-Portal-user-checkbox',
					target: portal,
					type: 'checkbox',
				},
			];

			fieldMappings.forEach(({ source, target, type }) => {
				const sourceElement = document.getElementById(source);
				const targetElement = document.getElementById(target);

				if (sourceElement && targetElement) {
					if (type === 'checkbox') {
						targetElement.checked = sourceElement.checked;
					} else {
						targetElement.value = sourceElement.value;
					}
				}
			});
		}
	});
}

function otherEvent(eventID, targetID) {
	document.getElementById(eventID).addEventListener('change', function () {
		const tradingDiv = document.getElementById(targetID);
		tradingDiv.style.display = this.value === 'Other' ? 'block' : 'none';
	});
}

function handleContactSameAsPrimary(selectedId) {
	// Define contact mappings with target fields to be copied from Master Contact
	const contactMappings = {
		'Contact-Master-User': [
			'Master-Contacts-Title',
			'Master-Contacts-First-Name',
			'Master-Contact-Last-Name',
			'Master-Contact-Role-Dropdown',
			'Master-Contacts-Job-title',
			'Master-Contacts-Mobile-Phonenumber',
			'Master-Contacts-Email',
			'Master-Contacts-Authorised-signatory-checkbox',
			'Master-Contacts-Portal-user-checkbox',
		],
		'Contacts-Renewal-Contact': [
			'Renewal-Contacts-Title',
			'Renewal-Contacts-First-Name',
			'Renewal-Contact-Last-Name',
			'Renewal-Contact-Role-Dropdown',
			'Renewal-Contacts-Job-title',
			'Renewal-Contacts-Mobile-Phonenumber',
			'Renewal-Contacts-Email',
			'Renewal-Contacts-Authorised-signatory-checkbox',
			'Renewal-Contacts-Portal-user-checkbox',
		],
		'Contacts-Financial-Contact': [
			'Financial-Contacts-Title',
			'Financial-Contacts-First-Name',
			'Financial-Contact-Last-Name',
			'Financial-Contact-Role-Dropdown',
			'Financial-Contacts-Job-title',
			'Financial-Contacts-Mobile-Phonenumber',
			'Financial-Contacts-Email',
			'Financial-Contacts-Authorised-signatory-checkbox',
			'Financial-Contacts-Portal-user-checkbox',
		],
	};

	// Check if the selected ID exists in the mappings
	if (contactMappings[selectedId]) {
		// console.log("contactMapping", selectedId);
		// Call copyContactDetails function to copy the values
		checkCopyContactDetails(selectedId, ...contactMappings[selectedId]);
	}
}
function checkCopyContactDetails(
	eventId,
	title,
	firstname,
	lastname,
	role,
	jobtitle,
	mobile,
	email,
	authorised,
	portal
) {
	const selectElement = document.getElementById(eventId);
	if (!selectElement) return; // Exit if the dropdown doesn't exist
	function updateContactFields(value) {
		if (value === 'Same as Primary Contact') {
			// Define mappings between source and target elements
			const fieldMappings = [
				{ source: 'Contacts-Title', target: title },
				{ source: 'Contacts-First-Name', target: firstname },
				{ source: 'Contact-Last-Name', target: lastname },
				{ source: 'Contact-Role-Dropdown', target: role },
				{ source: 'Contacts-Job-title', target: jobtitle },
				{ source: 'Contacts-Mobile-Phonenumber', target: mobile },
				{ source: 'Contacts-Email', target: email },
				{
					source: 'Contacts-Authorised-signatory-checkbox',
					target: authorised,
					type: 'checkbox',
				},
				{
					source: 'Contacts-Portal-user-checkbox',
					target: portal,
					type: 'checkbox',
				},
			];

			fieldMappings.forEach(({ source, target, type }) => {
				const sourceElement = document.getElementById(source);
				const targetElement = document.getElementById(target);

				if (sourceElement && targetElement) {
					if (type === 'checkbox') {
						targetElement.checked = sourceElement.checked;
					} else {
						targetElement.value = sourceElement.value;
					}
				}
			});
		}
	}
	// Run on page load (if preselected)
	updateContactFields(selectElement.value);
	// Listen for changes in the dropdown
	//   selectElement.addEventListener("change", updateContactFields);
}

function checkSelectedAdditionalValue(selector, targetValue, callback) {
	const dropdowns = document.querySelectorAll(selector);
	//   console.log("dropdowns:", dropdowns);
	dropdowns.forEach((dropdown) => {
		if (dropdown.value === targetValue && typeof callback === 'function') {
			//   console.log(dropdown.id);
			callback(dropdown.id); // Pass the selected dropdown ID to the callback
		}
	});
}
function handleAddressSameAsPrimary(selectedId) {
	//   console.log("handleAddressSameAsPrimary:", selectedId);
	const addressMappings = {
		'Trading-Address': [
			'Trading-Address-First-Line',
			'Trading-Address-Second-Line',
			'Trading-Address-Third-Line',
			'City-Trading-Address',
			'Trading-Address-Postcode',
		],
		'Billing-Address': [
			'Billing-Address-First-Line',
			'Billing-Address-Second-Line',
			'Billing-Address-Third-Line',
			'City-Billing-Address',
			'Billing-Address-Postcode',
		],
		'Delivery-Address': [
			'Delivery-Address-First-Line',
			'Delivery-Address-Second-Line',
			'Delivery-Address-Third-Line',
			'City-Delivery-Address',
			'Delivery-Address-Postcode',
		],
	};

	if (addressMappings[selectedId]) {
		// console.log("addressMapping", selectedId);
		checkSameAsAddr(selectedId, ...addressMappings[selectedId]);
	}
}

function checkSameAsAddr(eventId, addr1, addr2, addr3, city, postcode) {
	const selectElement = document.getElementById(eventId);
	//   console.log("checkSameAsAddr:", checkSameAsAddr);
	if (!selectElement) return; // Exit if the dropdown doesn't exist

	function updateAddressFields(value) {
		if (value === 'Same as registered address') {
			// Define mappings from primary registered address fields to target fields
			const idMappings = {
				'Reg-Address-First-Line': addr1,
				'Reg-Address-Second-Line': addr2,
				'Reg-Address-Third-Line': addr3,
				'Reg-Address-City': city,
				'Reg-Address-Postcode': postcode,
			};

			Object.keys(idMappings).forEach((sourceId) => {
				const targetId = idMappings[sourceId];
				const sourceElement = document.getElementById(sourceId);
				const targetElement = document.getElementById(targetId);

				if (sourceElement && targetElement) {
					targetElement.value = sourceElement.value; // Copy the value
				}
			});
		}
	}
	// Run once on page load (if needed)
	updateAddressFields(selectElement.value);
	// Attach event listener to run when selection changes
	//   selectElement.addEventListener("change", updateAddressFields);
}

function sameAsAddr(eventId, addr1, addr2, addr3, city, postcode) {
	const selectElement = document.getElementById(eventId);

	selectElement.addEventListener('change', function () {
		if (selectElement.value === 'Same as registered address') {
			// Define mappings from id1 -> id2, id3 -> id4, etc.
			const idMappings = {
				'Reg-Address-First-Line': addr1,
				'Reg-Address-Second-Line': addr2,
				'Reg-Address-Third-Line': addr3,
				'Reg-Address-City': city,
				'Reg-Address-Postcode': postcode,
			};

			Object.keys(idMappings).forEach((sourceId) => {
				const targetId = idMappings[sourceId];
				const sourceElement = document.getElementById(sourceId);
				const targetElement = document.getElementById(targetId);

				if (sourceElement && targetElement) {
					targetElement.value = sourceElement.value;
				}
			});
		}
	});
}

function updateElementValue(sourceId, targetId) {
	// Get the HTML content of the source element
	const sourceContent = document.getElementById(sourceId).value || '';
	// Set the content of the target element
	document.getElementById(targetId).innerHTML = `<strong>${
		' ' + sourceContent
	}</strong>`;
}

function addDynamicPlaceholder(selector, placeholderText) {
	document.querySelectorAll(selector).forEach((choicesContainer) => {
		const choicesInner = choicesContainer.querySelector('.choices__inner');
		const selectedItems = choicesContainer.querySelector(
			'.choices__list--multiple'
		);
		if (!choicesInner || !selectedItems) return; // Skip if elements are missing
		let placeholder = choicesContainer.querySelector('.custom-placeholder');
		if (!placeholder) {
			placeholder = document.createElement('span');
			placeholder.className = 'custom-placeholder';
			placeholder.textContent = placeholderText;
			placeholder.style.color = 'black'; // Light gray text
			placeholder.style.position = 'absolute';
			placeholder.style.left = '10px';
			placeholder.style.top = '50%';
			placeholder.style.transform = 'translateY(-50%)';
			placeholder.style.pointerEvents = 'none'; // Prevent interactions

			choicesInner.style.position = 'relative'; // Ensure positioning works
			choicesInner.appendChild(placeholder);
		}

		function updatePlaceholderVisibility() {
			if (selectedItems.children.length > 0) {
				placeholder.style.display = 'none'; // Hide placeholder if items exist
			} else {
				placeholder.style.display = 'block'; // Show if no items are selected
			}
		}

		// Initial check on page load
		updatePlaceholderVisibility();

		// Observe changes in selected items and update placeholder visibility
		const observer = new MutationObserver(updatePlaceholderVisibility);
		observer.observe(selectedItems, { childList: true });
	});
}

function hideElementsBySelector(selector) {
	document.querySelectorAll(selector).forEach((element) => {
		element.hidden = true;
	});
}

function initializeVATUploadCheckbox(checkboxId, uploadContainerId) {
	const vatCheckbox = document.getElementById(checkboxId);
	const vatUploadContainer = document.getElementById(uploadContainerId);
	const vatFileInput = vatUploadContainer.querySelector("input[type='file']");
	const errorMessage = vatUploadContainer.nextElementSibling; // Error message element

	if (!vatCheckbox || !vatUploadContainer || !vatFileInput || !errorMessage) {
		console.error('Missing required elements for VAT checkbox control.');
		return;
	}

	// Function to toggle the file upload state
	function toggleFileUpload() {
		const isChecked = vatCheckbox.checked;

		// Enable or disable the file upload
		vatFileInput.disabled = !isChecked;
		vatUploadContainer.style.opacity = isChecked ? '1' : '0.5';
		vatUploadContainer.style.pointerEvents = isChecked ? 'auto' : 'none';

		// Reset the file input and error message if disabled
		if (!isChecked) {
			vatFileInput.value = '';
			errorMessage.style.display = 'none';
			clearPreview(vatUploadContainer);
		}
	}

	// Clear the file preview
	function clearPreview(container) {
		const previewContainer = container.querySelector('.file-preview-container');
		const fileNameDisplay = container.querySelector('.file-upload-name');
		const fileInput = container.querySelector("input[type='file']");

		if (previewContainer) previewContainer.innerHTML = '';
		if (fileNameDisplay) fileNameDisplay.textContent = 'No file chosen';
		if (fileInput) fileInput.value = '';
	}
	toggleFileUpload();
	vatCheckbox.addEventListener('change', toggleFileUpload);
}

function initializeFileUpload(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return console.error(`Container ${containerId} not found`);

	const fileInput = container.querySelector("input[type='file']");
	const fileNameDisplay = container.querySelector('.file-upload-name');
	const previewContainer = container.querySelector('.file-preview-container');
	const uploadIcon = container.querySelector('.file-upload-icon');

	if (!fileInput || !fileNameDisplay || !previewContainer || !uploadIcon) {
		return console.error('Missing required elements in', containerId);
	}

	// Handle file selection
	fileInput.addEventListener('change', () =>
		handleFileChange(fileInput, fileNameDisplay, previewContainer, uploadIcon)
	);

	// Handle file change and preview
	function handleFileChange(input, nameDisplay, preview, icon) {
		const file = input.files[0];
		clearPreview(preview); // Reset preview

		if (!file) {
			nameDisplay.textContent = 'No file chosen';
			icon.style.display = 'block'; // Show icon when no file is selected
			return;
		}

		nameDisplay.textContent = file.name;
		icon.style.display = 'none'; // Hide icon when file is selected

		// Show preview (images, PDFs, or other types)
		if (file.type.startsWith('image/')) {
			createImagePreview(file, preview);
		} else if (file.type === 'application/pdf') {
			createTextPreview('PDF File Selected', preview);
		} else {
			createTextPreview(`File: ${file.name}`, preview);
		}

		// Add remove button
		createRemoveButton(input, preview, nameDisplay, icon);
	}

	// Create image preview
	function createImagePreview(file, preview) {
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = document.createElement('img');
			img.className = 'file-preview-image';
			img.src = e.target.result;
			preview.appendChild(img);
		};
		reader.readAsDataURL(file);
	}

	// Create text preview (for PDFs or other files)
	function createTextPreview(text, preview) {
		const textElement = document.createElement('p');
		textElement.className = 'file-preview-text';
		textElement.textContent = text;
		preview.appendChild(textElement);
	}

	// Create remove button
	function createRemoveButton(input, preview, nameDisplay, icon) {
		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.className = 'file-remove-btn';
		removeButton.innerHTML = `<i class="bi bi-trash"></i> Remove`;

		removeButton.addEventListener('click', () => {
			input.value = '';
			nameDisplay.textContent = 'No file chosen';
			clearPreview(preview);
			icon.style.display = 'block'; // Show icon again
		});

		preview.appendChild(removeButton);
	}

	// Clear the preview area
	function clearPreview(preview) {
		preview.innerHTML = '';
	}
}

// Function to apply the format for supplier and customer fields
function formatSelfBillingInputs() {
	const companyName = document.querySelector('#Company-Details-Company-name');
	const vatRegistration = document.querySelector(
		'#Company-Details-VAT-registration'
	);

	const supplierInput = document.querySelector('#supplier');
	const supplierVatInput = document.querySelector('#supplier_VAT_number');
	const customerInput = document.querySelector('#customer');
	const customerVatInput = document.querySelector('#customer_VAT_number');

	// Format #supplier as #Company-Details-Company-name
	if (companyName) {
		supplierInput.value = `${companyName.value}`;
	}

	// Format #supplier_VAT_number as #Company-Details-VAT-registration
	if (vatRegistration && vatRegistration.value) {
		supplierVatInput.value = `${vatRegistration.value}`;
	} else {
		// If #Company-Details-VAT-registration is empty, use "Not VAT registered"
		supplierVatInput.value = `Not VAT registered`;
	}

	// Format #customer as value-plan.com
	if (customerInput) {
		customerInput.value = `plan.com`;
	}

	// Format #customer_VAT_number as GB 0004 1360 38
	if (customerVatInput) {
		customerVatInput.value = 'GB 0004 1360 38';
	}
	supplierInput.setAttribute('readonly', true);
	supplierVatInput.setAttribute('readonly', true);
	customerInput.setAttribute('readonly', true);
	customerVatInput.setAttribute('readonly', true);
}
// Load jsPDF dynamically (if not already loaded)
async function loadJsPDF() {
	if (!window.jsPDF) {
		const script = document.createElement('script');
		script.src =
			'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
		document.head.appendChild(script);
		await new Promise((resolve) => (script.onload = resolve));
	}
}

// Generic function to collect form data
function collectFormData(formSelector) {
	const form = document.querySelector(formSelector);
	if (!form) {
		console.error(`Form not found: ${formSelector}`);
		return null;
	}

	const data = {};
	form.querySelectorAll('input, textarea, select').forEach((field) => {
		if (field.type === 'checkbox') {
			data[field.name] = field.checked;
		} else if (field.type === 'file' && field.files.length > 0) {
			data[field.name] = field.files[0];
		} else {
			data[field.name] = field.value;
		}
	});
	const first_name = document.getElementById('Contacts-First-Name').value;
	const last_name = document.getElementById('Contact-Last-Name').value;

	data['full_name'] = `${first_name + ' ' + last_name}`;
	return data;
}

// Generate PDF from form data with modern styling
async function generatePDFSelfBilling(title, formData) {
	await loadJsPDF();
	const { jsPDF } = window.jspdf;

	const doc = new jsPDF();
	doc.setFont('helvetica', 'normal');
	doc.setFontSize(14);
	// Add 'plan.com' mark at top right
	// Define position
	const text = 'plan';
	const x = doc.internal.pageSize.width - 80;
	const y = 25;
	const dotX = x + 29; // Adjust position for dot
	const dotY = 24; // Adjust vertical position for dot

	// Set custom font and bold style
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(38);

	// Add "plan"
	doc.setTextColor(0, 0, 0);
	doc.text(text, x, y);

	// Draw a perfect round dot
	doc.setFillColor(0, 0, 0); // Black color
	doc.circle(dotX, dotY, 1, 'F'); // Small filled circle

	// Add "com" after the dot
	doc.text('com', dotX + 1, y);

	doc.setFont('helvetica', 'normal');
	doc.setFontSize(20);
	doc.setTextColor(0, 0, 0);
	doc.text('Self-Billing Agreement', 20, 45);
	doc.setFontSize(12);
	doc.text('This is an agreement to a self-billing procedure between:', 20, 60);

	doc.setFontSize(10);
	doc.setTextColor(43, 124, 246);
	doc.text(`The Customer: `, 20, 70);
	doc.setTextColor(0, 0, 0);
	doc.text(`${formData['customer'] || 'plan.com'}`, 50, 70);

	doc.setTextColor(43, 124, 246);
	doc.text(`The Supplier: `, 20, 80);
	doc.setTextColor(0, 0, 0);
	doc.text(`${formData['supplier'] || ''}`, 50, 80);
	doc.setFontSize(10);
	doc.setTextColor(43, 124, 246);
	doc.text(`VAT number: `, doc.internal.pageSize.width / 2 + 20, 70);
	doc.setTextColor(0, 0, 0);
	doc.text(
		`${formData['customer_VAT_number'] || 'GB 0004 1360 38'}`,
		doc.internal.pageSize.width / 2 + 28 + 20,
		70
	);
	doc.setTextColor(43, 124, 246);
	doc.text(`VAT number: `, doc.internal.pageSize.width / 2 + 20, 80);
	doc.setTextColor(0, 0, 0);
	doc.text(
		`${formData['Company-Details-VAT-registration'] || 'Not VAT registered'}`,
		doc.internal.pageSize.width / 2 + 28 + 20,
		80
	);
	doc.setFontSize(12);
	doc.text('The self-biller (the customer) agrees:', 20, 100);
	doc.setFontSize(10);
	doc.text(
		'1. To issue self-billed invoices for all supplies made to them by the self-billee until 5 years from today\'s date.',
		25,
		110,
		{ maxWidth: 160 }
	);
	doc.text(
		"2. To complete self-billed invoices showing the supplier's details, including VAT registration number.",
		25,
		120,
		{ maxWidth: 160 }
	);
	doc.text(
		'3. To make a new self-billing agreement if their VAT registration number changes.',
		25,
		130,
		{ maxWidth: 160 }
	);
	doc.text(
		'4. To inform the supplier if self-billed invoices are outsourced to a third party.',
		25,
		140,
		{ maxWidth: 160 }
	);

	doc.setFontSize(12);
	doc.text('The self-billee (the supplier) agrees:', 20, 160);
	doc.setFontSize(10);
	doc.text(
		'1. To accept invoices raised by the self-biller on their behalf until 5 years from today\'s date.',
		25,
		170,
		{ maxWidth: 160 }
	);
	doc.text(
		'2. Not to raise sales invoices for transactions covered by this agreement.',
		25,
		180,
		{ maxWidth: 160 }
	);
	doc.text('3. To notify the customer immediately if they:', 25, 190);
	doc.text('   - Change their VAT registration number', 30, 200);
	doc.text('   - Cease to be VAT registered', 30, 210);
	doc.text('   - Sell their business or part of it', 30, 220);
	// Footer with grey background
	doc.setFillColor(169, 169, 169); // Grey color
	doc.rect(
		0,
		doc.internal.pageSize.height - 60,
		doc.internal.pageSize.width,
		60,
		'F'
	);

	doc.text(`Signed by:    Tom Wollin`, 20, 260);
	doc.text(
		`Signed by:    ${formData['full_name'] || ''}`,
		doc.internal.pageSize.width / 2 + 20,
		260
	);
	doc.text(`On behalf of:  plan.com`, 20, 270);
	doc.text(
		`On behalf of:  ${formData['supplier'] || ''}`,
		doc.internal.pageSize.width / 2 + 20,
		270
	);

	doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 280);
	doc.text(
		`Date: ${new Date().toLocaleDateString()}`,
		doc.internal.pageSize.width / 2 + 20,
		280
	);

	return doc;
}

// Convert PDF to Base64
function pdfToBase64(doc) {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsDataURL(doc.output('blob'));
		reader.onload = () => resolve(reader.result.split(',')[1]);
	});
}
// Automatically download the PDF
function downloadPDF(doc, filename = 'form_submission.pdf') {
	doc.save(filename);
}

async function sendPDFAsJSON(pdfBase64, webhookUrl, formSelector) {
	if (!webhookUrl) {
		console.error('Webhook URL is required to send an email.');
		return;
	}
	const accountId = getAccountIdFromURL();
	const payload = JSON.stringify({
		id: accountId,
		filename: 'form_submission.pdf',
		fileContent: pdfBase64,
	});
	try {
		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: payload,
		});

		if (response.ok) {
			//   alert("PDF sent successfully!");
			console.log('PDF sent successfully!');
			if (formSelector === '#self_billing_agreement_form') {
				const confirmationForm = document.querySelector(
					'#confirmation_self_billing_agree_form'
				);
				const pageTitle = document.querySelector('#page-title');
				const progressBar = document.querySelector('#progress-bar-block');
				const successPage = document.querySelector('#success-page');

				if (confirmationForm) confirmationForm.style.display = 'none';
				if (pageTitle) pageTitle.style.display = 'none';
				if (progressBar) progressBar.style.display = 'none';
				if (successPage) successPage.style.display = 'block';
			}
		} else {
			//   alert("Failed to send PDF.");
			console.log('Failed to send PDF.');
		}
	} catch (error) {
		console.error('Error sending PDF:', error);
	}
}
// Main reusable handler
async function handleFormSubmission({
	curForm,
	nextForm,
	formSelector,
	title = 'Form Submission',
	downloadFilename = 'form_submission.pdf',
	emailFieldName = 'email',
	webhookUrl = 'https://test',
}) {
	if (!validateAllFields(curForm)) {
		console.log('validation error');
		return;
	}
	const formData = collectFormData(formSelector);
	if (!formData) return;
	let doc;
	if (formSelector === '#partner_agreement_form') {
		doc = await generatePDFPartner(title, formData);
	} else {
		doc = await generatePDFSelfBilling(title, formData);
		downloadPDF(doc, downloadFilename);
	}
	// Automatically download the PDF
	formatSelfBillingInputs();
	const current = document.querySelector(curForm);
	const next = document.querySelector(nextForm);
	current.style.display = 'none';
	next.style.display = 'block';
	if (curForm === '#partner_agreement_confirmation_form') {
		document.querySelector('#step9').classList.add('active');
	}
	// Send the PDF as JSON
	if (webhookUrl) {
		const pdfBase64 = await pdfToBase64(doc);
		await sendPDFAsJSON(pdfBase64, webhookUrl, formSelector);
	}
}

// Set up click event listener for multiple buttons
function initializePdfHandler(buttonId, config) {
	const button = document.querySelector(buttonId);
	if (!button) {
		console.error(`Button not found: ${buttonId}`);
		return;
	}

	button.addEventListener('click', () => handleFormSubmission(config));
}

// Function to fetch the user's IP address and display it
function setIPAddress(elementId) {
	const ipElement = document.querySelector(elementId);
	if (!ipElement) {
		console.error(`Element with id '${elementId}' not found.`);
		return;
	}

	// Fetch the IP address using a public API
	fetch('https://api64.ipify.org?format=json')
		.then((response) => response.json())
		.then((data) => {
			ipElement.textContent = data.ip; // Set IP address
		})
		.catch((error) => {
			console.error('Error fetching IP address:', error);
			ipElement.textContent = 'Unable to retrieve IP';
		});
}

// Simple function to navigate forms
function switchForm(
	checkboxSelector,
	buttonSelector,
	currentFormSelector,
	nextFormSelector
) {
	const checkbox = document.querySelector(checkboxSelector);
	const button = document.querySelector(buttonSelector);
	const currentForm = document.querySelector(currentFormSelector);
	const nextForm = document.querySelector(nextFormSelector);

	if (!button || !currentForm || !nextForm) {
		console.error('Button or forms not found.');
		return;
	}

	button.addEventListener('click', () => {
		if (checkbox.checked) {
			currentForm.style.display = 'none'; // Hide current form
			nextForm.style.display = 'block'; // Show next form
			if (buttonSelector === '#partner_agreement_btn') {
				document.querySelector('#step8').classList.add('active');
			}
			if (buttonSelector === '#self_billing_agreement_btn') {
				document.querySelector('#step10').classList.add('active');
			}
		}
	});
}
function toggleButtonWithClass(
	checkboxSelector,
	buttonSelector,
	activeClass = 'next-button',
	inactiveClass = 'inactive'
) {
	const checkbox = document.querySelector(checkboxSelector);
	const button = document.querySelector(buttonSelector);

	if (!checkbox || !button) {
		console.error('Checkbox or button not found.');
		return;
	}

	function updateButtonState() {
		if (checkbox.checked) {
			button.classList.add(activeClass);
			button.classList.remove(inactiveClass);
			button.disabled = false;
		} else {
			button.classList.remove(activeClass);
			button.classList.add(inactiveClass);
			button.disabled = true;
		}
	}

	// Attach event listener
	checkbox.addEventListener('change', updateButtonState);

	// Set initial state
	updateButtonState();
}

// Function to set current date in MM/DD/YYYY format
function setCurrentDate(selector) {
	const dateElement = document.querySelector(selector);
	if (!dateElement) {
		console.error(`Element with selector "${selector}" not found.`);
		return;
	}

	// Get current date in DD/MM/YYYY format
	const today = new Date();
	const formattedDate = `${today.getDate()}/${
		today.getMonth() + 1
	}/${today.getFullYear()}`;
	// Set the date value
	if (dateElement.tagName === 'INPUT' || dateElement.tagName === 'TEXTAREA') {
		dateElement.value = formattedDate; // For input or textarea fields
	} else {
		dateElement.textContent = formattedDate; // For other elements (e.g., span, div)
	}
}
// Initialize the multi-step form with webhook integration
function initializeMultiStepForm() {
	const createAccountButton = document.querySelector(
		'#create_account_next_btn'
	);
	const partnerAgreementForm = document.querySelector(
		'#partner_agreement_form'
	);
	const createForm = document.querySelector('#create_form');

	if (!createAccountButton || !partnerAgreementForm || !createForm) {
		console.error('Required elements not found.');
		return;
	}

	// Form selectors
	const formSelectors = [
		'#company_details_form',
		'#address_details_form',
		'#bank_details_form',
		'#criteria_form',
		'#contacts_form',
	];
	// Select all forms dynamically
	const forms = formSelectors.map((selector) =>
		document.querySelector(selector)
	);

	// Ensure required elements exist
	if (forms.some((form) => !form)) {
		console.error('One or more forms are missing.');
		return;
	}

	// Capture account ID from URL
	const accountId = getAccountIdFromURL();

	createAccountButton.addEventListener('click', async function (e) {
		e.preventDefault();

		// Validate all forms before proceeding
		if (!formSelectors.every(validateAllFields)) {
			return;
		}

		// Gather form data and prepare JSON payload
		const formData = await gatherAllFormData(forms);
		// VAT file upload
		const vatfileContainer = document.getElementById('vat-file-upload');
		let fileData = ''; // Use `let` instead of `const`
		if (!vatfileContainer) {
			console.error('VAT file upload container not found');
		} else {
			const vatFileInput = vatfileContainer.querySelector("input[type='file']");

			if (vatFileInput && vatFileInput.files.length > 0) {
				try {
					fileData = await convertFileToBase64(vatFileInput.files[0]);
				} catch (error) {
					console.error('Error converting file:', error);
				}
			}
		}

		// Format the payload
		const payload = {
			triggerType: 'form_submission',
			payload: {
				name: 'Email',
				siteId: '679222b25d1a12f8f553b070',
				data: formData,
				vatFileData: fileData,
				submittedAt: new Date().toISOString(),
				id: accountId, // Use accountId for tracking
				formId: '6793935ad52ab69a9329c296',
				formElementId: 'a4991cc1-4b8a-4208-afee-54a28f860cf8',
				pageId: '679222b25d1a12f8f553b06e',
				publishedPath: '/',
				schema: [],
			},
		};

		try {
			await sendToWebhook(payload);
			// Proceed to next stage
			createForm.style.display = 'none';
			partnerAgreementForm.style.display = 'block';
			document.querySelector('#step7').classList.add('active');
			setCurrentDate('#partner_agreement_cur_date');
			updateElementValue(
				'Company-Details-Company-name',
				'company_name_replace'
			);
			//   updateElementValue(
			//     "Company-Details-Trading-Name",
			//     "trading_name_replace"
			//   );
			updateElementValue(
				'Company-Details-Company-Type',
				'company_type_replace'
			);
			updateElementValue('Reg-Address-First-Line', 'addr_replace');
			updateElementValue('Reg-Address-City', 'city_replace');
			updateElementValue('Reg-Address-Postcode', 'postcode_replace');
			// pdf generation
			setCurrentDate('#pdf_partner_agree_date');
			updateElementValue(
				'Company-Details-Company-name',
				'pdf_company_name_replace'
			);
			updateElementValue(
				'Company-Details-Company-Type',
				'pdf_company_type_replace'
			);
			updateElementValue('Reg-Address-First-Line', 'pdf_addr_replace');
			updateElementValue('Reg-Address-City', 'pdf_town_replace');
			updateElementValue('Reg-Address-Postcode', 'pdf_postcode_replace');
		} catch (error) {
			console.error('Error sending data to webhook:', error);
			//   alert("There was an error submitting your data. Please try again.");
			console.log('There was an error submitting your data. Please try again.');
		}
	});
}

// Capture account ID from URL
function getAccountIdFromURL() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('accountid') || 'unknown-accountid';
}

// Gather form data (including file upload)
async function gatherAllFormData(forms) {
	const formData = {};

	for (const form of forms) {
		const fields = form.querySelectorAll('input, select, textarea');
		for (const field of fields) {
			if (field.type === 'file' && field.files.length > 0) {
				continue;
				// formData[field.name] = await convertFileToBase64(field.files[0]);
			} else if (field.type === 'checkbox') {
				formData[field.name] = field.checked.toString();
			} else {
				formData[field.name] = field.value;
			}
		}
	}

	return formData;
}

// Convert file to Base64
function convertFileToBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

// Send data to webhook
async function sendToWebhook(payload) {
	const webhookUrl =
		'https://prod-56.uksouth.logic.azure.com/workflows/680656bfced4484ba11a1c5e51b400b9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wC1hD4ycXcwdJyhA30dbKlQ2NFMV7l0TTH8fPcKMN0U';

	const response = await fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error('Failed to send data to webhook');
	}
}

function addDefaultOptionToSelect(selectClass, text) {
	// Get all select elements with the given class name
	const selects = document.querySelectorAll(`.${selectClass}`);
	// Loop through each select element and add the default option
	selects.forEach((select) => {
		// Check if the default option is already present, to avoid duplicates
		if (!select.querySelector('option[value=""]')) {
			const defaultOption = document.createElement('option');
			defaultOption.value = '';
			defaultOption.textContent = text;
			defaultOption.selected = true;
			defaultOption.disabled = true;
			defaultOption.classList.add('default-option'); // <-- Add this line
			defaultOption.style.color = 'grey'; // <-- directly set text color here
			// Insert the default option as the first child
			select.insertBefore(defaultOption, select.firstChild);
		}
	});
}
