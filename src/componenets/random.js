import { useState } from "react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        phone: "",
        occasion: "",
        paymentMethod: "",
        creditCardNumber: "",
    });

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const [step, setStep] = useState(1); // For form steps

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNextStep = (event) => {
        event.preventDefault(); // Prevent form submission

        const form = document.querySelector("form");

        // Bootstrap validation: check the validity of the current step form before proceeding
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if (step === 1) {
                setStep(2);
            }
            else if (step === 2) {
                setStep(3);
            }
            else if (step == 3) {
                setStep(4);
            }
        }

        // Apply validation feedback style
        form.classList.add("was-validated");
    };


    const handleBackStep = () => {
        setStep(1); // Go back to Step 1
    };

    return (
        <div className="bookingForm">
            <div className="container mt-5">
                <div style={{ textAlign: "center", marginTop: "9em", marginBottom: "3em" }}>
                    <h2>Reserve Your Table</h2>
                    <p>Book a table in advance and enjoy a great dining experience.</p>
                </div>
                <form className="row g-3 needs-validation" noValidate>
                    {step === 1 && (
                        <>
                            <div className="col-md-6">
                                <label htmlFor="res-fullname" className="form-label required">Full name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="res-fullname"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Please enter your full name.</div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="res-email" className="form-label required">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="res-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Please enter a valid email address.</div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="res-date" className="form-label required">Choose date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="res-date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Please choose a date.</div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="res-time" className="form-label required">Choose time</label>
                                <select
                                    className="form-select"
                                    id="res-time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">--Select a time--</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">Please select a time.</div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="res-guests" className="form-label required">Number of guests</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="res-guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    min="1"
                                    max="10"
                                    required
                                />
                                <div className="invalid-feedback">Please enter a number of guests between 1 and 10.</div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="res-phone" className="form-label required">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="res-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Please enter a phone number.</div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="res-occasion" className="form-label required">Occasion</label>
                                <select
                                    className="form-select"
                                    id="res-occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">--Select an occasion--</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Graduation">Graduation</option>
                                </select>
                                <div className="invalid-feedback">Please select an occasion.</div>
                            </div>

                            <button type="button" className="btn btn-primary mt-3" onClick={handleNextStep}>
                                    Continue
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3>Review Your Details</h3>
                            <p><strong>Full Name:</strong> {formData.fullName}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Date:</strong> {formData.date}</p>
                            <p><strong>Time:</strong> {formData.time}</p>
                            <p><strong>Guests:</strong> {formData.guests}</p>
                            <p><strong>Occasion:</strong> {formData.occasion}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>

                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" onClick={handleBackStep}>
                                    Back
                                </button>
                                <button type="button" className="btn btn-primary mt-3" onClick={handleNextStep}>
                                    Continue
                                </button>
                            </div>
                        </>

                    )}

                    {step === 3 && (

                        <div className="row">
                            {/* Payment Form - Left Column */}
                            <div className="col-md-6">
                                <h3>Payment Method</h3>
                                <div className="mb-3">
                                    <label className="form-label">Choose Payment Method:</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="visa" value="Visa/Master Card" />
                                        <label className="form-check-label" htmlFor="visa">
                                            Visa/Master Card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" value="PayPal" />
                                        <label className="form-check-label" htmlFor="paypal">PayPal
                                            {/* <img src="/paypal-placeholder.png" alt="PayPal" width="50" className="ms-2" /> */}
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Name on Card" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Card Number</label>
                                    <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" required />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Expiration Date</label>
                                        <input type="text" className="form-control" placeholder="MM/YY" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-control" placeholder="XXX" required />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Summary - Right Column */}
                            <div className="col-md-6">
                                <h3>Payment Details</h3>
                                <p><strong>Reservation Charge:</strong>$150</p>
                                <p><strong>Number of Guests:</strong> {formData.guests}</p>
                                <p><strong>Taxes (10%):</strong> ${formData.guests * 150 * 0.1}</p>
                                <p><strong>Total Amount:</strong> ${(formData.guests * 150 * 1.1).toFixed(2)}</p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="d-flex justify-content-between mt-4">
                                <button type="button" className="btn btn-secondary" onClick={handleBackStep}>
                                    Back
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                                    Sumbit
                                </button>
                            </div>
                        </div>



                    )}

                    {step === 4 && (
                        <div className="col-md-12">
                            <h3>Confirmation</h3>
                            <p><strong>Date:</strong> {formData.date}</p>
                            <p><strong>Time:</strong> {formData.time}</p>
                            <p><strong>Guests:</strong> {formData.guests}</p>
                            <p><strong>Occasion:</strong> {formData.occasion}</p>
                            <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
                            {formData.paymentMethod === "Visa/MasterCard" && <p><strong>Credit Card:</strong> {formData.creditCardNumber}</p>}
                            <p><strong>Email:</strong> {formData.email}</p>
                        </div>
                    )}



                </form>
            </div>
        </div>
    );
}

export default BookingForm;