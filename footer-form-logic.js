function initializeFormNavigation() {
    const formSteps = [
        "#contacts_form",
        "#company_details_form",
        "#address_details_form",
        "#bank_details_form",
        "#criteria_form",
        "#create_form",
    ];

    formSteps.forEach((form, index) => {
        const currentForm = document.querySelector(form);
        if (!currentForm) {
            console.error(`Form not found: ${form}`);
            return;
        }

        // Get buttons
        const nextBtn = currentForm.querySelector('[id$="_next_btn"]');
        const backBtn = currentForm.querySelector('[id$="_back_btn"]');

        // Handle Next Button
        if (nextBtn && index < formSteps.length - 1) {
            nextBtn.addEventListener("click", function () {
                checkSelectedAdditionalValue(
                    // "select",
                    "Same as registered address",
                    handleAddressSameAsPrimary
                );
                checkSelectedAdditionalValue(
                    // "select",
                    "Same as Primary Contact",
                    handleContactSameAsPrimary
                );
                if (!validateAllFields(form)) return; // Validate before proceeding
                navigateToForm(index + 1);
            });
        }

        // Handle Back Button
        if (backBtn && index > 0) {
            backBtn.addEventListener("click", function () {
                navigateToForm(index - 1);
            });
        }
    });
}

// Function to navigate between forms dynamically
function navigateToForm(targetIndex) {
    const formSteps = [
        "#contacts_form",
        "#company_details_form",
        "#address_details_form",
        "#bank_details_form",
        "#criteria_form",
        "#create_form",
    ];

    // Hide all forms
    formSteps.forEach((form) => {
        document.querySelector(form).style.display = "none";
    });

    // Show the target form
    document.querySelector(formSteps[targetIndex]).style.display = "block";

    // Handle Step Progress Indicator
    document.querySelectorAll(".step").forEach((step, idx) => {
        step.classList.toggle("active", idx <= targetIndex);
    });

    // Scroll to the top smoothly
    document
        .querySelector("#page_container")
        .scrollIntoView({ behavior: "smooth", block: "start" });
}
// Reusable function to manage checkbox and multi-select
function initializeMultiSelectToggle(checkboxId, selectId) {
    const checkbox = document.getElementById(checkboxId);
    const selectElement = document.getElementById(selectId);

    if (!checkbox || !selectElement) {
        console.error("Invalid checkbox or select element ID.");
        return;
    }

    // Initialize Choices.js on the multi-select
    const multiSelect = new Choices(selectElement, {
        removeItemButton: true,
        searchEnabled: true,
        placeholder: true,
        placeholderValue: "Select Options",
    });

    // Disable Multi-Select by Default
    multiSelect.disable();

    // Toggle Multi-Select on Checkbox Change
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            multiSelect.enable(); // Enable when checked
        } else {
            multiSelect.disable(); // Disable when unchecked
        }
    });
}

// Function to enable/disable VAT registration input
function initializeCheckboxToggle(checkboxSelector, inputSelector) {
    const checkbox = document.querySelector(checkboxSelector);
    const input = document.querySelector(inputSelector);

    if (checkbox && input) {
        checkbox.addEventListener("change", function () {
            // If checkbox is unchecked, disable the input and clear its value
            if (!checkbox.checked) {
                input.disabled = true;
                input.value = ""; // Clear the input value
            } else {
                input.disabled = false; // Enable the input field
            }
        });

        // Initialize on page load
        if (!checkbox.checked) {
            input.disabled = true;
            input.value = ""; // Clear the input value when disabled
        } else {
            input.disabled = false; // Enable input if checkbox is checked
        }
    } else {
        console.error(
            `Elements not found for selectors: ${checkboxSelector}, ${inputSelector}`
        );
    }
}

function initializeCompanyTypeSelection() {
    const companyTypeSelect = document.querySelector(
        "#Company-Details-Company-Type"
    );
    const registrationNumberInput = document.querySelector(
        "#Company-Details-Registration-Number-2"
    );

    if (companyTypeSelect && registrationNumberInput) {
        // Initialize value on page load
        updateRegistrationNumber(companyTypeSelect.value, registrationNumberInput);

        // Listen for changes in company type selection
        companyTypeSelect.addEventListener("change", function () {
            updateRegistrationNumber(
                companyTypeSelect.value,
                registrationNumberInput
            );
        });

        // Initialize registration number field to be disabled for "Sole Trader"
        toggleRegistrationNumberField(
            companyTypeSelect.value,
            registrationNumberInput
        );
    } else {
        console.error("Company type select or registration input not found.");
    }
}

function updateRegistrationNumber(selectedValue, inputField) {
    // If the company type is not "Sole Trader", enable the field and reset the value
    if (selectedValue !== "Sole Trader") {
        inputField.disabled = false;
        inputField.value = ""; // Reset the registration number field
    } else {
        // If "Sole Trader", lock the field and optionally clear the value
        inputField.disabled = true;
        inputField.value = "";
    }
}

// Function to toggle the registration number field based on company type
function toggleRegistrationNumberField(companyType, inputField) {
    if (companyType === "Sole Trader") {
        inputField.disabled = true;
        inputField.value = ""; // Clear value if the field is locked
    } else {
        inputField.disabled = false;
        inputField.value = ""; // Allow editing and clear value
    }
}

// Function to initialize the date picker
function initializeDatePicker(selector) {
    const dateInput = document.querySelector(selector);

    if (dateInput) {
        flatpickr(dateInput, {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "F j, Y",
            allowInput: true,
            disableMobile: true,
        });
    } else {
        console.error(`Date picker input with selector "${selector}" not found.`);
    }
}

// Function to validate required fields
function validateRequiredFields(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) {
        console.error("Form not found:", formSelector);
        return false;
    }

    let isValid = true;
    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
        const errorMessage = field.nextElementSibling; // Assuming an error message div follows the input
        if (field.value.trim() === "") {
            field.classList.add("error"); // Add error class for styling
            if (errorMessage) {
                errorMessage.textContent = "This field is required.";
                errorMessage.style.display = "block";
            }
            isValid = false;
        } else {
            field.classList.remove("error");
            if (errorMessage) {
                errorMessage.textContent = "";
                errorMessage.style.display = "none";
            }
        }

        // Listen for changes to hide error message if field is filled
        field.addEventListener("input", function () {
            if (field.value.trim() !== "") {
                field.classList.remove("error");
                if (errorMessage) {
                    errorMessage.textContent = "";
                    errorMessage.style.display = "none";
                }
            }
        });
    });

    return isValid;
}

function initializePostcodeLookup(
    postcodeInputSelector,
    searchButtonSelector,
    addressFieldSelector,
    cityFieldSelector,
    postcodeFieldSelector,
    dropdownId = "sel"
) {
    const postcodeInput = document.querySelector(postcodeInputSelector);
    const searchButton = document.querySelector(searchButtonSelector);
    const addressField = document.querySelector(addressFieldSelector);
    const cityField = document.querySelector(cityFieldSelector);
    const postcodeField = document.querySelector(postcodeFieldSelector);

    if (
        !postcodeInput ||
        !searchButton ||
        !addressField ||
        !cityField ||
        !postcodeField
    ) {
        console.error("One or more input fields are missing.");
        return;
    }


    searchButton.addEventListener("click", function () {
        const postcode = postcodeInput.value.trim();


        if (postcode === "") {
            console.log("Please enter a postcode.");
            //   alert("Please enter a postcode.");
            return;
        }

        if (postcodeInput.parentElement.querySelector(".select-modern")){
            console.log("Dropdown already exists");
            return;
        }



        // Create dropdown to show address options
        const addressDropdown = document.createElement("select");
        // Set the id attribute
        addressDropdown.id = `${dropdownId}-dropdown`;
        addressDropdown.name = `${dropdownId}-dropdown`;
        // Set the class attribute
        addressDropdown.className = "select-modern";
        //addressDropdown.setAttribute("autocomplete", "off"); // Disable autofill
        // Add a placeholder option
        const placeholderOption = document.createElement("option");
        placeholderOption.value = "";
        placeholderOption.textContent = "Select your address";
        placeholderOption.selected = true;
        placeholderOption.disabled = true;
        addressDropdown.appendChild(placeholderOption);
        // Initially hide the dropdown until options are loaded
        addressDropdown.style.display = "none";
        // Insert the dropdown after the postcode input
        postcodeInput.parentNode.insertBefore(
            addressDropdown,
            postcodeInput.nextSibling
        );
        // Fetch and populate fields when address is selected
        addressDropdown.addEventListener("change", function () {
            const selectedId = addressDropdown.value;
            console.log("selectedId:", selectedId);
            if (selectedId) {
                fetchAddressDetails(selectedId); // Only populate when the user selects an address
            }
        });
        const apiKey = "XE49-PR11-PE38-FF69"; // Replace with your Loqate API Key
        const loqateUrl = `https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws?Key=${apiKey}&Text=${postcode}&IsMiddleware=false&Countries=GB`;

        fetch(loqateUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.Items && data.Items.length > 0) {
                    addressDropdown.innerHTML = ""; // Clear previous options
                    addressDropdown.style.display = "block"; // Show the dropdown

                    // Add placeholder option
                    addressDropdown.appendChild(placeholderOption);

                    // Populate dropdown with all addresses
                    data.Items.forEach((item) => {
                        const option = document.createElement("option");
                        option.value = item.Id;
                        option.textContent = item.Text;
                        addressDropdown.appendChild(option);
                    });

                    // Don't automatically populate fields, let user select from the list
                } else {
                    throw new Error("No address found for this postcode.");
                }
            })
            .catch((error) => {
                console.error("Error fetching address:", error);
                console.log(
                    "Could not retrieve address details. Please enter manually."
                );
                // alert("Could not retrieve address details. Please enter manually.");
            });
    });



    // Function to fetch full address details
    function fetchAddressDetails(addressId) {
        const apiKey = "XE49-PR11-PE38-FF69"; // Replace with your Loqate API Key
        const detailUrl = `https://api.addressy.com/Capture/Interactive/Retrieve/v1.00/json3.ws?Key=${apiKey}&Id=${addressId}`;

        fetch(detailUrl)
            .then((response) => response.json())
            .then((detailData) => {
                if (detailData.Items && detailData.Items.length > 0) {
                    const addressDetails = detailData.Items[0];

                    addressField.value = addressDetails.Line1 || "";
                    cityField.value = addressDetails.City || "";
                    postcodeField.value = addressDetails.PostalCode || "";

                } else {
                    throw new Error("No address details found.");
                }
            })
            .catch((error) => {
                console.error("Error retrieving address details:", error);
                console.log("Could not retrieve full address details.");
                // alert("Could not retrieve full address details.");
            });
    }
}
function initializeMultiSelect(selector, placeholderText = "Select an option") {
    const element = document.querySelector(selector);

    if (element) {
        const choicesInstance = new Choices(element, {
            removeItemButton: true,
            searchEnabled: false,
            placeholder: true,
            placeholderValue: placeholderText,
            noResultsText: "No options found",
            itemSelectText: "",
        });

        // Get necessary elements
        const choicesContainer = element.closest(".choices");
        const choicesInner = choicesContainer.querySelector(".choices__inner");
        const searchInput = choicesContainer.querySelector(
            ".choices__input--cloned"
        );

        choicesInner.addEventListener("click", (event) => {
            // Prevent toggle if clicking on the search input
            if (event.target === searchInput) {
                return;
            }

            if (choicesContainer.classList.contains("is-open")) {
                choicesInstance.hideDropdown();
            } else {
                choicesInstance.showDropdown();
            }
        });
    } else {
        console.error(
            `Multi-select dropdown with selector "${selector}" not found.`
        );
    }
}

// Enhanced validation for all fields with detailed error messages
function validateAllFields(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) {
        console.error("Form not found:", formSelector);
        return false;
    }

    let isValid = true;
    let firstErrorField = null;

    // Select all input fields, selects, and textareas
    const allFields = form.querySelectorAll("input, select, textarea");

    allFields.forEach((field) => {
        const errorMessage = field.parentElement.querySelector(".error-message");

        // Skip disabled fields
        if (field.disabled) return;

        const value =
            field.type === "file" ? field.files.length : field.value.trim();

        // Determine validation case
        if (field.required && !value) {
            showError(field, errorMessage, "This field is required.");
            isValid = false;
            if (!firstErrorField) firstErrorField = field; // Set first error field
        } else if (value) {
            const errorType = getValidationError(field);
            if (errorType) {
                showError(field, errorMessage, errorType);
                isValid = false;
                if (!firstErrorField) firstErrorField = field;
            } else {
                clearError(field, errorMessage);
            }
        } else {
            clearError(field, errorMessage);
        }

        // Listen for input changes to dynamically clear errors
        field.addEventListener("input", () => {
            const updatedValue =
                field.type === "file" ? field.files.length : field.value.trim();
            if ((updatedValue || !field.required) && !getValidationError(field)) {
                clearError(field, errorMessage);
            }
        });
    });

    // Autofocus the first error field
    if (firstErrorField) {
        firstErrorField.focus();
        console.log(
            "Autofocused on first error field:",
            firstErrorField.name || firstErrorField.id
        );
    }

    return isValid;
}

// Show detailed error message
function showError(field, errorMessage, message) {
    field.classList.add("error");
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }
}

// Clear error message
function clearError(field, errorMessage) {
    field.classList.remove("error");
    if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }
}

// Identify the specific validation error
function getValidationError(field) {
    const fieldName = field.name.toLowerCase();

    if (fieldName.includes("email")) {
        return getEmailError(field.value);
    }

    if (fieldName.includes("phone") && !validatePhoneNumber(field.value)) {
        return "Invalid phone number. Use 10-15 digits.";
    }

    if (fieldName.includes("date") && !validateDate(field.value)) {
        return "Invalid date. Use YYYY-MM-DD format.";
    }

    if (
        (fieldName.includes("number") || field.type === "number") &&
        !validateNumber(field.value)
    ) {
        return "Invalid number format.";
    }

    //  if (fieldName.includes("vat") && !validateVAT(field.value)) {
    //    return "Invalid VAT number.";
    //  }

    return "";
}

// Detailed email error messages
function getEmailError(value) {
    if (!value.includes("@")) {
        return "Email must contain '@'.";
    }
    if (!value.includes(".")) {
        return "Email must contain a domain (e.g., '.com').";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
        return "Invalid email format.";
    }
    return "";
}

// Email validation
function validateEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

// Phone number validation
function validatePhoneNumber(value) {
    const phonePattern = /^[0-9]{10,15}$/;
    return phonePattern.test(value);
}

// Date validation (YYYY-MM-DD)
function validateDate(value) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(value);
}

// VAT number validation
function validateVAT(value) {
    const vatPattern = /^[A-Za-z0-9]{9,12}$/;
    return vatPattern.test(value);
}

// Number validation (integer or decimal)
function validateNumber(value) {
    const numberPattern = /^[0-9]+(\.[0-9]+)?$/;
    return numberPattern.test(value);
}
