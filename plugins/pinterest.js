export PINTEREST_USER_TOKEN=ACCESS_TOKEN
pinterest.setUserToken('YOUR_ACCESS_TOKEN');
var pinterest = require('pinterest-node-api')('YOUR_ACCESS_TOKEN');
import * as PinterestAPI from 'pinterest-node-api';
const pinterest = new PinterestAPI();
<script
    type="text/javascript"
    async defer
    src="//assets.pinterest.com/js/pinit.js"
></script>
<script type="text/javascript">
(function(d){
    var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
}(document));
</script>
<a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark">
</a>
<a href="https://www.pinterest.com/<your-profile-here>/"
   data-pin-do="buttonFollow">
   -Your profile name here-
</a>
<a href="https://www.pinterest.com/pin/139752394664775546/"
   data-pin-do="embedPin">
</a>
<a href="https://www.pinterest.com/anapinskywalker/style/"
   data-pin-do="embedBoard"
   data-pin-board-width="400"
   data-pin-scale-height="320"
   data-pin-scale-width="100">
</a>
<a href="https://www.pinterest.com/anapinskywalker/"
   data-pin-do="embedUser"
   data-pin-board-width="400"
   data-pin-scale-height="320"
   data-pin-scale-width="80">
</a>
<head>
  <!-- Pinterest Pixel Base Code --!>
  <script type="text/javascript">
    !function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(
      Array.prototype.slice.call(arguments))};var
      n=window.pintrk;n.queue=[],n.version="3.0";var
      t=document.createElement("script");t.async=!0,t.src=e;var
      r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
    pintrk('load', 'YOUR_TAG_ID'​);
    pintrk('page');
  </script>
  <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=YOUR_TAG_ID&noscript=1" />
  </noscript>
  <!-- End Pinterest Pixel Base Code --!>
</head>
<script>
  pintrk('track', 'checkout');
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=YOUR_TAG_ID&event=checkout&noscript=1" />
</noscript>
<script>
  pintrk('track', 'checkout', {
    value: 10.00,
    order_quantity: 2,
    currency: 'USD',
    line_items: [
      {
        product_name: 'Parker Boots',
        product_id: '1414',
        product_price: 5.00,
        product_quantity: 1
      },
      {
        product_name: 'Parker Sandals',
        product_id: 'ABC',
        product_price: 5.00,
        product_quantity: 1
      }
    ]
  });
</script>
Event data examples
See examples below of event code for various events and their event data. Keep in mind that you can include any combination of event data per event besides what’s shown in the examples below.

PageVisit
<script>
  pintrk('track', 'pagevisit', {
    promo_code: 'WINTER10'
  });
</script>
Signup
<script>
  pintrk('track', 'signup', {
    lead_type: 'New release promotion'
  });
</script> 
Checkout
<script>
  pintrk('track', 'checkout', {
    value: 116,
    order_quantity: 2,
    currency: 'USD',
    line_items: [
      {
        product_name: 'Pillows (Set of 2)',
        product_id: '11',
        product_price: 48.00,
        product_quantity: 1
      },
      {
        product_name: 'Pillows, Large (Set of 2)',
        product_id: '15',
        product_price: 68.00,
        product_quantity: 1
      },
    ]
  });
</script>
WatchVideo
<script>
  pintrk('track', 'watchVideo', {
    video_title: 'My product video 01'
  });
</script>
Lead
<script>
  pintrk('track', 'lead', {
    lead_type: 'Newsletter'
  });
</script>
Event data in the <img> tag
In addition to event data in JavaScript as shown in the section above, you can also optionally include event data in the <img> tag as well. See the example below for a checkout event with event data.

As a best practice we recommend you include both the JavaScript and image tag portions of the event code, as this provides for better user targeting. The <noscript> tag acts as a backup in case people have JavaScript disabled in their browsers. However, if you choose you can include only the image tag event code without JavaScript. In this case you do not need the base code, you only need to add the image tag event code to the page you want to track.

<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=YOUR_TAG_ID&event=checkout&ed[value]=10.00&ed[order_quantity]=2&ed[currency]=USD&ed[line_items][0][product_name]=Parker+Boots&[line_items][0][product_id]='1414'&ed[line_items][0][product_price]=5.00&ed[line_items][0][product_quantity]=1&ed[line_items][1][product_name]=Parker+Sandals&ed[line_items][1][product_id]='ABC'&ed[line_items][1][product_price]=5.00&ed[line_items][1][product_quantity]=1&noscript=1"/>
</noscript>
The code below shows what the <img> tag above looks like when we separate the data parameters for better readability. However, be aware that adding whitespace in the src attribute will break​ the code.

<noscript>
  <img height="1" width="1" style="display:none;" alt=""
  src="https://ct.pinterest.com/v3/?tid=YOUR_TAG_ID
  &event=checkout
  &ed[value]=10.00
  &ed[order_quantity]=2
  &ed[currency]=USD
  &ed[line_items][0][product_name]=Parker+Boots
  &ed[line_items][0][product_id]='1414'
  &ed[line_items][0][product_price]=5.00
  &ed[line_items][0][product_quantity]=1
  &ed[line_items][1][product_name]=Parker+Sandals
  &ed[line_items][1][product_id]='ABC'
  &ed[line_items][1][product_price]=5.00
  &ed[line_items][1][product_quantity]=1
  &noscript=1"/>
</noscript>

Value and quantity event data
Value and order quantity are the two pieces of event data currently available in conversion reporting. If you want to add value and quantity you can either hardcode the values or pass them back dynamically. If you’d like to pass back value and quantity dynamically (recommended), this will be unique to your website and how you record sales.

Example of hard-coded value and quantity
<script>
  pintrk('track', 'checkout', {
    value: 10.00, // Read this value (must be a number)
    order_quantity: 5 // Read this quantity (must be an integer)
  });
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=123456789&event=checkout&ed[value]=10.00&ed[order_quantity]=5&noscript=1"/>
</noscript>
Reported value: 10.00
Reported quantity: 5

Example of dynamic value and quantity
<script>
  pintrk('track', 'checkout', {
    value: {{Enhanced Transaction Revenue}},
    order_quantity: {{item.quantity}}
  });
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=123456789&event=checkout&ed[value]={{Enhanced Transaction Revenue}}&ed[order_quantity]={{item.quantity}}&noscript=1" />
</noscript>
<script type="text/javascript">
!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");

pintrk('load','<YOUR_TAG_ID>', {
  em: '<email_address>',
});
pintrk('page');
</script>
You’ll need to replace the <YOUR_TAG_ID> and <email_address> variables with corresponding values or variables on your website. For instance, here’s how the pintrk() function would appear with static values:

pintrk('load', '0123456789012', {
  em: 'user@example.com',
});
To protect user privacy, the <email address> passed to the pintrk command will be hashed before it is sent to Pinterest.

The JavaScript tag's em parameter accepts both hashed and un-hashed email addresses. We handle detection client side to ensure security and proper storage.

img Pixel Implementation
How to enable Enhanced Match in the img pixel portion of your tag
Enhanced Match may also be used with the img tag. However, partners that use the img tag will need to format and hash <email_address> themselves. Specifically, <email_address> will need to be lower-cased and have all whitespace removed. They will then need to be hashed using the SHA-256, SHA-1, or MD5 algorithm.
The formatted and hashed <email_address> should be added to every Pinterest tag img tag URL on your page using the "&pd[em]=<hashed_email_address>" parameter. The em parameter should be added to both the base code and the event code img tags.

For example:
<noscript>
<img height="1" width="1" style="display:none;" alt=""
src="https://ct.pinterest.com/v3/?tid=<YOUR_TAG_ID>&event=<EVENT_NAME>&pd[em]=<hashed_email_address>&noscript=1" />
</noscript>
Remember, you’ll need to replace the <YOUR_TAG_ID>, <EVENT_NAME>, and <hashed_email_address> variables with corresponding values or variables on your website. Inserting static values from the JavaScript example above, the img tag becomes:

<noscript>
<img height="1" width="1" style="display:none;" alt=""
src="https://ct.pinterest.com/v3/?tid=0123456789012&event=pagevisit&pd[em]=b4c9a289323b21a01c3e940f150eb9b8c542587f1abfd8f0e1cc1ffc5e475514&noscript=1" />
</noscript>
<meta name="pinterest-rich-pin" content="false" />
<head>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Exploring Kyoto's Sagano Bamboo Forest - CNN.com" />
    <meta property="og:description" content="A constant inclusion on lists of "forests to see before you die," here's how to see the real thing." />
    <meta property="og:url" content="http://www.cnn.com/2014/08/11/travel/sagano-bamboo-forest/" />
    <meta property="og:site_name" content="CNN.com" />
    <meta property="article:published_time" content="2014-08-12T00:01:56+00:00" />
    <meta property="article:author" content="CNN Karla Cripps" />
</head>
<meta property="og:site_name" content="Example Site" />
<div itemscope itemtype="http://schema.org/Article">
    <meta itemprop="url" content="http://www.cnn.com/2014/08/11/travel/sagano-bamboo-forest/" />
    <span itemprop="name" content="Exploring Kyoto's Sagano Bamboo Forest - CNN.com" /> 
    by <span itemprop="author" content="CNN Karla Cripps" />
    <img itemprop="image" src="http://www.example.com/2013/article_image.png" alt="
Kyoto Forest" />
    <span itemprop="description">A constant inclusion on lists of forests to see before you die, here's how to see the real thing.</span>
    <div itemprop="relatedItem" itemscope itemtype="http://schema.org/Article">
        <a itemprop="url" href="http://www.example.com/2013/09/older_article.html">
    </div>
    <div itemprop="realatedItem" itemscope itemtype="http://schema.org/Article">
        <a itemprop="url" href="http://www.example.com/2013/08/different_article.html">
    </div>
    <span itemprop="datePublished" content="2014-08-12T00:01:56+00:00"></span>
</div>
<head>
    <meta property="og:type" content="product" />
    <meta property="og:title" content="Technology Will Save Us Gamer DIY Kit" />
    <meta property="og:description" content="One of the permanent installations in the collection of Humble Masterpieces at the Museum of Modern Art in New York, this DIY gamer kit from London-based company Technology Will Save Us is equal parts gadget and design classic. " />
    <meta property="og:url" content="http://www.urbanoutfitters.com/urban/catalog/productdetail.jsp?id=37075900"/>
    <meta property="og:site_name" content="Urban Outfitters" />
    <meta property="product:price:amount" content="98.00" />
    <meta property="product:price:currency" content="USD" />
    <meta property="og:availability" content="instock" />
</head>
<meta property="og:site_name" content="FAMSF Store" />
<div itemscope itemtype="http://schema.org/Product">
    <meta itemprop="name" content="de Young Copper Bookmark" />
    <meta itemprop="url" content="http://shop.famsf.org/do/product/BK5160" />
    <meta itemprop="image" content="http://shop.famsf.org/images/111111.jpg" />
    <meta itemprop="image" content="http://shop.famsf.org/images/222222.jpg" />
    <span itemprop="description">Our signature bookmark derived from the de Young&#39;s
    unique architecture and copper exterior. Measures 5 3/4&#39;&#39; x 1 1/4&#39;&#39;. FAMSF
    Exclusive.</span>
    <div itemprop="color" itemscope itemtype="http://schema.org/ProductColor">
        <span itemprop="name">Aqua</span>
        <meta itemprop="map" content="blue" />
        <meta itemprop="image" content="http://cdn-i3.farfetch.com/B.jpg" />
    </div>
    <div itemprop="color" itemscope itemtype="http://schema.org/ProductColor">
        <span itemprop="name">Rose</span>
        <meta itemprop="map" content="red" />
        <meta itemprop="image" content="http://cdn-i3.farfetch.com/B.jpg" />
    </div>
    <a itemprop="relatedItem" href="
        http://shop.famsf.org/do/product/444444"></a>
    <a itemprop="relatedItem" href="
        http://shop.famsf.org/do/product/222222"></a>
    <a itemprop="relatedItem" href="
        http://shop.famsf.org/do/product/333333"></a>
    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span itemprop="price">$15.00</span>
        <meta itemprop="priceCurrency" content="USD" />
        <meta itemprop="availability" itemtype="http://schema.org/ItemAvailability"
            content="http://schema.org/InStock" />
    </div>
</div>
{
    "provider_name": "FAMSF",
    "url": "http://shop.famsf.org/do/product/BK5160",
    "title": "de Young Copper Bookmark",
    "description": "Our signature bookmark derived from the de Young's
                    unique architecture and copper exterior. Measures
                    5 3/4'' x 1 1/4''. FAMSF Exclusive.",
    "product_id": "BK5160",
    "price": 15.00,
    "currency_code": "USD",
    "availability": "in stock",
    "standard_price": 20.00,
    "sale_start_date": 2013-12-20T00:00:00,
    "sale_end_date": 2013-12-31T00:00:00
    "gender": "unisex",

    "images": ["http://shop.famsf.org/storeImages/images/store/CPG-RP_l.jpg",
               "http://shop.famsf.org/storeImages/images/store/CPG-RP_02_l.jpg"]

    "rating": 4.0,
    "rating_scale": 5,
    "rating_count": 112,

    "related_items":["http://shop.famsf.org/Product.do?code=CPG-RP",
                     "http://shop.famsf.org/Product.do?code=HW1S01"],

    "color":[{"name": "Aqua", "http://shop.famsf.org/storeImages/images/store/CPG-RP_l.jpg", "map": "blue"},
             {"name": "amber",
              "http://shop.famsf.org/storeImages/images/store/CPG-RP_02_l.jpg",
              "map": "orange"}]

}
{
    "provider_name": "Zappos",
    "url":
        "http://www.zappos.com/puma-kids-speeder-illuminescent-v-infant-toddler-youth-
         limestone-gray-twilight-blue-flame-scarlet",
    "products":
       [{
        "title": "Puma Kids Speeder Illuminescent V",
        "brand": "Puma",
        "product_id": "SKU 7587775",
        "gender": "male",
        "product_expiration": 2013-12-20T00:00:00,
        "offers":
        [{
            "description": "White/New Navy/Strong Blue",
            "price": 45.00,
            "currency_code": "USD",
            "standard_price": 55.00,
            "availability": "in stock",
            "sale_start_date": 2013-12-24T00:00:00,
            "sale_end_date": 2013-12-31T00:00:00,
        },{
            "description": "Black/White/Dark Shadow",
            "price": 52.00,
            "currency_code": "USD",
            "standard_price": 55.00,
            "availability": "in stock",
            "sale_start_date": 2013-12-24T00:00:00,
            "sale_end_date": 2013-12-31T00:00:00,
        }]
       }]
}
<meta property="og:site_name" content="letthebakingbeginblog.com" />
<div itemscope itemtype="http://schema.org/Recipe">
    <h1 itemprop="name">15 Minute Easy Margherita Flatbread Pizza</h1>
    <meta itemprop="url" content="http://myrecipesite.com/pineapple.html" />
    <span itemprop="totalTime">15 mins</span>
    <span itemprop="recipeYield">Serves 2</span>
    Ingredients:
        <span itemprop="ingredients">1 Naan bread</span>,
        <span itemprop="ingredients">3 pieces fresh mozzarella</span>,
        <span itemprop="ingredients">1 1/2 tbsp olive oil</span>,
        <span itemprop="ingredients">1 1/2 tbsp balsamic vinegar</span>,
        <span itemprop="ingredients">5 basil leaves</span>
        <span itemprop="ingredients">3 cloves garlic</span>
        <span itemprop="ingredients">1 tomato</span>
    <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    Rated <span itemprop="ratingValue">3.5</span>/5
    based on <span itemprop="reviewCount">11</span> customer reviews
    </div>
</div>
<meta property="og:site_name" content="letthebakingbeginblog.com" />
<article class="h-recipe">
    <h1 class="p-name">15 Minute Easy Margherita Flatbread Pizza</h1>
    <img class="u-photo" src="<photo-source">

    <h3>Ingredients</h3>
    <ul>
      <li class="p-ingredient">1 Naan bread</li>
      <li class="p-ingredient">3 pieces fresh mozzarella</li>
      <li class="p-ingredient">1 1/2 tbsp olive oil</li>
      <li class="p-ingredient">1 1/2 tbsp balsamic vinegar</li>
      <li class="p-ingredient">5 basil leaves</li>
      <li class="p-ingredient">3 cloves garlic</li>
      <li class="p-ingredient">1 tomato</li>
    </ul>
    <p>Takes <time class="dt-duration" datetime="1H">15 min</time>,
     serves <data class="p-yield" value="4">2</data>.</p>

    <h3>Instructions</h3>
    <ol class="e-instructions">
      <li>Press fresh garic and mix with oil.</li>
      <li>Brush the flatbread with half the oil mixture. Place in preheated oven for 5 minutes.</li>
      <li>Arange sliced mozzarella and tomato on flatbread. Place back in oven until cheese is melted and bubbly.</li>
      <li>Sprinkle with chopped basil.</li>
    </ol>
  </article>

let fetch = require('node-fetch')
let pinterest = require('pinterest-node-api')('YOUR_ACCESS_TOKEN');
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
  let url = 'https://www.pinterest.com/pin/' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
}
handler.help = ['pinterest'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^pinterest?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

