const API = "http://localhost:8089/api/auth";

export const login = async (data) => {
    const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.text();
}

export const register = async (data) => {
    const response = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.text();
}

export const forgotPassword = async (data) => {
    const response = await fetch(`${API}/forgot-password`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },  
        body: JSON.stringify(data),
    }); 
    return response.text();
}

export const resetPassword = async (data) => {
    const response = await fetch(`${API}/reset-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.text();
}