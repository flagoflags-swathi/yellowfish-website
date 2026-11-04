const products=[
['gazebo-tents','Gazebo Tents','10×10 and custom-size gazebo tents for promotions, exhibitions, events and outdoor brand activations.','Portable branded shelters with sturdy frames and weather-resistant fabric options.'],
['marketing-tents','Marketing Tents','Promotional marketing tents designed for retail activations, roadshows and field campaigns.','Choose practical sizes, fabric options and custom branding for your campaign.'],
['feather-flags','Feather Flags','Eye-catching feather flags for storefronts, property sites, events and outdoor advertising.','Available with printed fabric and suitable bases for different installation needs.'],
['political-flags','Political Flags','Custom political campaign flags for rallies, public meetings and campaign events.','Custom sizes, colours and artwork printing based on your approved design.'],
['ipl-cricket-flags','IPL & Cricket Flags','Custom cricket and IPL-themed flags for fan zones, events, promotions and team celebrations.','Create flags with your preferred colours, messages and event branding.'],
['custom-flags','Custom Printed Flags','Made-to-order flags for businesses, institutions, events, clubs and promotional campaigns.','Share your artwork, size and quantity to receive a suitable quotation.'],
['promotional-umbrellas','Promotional Umbrellas','Branded umbrellas for outdoor promotions, hospitality, cafes and customer engagement.','Brand panels can be customised to suit your campaign and product requirements.'],
['cantilever-umbrellas','Cantilever Side Pole Umbrellas','Side-pole umbrellas for restaurants, cafes, resorts and outdoor seating areas.','Options may include 9 ft sizes, water-resistant sun fabric and mild-steel frames.'],
['promotional-tables','Promotional Tables','Portable promotional tables for sampling, product demonstrations and event counters.','Custom printed table branding for exhibitions, retail activations and roadshows.'],
['roll-up-standees','Roll-up Standees','Portable roll-up display stands for shops, conferences, exhibitions and events.','Choose display sizes and print quality to match your campaign requirements.'],
['flag-arches','Flag Arches','Branded flag arches and entrance structures for events, launches and outdoor promotions.','Custom branding and configurations available based on project requirements.'],
['auto-branding','Auto Branding Stickers','Vehicle branding stickers for promotional campaigns, fleet visibility and local advertising.','Artwork, material and quantity can be planned around your vehicle branding project.']
];
const icon=(kind)=>{const common='fill="none" stroke="#14233b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';let shapes={tent:'<path d="M20 80 50 20 80 80Z"/><path d="M50 20v60M20 80h60"/>',flag:'<path d="M25 85V15M25 18h48l-12 16 12 16H25"/>',umbrella:'<path d="M12 50a38 38 0 0 1 76 0H12Z"/><path d="M50 50v28q0 12 12 8"/>',table:'<path d="M15 35h70v10H15zM25 45v38M75 45v38"/>',stand:'<path d="M25 15h50v62H25zM50 77v10M35 87h30"/>'};return `<svg viewBox="0 0 100 100" ${common}>${shapes[kind]||shapes.flag}</svg>`};
function card(p){let kind=p[0].includes('tent')?'tent':p[0].includes('umbrella')?'umbrella':p[0].includes('table')?'table':p[0].includes('standee')?'stand':'flag';return `<article class="product"><div class="productvisual">${icon(kind)}</div><div class="productbody"><h3>${p[1]}</h3><p>${p[2]}</p><a class="textlink" href="${p[0]}.html">Explore product →</a></div></article>`}
function header(){return `<div class="topbar"><div class="container"><span>Promotional Products • Branding • Outdoor Advertising</span><span>Hyderabad, India · Serving customers across India</span></div></div><header class="header"><div class="container nav"><a class="brand" href="index.html"><img class="brandlogo" src="./assets/yellow-fish-ads-logo.jpg" alt="Yellow Fish Ads logo" width="64" height="64"><span>YELLOW FISH ADS<small>PROMOTIONAL PRODUCTS</small></span></a><nav class="navlinks"><a href="index.html">Home</a><a href="about.html">About Us</a><a href="index.html#products">Products</a><a href="contact.html">Contact</a></nav><a class="btn" href="contact.html">Get a Quote</a></div></header>`}
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
      <img src="./assets/paperboat-swing-tent-1.png"
        alt="Paper Boat Demo Tent">
    </div>

    <div class="demo-tent-card">
      <img src="./assets/paperboat-swing-tent-2.png"
        alt="Paper Boat Promotional Tent">
    </div>
<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-1.png"
         alt="Yellow CAT Promotional Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-2.png"
         alt="Red Promotional Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-3.png"
         alt="Blue Enclosed Gazebo Tent">
</div>

<div class="demo-tent-card">
    <img src="./assets/gazebo-tent-4.png"
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
function productPage(p){shell(`<main><section class="pagehero"><div class="container"><div class="crumb"><a href="index.html">Home</a> / Products / ${p[1]}</div><span class="eyebrow">Yellow Fish Ads · Product range</span><h1>${p[1]}</h1><p>${p[2]}</p><a class="btn" href="contact.html?product=${encodeURIComponent(p[1])}">Enquire Now</a></div></section><section class="section"><div class="container twocol"><div><span class="pill">Product overview</span><h2>${p[1]} for business promotions</h2><p>${p[3]}</p><p>Yellow Fish Ads can help you discuss suitable sizes, materials, printing options and quantities for your requirement. Final specifications, pricing and delivery timelines are confirmed against the order details.</p><h3>Share these details for a quotation</h3><ul class="checklist"><li>Required size or product configuration</li><li>Quantity required</li><li>Logo / artwork or design brief</li><li>Delivery city and required date</li><li>Any material or quality preference</li></ul><a class="btn" href="contact.html?product=${encodeURIComponent(p[1])}">Request Product Pricing</a></div><aside class="panel"><div class="productvisual" style="border-radius:14px;margin-bottom:20px">${icon(p[0].includes('tent')?'tent':p[0].includes('umbrella')?'umbrella':p[0].includes('table')?'table':p[0].includes('standee')?'stand':'flag')}</div><h3>Need a custom quotation?</h3><p>Send your requirement to our team. We will review the product, quantity and delivery details.</p><a class="btn dark" href="contact.html?product=${encodeURIComponent(p[1])}">Send an Enquiry</a><p class="notice">Call us: +91 80968 22114 or +91 96181 85869. GSTIN: 36ABIFM4974G1ZW.</p></aside></div></section><section class="section soft"><div class="container"><div class="sectionhead"><div><span class="pill">Explore more</span><h2>Related products</h2></div></div><div class="grid">${products.filter(x=>x[0]!==p[0]).slice(0,3).map(card).join('')}</div></div></section></main>`)}
function about(){shell(`<main><section class="pagehero"><div class="container"><div class="crumb"><a href="index.html">Home</a> / About Us</div><span class="eyebrow">About the company</span><h1>Promotional products. Practical brand visibility.</h1><p>Yellow Fish Ads is a Hyderabad-based promotional products and outdoor branding business supporting custom product requirements for businesses and events.</p></div></section><section class="section"><div class="container twocol"><div><h2>Helping brands show up outdoors</h2><p>Our product range includes promotional tents, gazebo tents, feather flags, custom flags, umbrellas, promotional tables, roll-up standees and other event branding materials.</p><p>We work with customers to understand their campaign needs, product specifications, branding artwork, quantity and delivery requirements.</p></div><div class="panel"><h3>Company details</h3><ul class="checklist"><li>Business: Yellow Fish Ads</li><li>Base: Hyderabad, Telangana, India</li><li>Focus: Promotional products and outdoor branding</li><li>Markets: India-wide enquiries</li><li>GSTIN: 36ABIFM4974G1ZW</li><li>Phone: +91 80968 22114 / +91 96181 85869</li><li>Address: Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060</li></ul></div></div></section></main>`)}
function contact(){let q=new URLSearchParams(location.search).get('product')||'';shell(`<main><section class="pagehero"><div class="container"><div class="crumb"><a href="index.html">Home</a> / Contact</div><span class="eyebrow">Let's discuss your requirement</span><h1>Request a product quotation</h1><p>Share your requirement with Yellow Fish Ads. Call our Hyderabad team or submit the enquiry details below.</p></div></section><section class="section"><div class="container twocol"><div><h2>Tell us what you need</h2><p>For a faster quotation, include product name, size, quantity, artwork status and delivery city.</p><div class="panel"><h3>Yellow Fish Ads</h3><p>Sahithi Kadamanchi Complex, 403 &amp; 404, beside Neerus Shopping Mall, opposite Metro Pillar 1566, Chaitanyapuri X Roads, Hyderabad – 500060, Telangana, India.</p><p><a href="tel:+918096822114">+91 80968 22114</a><br><a href="tel:+919618185869">+91 96181 85869</a></p><p>GSTIN: 36ABIFM4974G1ZW</p></div></div><form class="panel form" id="enquiry"><h3>Enquiry form</h3><input name="name" placeholder="Your name" required><input name="company" placeholder="Company name"><input name="phone" placeholder="Phone number" required><input name="email" type="email" placeholder="Email address"><input name="product" placeholder="Product required" value="${q.replaceAll('"','&quot;')}"><input name="quantity" placeholder="Quantity"><textarea name="message" placeholder="Size, artwork, delivery location and other details"></textarea><button class="btn dark" type="submit">Prepare Enquiry</button><p class="notice" id="formnote">This demo form prepares an enquiry message. Connect a business email, CRM or WhatsApp number before launch to receive submissions.</p></form></div></section></main>`);document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();let d=Object.fromEntries(new FormData(e.target));let msg=`Yellow Fish Ads enquiry\nName: ${d.name}\nCompany: ${d.company}\nPhone: ${d.phone}\nEmail: ${d.email}\nProduct: ${d.product}\nQuantity: ${d.quantity}\nDetails: ${d.message}`;let blob=new Blob([msg],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='yellow-fish-ads-enquiry.txt';a.click();document.getElementById('formnote').textContent='Enquiry text downloaded. Connect a live submission channel before publishing.'})}
let path=location.pathname.split('/').pop()||'index.html';if(path==='index.html')home();else if(path==='about.html')about();else if(path==='contact.html')contact();else{let slug=path.replace('.html','');let p=products.find(x=>x[0]===slug);p?productPage(p):home()}
