import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <section class="ud-page-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-banner-content">
              <h1>404 Page</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ud-404">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-404-wrapper">
              <div class="ud-404-content">
                <h2 class="ud-404-title">404 - We couldn't find that page.</h2>
                <h5 class="ud-404-subtitle">
                  Maybe you can find what you need here?
                </h5>
                <ul class="ud-404-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Support</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Error;
