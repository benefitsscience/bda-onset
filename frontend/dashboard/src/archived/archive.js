import {useEffect, useState} from "react";

function Archive() {
    // Initialize hook to regression coefficients
    const [coefficients, setCoefficients] = useState([]);

    // Specify request details for Flask
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data: 10})
    };

    // Add effect post-rendering
    useEffect(() => {
        fetch('/regression', requestOptions
        ).then(res => res.json()).then(data => {
            setCoefficients(data.coefficients)
        })
    }, []);
}