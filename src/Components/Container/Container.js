  import React from 'react';

export default function Container() {
  return (
    <section className="section section-lg pt-lg-0 mt--300">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row row-grid">
              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <h6 className="text-primary text-uppercase">Download Argon</h6>
                    <p className="description mt-3">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                    <div>
                      <span className="badge badge-pill badge-primary">design</span>
                      <span className="badge badge-pill badge-primary">system</span>
                      <span className="badge badge-pill badge-primary">creative</span>
                    </div>
                    <a href="/" className="btn btn-primary mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <h6 className="text-success text-uppercase">Build Something</h6>
                    <p className="description mt-3">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                    <div>
                      <span className="badge badge-pill badge-success">business</span>
                      <span className="badge badge-pill badge-success">vision</span>
                      <span className="badge badge-pill badge-success">success</span>
                    </div>
                    <a href="/" className="btn btn-success mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <h6 className="text-warning text-uppercase">Prepare Launch</h6>
                    <p className="description mt-3">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                    <div>
                      <span className="badge badge-pill badge-warning">marketing</span>
                      <span className="badge badge-pill badge-warning">product</span>
                      <span className="badge badge-pill badge-warning">launch</span>
                    </div>
                    <a href="/" className="btn btn-warning mt-4">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
