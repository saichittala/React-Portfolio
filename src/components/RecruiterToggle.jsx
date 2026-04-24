import React, { useEffect } from "react";

function RecruiterToggle({ recruiterMode, setRecruiterMode }) {
  useEffect(() => {
    document.body.classList.toggle("recruiter-mode", recruiterMode);
  }, [recruiterMode]);

  const toggle = () => setRecruiterMode((prev) => !prev);

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={recruiterMode}
      className="recruiter-toggle-wrapper display-none"
    >
      <span className={`header-text-1 ${recruiterMode ? "active" : ""}`}>
        Recruiter
      </span>

      <div className={`toggle-switch ${recruiterMode ? "on" : ""}`}>
        <div className="toggle-thumb" />
      </div>
    </button>
  );
}

export default RecruiterToggle;
