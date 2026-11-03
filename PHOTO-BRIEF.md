# Photographer and image-editor brief

Deliver real photographs of the same subject with consistent wardrobe, lighting and colour treatment. The website adds navigation, identity, role, description, buttons and moving name itself: do not bake text, logos or watermarks into the photographs.

## Deliverables

Dimensions below are width × height. Save files in the project's `resources/` folder. These are recommended delivery sizes, not a reason to upscale a smaller original.

| File | Purpose | Aspect ratio | Recommended dimensions | Priority |
| --- | --- | --- | --- | --- |
| `hero_image.jpg` | High-resolution master and fallback | 4:3 landscape | 4000 × 3000 or larger native original | Required |
| `hero-desktop.jpg` | Desktop opening hero | 16:10 landscape | 2880 × 1800 | Required crop |
| `hero-mobile.jpg` | Tall phone opening hero | 195:422 portrait, approximately 9:19.5 | 1170 × 2532 | Required crop |
| `hero-tablet-portrait.jpg` | Dedicated portrait-tablet composition | 3:4 portrait | 1536 × 2048 | Optional |
| `hero-landscape.jpg` | Tablet / short phone-landscape composition | 4:3 landscape | 2400 × 1800 | Optional; master can cover this |
| `about_image.jpg` | Separate boxed About portrait | 4:5 portrait | 1200 × 1500 | Optional; existing About portrait can stay |

Phone landscape intentionally uses a taller 4:3 composition rather than an ultrawide screenshot-shaped crop. The hero grows beyond a short landscape viewport so its copy, name and controls remain readable; it needs vertical image content below the first screen.

## Framing and safe areas

Percentages are composition guides measured from the top-left of each crop, not fixed HTML coordinates. Browser cover cropping and enlarged text can shift visible boundaries. Preserve some extra scene around the intended framing; final device checks are still necessary.

### Desktop

- Place the face centre around 35–40% of image width and 22–28% of image height.
- Keep roughly 8–12% headroom; preserve the whole head and avoid tight chin/shoulder cuts.
- Keep the rightmost 35–40% relatively quiet, especially the region about 40–70% down the image. The grouped role/description and project button sit there.
- Reserve roughly the bottom 25% for the large moving name and pause control. Torso/background may appear behind it, but no face or important visual detail.
- Prefer a waist-up or three-quarter portrait with generous surrounding scene, rather than a tight headshot.

### Phone portrait

- Place the face in the upper-left/upper-middle: face centre around 35–40% across and 22–28% down.
- Keep the complete head and face within roughly the upper 40%; retain 8–12% headroom.
- Keep the top 8–10% clear for navigation. Leave the upper-right edge clear for an expanded menu.
- The lower copy uses much of the available phone width, approximately 50–83% down the image. It can cover lower torso/background; keep the face well above this zone.
- Reserve approximately the bottom 15–20% for the moving name and motion control.
- Keep the subject comfortably inside the frame, with spare side room for narrower phones. A three-quarter/full-body source is useful for the tall composition.

### Tablet portrait

- Use the same upper-left face placement and headroom principles as the phone.
- Leave quiet space in the lower-right half for copy, and the bottom 20% for name/control overlays.
- Do not create this by stretching the desktop crop. Crop from the master or deliver a separate photograph with matching treatment.

### Landscape fallback

- Keep the face left of centre, with the entire head in the upper half.
- Leave the right half available for supporting copy and retain the lower torso/background for the name lane.
- Do not tightly crop the top or bottom to match an ultrawide device viewport; short-screen content can extend the hero vertically.

### About portrait

- Centre the subject in the 4:5 frame, with comfortable headroom and natural shoulder/torso framing.
- No empty text area is needed: biography text sits beside the frame, not over it.

## File delivery

- Photographs: `.jpg`, sRGB colour profile, high-quality export around 90–95%, orientation baked into the pixels. Keep the high-resolution original too.
- Do not stretch, artificially enlarge, or generate a replacement likeness. Use a wider/new real photograph if the required crop cannot be made from the original.
- Avoid harsh highlights or busy signs directly behind the intended text areas. Keep natural skin detail and consistent colour across crops.
- No need to deliver WebP, AVIF or tiny thumbnails. Optimized website versions will be prepared separately; high-quality source JPEGs may exceed the website's final image-byte target.
- Optional project images must be actual application/site screenshots, preferably `.png`, at least 1600px wide, with private data removed. Do not invent a Flash cards interface or reuse the campus screenshot for it.

## Applying the files later

The current site reads manually prepared files in `public/images/`; it does not regenerate them from `resources/` during `npm run build`. Only the master-source workflow is wired today. The dedicated crop filenames above are proposed source inputs and will not become active merely by being added.

After delivery, ask the next agent:

> Use the new master and desktop/mobile crops in resources. Generate optimized WebP/JPEG variants without upscaling, wire the appropriate picture media sources, update intrinsic dimensions/alt text and focal positions, then verify desktop, tablet, phone portrait/landscape and enlarged-text layouts. Preserve the existing About portrait unless its replacement was supplied.

Keep source files in `resources/`. Let the implementation update generated assets and HTML together; do not manually overwrite dimension-labelled public files with incompatible crops. Rebuild and refresh the production preview after preparation.
