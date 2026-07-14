import React, { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import GlassSurface from "./GlassSurface";

export default function ConfidentialGate({
    children,
    previewContent,
}) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [toastState, setToastState] = useState("hidden");

    const handleUnlock = () => {
        if (!password.trim()) {
            setMessage("Please enter a password");
            return;
        }

        if (password === "surya@123") {
            setIsUnlocked(true);
            setToastState("entering");
            setTimeout(() => {
                setToastState("exiting");
                setTimeout(() => {
                    setToastState("hidden");
                }, 400);
            }, 3000);
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
            {toastState !== "hidden" && (
                <div className={`glass-toast ${toastState}`}>
                    <div className="glass-toast-content">
                        <svg className="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--blue-color)" strokeWidth="2"/>
                            <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7" stroke="var(--blue-color)" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="12" cy="16" r="1.5" fill="var(--blue-color)"/>
                            <path d="M12 17.5V19" stroke="var(--blue-color)" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="toast-message">Project Unlocked</span>
                    </div>
                </div>
            )}
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

                             <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={12}
                                distortionScale={-180}
                                redOffset={0}
                                greenOffset={10}
                                blueOffset={20}
                                yChannel="B"
                                className="confidential-input-glass-wrapper"
                                contentStyle={{ padding: 0 }}
                             >
                                <input
                                    className="confidential-input"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Access Code"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setMessage("");
                                    }}
                                    onKeyDown={handleKeyDown}
                                />
                                <span
                                    className="password-toggle-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                    role="button"
                                    aria-label={showPassword ? "Hide access code" : "Show access code"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                             </GlassSurface>

                            {message && (
                                <p
                                    style={{
                                        color: "#ff4d4f",
                                        fontSize: "14px",
                                        marginTop: "-10px",
                                        textAlign: "left",
                                        marginLeft: "18px",
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