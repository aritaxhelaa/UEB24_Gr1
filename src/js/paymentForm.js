document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const formData = {
      paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value,
      
      cardNumber: document.getElementById("card-number").value.replace(/[\s-]/g, '').trim(),
      cvv: document.getElementById("cvv").value.trim(),
      expiryMonth: document.getElementById("expiry-month").value,
      expiryYear: document.getElementById("expiry-year").value,
      
      email: document.getElementById("email").value.replace(/[^a-zA-Z0-9@._-]/g, '').trim(),
      firstName: document.getElementById("first-name").value.replace(/[^a-zA-Z\s]/g, '').trim(),
      lastName: document.getElementById("last-name").value.replace(/[^a-zA-Z\s]/g, '').trim(),
      
      address1: document.getElementById("address1").value.trim(),
      address2: document.getElementById("address2").value.trim(),
      city: document.getElementById("city").value.replace(/[^a-zA-Z\s]/g, '').trim(),
      state: document.getElementById("state").value,
      zipCode: document.getElementById("zip-code").value.replace(/\D/g, '').trim(),
      
      saveInfo: document.getElementById("saveInfo").checked,
      newsletter: document.getElementById("newsletter").checked,
      promotions: document.getElementById("promotions").checked,
      
      terms: document.getElementById("terms").checked,
      privacy: document.getElementById("privacy").checked
    };

    if (!formData.paymentMethod) {
      throw new Error("Please select a payment method.");
    }

    const cardNumberMatch = formData.cardNumber.match(/\d{16}/);
    if (!cardNumberMatch || cardNumberMatch[0] !== formData.cardNumber) {
      throw new Error("Invalid card number. It must be 16 digits.");
    }

    const cvvMatch = formData.cvv.match(/\d{3,4}/);
    if (!cvvMatch || cvvMatch[0] !== formData.cvv) {
      throw new Error("Invalid CVV. It must be 3 or 4 digits.");
    }

    if (formData.expiryMonth === "" || formData.expiryYear === "") {
      throw new Error("Please select expiry month and year.");
    }

    const today = new Date();
    const cardDate = new Date(formData.expiryYear, formData.expiryMonth - 1);
    if (cardDate < today) {
      throw new Error("Card has expired.");
    }

    const emailMatch = formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!emailMatch) {
      throw new Error("Invalid email address.");
    }

    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!formData.firstName.match(nameRegex)) {
      throw new Error("First name must contain only letters and be at least 2 characters long.");
    }
    if (!formData.lastName.match(nameRegex)) {
      throw new Error("Last name must contain only letters and be at least 2 characters long.");
    }

    if (formData.address1 === "") {
      throw new Error("Address 1 cannot be empty.");
    }

    if (!formData.city.match(/^[a-zA-Z\s]{2,}$/)) {
      throw new Error("City name must contain only letters and be at least 2 characters long.");
    }

    if (formData.state === "") {
      throw new Error("Please select a state.");
    }

    const zipMatch = formData.zipCode.match(/^\d{5,6}$/);
    if (!zipMatch) {
      throw new Error("Invalid zip code. It must be 5 or 6 digits.");
    }

    if (!formData.terms) {
      throw new Error("You must accept the Terms and Conditions.");
    }
    if (!formData.privacy) {
      throw new Error("You must accept the Privacy Policy.");
    }

    if (formData.saveInfo) {
      try {
        const preferences = {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address1: formData.address1,
          address2: formData.address2,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          newsletter: formData.newsletter,
          promotions: formData.promotions
        };
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
      } catch (storageError) {
        console.error("Error saving preferences:", storageError);
      }
    }

    console.log("Form data validated successfully:", formData);
    alert("All fields are valid. Redirecting to home page...");
    setTimeout(function () {
      window.location.href = "../html/home.html";
    }, 1000);

  } catch (error) {
    alert(error.message);
    console.error("Validation error:", error);
  }
});


document.getElementById("card-number").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{4})/g, '$1 ').trim();
  e.target.value = value.substring(0, 19);
});

document.getElementById("cvv").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
});

document.getElementById("first-name").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById("last-name").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById("city").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById("zip-code").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/\D/g, '').substring(0, 6);
});

window.addEventListener('load', function() {
  try {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      
      Object.keys(preferences).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
          if (element.type === 'checkbox') {
            element.checked = preferences[key];
          } else {
            element.value = preferences[key];
          }
        }
      });
    }
  } catch (error) {
    console.error("Error loading preferences:", error);
  }
});
