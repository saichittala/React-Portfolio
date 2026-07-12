import React from 'react';

export const HomeSkeleton = () => (
  <div className="skeleton-container">
    {/* Hero Text */}
    <div className="flex-col-g16">
      <div className="skeleton skeleton-text short" />
      <div className="skeleton skeleton-text heading" />
      <div className="skeleton skeleton-text subheading" />
    </div>

    {/* Shipped Products title */}
    <div className="skeleton skeleton-text title" />

    {/* Shipped Products cards (2-column layout) */}
    <div className="skeleton-grid-2">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton-card-image" />
          <div className="skeleton skeleton-card-title" />
          <div className="skeleton skeleton-card-subtitle" />
        </div>
      ))}
    </div>
  </div>
);

export const WorksSkeleton = () => (
  <div className="skeleton-container">
    {/* Works Title */}
    <div className="skeleton skeleton-text title skel-text-title-180" />

    {/* Works cards (3-column layout) */}
    <div className="skeleton-grid-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton-card-image" />
          <div className="skeleton skeleton-card-title" />
          <div className="skeleton skeleton-card-subtitle" />
        </div>
      ))}
    </div>
  </div>
);

export const AboutSkeleton = () => (
  <div className="skeleton-container gap-56">
    {/* Hero text */}
    <div className="skeleton skeleton-text heading" style={{ width: '70%' }} />

    {/* Details (split layout) */}
    <div className="flex-wrap-g48">
      <div className="skel-about-left">
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text short" />
      </div>
      <div className="skeleton skel-about-right" />
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="skeleton-container">
    {/* Contact Title */}
    <div className="skeleton skeleton-text title skel-text-title-200" />

    {/* Form blocks */}
    <div className="skel-form-wrapper">
      <div className="flex-col-g8">
        <div className="skeleton skeleton-text short" />
        <div className="skeleton skel-input-field" />
      </div>
      <div className="flex-col-g8">
        <div className="skeleton skeleton-text short" />
        <div className="skeleton skel-input-field" />
      </div>
      <div className="flex-col-g8">
        <div className="skeleton skeleton-text short" />
        <div className="skeleton skel-textarea-field" />
      </div>
      <div className="skeleton skel-btn-field" />
    </div>
  </div>
);

export const ProjectSkeleton = () => (
  <div className="skeleton-container skel-pt-120">
    {/* Hero Banner */}
    <div className="skeleton skel-banner" />

    {/* Project Header */}
    <div className="flex-col-g16-mt24">
      <div className="skeleton skeleton-text heading" style={{ width: '40%' }} />
      <div className="skeleton skeleton-text short" />
    </div>

    {/* Body text blocks */}
    <div className="flex-col-g16-mt32">
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text short" />
    </div>
  </div>
);
