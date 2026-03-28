import React from 'react';

const About = () => {
  return (
    <main className="page">
      <section className="hero hero--narrow">
        <p className="eyebrow">About BloodLink</p>
        <h1>Connecting donors and hospitals to save lives.</h1>
        <p className="lead">
          BloodLink is a real-time blood donation management platform that bridges
          the gap between individual donors and hospitals. Our mission is to make
          blood availability transparent, urgent requests visible, and clinical
          transfers seamless.
        </p>
      </section>

      <section className="grid grid--two" style={{ marginBottom: '2rem' }}>
        <div className="panel">
          <div className="panel__header">
            <div>
              <p className="eyebrow">For Donors</p>
              <h3>Your blood, your choice</h3>
            </div>
          </div>
          <div className="inventory-list">
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Toggle Availability</h4>
                <p className="hint">
                  Decide when you're ready to donate. Turn your status on or off anytime from the Donate page.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Emergency Opt-In</h4>
                <p className="hint">
                  Enable emergency notifications to receive email alerts when a hospital urgently needs your blood type.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Accept or Reject Requests</h4>
                <p className="hint">
                  When a hospital requests your blood, you can review the details and choose to accept or reject the transfer.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Track Your Transfers</h4>
                <p className="hint">
                  View all active transfer requests from hospitals on your dashboard with full contact details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel__header">
            <div>
              <p className="eyebrow">For Hospitals</p>
              <h3>Find blood, fast</h3>
            </div>
          </div>
          <div className="inventory-list">
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Search & Filter Donors</h4>
                <p className="hint">
                  Filter available donors by blood type, city, and proximity using location-aware sorting.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Take Units</h4>
                <p className="hint">
                  Claim a donor's blood unit instantly. The donor is notified via email with your hospital's contact details.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Emergency Alerts</h4>
                <p className="hint">
                  Send emergency alerts to all donors with matching blood groups who have opted in for urgent notifications.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Manage Active Transfers</h4>
                <p className="hint">
                  Track all claimed donors in your Active Transfers panel. Mark transfers as completed when done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid" style={{ marginBottom: '2rem' }}>
        <div className="panel panel--accent">
          <div className="panel__header">
            <div>
              <p className="eyebrow">How It Works</p>
              <h3>The BloodLink workflow</h3>
            </div>
          </div>
          <div className="inventory-list">
            <div className="inventory-row">
              <div className="pill pill--ghost">1</div>
              <div className="inventory-row__meta">
                <h4>Donor signs up & sets availability</h4>
                <p className="hint">
                  Individuals register with their blood group, address, and date of birth. Toggling "Ready to Donate" makes them visible to hospitals.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="pill pill--ghost">2</div>
              <div className="inventory-row__meta">
                <h4>Hospital searches for blood</h4>
                <p className="hint">
                  Hospitals filter donors by blood type and location. Our system sorts by proximity so the nearest donors appear first.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="pill pill--ghost">3</div>
              <div className="inventory-row__meta">
                <h4>Hospital claims a unit</h4>
                <p className="hint">
                  Clicking "Take units" creates a transfer record, notifies the donor by email, and removes them from the public inventory.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="pill pill--ghost">4</div>
              <div className="inventory-row__meta">
                <h4>Donor reviews & coordinates</h4>
                <p className="hint">
                  The donor sees the request on their dashboard with hospital contact info. They can accept or reject the transfer.
                </p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="pill pill--ghost">5</div>
              <div className="inventory-row__meta">
                <h4>Transfer completed</h4>
                <p className="hint">
                  Once the blood is physically transferred, the hospital marks it as completed and both dashboards are updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid" style={{ marginBottom: '2rem' }}>
        <div className="panel">
          <div className="panel__header">
            <div>
              <p className="eyebrow">Technology</p>
              <h3>Built with modern tools</h3>
            </div>
          </div>
          <div className="inventory-list">
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>React Frontend</h4>
                <p className="hint">Single-page application with responsive design, location-aware sorting, and real-time state management.</p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Node.js + Express Backend</h4>
                <p className="hint">RESTful API handling authentication, donor matching, transfer management, and automated email dispatch.</p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>MongoDB Atlas</h4>
                <p className="hint">Cloud-hosted database storing user profiles, blood transfers, and emergency request records.</p>
              </div>
            </div>
            <div className="inventory-row">
              <div className="inventory-row__meta">
                <h4>Nodemailer</h4>
                <p className="hint">Automated email notifications to donors when hospitals claim their blood or send emergency alerts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
