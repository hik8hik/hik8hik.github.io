import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section class="ud-hero" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                <h1 class="ud-hero-title">
                  Precisely Measured & Cut Designs
                </h1>
                <p class="ud-hero-desc">
                  We are just trying...
                </p>
                <ul class="ud-hero-buttons">
                  <li>
                    <a
                      href="https://links.uideck.com/play-bootstrap-download"
                      rel="nofollow noopener"
                      target="_blank"
                      class="ud-main-btn ud-white-btn"
                    >
                      Download Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/uideck/play-bootstrap"
                      rel="nofollow noopener"
                      target="_blank"
                      class="ud-main-btn ud-link-btn"
                    >
                      Learn More <i class="lni lni-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="ud-hero-brands-wrapper wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="assets/images/hero/brand.svg" alt="brand" />
              </div>
              <div class="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                <img src="assets/images/hero/hero-image.svg" alt="hero-image" />
                <img
                  src="assets/images/hero/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-1"
                />
                <img
                  src="assets/images/hero/dotted-shape.svg"
                  alt="shape"
                  class="shape shape-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="ud-features">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ud-section-title">
                        <span>Features</span>
                        <h2>Why Qiqad?</h2>
                        <p>
                            Qiqad values customer satisfaction.
                            <br />
                            Breaking all the expectations.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-gift"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Strong & Durable</h3>
                            <p class="ud-feature-desc">
                                Qiqad ensures all product can handle relevant stress.
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-move"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Easy Assembly</h3>
                            <p class="ud-feature-desc">
                                Detailed user manual and obvious joints will do.
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-layout"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">High-quality Design</h3>
                            <p class="ud-feature-desc">
                                Appealing design is defination of modern finale.
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-brush"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Tailor-Made</h3>
                            <p class="ud-feature-desc">
                                Color, size, decoration... Everything is customizable at Qiqad.
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                  Learn More
                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="ud-about">
        <div class="container">
            <div class="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                <div class="ud-about-content-wrapper">
                    <div class="ud-about-content">
                        <span class="tag">About Us</span>
                        <h2>Brilliant designers and artists.</h2>
                        <p>
                            The main focus being to make quality designs and final product. We encapsulate all our focus on the smile of the customer and loyalty. Trying to fulfil all promises made, quality, applealing, durable and ease of handling.
                        </p>

                        <p>
                            Simply the best.
                        </p>
                        <a href="javascript:void(0)" class="ud-main-btn">Learn More</a>
                    </div>
                </div>
                <div class="ud-about-image">
                    <img src="assets/images/about/about-image.svg" alt="about-image" />
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="ud-pricing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ud-section-title mx-auto text-center">
                        <span>Pricing</span>
                        <h2>Our Pricing Plans</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row g-0 align-items-center justify-content-center">
                <p>
                    xxss
                </p>
            </div>
        </div>
    </section>

    
    </div>
  );
}

export default Home;
