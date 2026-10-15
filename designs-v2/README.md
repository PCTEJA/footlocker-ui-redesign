# Foot Locker — original imagery, a shorter path to the bag

This revised design follows the two supplied preferred layouts. It replaces the earlier generated shoe artwork with original Foot Locker Caitlin photography and preserved shoe crops from the supplied references. No shoe in this version was generated, redrawn, recolored, or flipped.

Start with [the frame gallery](gallery.html). The deliverable includes 14 PNG frames, a local responsive HTML preview, and an asset source manifest. All PNGs were rendered from the same HTML/CSS at twice the listed viewport resolution.

## Frames

| View | CSS viewport | Image |
|---|---|---|
| Homepage · laptop | 1280 × 720 | [01](frames/01-home-laptop-1280x720.png) |
| Homepage · short laptop | 1280 × 580 | [02](frames/02-home-small-laptop-1280x580.png) |
| Product list · laptop | 1280 × 720 | [03](frames/03-listing-laptop-1280x720.png) |
| Product list · narrower laptop | 1024 × 768 | [04](frames/04-listing-small-laptop-1024x768.png) |
| Homepage · mobile | 390 × 844 | [05](frames/05-home-mobile-390x844.png) |
| Product list · mobile | 390 × 844 | [06](frames/06-listing-mobile-390x844.png) |
| Quick shop · mobile | 390 × 844 | [07](frames/07-quick-shop-mobile-390x844.png) |
| Homepage · desktop | 1440 × 900 | [08](frames/08-home-desktop-1440x900.png) |
| Homepage · mobile full page | 390 wide | [09](frames/09-home-mobile-full.png) |
| Homepage · small mobile | 360 × 740 | [10](frames/10-home-small-mobile-360x740.png) |
| Product list · small mobile | 360 × 740 | [11](frames/11-listing-small-mobile-360x740.png) |
| Homepage · desktop full page | 1440 wide | [12](frames/12-home-desktop-full.png) |
| Product list · desktop full page | 1440 wide | [13](frames/13-listing-desktop-full.png) |
| Product list · short laptop | 1280 × 580 | [14](frames/14-listing-short-laptop-1280x580.png) |

## What changed and why

**A compact campaign with a direct purchase action.** The original Midnight Fever photograph retains the launch story. A neighboring product panel shows the model, price, genuine colorway thumbnails, and “Choose size.” On mobile, that panel sits directly below the photograph. This makes the hero shoppable without requiring a basketball landing page or player page first.

**Recommendations visible in the first screen.** Four product cards remain visible across laptops; mobile uses two columns. On short laptop windows, the header, campaign, and section spacing contract together. At 1280 × 580, the first recommendation row’s size actions end at 566px. At 360 × 740, both first-row actions end at 732px. These are measured page viewport dimensions; browser chrome is outside them. Baymard documents how oversized promotional imagery can displace useful assortment content. The exact dimensions here are design choices, not universal research prescriptions. [Responsive layout research](https://baymard.com/research-articles/responsive-upscaling)

**Athletes narrow the current assortment.** Compact player controls retain the sneaker-culture connection. Selecting LeBron updates the grid in place in the preview. The selected player has a visible border and the results heading repeats the name. On phones, the player row scrolls horizontally while the page stays within the viewport. This applies visible filter-context guidance to athlete discovery. [Applied-filter research](https://baymard.com/research-articles/how-to-design-applied-filters)

**The minimal product grid stays.** Original shoe imagery, model, color description, category, and price remain easy to scan. A text label identifies the action instead of relying on an unexplained bag icon. Quick shop presents color and sizing decisions while retaining page context. The full product link remains available for fit and performance information. [Quick-view research](https://baymard.com/research-articles/mobile-desktop-quick-views)

**Preference-based discovery stays restrained.** “Picked for your rotation” explains its intended basis and includes an edit action. Campaigns such as Cute to Boot move below the product assortment. The proposal avoids forced bundles, preselected accessories, and promotional interruptions. Production recommendations should use explicit interests and a useful default assortment for new visitors; they should not infer size or gender from an athlete preference. [Customization and personalization research](https://www.nngroup.com/articles/customization-personalization/)

**The purchase route is direct, with required choices intact.** Home or listing → Choose size → choose a size → Add to bag. The preview does not preselect a size. Fewer intermediate pages is the hypothesis; raw click count alone does not establish usability. [NN/g on the three-click rule](https://www.nngroup.com/articles/3-click-rule/)

## Image and product accuracy

- The Caitlin hero, pink product image, and blue/yellow alternatives are downloaded original Foot Locker assets. The pink shoe is Nike Caitlin 1, Neo Pink / Midnight Fever, product H7423600 / manufacturer style IH7423-600. The displayed $140 was checked against [Foot Locker’s product page](https://www.footlocker.com/product/~/H7423600.html), replacing $125 in the supplied design reference.
- Other shoe images are crops of the user's supplied preferred references. Their appearance is preserved; this does not independently authenticate the reference images or verify every model/color label. Prices and names for those products are reference snapshots, not a live catalog. The two products without a supplied price show “View price.”
- Player photos come from the user's original Foot Locker screenshot. Caitlin's tab uses her verified product photo rather than an invented portrait. The previous reference's repeated player headshots were not reused.
- The logo, display/UI fonts, and three campaign images are original Foot Locker assets.
- Cropping removes unused background and screenshot UI. Small remnants of reference heart icons were covered only in the image background, without altering shoe pixels. No generative image processing was used. Screenshot rendering scales the images proportionally.
- [asset-sources.json](asset-sources.json) records URLs, reference filenames, crop coordinates, and processing notes.

## Preview and verification

Open [index.html](index.html) locally for the homepage or [the product list](index.html?page=listing). The preview supports player filtering, searching the displayed signature assortment, sorting, saving a card, opening quick shop, changing Caitlin color, explicitly selecting size, and adding to a session-only preview bag with removal. No purchase is made.

Navigation destinations outside the basketball preview, preference-based ranking, size/brand/price/stock filters, accounts, store services, and checkout are not connected to a commerce backend. Some controls illustrate the proposed UI only. All displayed sizes are demonstration options, not assertions of availability. Product details links lead to Foot Locker; other models use model searches. A production implementation must connect exact SKU inventory, the actual size guide, shipping/returns, and cart state.

Checked the listed laptop/mobile viewports for page overflow and first-row action visibility. The main render checks also verified image loading, font loading, and browser script errors. The tested interaction sequence confirmed two LeBron results, Add disabled until size selection, a bag count increment, and dialog closure. The focused regression check also verified women's sizing labels and Caitlin variant links. See [qa-results.json](qa-results.json), [qa-extra.json](qa-extra.json), and [qa-regression.json](qa-regression.json). Native dialog behavior and visible focus styling are included; this is not a complete accessibility audit or a measurement of live website performance.

## Business hypothesis and next validation

The intended benefit is less time spent reaching a suitable shoe, a clearer size-selection action, and more relevant discovery without aggressive upselling. The direction is consistent with Foot Locker's stated emphasis on sneaker culture, personalization, search/filtering, and size availability in its [June 2024 FLX announcement](https://investors.footlocker-inc.com/news-releases/news-release-details/foot-locker-reimagines-sneaker-shopping-experience-flx-rewards). That announcement does not prove this design increases sales. The project's 12% → 20% revenue-growth ambition and its experiment plan are documented in the [repository case study](https://github.com/PCTEJA/footlocker-ui-redesign). At a shared baseline of 100, moving from revenue of 112 to 120 requires 7.14% additional revenue over the current trajectory; this is a target, not an observed effect.

Test shoppers finding a preferred shoe, using athlete filters, choosing sizes, and returning from quick shop. Then compare against the existing site with a controlled experiment. Measure completed purchases per eligible session and contribution margin per session; use time to a suitable product and successful add-to-bag rate as diagnostics. Guard against increased returns, cancellations, and checkout abandonment. No conversion or profit uplift is claimed for these mockups.

For a production build, size images to their displayed use, reserve image dimensions, and defer below-fold campaigns. Test on real slower devices and networks. Page-load speed is separate from the shorter purchase route demonstrated here.
