import React from 'react';

export const HomeSkeleton = () => (
  <div className="skeleton-container">
    {/* Hero Text */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
    <div className="skeleton skeleton-text title" style={{ width: '180px', height: '48px' }} />

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
  <div className="skeleton-container" style={{ gap: '56px' }}>
    {/* Hero text */}
    <div className="skeleton skeleton-text heading" style={{ width: '70%' }} />

    {/* Details (split layout) */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text paragraph" />
        <div className="skeleton skeleton-text short" />
      </div>
      <div style={{ flex: '0 0 280px', height: '280px', borderRadius: '24px' }} className="skeleton" />
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="skeleton-container">
    {/* Contact Title */}
    <div className="skeleton skeleton-text title" style={{ width: '200px', height: '48px' }} />

    {/* Form blocks */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton skeleton-text short" />
        <div className="skeleton" style={{ height: '48px', width: '100%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton skeleton-text short" />
        <div className="skeleton" style={{ height: '48px', width: '100%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton skeleton-text short" />
        <div className="skeleton" style={{ height: '140px', width: '100%', borderRadius: '8px' }} />
      </div>
      <div className="skeleton" style={{ height: '48px', width: '140px', borderRadius: '99px', marginTop: '16px' }} />
    </div>
  </div>
);

export const ProjectSkeleton = () => (
  <div className="skeleton-container" style={{ paddingTop: '120px' }}>
    {/* Hero Banner */}
    <div className="skeleton" style={{ width: '100%', aspectRatio: '16/7', borderRadius: '24px' }} />

    {/* Project Header */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
      <div className="skeleton skeleton-text heading" style={{ width: '40%' }} />
      <div className="skeleton skeleton-text short" />
    </div>

    {/* Body text blocks */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text paragraph" />
      <div className="skeleton skeleton-text short" />
    </div>
  </div>
);
