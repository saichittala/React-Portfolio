import React, { useState } from "react";

export default function ConfidentialGate({
    children,
    previewContent,
}) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleUnlock = () => {
        if (!password.trim()) {
            setMessage("Please enter a password");
            return;
        }

        if (password === "surya@123") {
            setIsUnlocked(true);
        } else {
            setMessage("Incorrect password");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUnlock();
        }
    };

    return (
        <>
            {previewContent}

            {!isUnlocked && (
                <section className="confidential-section">
                    <div className="confidential-card">

                        <div className="df-g8 popup-lock-img">
                            <img
                                className="icon-theme"
                                src="img/lock-1.svg"
                                alt="lock"
                            />
                        </div>

                        <div className='df-g8 fd-c al-c home-tag-container'>
                            <span>NDA-protected content</span>
                        </div>

                        <div className="df-g8 gap-12 fd-c">
                            <h2 className="confidential-title">
                                The rest of this case study is confidential.
                            </h2>

                            <p className="confidential-description">
                                If you have an access code, enter it below to continue reading.


                            </p>
                        </div>

                        <div className="confidential-actions lux-form-wrapper">

                            <input
                                className="confidential-input"
                                type="password"
                                placeholder="Access Code"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setMessage("");
                                }}
                                onKeyDown={handleKeyDown}
                            />

                            {message && (
                                <p
                                    style={{
                                        color: "#ff4d4f",
                                        fontSize: "14px",
                                        marginTop: "8px",
                                        textAlign: "center",
                                    }}
                                >
                                    {message}
                                </p>
                            )}

                            <button
                                className="btn-1"
                                onClick={handleUnlock}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    height: "48px",
                                    marginTop: "28px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                Unlock
                            </button>

                        </div>
                    </div>
                </section>
            )}

            <div
                className={!isUnlocked ? "case-study-locked" : ""}
                style={!isUnlocked ? { height: "300px" } : {}}
            >
                {children}
            </div>
        </>
    );
}