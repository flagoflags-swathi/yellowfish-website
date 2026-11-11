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

function header(){return `<div class="topbar"><div class="container"><span>Promotional Products • Branding • Outdoor Advertising</span><span>Hyderabad, India · Serving customers across India</span></div></div><header class="header"><div class="container nav"><a class="brand" href="index.html"><img class="brandlogo" src="./assets/yellow-fish-ads-logo.jpg" alt="Yellow Fish Ads logo" width="64" height="64"><span>YELLOW FISH ADS<small>PROMOTIONAL PRODUCTS</small></span></a><nav class="navlinks"><a href="index.html">Home</a><a href="about.html">About Us</a><a href="index.html#products">Products</a><a href="contact.html">Contact</a></nav>
<a href="tel:+918096822114" class="header-call-btn">
  <span>☎</span> Call Us Now
</a>
</div></header>`}
function footer(){return `<footer class="footer"><div class="container"><div class="footgrid"><div><a class="brand" href="index.html"><img class="brandlogo" src="./assets/yellow-fish-ads-logo.jpg" alt="Yellow Fish Ads logo" width="64" height="64"><span style="color:white">YELLOW FISH ADS<small style="color:#b9c5d8">PROMOTIONAL PRODUCTS</small></span></a><p>Promotional products and outdoor branding solutions for businesses, events and campaigns. Based in Hyderabad, India.</p></div><div><h3>Products</h3>${products.slice(0,6).map(p=>`<p><a href="${p[0]}.html">${p[1]}</a></p>`).join('')}</div><div><h3>Get in touch</h3><p>Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060, Telangana, India.</p><p><a href="tel:+918096822114">+91 80968 22114</a><br><a href="tel:+919618185869">+91 96181 85869</a></p><p>GSTIN: 36ABIFM4974G1ZW</p><a class="btn" href="contact.html">Send an Enquiry</a></div></div><div class="copyright">© <span id="year"></span> Yellow Fish Ads. All rights reserved. · Website content and contact details to be verified before launch.</div></div></footer>`}
function shell(content){document.body.innerHTML=header()+content+footer();document.getElementById('year').textContent=new Date().getFullYear()}
function home(){shell(`<main><section class="hero"><div class="container"><div class="eyebrow">Promotional products · Hyderabad · Pan-India supply</div><h1>Make your brand <span>impossible to miss.</span></h1><p>Custom promotional tents, flags, umbrellas, display stands and event branding products for businesses, retailers, campaigns and live events.</p><div class="hero-actions"><a class="btn" href="#products">Explore Products</a><a class="btn outline" style="color:white;border-color:#ffffff66" href="contact.html">Request a Quote</a></div><div class="trustrow"><div><strong>Custom Branding</strong>Made for your campaign</div><div><strong>Multiple Product Lines</strong>One promotional partner</div><div><strong>Hyderabad Based</strong>Serving India</div></div></div></section><section class="section" id="products"><div class="container"><div class="sectionhead"><div><span class="pill">Our product range</span><h2>Promotional products for every activation</h2></div><p>Explore dedicated product pages, review the options and send your requirements for a tailored quotation.</p></div><div class="grid">${products.map(card).join('')}</div></div></section>
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

  let visual = p[4]
    ? `<img src="${p[4]}" alt="${p[1]}" class="detail-product-image">`
    : icon(kind);

// PRODUCT IMAGE GALLERIES
let galleryImages = [];

if (p[0] === 'gazebo-tents') {
  galleryImages = [
    {
      name: 'Front View',
      src: 'gazebo-tent-front.webp'
    },
    {
      name: 'Side View',
      src: 'gazebo-tent-side.webp'
    },
    {
      name: 'Top View',
      src: 'gazebo-tent-top.webp'
    },
    {
      name: 'Inside View',
      src: 'gazebo-tent-inside.webp'
    }
  ];
}

else if (p[0] === 'marketing-tents') {
  galleryImages = [
    {
      name: 'Front View',
     src: './assets/demo-tent-front.webp'
    },
    {
      name: 'Inside View',
     src: './assets/demo-tent-inside.webp'
    },
    {
      name: 'Side View',
     src: './assets/demo-tent-side.webp'
    },
    {
      name: 'Top View',
      src: './assets/demo-tent-top.webp'
    }
  ];
}

else if (p[0] === 'feather-flags') {
  galleryImages = [
    {
      name: 'Front View',
     src: './assets/feather-flag-front-view.webp'
    },
    {
      name: 'Three-Quarter View',
     src: './assets/feather-flag-three-quarter-view.webp'
    },
    {
      name: 'Outdoor View',
      src: './assets/feather-flag-outdoor-view.webp'
    }
  ];
}

let featureStrip = [
  'gazebo-tents',
  'marketing-tents',
  'feather-flags',
  'ipl-cricket-flags',
  'political-flags'
].includes(p[0]) ? `
  <div class="detail-feature-strip">

    <div class="detail-feature">
      <div class="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
    
<span>${p[0] === 'feather-flags'
  ? 'Outdoor Display<br>Fabric'
  : p[0] === 'ipl-cricket-flags'
  ? 'Custom Cricket<br>Designs'
  : p[0] === 'political-flags'
  ? 'Custom Party<br>Designs'
  : 'Weather-Resistant<br>Fabric Options'}</span>

    </div>

    <div class="detail-feature">
      <div class="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H6.7v-2.4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1z"/>
        </svg>
      </div>
   
<span>${p[0] === 'feather-flags'
  ? 'Custom Flag<br>Printing'
  : p[0] === 'ipl-cricket-flags'
  ? 'Custom Flag<br>Printing'
  : p[0] === 'political-flags'
  ? 'Party Logo<br>Printing'
  : 'Custom Logo<br>Printing'}</span>

    </div>

    <div class="detail-feature">
      <div class="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 20 20 4"/>
          <path d="M5 16l3 3M8 13l2 2M11 10l2 2M14 7l2 2"/>
          <path d="M4 20h5"/>
        </svg>
      </div>
    
<span>${p[0] === 'feather-flags'
  ? '9ft & 12ft Height<br>Options'
  : p[0] === 'ipl-cricket-flags'
  ? 'Multiple Flag<br>Designs'
  : p[0] === 'political-flags'
  ? 'Multiple Flag<br>Designs'
  : 'Multiple Size<br>Options'}</span>

    </div>

    <div class="detail-feature">
      <div class="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 21V5l9-3 9 3v16"/>
          <path d="M3 5h18M7 5v16M17 5v16M3 21h18"/>
          <path d="M7 10h10M7 15h10"/>
        </svg>
      </div>
    
<span>${p[0] === 'feather-flags'
  ? 'X-Base & Water<br>Bag Support'
  : p[0] === 'ipl-cricket-flags'
  ? 'Cricket Events<br>& Fan Zones'
  : p[0] === 'political-flags'
  ? 'Rallies &<br>Campaigns'
  : 'Sturdy Frame<br>Structure'}</span>

    </div>

    <div class="detail-feature">
      <div class="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="17" rx="2"/>
          <path d="M16 2v4M8 2v4M3 10h18"/>
          <path d="m9 15 2 2 4-4"/>
        </svg>
      </div>
   
<span>${p[0] === 'feather-flags'
  ? 'Storefronts & Outdoor<br>Promotions'
  : p[0] === 'ipl-cricket-flags'
  ? 'Brand<br>Promotions'
  : p[0] === 'political-flags'
  ? 'Bulk Order<br>Support'
  : 'Events &<br>Promotions'}</span>

    </div>

  </div>
` : '';
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
<div class="detail-image-thumbnails ${['feather-flags', 'ipl-cricket-flags', 'political-flags'].includes(p[0]) ? 'feather-centered' : ''}">
  ${galleryImages.map((img, index) => `
    <button
      type="button"
      class="detail-thumb ${index === 0 ? 'active' : ''}"
      onclick="
        const gallery = this.closest('.detail-gallery');
        const mainImage = gallery.querySelector('.detail-product-image');
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
