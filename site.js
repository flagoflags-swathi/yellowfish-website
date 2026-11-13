const products=[
['gazebo-tents','Gazebo Tents','10x10 and custom-size gazebo tents for promotions, exhibitions, events and outdoor brand activations.','Portable branded shelters with sturdy frames and weather-resistant fabric options.','./assets/gazebo-icon.webp'],
['marketing-tents','Marketing Tents','Promotional marketing tents designed for retail activations, roadshows and field campaigns.','Choose practical sizes, fabric options and custom branding for your campaign.','./assets/marketing-tent-icon.webp'],
['feather-flags','Feather Flags','Eye-catching feather flags for storefronts, property sites, events and outdoor advertising.','Available with printed fabric and suitable bases for different installation needs.','./assets/feather-flag-icon.webp'],
['political-flags','Political Party Flags','Custom political party flags for rallies, public meetings and campaign events.','Custom sizes, colours and artwork printing based on your approved design.','./assets/political-flags-icon.webp'],
['ipl-cricket-flags','IPL & Cricket Flags','Custom cricket and IPL-themed flags for fan zones, events, promotions and team celebrations.','Create flags with your preferred colours, messages and event branding.','./assets/ipl-cricket-flags-icon.webp'],
['custom-flags','Custom Printed Flags','Made-to-order flags for businesses, institutions, events, clubs and promotional campaigns.','Share your artwork, size and quantity to receive a suitable quotation.','./assets/custom-flags-icon.webp'],
['promotional-umbrellas','Promotional Umbrellas','Branded umbrellas for outdoor promotions, hospitality, cafes and customer engagement.','Brand panels can be customised to suit your campaign and product requirements.','./assets/promotional-umbrella-icon.webp'],
['cantilever-umbrellas','Cantilever Side Pole Umbrellas','Side-pole umbrellas for restaurants, cafes, resorts and outdoor seating areas.','Available in 9ft and 10ft sizes with rotating canopies and sturdy bases.','./assets/cantilever-umbrella-icon.webp'],
['promotional-tables','Promotional Tables','Portable promotional tables for sampling, product demonstrations and event counters.','Custom printed table branding for exhibitions, retail activations and roadshows.','./assets/promotional-table-icon.webp'],
['roll-up-standees','Roll-Up Standees','Portable roll-up display stands for shops, conferences, exhibitions and events.','Choose display sizes and print quality to match your campaign requirements.','./assets/promotional-standee-icon.webp'],
['promotional-table-umbrellas','Promotional Tables with Umbrellas','Branded promotional tables with umbrellas for outdoor marketing, sampling and brand activations.','Ideal for outdoor promotions, exhibitions and customer engagement campaigns.','./assets/promotional-table-umbrella-icon.webp'],
['auto-ads-branding','Auto Ads Branding','Promotional auto-rickshaw branding for outdoor advertising, local campaigns and business promotions.','Custom vehicle branding with eye-catching printed advertisements.','./assets/auto-ads-branding-icon.webp'],
];
const icon=(kind)=>{const common='fill="none" stroke="#14233b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';let shapes={tent:'<path d="M20 80 50 20 80 80Z"/><path d="M50 20v60M20 80h60"/>',flag:'<path d="M25 85V15M25 18h48l-12 16 12 16H25"/>',umbrella:'<path d="M12 50a38 38 0 0 1 76 0H12Z"/><path d="M50 50v28q0 12 12 8"/>',table:'<path d="M15 35h70v10H15zM25 45v38M75 45v38"/>',stand:'<path d="M25 15h50v62H25zM50 77v10M35 87h30"/>'};return `<svg viewBox="0 0 100 100" ${common}>${shapes[kind]||shapes.flag}</svg>`};

function card(p) {
    let kind = p[0].includes('tent') ? 'tent'
        : p[0].includes('umbrella') ? 'umbrella'
        : p[0].includes('table') ? 'table'
        : p[0].includes('standee') ? 'stand'
        : 'flag';

    let visual = p[4]
        ? `<img src="${p[4]}" alt="${p[1]}" class="product-category-image" loading="lazy">`
        : icon(kind);

    return `<article class="product">
        <div class="productvisual">${visual}</div>
        <div class="productbody">
            <h3>${p[1]}</h3>
            <p>${p[2]}</p>
            <a class="textlink" href="${p[0]}.html">Explore product →</a>
        </div>
    </article>`;
}

function header(){return `<div class="topbar"><div class="container"><span>Promotional Products • Custom Branding • Advertising Solutions</span><span>Hyderabad, India · Delivering Across India</span></div></div><header class="header"><div class="container nav"><a class="brand" href="index.html"><img class="brandlogo" src="./assets/yellow-fish-ads-logo.jpg" alt="Yellow Fish Ads logo" width="64" height="64"><span>YELLOW FISH ADS<small>PROMOTIONAL PRODUCTS</small></span></a><nav class="navlinks"><a href="index.html">Home</a><a href="about.html">About Us</a><a href="index.html#products">Our Products</a><a href="contact.html">Contact Us</a></nav>
<a href="tel:+918096822114" class="header-call-btn">
  <span>☎</span> Call Us Now
</a>
</div></header>`}
function footer(){return `<footer class="footer"><div class="container"><div class="footgrid"><div><a class="brand" href="index.html"><img class="brandlogo" src="./assets/yellow-fish-ads-logo.jpg" alt="Yellow Fish Ads logo" width="64" height="64"><span style="color:white">YELLOW FISH ADS<small style="color:#b9c5d8">PROMOTIONAL PRODUCTS</small></span></a><p>Promotional products and outdoor branding solutions for businesses, events and campaigns. Based in Hyderabad, India.</p></div><div><h3>Products</h3>${products.slice(0,6).map(p=>`<p><a href="${p[0]}.html">${p[1]}</a></p>`).join('')}</div><div><h3>Get in touch</h3><p>Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060, Telangana, India.</p><p><a href="tel:+918096822114">+91 80968 22114</a><br><a href="tel:+919618185869">+91 96181 85869</a></p><p>GSTIN: 36ABIFM4974G1ZW</p><a class="btn" href="contact.html">Send an Enquiry</a></div></div><div class="copyright">© <span id="year"></span> Yellow Fish Ads. All rights reserved. · Website content and contact details to be verified before launch.</div></div></footer>`}
function shell(content){document.body.innerHTML=header()+content+footer();document.getElementById('year').textContent=new Date().getFullYear()}
function home(){shell(`<main><section class="hero"><div class="container"><div class="eyebrow">Promotional products · Hyderabad · Pan-India supply</div><h1>Make your brand <span>impossible to miss.</span></h1><p>Explore our wide range of promotional products and custom branding solutions, designed to boost your brand visibility, support business promotion and help your business grow. Discover more solutions to meet all your branding needs.</p><div class="hero-actions"><a class="btn" href="#products">Explore Products</a>
<a class="btn outline"
   href="https://wa.me/918096822114?text=Hello%20Yellow%20Fish%20Ads%2C%20I%20am%20interested%20in%20your%20promotional%20products.%20Please%20share%20details%20and%20pricing."
   target="_blank"
   rel="noopener"
   style="background:#25D366;color:white;border-color:#25D366;">
   WhatsApp Us
</a>
</div><div class="trustrow"><div><strong>Custom Branding</strong>Made for your campaign</div><div><strong>Multiple Product Lines</strong>One promotional partner</div><div><strong>Hyderabad Based</strong>Serving India</div></div></div></section><section class="section" id="products"><div class="container"><div class="sectionhead"><div><span class="pill">Our product range</span><h2>Promotional products for every activation</h2></div><p>Explore dedicated product pages, review the options and send your requirements for a tailored quotation.</p></div><div class="grid">${products.map(card).join('')}</div></div></section>
<section class="section demo-projects">
  <div class="container">
    <div class="sectionhead">
      <div>
        <span class="pill">Our Real Projects</span>
        <h2>Our Projects & Brand Activations</h2>
      </div>
      <p>Showcasing our completed projects, promotional installations and brand activations across India.</p>
    </div>
   <div class="demo-project-gallery">

  <button class="gallery-arrow" type="button"
    onclick="moveProjects(-1)" aria-label="Previous projects">
    &#10094;
  </button>

  <div class="demo-tent-grid" id="projectGallery">

    <div class="demo-tent-card">
      <img src="./assets/paperboat-swing-tent-1.webp"
        alt="Paper Boat Demo Tent">
    </div>

    <div class="demo-tent-card">
      <img src="./assets/paperboat-swing-tent-2.webp"
        alt="Paper Boat Promotional Tent">
    </div>
<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-1.webp"
         alt="Yellow CAT Promotional Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-2.webp"
         alt="Red Promotional Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-3.webp"
         alt="Blue Enclosed Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-4.webp"
         alt="Black Nexa Promotional Gazebo Tent">
</div>

<!-- New Feather Flag images -->

<div class="demo-tent-card">
    <img src="./assets/feather-flag-1.webp"
         alt="Promotional Feather Flags - Diwali Campaign">
</div>

<div class="demo-tent-card">
    <img src="./assets/feather-flag-2.webp"
         alt="Harley Davidson Promotional Feather Flags">
</div>

<!-- Promotional Tables -->
<div class="demo-tent-card">
  <img src="./assets/promotional-table-with-umbrella-1.webp"
       alt="Promotional Table with Branded Umbrella">
</div>

<div class="demo-tent-card">
  <img src="./assets/promotional-table-1.webp"
       alt="Promotional Marketing Table">
</div>

<!-- Promotional Standees -->
<div class="demo-tent-card">
  <img src="./assets/promotional-standee-1.webp"
       alt="Promotional Standee Display">
</div>

<div class="demo-tent-card">
  <img src="./assets/promotional-standee-2.webp"
       alt="Brand Activation Standee">
</div>

<!-- Promotional Umbrellas -->
<div class="demo-tent-card">
  <img src="./assets/promotional-umbrella-1.png"
       alt="Promotional Umbrella">
</div>

<div class="demo-tent-card">
  <img src="./assets/promotional-umbrella-5.webp"
       alt="Branded Promotional Umbrella">
</div>

<div class="demo-tent-card">
  <img src="./assets/promotional-umbrella-6.webp"
       alt="Outdoor Promotional Umbrella">
</div>

<div class="demo-tent-card">
  <img src="./assets/promotional-umbrella-7.webp"
       alt="Marketing Promotional Umbrella">
</div>

</div>
<button class="gallery-arrow" type="button"
    onclick="moveProjects(1)" aria-label="Next projects">
    &#10095;
</button>
  </div>
 </div>
 </section>
<section class="section soft"><div class="container"><div class="sectionhead"><div><span class="pill">Why Yellow Fish Ads</span><h2>From product idea to branded visibility</h2></div><p>We support promotional and outdoor branding requirements with product choices suited to your campaign, location and quantity.</p></div><div class="featuregrid"><div class="feature"><div class="num">01</div><h3>Campaign-focused range</h3><p>Tents, flags, umbrellas and display products for roadshows, retail promotions and events.</p></div><div class="feature"><div class="num">02</div><h3>Custom branding</h3><p>Share your logo and artwork to discuss printing, materials, sizes and finish options.</p></div><div class="feature"><div class="num">03</div><h3>Enquiry-led support</h3><p>Tell us the product, quantity and delivery location so we can prepare a relevant quote.</p></div></div></div></section><section class="section"><div class="container"><div class="cta"><div><h2>Planning your next brand activation?</h2><p>Send your product, quantity, artwork and delivery location.</p></div><a class="btn dark" href="contact.html">Get a Custom Quote →</a></div></div></section></main>`)}
function moveProjects(direction) {
  const gallery = document.getElementById('projectGallery');

  if (!gallery) return;

  const card = gallery.querySelector('.demo-tent-card');
  if (!card) return;

  const gap = 18;

  gallery.scrollBy({
    left: direction * (card.offsetWidth + gap),
    behavior: 'smooth'
  });
}

function productPage(p) {
  let kind = p[0].includes('tent') ? 'tent'
    : p[0].includes('umbrella') ? 'umbrella'
    : p[0].includes('table') ? 'table'
    : p[0].includes('standee') ? 'stand'
    : 'flag';

  
// PRODUCT IMAGE GALLERIES
let galleryImages = [];

const asset = name => `./assets/${name}`;

if (p[0] === 'gazebo-tents') {
  galleryImages = [
    { name: 'Front View', src: asset('gazebo-tent-1.webp') },
    { name: 'Side View', src: asset('gazebo-tent-2.webp') },
    { name: 'Top View', src: asset('gazebo-tent-3.webp') },
    { name: 'Inside View', src: asset('gazebo-tent-4.webp') }
  ];
}

else if (p[0] === 'marketing-tents') {
  galleryImages = [
    { name: 'Front View', src: asset('demo-tent-front.webp') },
    { name: 'Inside View', src: asset('demo-tent-inside.webp') },
    { name: 'Side View', src: asset('demo-tent-side.webp') },
    { name: 'Top View', src: asset('demo-tent-top.webp') }
  ];
}

else if (p[0] === 'feather-flags') {
  galleryImages = [
    { name: 'Front View', src: asset('feather-flag-front-view.webp') },
    { name: 'Three-Quarter View', src: asset('feather-flag-three-quarter-view.webp') },
    { name: 'Outdoor View', src: asset('feather-flag-outdoor-view.webp') }
  ];
}

else if (p[0] === 'ipl-cricket-flags') {
  galleryImages = [
    { name: 'Design 1', src: asset('ipl-flag-1.webp') },
    { name: 'Design 2', src: asset('ipl-flag-2.webp') },
    { name: 'Design 3', src: asset('ipl-flag-3.webp') }
  ];
}

else if (p[0] === 'political-flags') {
  galleryImages = [
    { name: 'Front View', src: asset('political-flag-front-view.webp') },
    { name: 'Back View', src: asset('political-flag-back-view.webp') },
    { name: 'Outdoor View', src: asset('political-flag-outdoor-view.webp') }
  ];
}

else if (p[0] === 'promotional-umbrellas') {
  galleryImages = [
    { name: 'Front View', src: asset('umbrella-6ft-front.webp') },
    { name: 'Side View', src: asset('umbrella-6ft-side.webp') },
    { name: 'Top View', src: asset('umbrella-6ft-top.webp') },
    { name: 'Folded View', src: asset('umbrella-6ft-folded.webp') },
    { name: 'Stand Detail', src: asset('umbrella-6ft-stand-detail.webp') }
  ];
}

else if (p[0] === 'cantilever-umbrellas') {
  galleryImages = [
    { name: 'Front View', src: asset('cantilever-umbrella-front.webp') },
    { name: 'Side View', src: asset('cantilever-umbrella-side.webp') },
    { name: 'Top View', src: asset('cantilever-umbrella-top.webp') },
    { name: 'Inside View', src: asset('cantilever-umbrella-inside.webp') },
    { name: 'Folded View', src: asset('cantilever-umbrella-folded.webp') },
    { name: 'Stand Detail', src: asset('cantilever-umbrella-stand-detail.webp') }
  ];
}

else if (p[0] === 'promotional-tables') {
  galleryImages = [
    { name: 'Front View', src: asset('promotional-table-front-view.webp') },
    { name: 'Side View', src: asset('promotional-table-side-view.webp') },
    { name: 'Back View', src: asset('promotional-table-back-view.webp') },
    { name: 'Overview', src: asset('promotional-table-overview.webp') }
  ];
}

else if (p[0] === 'roll-up-standees') {
  galleryImages = [
    { name: 'Front View', src: asset('rollup-standee-front-view.webp') },
    { name: 'Side View', src: asset('rollup-standee-side-view.webp') },
    { name: 'Back View', src: asset('rollup-standee-back-view.webp') }
  ];
}

else if (p[0] === 'promotional-table-umbrellas') {
  galleryImages = [
    { name: 'Front View', src: asset('promo-table-with-umbrella-front-view.webp') },
    { name: 'Side View', src: asset('promo-table-with-umbrella-side-view.webp') },
    { name: 'Back View', src: asset('promo-table-with-umbrella-back-view.webp') },
    { name: 'Top View', src: asset('promo-table-with-umbrella-top-view.webp') }
  ];
}

else if (p[0] === 'auto-ads-branding') {
  galleryImages = [
    { name: 'Back View', src: asset('auto-ads-branding-back-view.webp') },
    { name: 'Left Side View', src: asset('auto-ads-branding-left-side-view.webp') },
    { name: 'Right Side View', src: asset('auto-ads-branding-right-side-view.webp') }
  ];
}

// Use the first gallery image as the main image.
// If no gallery exists, use the product icon/image.
let visual = galleryImages.length
  ? `<img src="${galleryImages[0].src}" alt="${p[1]} - ${galleryImages[0].name}" class="detail-product-image">`
  : p[4]
    ? `<img src="${p[4]}" alt="${p[1]}" class="detail-product-image">`
    : icon(kind);


// FIVE-FEATURE BAND FOR ALL PRODUCT PAGES
const featureContent = {
  'gazebo-tents': [
    'Weather-Resistant<br>Fabric Options',
    'Custom Logo<br>Printing',
    'Multiple Size<br>Options',
    'Sturdy Frame<br>Structure',
    'Events &<br>Promotions'
  ],
  'marketing-tents': [
    'Outdoor<br>Promotions',
    'Custom Logo<br>Printing',
    'Multiple Size<br>Options',
    'Portable Frame<br>Structure',
    'Events &<br>Roadshows'
  ],
  'feather-flags': [
    'Outdoor Display<br>Fabric',
    'Custom Flag<br>Printing',
    '9ft & 12ft Height<br>Options',
    'X-Base & Water<br>Bag Support',
    'Storefront & Outdoor<br>Promotions'
  ],
  'ipl-cricket-flags': [
    'Custom Cricket<br>Designs',
    'Custom Flag<br>Printing',
    'Multiple Flag<br>Designs',
    'Cricket Events<br>& Fan Zones',
    'Brand<br>Promotions'
  ],
  'political-flags': [
    'Custom Party<br>Designs',
    'Party Logo<br>Printing',
    'Multiple Flag<br>Designs',
    'Rallies &<br>Campaigns',
    'Bulk Order<br>Support'
  ],
  'custom-flags': [
    'Custom Flag<br>Designs',
    'Full-Colour<br>Printing',
    'Multiple Size<br>Options',
    'Quality Fabric<br>Options',
    'Events &<br>Promotions'
  ],
  'promotional-umbrellas': [
    'Custom Panel<br>Printing',
    'Brand Logo<br>Display',
    'Multiple Colour<br>Options',
    'Sturdy Frame<br>Structure',
    'Outdoor Brand<br>Promotions'
  ],
  'cantilever-umbrellas': [
    'Side Pole<br>Design',
    '360° Rotation<br>Options',
    'Large Canopy<br>Coverage',
    'Sturdy Stand<br>Structure',
    'Cafe & Outdoor<br>Seating'
  ],
  'promotional-tables': [
    'Custom Table<br>Printing',
    'Portable<br>Structure',
    'Brand Display<br>Space',
    'Easy Setup<br>Design',
    'Events &<br>Promotions'
  ],
  'roll-up-standees': [
    'Custom Graphic<br>Printing',
    'Portable<br>Display',
    'Multiple Size<br>Options',
    'Easy Setup<br>Design',
    'Exhibitions &<br>Events'
  ],
  'promotional-table-umbrellas': [
    'Custom Umbrella<br>Printing',
    'Branded Table<br>Display',
    'Portable<br>Structure',
    'Outdoor Shade<br>Coverage',
    'Promotions &<br>Events'
  ],
  'auto-ads-branding': [
    'Custom Vehicle<br>Branding',
    'Full-Colour<br>Printing',
    'Eye-Catching<br>Designs',
    'Mobile Brand<br>Visibility',
    'Local Outdoor<br>Advertising'
  ]
};

const featureLabels = featureContent[p[0]] || [
  'Custom Branding',
  'Quality Materials',
  'Multiple Options',
  'Made to Order',
  'Events & Promotions'
];

const featureIcons = [
  `<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>`,
  `<circle cx="12" cy="12" r="3"/><path d="M19 13a7 7 0 0 0 0-2l2-1.5-2-3.5-2.3 1a7 7 0 0 0-1.7-1L14.5 3h-5L9 6a7 7 0 0 0-1.7 1L5 6 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5L5 18l2.3-1a7 7 0 0 0 1.7 1l.5 3h5l.5-3a7 7 0 0 0 1.7-1l2.3 1 2-3.5z"/>`,
  `<path d="M4 20 20 4"/><path d="M5 16l3 3M8 13l2 2M11 10l2 2M14 7l2 2"/><path d="M4 20h5"/>`,
  `<path d="M3 21V5l9-3 9 3v16"/><path d="M3 5h18M7 5v16M17 5v16M3 21h18"/>`,
  `<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 15 2 2 4-4"/>`
];

let featureStrip = `
  <div class="detail-feature-strip">
    ${featureLabels.map((label, index) => `
      <div class="detail-feature">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            ${featureIcons[index]}
          </svg>
        </div>
        <span>${label}</span>
      </div>
    `).join('')}
  </div>
`;

  let waMessage = `Hi Yellow Fish Ads, I am interested in ${p[1]}. Please share product details, available sizes, materials and pricing.`;

  let waLink = `https://wa.me/918096822114?text=${encodeURIComponent(waMessage)}`;

let specifications = {
  'gazebo-tents': [
    ['Available Sizes', '4×4 ft, 6×6 ft, 10×10 ft and custom sizes'],
    ['Height', 'Product-specific configuration'],
    ['Fabric Options', 'Tetron / Sunfabric options'],
    ['Printing', 'Custom logo and full-colour branding'],
    ['Frame', 'Portable, sturdy frame options'],
    ['Applications', 'Exhibitions, roadshows, outdoor promotions']
  ]
};

let specs = specifications[p[0]] || [
  ['Available Options', 'Multiple sizes and configurations'],
  ['Customisation', 'Custom branding and artwork'],
  ['Materials', 'Options based on product requirements'],
  ['Applications', 'Promotions, exhibitions and events']
];

  shell(`
    <main>

      <section class="product-detail-section">
        <div class="container">

          <div class="crumb">
            <a href="index.html">Home</a> /
            <a href="index.html#products">Products</a> /
            ${p[1]}
          </div>

          <div class="product-detail-grid">

            <!-- LEFT: PRODUCT IMAGE AND FEATURES -->
            <div class="detail-gallery">

              <div class="detail-main-image">
                ${visual}
              </div>
${galleryImages.length ? `
<div class="detail-image-thumbnails ${['feather-flags', 'ipl-cricket-flags', 'political-flags', 'roll-up-standees', 'auto-ads-branding'].includes(p[0]) ? 'feather-centered' : ''}">
  ${galleryImages.map((img, index) => `
    <button
      type="button"
      class="detail-thumb ${index === 0 ? 'active' : ''}"
      onclick="
       const gallery = this.closest('.detail-gallery');
const mainImage = gallery.querySelector('.detail-product-image');

if (!mainImage) return;

mainImage.src = this.querySelector('img').src;
mainImage.alt = this.querySelector('img').alt;

gallery.querySelectorAll('.detail-thumb')
  .forEach(item => item.classList.remove('active'));

this.classList.add('active');
      "
    >
      <img src="${img.src}" alt="${img.name}">
      <span>${img.name}</span>
    </button>
  `).join('')}
</div>
` : ''}
             
            ${featureStrip}
            </div>

              <div class="detail-information">
              <span class="pill">PRODUCT OVERVIEW</span>

              <h1>${p[1]}</h1>

              <p class="detail-subtitle">${p[2]}</p>

              <p class="detail-description">${p[3]}</p>

            
<div class="detail-panel">

  <h3>Technical Specifications</h3>

  <div class="technical-specs">
    ${specs.map(item => `
      <div class="spec-row">
        <strong>${item[0]}</strong>
        <span>${item[1]}</span>
      </div>
    `).join('')}
  </div>

  <div class="detail-divider"></div>

  <h3>Customisation Options</h3>

  <ul class="detail-checklist">
    <li>Custom sizes and configurations</li>
    <li>Company logo and brand printing</li>
    <li>Multiple fabric and quality options</li>
    <li>Custom colour combinations</li>
    <li>Bulk order requirements</li>
  </ul>

  <div class="detail-divider"></div>


              <!-- WHATSAPP CONTACT -->
              <div class="detail-whatsapp-panel">

                <div>
                  <h3>Interested in this product?</h3>
                  <p>Contact our team directly for product details, pricing and bulk orders.</p>
                </div>

                <a class="detail-whatsapp-btn"
                   href="${waLink}"
                   target="_blank"
                   rel="noopener">
                  <span>☘</span> Chat with us on WhatsApp →
                </a>

                <p class="detail-phone">
                  Call: +91 80968 22114 | +91 96181 85869
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- RELATED PRODUCTS -->
      <section class="section soft">
        <div class="container">

          <div class="sectionhead">
            <div>
              <span class="pill">EXPLORE MORE</span>
              <h2>Related Products</h2>
            </div>
          </div>

          <div class="grid">
            ${products.filter(x => x[0] !== p[0])
              .slice(0,3).map(card).join('')}
          </div>

        </div>
      </section>

    </main>
  `);
}

function about(){shell(`<main><section class="pagehero"><div class="container"><div class="crumb"><a href="index.html">Home</a> / About Us</div><span class="eyebrow">About the company</span><h1>Promotional products. Practical brand visibility.</h1><p>Yellow Fish Ads is a Hyderabad-based promotional products and outdoor branding business supporting custom product requirements for businesses and events.</p></div></section><section class="section"><div class="container twocol"><div><h2>Helping brands show up outdoors</h2><p>Our product range includes promotional tents, gazebo tents, feather flags, custom flags, umbrellas, promotional tables, roll-up standees and other event branding materials.</p><p>We work with customers to understand their campaign needs, product specifications, branding artwork, quantity and delivery requirements.</p></div><div class="panel"><h3>Company details</h3><ul class="checklist"><li>Business: Yellow Fish Ads</li><li>Base: Hyderabad, Telangana, India</li><li>Focus: Promotional products and outdoor branding</li><li>Markets: India-wide enquiries</li><li>GSTIN: 36ABIFM4974G1ZW</li><li>Phone: +91 80968 22114 / +91 96181 85869</li><li>Address: Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060</li></ul></div></div></section></main>`)}
function contact(){let q=new URLSearchParams(location.search).get('product')||'';shell(`<main><section class="pagehero"><div class="container"><div class="crumb"><a href="index.html">Home</a> / Contact</div><span class="eyebrow">Let's discuss your requirement</span><h1>Request a product quotation</h1><p>Share your requirement with Yellow Fish Ads. Call our Hyderabad team or submit the enquiry details below.</p></div></section><section class="section"><div class="container twocol"><div><h2>Tell us what you need</h2><p>For a faster quotation, include product name, size, quantity, artwork status and delivery city.</p><div class="panel"><h3>Yellow Fish Ads</h3><p>Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060, Telangana, India.</p><p><a href="tel:+918096822114">+91 80968 22114</a><br><a href="tel:+919618185869">+91 96181 85869</a></p><p>GSTIN: 36ABIFM4974G1ZW</p></div></div><form class="panel form" id="enquiry"><h3>Enquiry form</h3><input name="name" placeholder="Your name" required><input name="company" placeholder="Company name"><input name="phone" placeholder="Phone number" required><input name="email" type="email" placeholder="Email address"><input name="product" placeholder="Product required" value="${q.replaceAll('"','&quot;')}"><input name="quantity" placeholder="Quantity"><textarea name="message" placeholder="Size, artwork, delivery location and other details"></textarea><button class="btn dark" type="submit">Prepare Enquiry</button><p class="notice" id="formnote">This demo form prepares an enquiry message. Connect a business email, CRM or WhatsApp number before launch to receive submissions.</p></form></div></section></main>`);document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();let d=Object.fromEntries(new FormData(e.target));let msg=`Yellow Fish Ads enquiry\nName: ${d.name}\nCompany: ${d.company}\nPhone: ${d.phone}\nEmail: ${d.email}\nProduct: ${d.product}\nQuantity: ${d.quantity}\nDetails: ${d.message}`;let blob=new Blob([msg],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='yellow-fish-ads-enquiry.txt';a.click();document.getElementById('formnote').textContent='Enquiry text downloaded. Connect a live submission channel before publishing.'})}
let path=location.pathname.split('/').pop()||'index.html';if(path==='index.html')home();else if(path==='about.html')about();else if(path==='contact.html')contact();else{let slug=path.replace('.html','');let p=products.find(x=>x[0]===slug);p?productPage(p):home()}
