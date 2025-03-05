import { useBookingForm } from "./Main";

const BookingForm = () => {
    const { formData, availableTimes, step, handleChange, handleNextStep, handleBackStep } = useBookingForm();

    // Validation
    const validatePhone = (phone) => {
        const phoneRegex = /^[\+]?[1-9]{1}[0-9]{3,14}$/; // Matches phone numbers with international format
        return phoneRegex.test(phone);
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
                                    maxLength="50"
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
                                    onChange={handleChange} // This will dispatch the update
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
                                {!validatePhone(formData.phone) && (
                                    <div className="invalid-feedback">Please enter a valid phone number.</div>
                                )}
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
                                    <input type="text" className="form-control" placeholder="Name on Card" required maxLength={50} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Card Number</label>
                                    <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" required maxLength={16} />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Expiration Date</label>
                                        <input type="text" className="form-control" placeholder="MM/YY" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-control" placeholder="XXX" required maxLength={3} />
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

                    <div className="d-flex mt-4">
                        {/* Back button for steps 2 and 3 */}
                        {step > 1 && step < 4 && (
                            <button type="button" className="btn btn-secondary me-auto" onClick={handleBackStep}>
                                Back
                            </button>
                        )}

                        {/* Continue button for steps 1 and 2 */}
                        {step < 3 && (
                            <button type="button" className="btn btn-primary ms-auto" onClick={handleNextStep}>
                                Continue
                            </button>
                        )}

                        {/* Submit button on step 3 */}
                        {step === 3 && (
                            <button type="submit" className="btn btn-success ms-auto" onClick={handleNextStep}>
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;

