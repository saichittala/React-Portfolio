import React, { useState, useEffect } from "react";

// 🧠 Resume intelligence
const resumeSkills = {
    "UX Design": ["ux", "user experience"],
    "UI Design": ["ui", "user interface"],
    "Product Design": ["product design"],
    "User Research": ["research", "user research"],
    "Design Systems": ["design system"],
    "Prototyping": ["prototype"],
    "Figma": ["figma"],
    "A/B Testing": ["a/b", "testing"],
    "Analytics": ["analytics", "ga4"],
};

function RecruiterModal({ recruiterMode, setRecruiterMode }) {
    const [step, setStep] = useState("idle");
    const [jobDesc, setJobDesc] = useState("");
    const [result, setResult] = useState(null);
    const [displayScore, setDisplayScore] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [visiblePoints, setVisiblePoints] = useState(0);

    // 🧠 Matching logic
    const calculateMatch = (text) => {
        const jd = text.toLowerCase();

        let matched = [];
        let missing = [];

        Object.entries(resumeSkills).forEach(([skill, keywords]) => {
            const found = keywords.some((k) => jd.includes(k));
            if (found) matched.push(skill);
            else missing.push(skill);
        });

        const score = Math.round(
            (matched.length / Object.keys(resumeSkills).length) * 100
        );

        return { score, matched, missing };
    };

    // ✨ AI summary
    const generateSummary = (score, matched, missing) => {
        if (score > 80)
            return `Strong alignment with ${matched.slice(0, 3).join(
                ", "
            )}. Minor gaps in ${missing.slice(0, 2).join(", ")}.`;

        if (score > 60)
            return `Good match with strengths in ${matched.slice(
                0,
                2
            ).join(", ")}. Some gaps in ${missing.slice(0, 3).join(", ")}.`;

        return `Partial match. Relevant in ${matched
            .slice(0, 2)
            .join(", ")} but lacks ${missing.slice(0, 3).join(", ")}.`;
    };

    const handleAnalyze = () => {
        if (!jobDesc.trim()) return;

        setStep("loading");

        setTimeout(() => {
            const res = calculateMatch(jobDesc);
            setResult(res);
            setStep("result");
        }, 1200);
    };

    // 🎯 Score animation
    useEffect(() => {
        if (step === "result" && result) {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setDisplayScore(i);
                if (i >= result.score) clearInterval(interval);
            }, 15);

            return () => clearInterval(interval);
        }
    }, [step, result]);

    // ⌨️ Typing animation
    useEffect(() => {
        if (step === "result" && result) {
            const fullText = generateSummary(
                result.score,
                result.matched,
                result.missing
            );

            let i = 0;
            setTypedText("");

            const interval = setInterval(() => {
                setTypedText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) clearInterval(interval);
            }, 20);

            return () => clearInterval(interval);
        }
    }, [step, result]);

    // 🎬 Progressive reveal
    useEffect(() => {
        if (step === "result") {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setVisiblePoints(i);
                if (i >= 4) clearInterval(interval);
            }, 300);

            return () => clearInterval(interval);
        }
    }, [step]);

    if (!recruiterMode) return null;

    return (
        <div
            className="recruiter-overlay"
            onClick={() => setRecruiterMode(false)}
        >
            <div
                className="recruiter-modal"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ✨ Glow Layer */}
                <div className="chat-glow"></div>

                {/* ✨ Content Wrapper (important for layering) */}
                <div className="modal-content">
                    {/* Header */}
                    <div className="modal-header">

                        {/* Left */}
                        <span>AI Job Match Analysis</span>

                        {/* Right */}
                        <div className="df-g8 aic">

                            {/* Toggle */}
                            {/* <button
                                className="mini-toggle"
                                onClick={() => setRecruiterMode(false)}
                            >
                                Exit
                            </button> */}

                            {/* Close button */}
                            <button
                                className="close-btn"
                                onClick={() => setRecruiterMode(false)}
                            >
                                ✕
                            </button>

                        </div>
                    </div>

                    {/* INPUT */}
                    {step === "idle" && (
                        <>
                            <textarea
                                placeholder="Paste job description..."
                                value={jobDesc}
                                onChange={(e) => setJobDesc(e.target.value)}
                            />

                            <button onClick={handleAnalyze} className="analyze-btn">
                                Analyze Match
                            </button>
                        </>
                    )}

                    {/* LOADING */}
                    {step === "loading" && (
                        <div className="loading">
                            <div className="loader"></div>
                            <span>Analyzing experience...</span>
                        </div>
                    )}

                    {/* RESULT */}
                    {step === "result" && result && (
                        <div className="result">

                            {/* Score */}
                            <div className="score">
                                <span className="percent">{displayScore}%</span>
                                <span className="badge">
                                    {result.score > 80
                                        ? "Strong Match"
                                        : result.score > 60
                                            ? "Good Match"
                                            : "Low Match"}
                                </span>
                            </div>

                            {/* Typing summary */}
                            <p className="ai-summary">{typedText}</p>

                            {/* Progressive matched skills */}
                            <div className="chips success">
                                {result.matched.slice(0, visiblePoints).map((s) => (
                                    <span key={s}>{s}</span>
                                ))}
                            </div>

                            {/* Progressive missing skills */}
                            <div className="chips danger">
                                {result.missing.slice(0, visiblePoints).map((s) => (
                                    <span key={s}>{s}</span>
                                ))}
                            </div>

                        </div>
                    )}

                </div>
            </div>


        </div>
    );
}

export default RecruiterModal;
