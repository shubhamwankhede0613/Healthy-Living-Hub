# Master Prompt — "AeroForge 3D": Single-Pass Drone Video → 3D Model Platform

Copy everything below the line into any AI coding tool (Claude, Cursor, v0, Bolt, Lovable, etc.) as one instruction. It is written so an AI has zero ambiguity about stack, pages, logic, and visual identity.

---

## ROLE
You are a senior full-stack product engineer and visual designer. Build a complete, production-grade web application called **"AeroForge 3D"** — a platform that converts a single drone MP4 flyover video into an accurate, textured 3D model (photogrammetry / neural-reconstruction pipeline), with a Blender-style in-browser viewer.

## PRODUCT SUMMARY (use this copy on the landing page, rewritten in your own words, kept to 2–3 short sentences)
AeroForge 3D turns one drone flight into a fully reconstructed, exportable 3D model. Upload a single MP4 pass, let the reconstruction engine extract frames, estimate camera poses, build a point cloud, mesh it, and bake textures — no second flight, no manual alignment, no separate photogrammetry software.

## TECH STACK
- Frontend: React + TypeScript, Vite
- Styling: Tailwind CSS + CSS variables for the design tokens below
- 3D viewer: Three.js (r160+) with OrbitControls, GLTFLoader/DRACOLoader, a custom wireframe/solid/textured shading toggle
- Backend: Node.js (Express or Fastify) or Next.js API routes
- Auth: Email/password + "Continue with Google" (OAuth 2.0 / OpenID Connect), JWT session or NextAuth/Auth.js, secure httpOnly cookies, forgot-password flow via signed email token
- Database: PostgreSQL (users, projects, video_uploads, model_versions, jobs)
- File storage: S3-compatible bucket for raw MP4s, extracted frames, point clouds, and output GLB/OBJ/FBX files
- Reconstruction pipeline (background job, queue-based — BullMQ/Redis or similar):
  1. Frame extraction (ffmpeg, adaptive sampling by motion/blur score)
  2. Camera pose estimation / Structure-from-Motion (COLMAP or an SfM library)
  3. Dense point cloud generation (MVS)
  4. Meshing (Poisson or Delaunay reconstruction)
  5. Texture baking / UV projection from source frames
  6. Export to GLB (primary), OBJ, and FBX
  7. Progress events streamed to the client via WebSocket/SSE so the UI shows live pipeline stages, not a fake spinner
- Real-time job status: WebSocket (Socket.io) or Server-Sent Events

## VISUAL IDENTITY — do not default to generic SaaS styling
**Palette (blue/white, aviation-instrument feel):**
- `--navy-950: #0B1E3D` (backgrounds, header)
- `--blue-600: #2E6FF2` (primary actions, links)
- `--sky-400: #6FA8FF` (secondary accents, hover states)
- `--cyan-300: #00D4FF` (scan-line / telemetry accent — used sparingly, e.g. progress bars, point-cloud dots)
- `--white: #FFFFFF` / `--fog-50: #F4F7FB` (surfaces, cards, dashboard background)
- `--slate-500: #5B6B85` (secondary text)

**Typography:**
- Display/headings: `Space Grotesk` (technical, geometric — fits an engineering/aerospace product)
- Body: `Inter`
- Data/telemetry labels (coordinates, %, file sizes, timestamps): `JetBrains Mono`

**Signature element:** the hero on the landing page is not a static screenshot — it is a live canvas animation showing a video frame dissolving into a moving point cloud that assembles into a wireframe mesh, reacting subtly to cursor position (parallax / point repulsion). This *is* the product's core action, shown as motion, not described in a bullet list.

**Motion rules:** one orchestrated hero animation + scroll reveals for feature sections + subtle hover states. Avoid decorative animation everywhere else. Respect `prefers-reduced-motion`.

## PAGE 1 — Landing / Auth (single combined page)
- Full-viewport background: looping drone flyover footage (use an actual muted, autoplaying `<video>` background — landscape/aerial shot; provide a graceful canvas/gradient fallback if video fails to load), darkened with a navy gradient overlay so text stays legible.
- Over the video, on load, run the point-cloud-assembly hero animation described above.
- Short product summary copy (2–3 sentences, from PRODUCT SUMMARY) plus 3 short feature callouts: "Single pass, no re-flights," "Camera-accurate reconstruction," "Export straight to GLB/OBJ/FBX."
- A glassmorphic **auth card** (frosted white/blue, `backdrop-filter: blur`) floating over the video, containing:
  - Tab switch: **Log In** / **Create Account**
  - Log In: email, password, "Continue with Google" button (Google-branded per Google's brand guidelines — white button, official multicolor "G" logo, correct min sizing/padding), "Forgot password?" link, "Remember me" checkbox
  - Create Account: name, email, password, confirm password, password-strength meter, terms checkbox, "Continue with Google"
  - Forgot Password sub-flow: email input → "check your inbox" confirmation state → reset-password screen (token from emailed link) with new-password + confirm fields
  - Inline validation, loading states on submit, clear error copy (no vague "something went wrong")
  - Accessible: labeled inputs, visible focus rings, keyboard-navigable tabs
- Cursor interaction: a light trailing particle/dot effect follows the pointer across the hero only (not the whole site), echoing the point-cloud theme — implemented with a lightweight canvas layer, capped frame rate, disabled under `prefers-reduced-motion`.

## PAGE 2 — Dashboard (post-login)
**Layout:** persistent left sidebar + main workspace, like a creative tool (Blender/Figma), not a marketing dashboard.

**Left sidebar (collapsible):**
- User profile block at top: avatar, name, plan tier, quick "Account settings" link
- Navigation: Projects, Import Video, My Models, Processing Jobs, Export History, Settings, Log out
- Storage usage meter (used / total, in the mono data font)

**Main workspace — "Blender-style" 3D studio:**
- Top toolbar: Import (MP4), current project name (editable), pipeline status pill (Queued / Extracting Frames / Estimating Poses / Building Mesh / Texturing / Ready), Export dropdown (GLB/OBJ/FBX), Share
- **Import flow:** drag-and-drop or file-picker MP4 upload → upload progress → pipeline stage tracker showing each reconstruction step live (from the WebSocket/SSE events) with elapsed time and estimated remaining time — this should feel like a real render/bake progress panel, not a generic spinner
- **3D viewport** (Three.js canvas, center stage):
  - Orbit (drag), pan (right-drag or two-finger), zoom (scroll) — fully movable/inspectable model, matching Blender's feel
  - View modes: Solid / Wireframe / Textured / Point Cloud (toggle group)
  - Gizmo/axis indicator in a corner, grid floor, studio-style three-point lighting
  - Object outliner panel (right side, collapsible): scene hierarchy (Mesh, Materials, Cameras used for reconstruction)
  - Inspector panel: transform (position/rotation/scale — editable, all axes), material/texture info, mesh stats (verts/faces/file size) in mono font
  - Timeline/history strip at the bottom: model versions from each processed video, with thumbnails
- Empty state (no project yet): explain what to do next in the interface's voice — "Import a drone flyover to generate your first model" with an Import CTA, not a blank page.

## NON-FUNCTIONAL REQUIREMENTS
- Fully responsive: dashboard collapses to a single-panel mobile view (viewport picker sheet); landing page auth card stacks below the hero on small screens
- WCAG AA color contrast even with the navy/blue palette
- Loading skeletons for async panels, optimistic UI for non-destructive actions
- Real error states everywhere a network/job call can fail (upload failure, pipeline failure with a "why it failed" reason and retry)
- Environment-config driven (API base URL, OAuth client IDs, storage bucket) via `.env`
- Write the copy throughout in plain, active-voice, second-person language ("Import your first flight," not "Users may initiate an upload")

## DELIVERABLES
1. Full source tree (frontend + backend) with clear folder structure
2. `.env.example` listing every required key (OAuth, DB, S3, Redis)
3. Seed script / mock mode so the pipeline can be demoed without a real GPU reconstruction backend (return a sample GLB after simulated stage delays)
4. README with setup, and a note on where to plug in a real SfM/MVS engine (e.g., COLMAP, OpenMVG/OpenMVS, or a hosted photogrammetry API) for production-accurate reconstruction

---

### How to use this
Paste the whole block above into your AI builder of choice. If the tool only accepts one page at a time, ask for Page 1 first, review, then Page 2, then the pipeline/backend — but keep this full prompt as the shared spec so both pages stay visually and structurally consistent.
