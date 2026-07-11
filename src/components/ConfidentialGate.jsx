import React, { useState, useEffect, useRef } from "react";

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

    const inputRef = useRef(null);

    useEffect(() => {
        const inputEl = inputRef.current;
        if (!inputEl) return;

        const updateFilter = () => {
            const rect = inputEl.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const radius = 12; // Matches var(--border-radius-4)
            const borderScale = 0.07;
            const border = Math.min(width, height) * (borderScale * 0.5);

            const svgString = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
                  <defs>
                    <linearGradient id="input-red-grad" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stop-color="#000"/>
                      <stop offset="100%" stop-color="red"/>
                    </linearGradient>
                    <linearGradient id="input-blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#000"/>
                      <stop offset="100%" stop-color="blue"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
                  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#input-red-grad)" />
                  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#input-blue-grad)" style="mix-blend-mode: difference" />
                  <rect x="${border}" y="${border}" width="${width - border * 2}" height="${height - border * 2}" rx="${radius}" fill="hsl(0 0% 50% / 0.93)" style="filter:blur(11px)" />
                </svg>
            `;

            const encoded = encodeURIComponent(svgString.trim());
            const dataUri = `data:image/svg+xml,${encoded}`;

            const feImage = document.querySelector('#input-filter feImage');
            if (feImage) {
                feImage.setAttribute('href', dataUri);
            }
        };

        // Delay slightly to ensure browser has completed layout styles
        const timeoutId = setTimeout(updateFilter, 150);

        window.addEventListener('resize', updateFilter);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateFilter);
        };
    }, []);

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

                            <div className="confidential-input-wrapper" ref={inputRef}>
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
                            </div>

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

            <svg className="filter" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <filter id="input-filter" colorInterpolationFilters="sRGB">
                        <feImage
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            result="map"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-redchannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispRed"
                            scale="-40"
                        />
                        <feColorMatrix
                            in="dispRed"
                            type="matrix"
                            values="1 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0"
                            result="red"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-greenchannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispGreen"
                            scale="-35"
                        />
                        <feColorMatrix
                            in="dispGreen"
                            type="matrix"
                            values="0 0 0 0 0
                                    0 1 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0"
                            result="green"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-bluechannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispBlue"
                            scale="-30"
                        />
                        <feColorMatrix
                            in="dispBlue"
                            type="matrix"
                            values="0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 1 0 0
                                    0 0 0 1 0"
                            result="blue"
                        />
                        <feBlend in="red" in2="green" mode="screen" result="rg" />
                        <feBlend in="rg" in2="blue" mode="screen" result="output" />
                        <feGaussianBlur in="output" stdDeviation="0.7" />
                    </filter>
                </defs>
            </svg>
        </>
    );
}