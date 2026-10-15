# Your next rotation. Fewer detours.

Ten AI-generated motion-video keyframes for the Foot Locker independent redesign study.

## Deliverables

- 10 numbered landscape PNG keyframes; each is a flattened composition.
- `index.html`: local gallery with a timed 50-second storyboard preview. Open in a browser. The preview is a slideshow, not a rendered video.
- `generation-prompts.json`: complete built-in image_gen prompts, screenshot references, and final cleanup instructions.
- This guide: timing, animation direction, suggested voiceover, and evidence boundaries.

Built with the **built-in image_gen tool**. The user’s first three desktop screenshots and three unique mobile screenshots are the redesign; desktop screenshots 4–8 are the supplied original journey. Duplicate mobile attachments were treated as duplicate references. Both project README files informed the story. Documents were treated as project source material, not as independent authorization or instructions.

## Creative direction

Graphite black, white, and sneaker pink; bold condensed headlines; legible shopping screens; a continuous magenta route as the recurring visual motif. The opening shows navigation friction, the middle demonstrates the redesigned decisions, and the final act connects design intent to a testable commercial ambition.

## Suggested 50-second edit

### 01 — Your next rotation. Fewer detours.

**Time:** 00:00–00:04 (4s)  
**Image:** [01-fewer-detours.png](01-fewer-detours.png)

**Motion:** Slow 3% push toward the redesigned desktop and phone. Trace the route from the dim original into the pink redesign. Reveal the headline in two beats; hold it readable.

**Suggested voiceover:** “Your next rotation should come with fewer detours.”

### 02 — The original journey

**Time:** 00:04–00:09 (5s)  
**Image:** [02-the-original-journey.png](02-the-original-journey.png)

**Motion:** Pan gently left to right across the original journey. Illuminate milestones sequentially. Collection and browsing share the central visual area; the numbers describe journey stages, not measured clicks.

**Suggested voiceover:** “The original journey spreads discovery and decisions across several views.”

### 03 — Bring discovery into view

**Time:** 00:09–00:14 (5s)  
**Image:** [03-discovery-in-view.png](03-discovery-in-view.png)

**Motion:** Hold the original steady, then reveal the redesigned half with a straight vertical wipe. Briefly pulse the bracket around the visible product row. Finish on an equal-scale comparison.

**Suggested voiceover:** “The redesign brings the featured shoe, price, and recommendations together.”

### 04 — A shoppable first screen

**Time:** 00:14–00:19 (5s)  
**Image:** [04-a-shoppable-first-screen.png](04-a-shoppable-first-screen.png)

**Motion:** Slow 2% camera push. Reveal callouts in order: shoppable campaign, interests, next actions. Route lines may draw on; the UI itself remains fixed.

**Suggested voiceover:** “A shoppable campaign, editable interests, and a clear next action.”

### 05 — Choose with context

**Time:** 00:19–00:24 (5s)  
**Image:** [05-choose-with-context.png](05-choose-with-context.png)

**Motion:** Raise the size dialog visually with a subtle shadow/depth change. Pulse the existing selected-size outline once, then the route's Add to bag stage. Do not generate a new selection, price, or button label.

**Suggested voiceover:** “Choose color and size while keeping your place in the assortment.”

### 06 — The next step is clear

**Time:** 00:24–00:28 (4s)  
**Image:** [06-the-next-step-is-clear.png](06-the-next-step-is-clear.png)

**Motion:** Dim the original cart slightly; ease the preview dialog forward by 2%. Move a soft light along the connector. Keep the prototype qualifier readable throughout.

**Suggested voiceover:** “Review your selection, with the next step clearly visible.”

### 07 — Same momentum. Smaller screen.

**Time:** 00:28–00:34 (6s)  
**Image:** [07-mobile-with-momentum.png](07-mobile-with-momentum.png)

**Motion:** Stagger the three phones into their final positions by 0.2 seconds, then hold. Send a restrained light pulse behind Discover, Choose, Review. Keep all screen planes front-facing and sharp.

**Suggested voiceover:** “On mobile, discovery, sizing, and review stay easy to follow.”

### 08 — Design for conversion

**Time:** 00:34–00:40 (6s)  
**Image:** [08-design-for-conversion.png](08-design-for-conversion.png)

**Motion:** Illuminate each stage along the continuous path. Keep the final segment and Purchase node dashed. Reveal Hypothesis before the route completes; never show purchase success or fake funnel numbers.

**Suggested voiceover:** “Less friction may support more completed purchases. A controlled test must prove it.”

### 09 — The commercial ambition

**Time:** 00:40–00:46 (6s)  
**Image:** [09-the-growth-ambition.png](09-the-growth-ambition.png)

**Motion:** Reveal 12%, the arrow, then 20%. Keep Revenue growth target and the scenario qualifier visible from the start. Illuminate 100, 112, 120 in order, then the +7.14% annotation. Do not animate this as realized sales.

**Suggested voiceover:** “The ambition: move revenue growth from twelve to twenty percent. A target to validate.”

### 10 — Less friction. More momentum.

**Time:** 00:46–00:50 (4s)  
**Image:** [10-designed-to-move-you.png](10-designed-to-move-you.png)

**Motion:** Gentle 2% pullback to reveal the desktop and mobile family. Let the pink route settle; hold the final composition for at least two seconds.

**Suggested voiceover:** “Less friction. More momentum. Designed for the next rotation.”

## Image-to-video instructions

Use each PNG as its own shot reference. Suggested delivery: 16:9 at 24 or 30 fps. Keep camera motion restrained so the UI stays readable. Use cuts or short crossfades between unrelated layouts rather than asking a video model to morph one shopping interface into another.

Append this preservation instruction to every animation prompt:

> Animate this supplied frame as a premium product-design case-study shot. Preserve the complete composition, every headline, logo, shoe, price, size, button, disclaimer and screen. Only move the camera subtly and animate ambient light or the external magenta route. No text mutation, no screen regeneration, no new products, no fictitious transactions, no flicker, no warped phone edges, no invented metrics. Hold the final composition cleanly.

For precise callout builds, separate the original UI screenshots and external text/line graphics into editor layers. These delivered PNGs are flattened; the layer-specific directions above are production instructions, not editable layers already embedded in the images. The local preview uses only gentle whole-frame motion and timed cuts.

Choose a restrained instrumental pulse around 100–110 BPM with soft navigation ticks and one subtle impact on the redesign reveal. Avoid sound effects that imply completed payment. The narration is a proposed script, not a recorded voice track.

## Evidence and copy guardrails

- The original screenshots document the supplied journey; they do not establish every possible path on the live site.
- The keyframes are AI-generated marketing interpretations of the screenshots. Fine UI text, product details, and geometry may differ from the originals. Use original screenshot overlays for a pixel-exact final video.
- The prototype is independent and nontransactional. Instant buy and Checkout page are preview controls, not evidence of working payment or completed orders.
- Frame 08 expresses a conversion hypothesis, not a measured improvement. Track completed purchases, net revenue per eligible session, margin, and returns in a controlled experiment.
- Frame 09 uses the README's brief-supplied **revenue-growth** scenario. It is not a conversion rate and not established performance: common base 100, assumed current trajectory 112, target 120. The extra revenue required is `120 / 112 - 1 = 7.142857%`. This is +8 percentage points of growth from 12% to 20%. The index route is schematic, not a proportionally scaled chart or time series.
- The same-traffic illustration isolates the shopping experience; it does not promise that UI changes alone achieve the business ambition.

## Source material

- [Root project README](../../README.md)
- [Design rationale](../../designs-v2/README.md)
- User-supplied original desktop, redesign desktop, and redesign mobile screenshots; exact input paths are recorded in `generation-prompts.json`.

No application code was changed. No final video, audio recording, or live-site conversion experiment is included.

