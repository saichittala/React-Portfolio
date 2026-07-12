import React, { useState, useEffect } from "react";
import RecruiterToggle from "./RecruiterToggle";
// 🧠 Enhanced Resume Intelligence
const resumeSkills = {
    "UX Design": {
        keywords: ["ux", "user experience", "ux design", "experience design"],
        weight: 1.5,
    },
    "UI Design": {
        keywords: ["ui", "user interface", "visual design"],
        weight: 1.2,
    },
    "Product Design": {
        keywords: ["product design", "end-to-end", "0 to 1", "product thinking"],
        weight: 2,
    },
    "User Research": {
        keywords: ["user research", "research", "usability testing", "interviews"],
        weight: 1.5,
    },
    "Design Systems": {
        keywords: ["design system", "component library", "tokens"],
        weight: 1.8,
    },
    "Prototyping": {
        keywords: ["prototype", "prototyping", "wireframe"],
        weight: 1,
    },
    "Figma": {
        keywords: ["figma"],
        weight: 0.8,
    },
    "A/B Testing": {
        keywords: ["a/b", "ab testing", "experiment"],
        weight: 1.2,
    },
    "Analytics": {
        keywords: ["analytics", "ga4", "metrics", "data"],
        weight: 1.3,
    },
};

const calculateMatch = (text) => {
    const jd = text.toLowerCase();

    let matched = [];
    let missing = [];
    let notMentioned = [];

    let totalWeight = 0;
    let matchedWeight = 0;

    Object.entries(resumeSkills).forEach(([skill, skillConfig]) => {
        totalWeight += skillConfig.weight;

        const found = skillConfig.keywords.some((keyword) =>
            jd.includes(keyword)
        );

        if (found) {
            matched.push(skill);
            matchedWeight += skillConfig.weight;
        } else {
            // Only consider "missing" if it's an important skill
            if (skillConfig.weight >= 1.3) {
                missing.push(skill);
            } else {
                notMentioned.push(skill);
            }
        }
    });

    const score = Math.round((matchedWeight / totalWeight) * 100);

    return {
        score,
        matched,
        missing,        // High-value gaps
        notMentioned,   // Skills you have but JD didn’t mention
    };
};

function RecruiterModal({ recruiterMode, setRecruiterMode }) {
    const [step, setStep] = useState("idle");
    const [jobDesc, setJobDesc] = useState("");
    const [result, setResult] = useState(null);
    const [displayScore, setDisplayScore] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [visiblePoints, setVisiblePoints] = useState(0);

    const generateSummary = (score, matched, missing) => {
        if (score > 80) {
            return `Excellent match! His experience aligns well with ${matched.length} key requirements.`;
        } else if (score > 60) {
            // return `Good match! You have ${matched.length} matching skills. Consider developing: ${missing.slice(0, 2).join(", ")}.`;
            return `Good match! He has ${matched.length} matching skills.`;
        } else {
            return `There's potential! He matches ${matched.length} skills. Focus on: ${missing.slice(0, 3).join(", ")}.`;
        }
    };

    const handleAnalyze = () => {
        if (!jobDesc.trim()) return;

        setStep("loading");
        setTimeout(() => {
            const analysisResult = calculateMatch(jobDesc);
            setResult(analysisResult);
            setStep("result");
            setDisplayScore(0);
            setTypedText("");
            setVisiblePoints(0);
        }, 1500);
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

    const handleReset = () => {
        setStep("idle");
        setJobDesc("");
        setResult(null);
        setDisplayScore(0);
        setTypedText("");
        setVisiblePoints(0);
    };

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
                <div>
                    <img
                        className="close-button-recruiter cursor-link"
                        src="img/close-popup.svg"
                        alt="close-popup"
                        onClick={() => setRecruiterMode(false)}
                    />
                </div>

                {/* ✨ Glow Layer */}
                <div className="chat-glow">
                </div>



                {/* ✨ Content Wrapper (important for layering) */}
                <div className="modal-content">

                    {/* Header */}
                    <div className="modal-header">

                        {/* Left */}
                        <div className="df-g8 gap-8 aic">
                            <span>AI Job Match Analysis</span>
                            <span className="beta-tag">Beta</span>
                        </div>

                        {/* Right */}
                        <div className="df-g8 aic">

                            {/* Toggle */}
                            <RecruiterToggle
                                recruiterMode={recruiterMode}
                                setRecruiterMode={setRecruiterMode}
                            />
                            {/* <button
                                className="mini-toggle"
                                onClick={() => setRecruiterMode(false)}
                            >
                                Exit
                            </button> */}

                            {/* Close button */}
                            {/* <button
                                className="close-btn"
                                onClick={() => setRecruiterMode(false)}
                            >
                                ✕
                            </button> */}


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

                            <button
                                onClick={handleAnalyze}
                                className="analyze-btn btn-1 jc-c"
                                disabled={!jobDesc.trim()}
                            >
                                Analyze Match
                            </button>
                        </>
                    )}

                    {/* LOADING */}
                    {step === "loading" && (
                        <div className="loading">
                            <div className="loader"></div>
                            <span className="loading-rec">Analyzing experience...</span>
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
                                {/* <p>Matched</p> */}
                                {result.matched.slice(0, visiblePoints).map((s) => (
                                    <span key={s}>{s}</span>
                                ))}
                            </div>

                            {/* Progressive missing skills */}

                            <div className="chips danger">
                                {/* <p>Missing</p> */}
                                {result.missing.slice(0, visiblePoints).map((s) => (
                                    <span key={s}>{s}</span>
                                ))}
                            </div>

                            {/* 👉 Reset CTA */}
                            <button onClick={handleReset} className="reset-btn-rec btn-1 jc-c">
                                Reset
                            </button>
                        </div>
                    )}

                </div>
            </div>


        </div>
    );
}

export default RecruiterModal;
