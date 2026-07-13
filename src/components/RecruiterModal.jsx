import React, { useState, useEffect } from "react";
import RecruiterToggle from "./RecruiterToggle";
import { recruiterDataset } from "./recruiterDataset";

const calculateMatch = (text) => {
    const lines = text.split("\n");
    let role = null;
    let industry = null;
    let exp = null;
    let requiredSkills = [];

    // 1. Try to parse as raw synthetic record format first
    let rawRole = null;
    let rawIndustry = null;
    let rawExp = null;

    lines.forEach(line => {
        const lower = line.toLowerCase();
        if (lower.startsWith("role:")) {
            rawRole = line.substring(5).trim();
        } else if (lower.startsWith("industry:")) {
            rawIndustry = line.substring(9).trim();
        } else if (lower.startsWith("exp:")) {
            const match = line.substring(4).match(/\d+/);
            if (match) rawExp = parseInt(match[0], 10);
        }
    });

    if (rawRole && rawIndustry && rawExp !== null) {
        // Find match in dataset
        const matchedRecord = recruiterDataset.find(r =>
            r.role.toLowerCase() === rawRole.toLowerCase() &&
            r.industry.toLowerCase() === rawIndustry.toLowerCase() &&
            r.exp === rawExp
        );
        if (matchedRecord) {
            const matched = matchedRecord.required.filter(s => matchedRecord.candidate.includes(s));
            const missing = matchedRecord.required.filter(s => !matchedRecord.candidate.includes(s));
            return {
                score: matchedRecord.score,
                matched,
                missing,
                notMentioned: []
            };
        }
    }

    // 2. Natural language job description parsing fallback
    const jdLower = text.toLowerCase();

    // Extract Role
    const rolesList = [
        "UI Designer",
        "UX Designer",
        "Product Designer",
        "Senior Product Designer",
        "Lead Product Designer",
        "Principal Product Designer",
        "Design Manager",
        "UX Researcher",
        "Interaction Designer",
        "Visual Designer"
    ];
    // Sort roles by length descending to match most specific roles first
    rolesList.sort((a, b) => b.length - a.length);

    for (const r of rolesList) {
        if (jdLower.includes(r.toLowerCase())) {
            role = r;
            break;
        }
    }

    // Extract Industry
    const industriesList = [
        "SaaS",
        "Enterprise",
        "FinTech",
        "HealthTech",
        "EdTech",
        "Ecommerce",
        "AI",
        "Mining",
        "Travel",
        "Real Estate"
    ];
    for (const ind of industriesList) {
        if (jdLower.includes(ind.toLowerCase())) {
            industry = ind;
            break;
        }
    }

    // Extract EXP
    const expRegexes = [
        /exp(?:erience)?:\s*(\d+)/i,
        /(\d+)\s*(?:\+|plus)?\s*years?/i,
        /(\d+)\s*yrs?/i
    ];
    for (const regex of expRegexes) {
        const match = text.match(regex);
        if (match) {
            exp = parseInt(match[1], 10);
            break;
        }
    }

    // Extract Required Skills
    const skillsList = [
        "A/B Testing", "Accessibility", "Adobe XD", "Agile", "Auto Layout", "CSS", "Color Theory",
        "Competitive Analysis", "Components", "Design Systems", "Design Tokens", "FigJam", "Figma",
        "Framer", "GA4", "HTML", "Hotjar", "Illustrator", "Information Architecture", "Interaction Design",
        "JavaScript", "Journey Mapping", "Microsoft Clarity", "Personas", "Photoshop", "Product Strategy",
        "Prototyping", "React", "Scrum", "Sketch", "Stakeholder Management", "Typography", "UX Research",
        "Usability Testing", "User Flows", "User Interviews", "Variants", "Visual Design", "WCAG", "Wireframing"
    ];
    skillsList.forEach(skill => {
        if (jdLower.includes(skill.toLowerCase())) {
            requiredSkills.push(skill);
        }
    });

    // If we have role, industry, and exp, try to find the record in dataset
    if (role && industry && exp !== null) {
        const expLevels = [1, 2, 3, 5, 7];
        const closestExp = expLevels.reduce((prev, curr) =>
            Math.abs(curr - exp) < Math.abs(prev - exp) ? curr : prev
        );

        const matchedRecord = recruiterDataset.find(r =>
            r.role.toLowerCase() === role.toLowerCase() &&
            r.industry.toLowerCase() === industry.toLowerCase() &&
            r.exp === closestExp
        );

        if (matchedRecord) {
            const matched = matchedRecord.required.filter(s => matchedRecord.candidate.includes(s));
            const missing = matchedRecord.required.filter(s => !matchedRecord.candidate.includes(s));
            return {
                score: matchedRecord.score,
                matched,
                missing,
                notMentioned: []
            };
        }
    }

    // Fallback dynamic scoring
    const candidateSkills = [
        "Figma", "FigJam", "Framer", "Sketch", "Adobe XD", "Photoshop", "Illustrator",
        "Wireframing", "Prototyping", "Interaction Design", "Information Architecture",
        "Visual Design", "Typography", "Color Theory", "Design Systems", "Design Tokens",
        "Auto Layout", "Components", "Variants", "Accessibility", "WCAG"
    ];

    const matched = requiredSkills.filter(s => candidateSkills.includes(s));
    const missing = requiredSkills.filter(s => !candidateSkills.includes(s));
    const finalExp = exp || 5;

    let score = 54 + 7 * matched.length + 4 * (finalExp - 1);
    score = Math.min(100, Math.max(0, score));

    return {
        score,
        matched,
        missing,
        notMentioned: []
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
        if (step === "result" && result) {
            let i = 0;
            const maxPoints = Math.max(result.matched.length, result.missing.length, 4);
            const interval = setInterval(() => {
                i++;
                setVisiblePoints(i);
                if (i >= maxPoints) clearInterval(interval);
            }, 300);

            return () => clearInterval(interval);
        }
    }, [step, result]);

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
                            {/* <span className="beta-tag">Beta</span> */}
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
