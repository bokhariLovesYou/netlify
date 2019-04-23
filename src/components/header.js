import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NetlifyLogo from "../images/netlify.svg"
import IconSearch from "../images/icon-search.svg"
import IconClose from "../images/icon-close.svg"

const Header = props => (
  <header>
    <div className="header-outer">
      <div className="container">
        <div className="header-inner">
          <div className="nav-parent-left">
            <div className="logo-box">
              <Link className="logo-url" to="https://www.netlify.com/">
                <svg
                  id="logotype"
                  viewBox="0 0 148 40"
                  width="100%"
                  height="100%"
                >
                  <title>Netlify logotype</title>
                  <g transform="translate(-54, 0)">
                    <svg
                      id="logo"
                      viewBox="0 0 40 40"
                      width="100%"
                      height="100%"
                    >
                      <g fill="url(#netlifyGradient)">
                        <path
                          id="netlifyGem"
                          d="M28.58865,14.135028 C28.58395,14.132628 28.57945,14.130928 28.57505,14.129228 C28.56675,14.126028 28.55905,14.123128 28.55185,14.116228 C28.52855,14.094228 28.51935,14.054728 28.52445,14.023128 L29.29675,9.296708 L32.92245,12.922528 L29.15235,14.526628 C29.14195,14.531128 29.13065,14.533428 29.11935,14.533428 C29.11195,14.533428 29.10775,14.533428 29.10405,14.532128 C29.09895,14.530328 29.09475,14.526128 29.08485,14.516428 C28.95165,14.368228 28.78625,14.236028 28.58865,14.135028 Z M33.84685,13.846928 L37.72315,17.723128 C38.52845,18.528528 38.93115,18.931228 39.07845,19.396928 C39.10025,19.465728 39.11815,19.535328 39.13225,19.605628 L29.86905,15.683328 C29.86435,15.681328 29.85945,15.679328 29.85445,15.677328 C29.81695,15.662128 29.77405,15.644828 29.77405,15.606528 C29.77405,15.568928 29.81825,15.550828 29.85505,15.535628 C29.85905,15.534028 29.86295,15.532428 29.86665,15.530928 L33.84685,13.846928 Z M38.97385,20.850028 C38.77395,21.226028 38.38415,21.615828 37.72315,22.276928 L33.35425,26.645728 L27.70205,25.468628 C27.69265,25.466628 27.68245,25.465028 27.67215,25.463328 C27.62275,25.455228 27.56865,25.446328 27.56865,25.400528 C27.51695,24.923528 27.29295,24.497728 26.91385,24.208228 C26.89075,24.185328 26.89725,24.149128 26.90325,24.115828 C26.90405,24.111128 26.90485,24.106528 26.90565,24.102028 L27.96935,17.576028 C27.97045,17.569128 27.97145,17.561828 27.97255,17.554428 C27.97945,17.504628 27.98765,17.446128 28.03385,17.446128 C28.50925,17.379028 28.91765,17.146528 29.19325,16.781228 C29.20155,16.770328 29.20805,16.760028 29.22035,16.754128 C29.25185,16.739228 29.29095,16.754828 29.32305,16.768328 L38.97385,20.850028 Z M32.34875,27.651228 L25.16275,34.837228 L26.39375,27.276728 C26.39425,27.273228 26.39475,27.269728 26.39515,27.266228 C26.39645,27.256728 26.39765,27.247328 26.40115,27.238228 C26.41075,27.213928 26.43715,27.203528 26.46215,27.193628 C26.46615,27.192028 26.47005,27.190528 26.47385,27.188928 C26.74695,27.075328 26.97865,26.895028 27.16905,26.672128 C27.19325,26.643828 27.22225,26.617428 27.25905,26.611128 C27.26725,26.609728 27.27975,26.610628 27.28795,26.612328 L32.34875,27.651228 Z M23.64205,36.358028 L22.83175,37.168328 L13.87735,24.226028 C13.87405,24.221328 13.87055,24.216628 13.86695,24.211928 C13.85285,24.193428 13.83845,24.174328 13.84055,24.151928 C13.84195,24.135728 13.85225,24.122628 13.86255,24.109628 C13.86585,24.105428 13.86925,24.101128 13.87225,24.096828 C13.89965,24.057628 13.92295,24.017628 13.94845,23.973728 C13.95505,23.962428 13.96175,23.950828 13.96875,23.938928 L13.97075,23.935628 C13.98465,23.911928 13.99785,23.889428 14.02215,23.876428 C14.04325,23.865228 14.07175,23.869928 14.09515,23.874828 L24.01635,25.920828 C24.04105,25.925928 24.07445,25.936328 24.09245,25.954028 C24.10525,25.966828 24.10795,25.980728 24.11095,25.996528 C24.11205,26.002828 24.11335,26.009428 24.11525,26.016228 C24.26085,26.528828 24.63425,26.972228 25.13915,27.171928 C25.16715,27.185728 25.15475,27.217328 25.14175,27.250428 C25.13575,27.265628 25.12965,27.281128 25.12725,27.295328 C25.00245,28.055728 23.92985,34.593128 23.64205,36.358028 Z M21.94995,38.049128 C21.35315,38.640128 21.00115,38.952628 20.60305,39.078528 C20.21065,39.202628 19.78935,39.202628 19.39695,39.078528 C18.93115,38.931228 18.52845,38.528528 17.72315,37.723128 L8.73041,28.730428 L11.07885,25.086928 C11.09045,25.068928 11.10095,25.052628 11.11845,25.040228 C11.14395,25.022128 11.18035,25.030828 11.21015,25.040128 C11.45185,25.114728 11.67995,25.145028 11.92335,25.145028 C12.23745,25.145028 12.53565,25.082328 12.84835,24.956928 C12.87475,24.946328 12.90215,24.940028 12.92335,24.958828 C12.93345,24.967828 12.94385,24.980228 12.95145,24.991328 L21.94995,38.049128 Z M7.86325,27.863228 L5.79956,25.799528 L9.8744,24.061628 C9.88486,24.057128 9.89611,24.054828 9.90748,24.054828 C9.94124,24.054828 9.96101,24.088628 9.97946,24.120128 C9.984,24.127928 9.98846,24.135528 9.99303,24.142428 C10.03191,24.201528 10.07078,24.253028 10.10966,24.304328 C10.11272,24.308328 10.11963,24.316028 10.12248,24.320128 C10.13403,24.337128 10.12557,24.353628 10.11446,24.370828 L7.86325,27.863228 Z M4.88716,24.887128 L2.27688,22.276928 C1.83293,21.832928 1.511345,21.511328 1.287443,21.234128 L9.22264,22.879628 C9.23201,22.881528 9.24212,22.883228 9.25244,22.884928 C9.30189,22.892928 9.35601,22.901828 9.35601,22.947628 C9.35601,22.997328 9.2973,23.020628 9.24713,23.040428 C9.23912,23.043628 9.23133,23.046728 9.22403,23.049828 L4.88716,24.887128 Z M0.83135,19.891928 C0.84039822,19.724728 0.8704545,19.558428 0.9215188,19.396928 C1.068812,18.931228 1.471502,18.528528 2.27688,17.723128 L5.61789,14.382128 C6.16841,15.190128 9.80487,20.443328 10.22934,21.051328 C10.23348,21.057228 10.238,21.063328 10.24261,21.069528 C10.26971,21.106128 10.29957,21.146428 10.26932,21.176328 C10.12296,21.337028 9.9766,21.512928 9.8737,21.704128 C9.86155,21.726628 9.84599,21.752228 9.8242,21.765728 C9.81094,21.773928 9.79737,21.771028 9.78225,21.767828 L9.77999,21.767428 L0.83135,19.891928 Z M6.51068,13.489328 L11.00195,8.998018 C11.42405,9.182688 12.96045,9.831958 14.33375,10.412338 C15.37465,10.852228 16.32225,11.252728 16.61955,11.381128 C16.64945,11.394028 16.67675,11.405828 16.68995,11.435628 C16.69785,11.453528 16.69395,11.477128 16.68995,11.496328 C16.65965,11.640028 16.64455,11.783728 16.64455,11.927428 C16.64455,12.455428 16.85135,12.949428 17.21315,13.324128 C17.24295,13.353528 17.21285,13.396628 17.18655,13.434428 C17.18165,13.441528 17.17685,13.448428 17.17265,13.455028 L12.61335,20.518228 C12.60095,20.537428 12.58965,20.555028 12.57045,20.567528 C12.54625,20.583328 12.51235,20.576228 12.48435,20.569128 C12.30665,20.524128 12.11625,20.494928 11.94065,20.494928 C11.77745,20.494928 11.59885,20.525528 11.41935,20.557628 L11.41775,20.557928 C11.39835,20.561428 11.38035,20.564728 11.36425,20.553028 C11.34665,20.540328 11.33135,20.519928 11.31905,20.502028 L6.51068,13.489328 Z M11.90875,8.091218 L17.72315,2.276888 C18.52845,1.471504 18.93115,1.068812 19.39695,0.9215196 C19.78935,0.7973975 20.21065,0.7973975 20.60305,0.9215197 C21.06885,1.068812 21.47155,1.471503 22.27685,2.276888 L23.53685,3.536838 L19.40185,9.941378 C19.38995,9.959798 19.37905,9.976588 19.36095,9.989048 C19.33595,10.006238 19.30055,9.998138 19.27135,9.989838 C19.06205,9.930318 18.85265,9.900558 18.64325,9.900558 C18.17805,9.900558 17.71285,10.070888 17.35105,10.360448 C17.32425,10.386938 17.28415,10.370608 17.24965,10.355608 C16.70965,10.121178 12.50965,8.345268 11.90875,8.091218 Z M24.41455,4.414568 L28.23345,8.233478 L27.31395,13.930628 C27.31325,13.935228 27.31265,13.940528 27.31215,13.946028 C27.31075,13.959128 27.30915,13.973528 27.30455,13.983828 C27.29555,14.003828 27.27585,14.008328 27.25485,14.013128 C27.24775,14.014728 27.24045,14.016428 27.23335,14.018728 C27.03995,14.081928 26.86055,14.170928 26.70645,14.285928 C26.69925,14.291328 26.69325,14.297628 26.68745,14.303728 C26.67585,14.316028 26.66495,14.327428 26.64705,14.328528 C26.63525,14.329228 26.61535,14.326628 26.60445,14.321928 L20.78625,11.849828 C20.78245,11.848228 20.77855,11.846628 20.77455,11.844928 C20.73775,11.829828 20.69365,11.811628 20.69365,11.774028 C20.66225,11.463028 20.55895,11.152128 20.39705,10.880028 C20.39295,10.873228 20.38875,10.866328 20.38435,10.859328 C20.35585,10.813428 20.32545,10.764668 20.34905,10.718018 L24.41455,4.414568 Z M20.48325,13.020928 L25.93675,15.331328 C25.96795,15.344528 25.99985,15.358028 26.01255,15.389428 C26.01925,15.406228 26.01605,15.428128 26.01265,15.445728 C25.99735,15.525228 25.98345,15.617028 25.98345,15.708728 L25.98345,15.862028 C25.98345,15.899528 25.94425,15.915828 25.90845,15.930528 C25.90445,15.932228 25.90045,15.933828 25.89665,15.935428 C25.03295,16.303828 13.76645,21.108128 13.74985,21.108128 C13.73265,21.108128 13.71545,21.108128 13.69815,21.091128 C13.66845,21.061728 13.69845,21.018628 13.72475,20.980728 C13.72965,20.973728 13.73445,20.966828 13.73875,20.960228 L18.22115,14.021128 C18.22375,14.017128 18.22635,14.013028 18.22895,14.008928 C18.25545,13.967028 18.28515,13.920328 18.33315,13.920328 C18.34845,13.922428 18.36355,13.924628 18.37835,13.926728 C18.48005,13.941428 18.57025,13.954428 18.66055,13.954428 C19.34065,13.954428 19.97045,13.622628 20.35125,13.057328 C20.36135,13.042328 20.37045,13.028928 20.38475,13.017728 C20.41195,12.996628 20.45155,13.007428 20.48325,13.020928 Z M14.23735,22.205528 L26.51755,16.969128 C26.51755,16.969128 26.53485,16.969228 26.55205,16.986228 C26.61935,17.052628 26.67605,17.098428 26.73055,17.139628 C26.73865,17.145728 26.74815,17.151228 26.75775,17.156828 C26.78295,17.171428 26.80855,17.186328 26.81025,17.213028 C26.81075,17.222228 26.80975,17.229228 26.80825,17.238328 L25.75565,23.699928 C25.75425,23.708128 25.75315,23.716828 25.75195,23.725628 C25.74525,23.776428 25.73775,23.833328 25.69055,23.833328 C25.11975,23.866528 24.61445,24.190728 24.31795,24.679928 C24.31635,24.682628 24.31475,24.685228 24.31315,24.687828 C24.29945,24.710928 24.28625,24.733028 24.26215,24.745128 C24.24185,24.755228 24.21475,24.750828 24.19265,24.746228 L14.40015,22.726028 C14.39085,22.724128 14.24765,22.207128 14.23735,22.205528 Z"
                        />
                      </g>
                    </svg>
                  </g>
                  <g>
                    <path
                      id="netlifyWord"
                      d="M54.1523438,12.9804688 L54.2753906,15.1777344 C55.6816477,13.4785071 57.5273323,12.6289062 59.8125,12.6289062 C63.7734573,12.6289062 65.7890621,14.8964617 65.859375,19.4316406 L65.859375,32 L61.5878906,32 L61.5878906,19.6777344 C61.5878906,18.4706971 61.327151,17.5771513 60.8056641,16.9970703 C60.2841771,16.4169893 59.4316465,16.1269531 58.2480469,16.1269531 C56.525382,16.1269531 55.2421917,16.9062422 54.3984375,18.4648438 L54.3984375,32 L50.1269531,32 L50.1269531,12.9804688 L54.1523438,12.9804688 Z M78.5859375,32.3515625 C75.8788927,32.3515625 73.6845787,31.499032 72.0029297,29.7939453 C70.3212807,28.0888587 69.4804688,25.8183736 69.4804688,22.9824219 L69.4804688,22.4550781 C69.4804688,20.5566311 69.846676,18.860359 70.5791016,17.3662109 C71.3115271,15.8720628 72.3398371,14.7089885 73.6640625,13.8769531 C74.9882879,13.0449177 76.4648356,12.6289063 78.09375,12.6289063 C80.6836067,12.6289063 82.6845633,13.4550699 84.0966797,15.1074219 C85.5087961,16.7597739 86.2148438,19.0976411 86.2148438,22.1210938 L86.2148438,23.84375 L73.7871094,23.84375 C73.9160163,25.4140704 74.4404251,26.6562454 75.3603516,27.5703125 C76.280278,28.4843796 77.437493,28.9414062 78.8320312,28.9414062 C80.7890723,28.9414062 82.3828063,28.1503985 83.6132812,26.5683594 L85.9160156,28.765625 C85.1542931,29.9023494 84.1377017,30.7841766 82.8662109,31.4111328 C81.5947202,32.0380891 80.1679767,32.3515625 78.5859375,32.3515625 Z M78.0761719,16.0566406 C76.904291,16.0566406 75.9580114,16.4667928 75.2373047,17.2871094 C74.516598,18.107426 74.0566416,19.2499927 73.8574219,20.7148438 L81.9960938,20.7148438 L81.9960938,20.3984375 C81.9023433,18.9687429 81.5214877,17.887699 80.8535156,17.1552734 C80.1855435,16.4228479 79.2597715,16.0566406 78.0761719,16.0566406 Z M94.8808594,8.35742188 L94.8808594,12.9804688 L98.2382812,12.9804688 L98.2382812,16.1445312 L94.8808594,16.1445312 L94.8808594,26.7617188 C94.8808594,27.4882849 95.0244126,28.0126937 95.3115234,28.3349609 C95.5986342,28.6572282 96.1113244,28.8183594 96.8496094,28.8183594 C97.3417993,28.8183594 97.8398412,28.7597662 98.34375,28.6425781 L98.34375,31.9472656 C97.3710889,32.2167982 96.4335983,32.3515625 95.53125,32.3515625 C92.2499836,32.3515625 90.609375,30.5410337 90.609375,26.9199219 L90.609375,16.1445312 L87.4804688,16.1445312 L87.4804688,12.9804688 L90.609375,12.9804688 L90.609375,8.35742188 L94.8808594,8.35742188 Z M106.042969,32 L101.771484,32 L101.771484,5 L106.042969,5 L106.042969,32 Z M115.236328,32 L110.964844,32 L110.964844,12.9804688 L115.236328,12.9804688 L115.236328,32 Z M110.701172,8.04101562 C110.701172,7.38476234 110.909178,6.83984592 111.325195,6.40625 C111.741213,5.97265408 112.335934,5.75585938 113.109375,5.75585938 C113.882816,5.75585938 114.480467,5.97265408 114.902344,6.40625 C115.324221,6.83984592 115.535156,7.38476234 115.535156,8.04101562 C115.535156,8.6855501 115.324221,9.22167755 114.902344,9.64941406 C114.480467,10.0771506 113.882816,10.2910156 113.109375,10.2910156 C112.335934,10.2910156 111.741213,10.0771506 111.325195,9.64941406 C110.909178,9.22167755 110.701172,8.6855501 110.701172,8.04101562 Z M121.388672,32 L121.388672,16.1445312 L118.488281,16.1445312 L118.488281,12.9804688 L121.388672,12.9804688 L121.388672,11.2402344 C121.388672,9.13084883 121.974604,7.50195887 123.146484,6.35351562 C124.318365,5.20507238 125.958974,4.63085938 128.068359,4.63085938 C128.818363,4.63085938 129.61523,4.73632707 130.458984,4.94726562 L130.353516,8.28710938 C129.884763,8.19335891 129.339847,8.14648438 128.71875,8.14648438 C126.679677,8.14648438 125.660156,9.19530201 125.660156,11.2929688 L125.660156,12.9804688 L129.527344,12.9804688 L129.527344,16.1445312 L125.660156,16.1445312 L125.660156,32 L121.388672,32 Z M139.300781,25.8828125 L143.167969,12.9804688 L147.720703,12.9804688 L140.162109,34.8828125 C139.001947,38.0820472 137.033217,39.6816406 134.255859,39.6816406 C133.634763,39.6816406 132.949223,39.5761729 132.199219,39.3652344 L132.199219,36.0605469 L133.007812,36.1132812 C134.085943,36.1132812 134.897458,35.9169942 135.442383,35.5244141 C135.987307,35.131834 136.417967,34.4726609 136.734375,33.546875 L137.349609,31.9121094 L130.669922,12.9804688 L135.275391,12.9804688 L139.300781,25.8828125 Z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="first-navigation-column">
              <ul>
                <li>
                  <a href="/products" id="cta-mainNav-products">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/pricing" id="cta-mainNav-pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/docs" id="cta-mainNav-docs">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="/blog" id="cta-mainNav-blog">
                    Blog
                  </a>
                </li>
                <li onClick={props.toggleSearch}>
                  <IconSearch />
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-parent-right">
            <div className="second-navigation-column">
              <ul>
                <li class="vr">
                  <a href="/enterprise" id="cta-mainNav-sales">
                    Contact sales
                  </a>
                </li>
                <li>
                  <a href="https://app.netlify.com" id="cta-mainNav-login">
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.netlify.com/signup"
                    class="cta-link highlight"
                    id="cta-mainNav-signup"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={props.toggleMenu} className="button menu-button">
            <h5>Menu</h5>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
