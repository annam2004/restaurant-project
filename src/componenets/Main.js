

/* global fetchAPI */
import { useState, useReducer, useEffect } from "react";

// Function to initialize available times
const initializeTimes = () => {
    const today = new Date(); // Get today's date in YYYY-MM-DD format
    return fetchAPI(today); // Fetch available times for today

};

// Reducer function to update available times
const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return initializeTimes(); // For now, return the same times regardless of date
        default:
            return state;
    }
};

export const useBookingForm = () => {
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

    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
        // Ensure fetchAPI is available before trying to fetch data
        if (window.fetchAPI) {
            const fetchTimes = async () => {
                const times = await window.fetchAPI(new Date());
                dispatch({ type: "UPDATE", times });
            };
            fetchTimes();
        } else {
            console.error("fetchAPI is not available!");
        }
    }, []);

    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Dispatch state change when the date is selected
        if (name === "date") {
            dispatch({ type: "UPDATE", date: value });
        }
    };

    const handleNextStep = (event) => {
        event.preventDefault();
        const form = document.querySelector("form");

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setStep(step + 1);
        }

        form.classList.add("was-validated");
    };

    const handleBackStep = () => {
        setStep(step - 1);
    };

    return { formData, setFormData, availableTimes, step, setStep, handleChange, handleNextStep, handleBackStep };
};

