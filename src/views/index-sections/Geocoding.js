import React from 'react';
import fastImg from 'assets/img/fast_geocoding.png';
import slowImg from 'assets/img/slow_geocoding.png';
import Row from "reactstrap";

function Geocoding() {
    return (
    <div style={{ width: '100%', textAlign: 'center', padding: '40px 0', backgroundColor: 'white' }}>
    <div
    style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    width: '90%',
    maxWidth: '900px',
    margin: '0 auto',
    }}
    >
    <div
    style={{
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '24px',
    maxWidth: '400px',
    }}
    >
    <img
    src={slowImg}
    alt="Slow geocoding visualization"
    style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '16px' }}
    />
    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#444' }}>
    before
    </h3>
    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
    geocoding was slow, and the filtering logic showed all events.
    </p>
    </div>
    
    <div
    style={{
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '24px',
    maxWidth: '400px',
    }}
    >
    <img
    src={fastImg}
    alt="Optimized geocoding visualization"
    style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '16px' }}
    />
    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#444' }}>
    after
    </h3>
    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
    adjusted timeout limits and filtered results by radius, improving speed and accuracy of nearby events.
    </p>
    </div>
    </div>
    </div>
    );
    }


export default Geocoding;