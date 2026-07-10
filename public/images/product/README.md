# Product assets for the marketing site

Drop real screenshots and photos here, then pass the path as `src` on
`AssetPlaceholder` / `LessonCanvasPreview` components.

## Priority shots

| Filename | What to capture |
|----------|-----------------|
| `lesson-canvas-hero.png` | Full lesson canvas (coach note + Python workspace + Run & check) — used in hero when ready |
| `lesson-canvas-full.png` | Same, wider crop for "Inside the lesson" section |
| `run-and-check-success.png` | After a successful Run & check (console + XP) |
| `ai-safety-moment.png` | Expanded "AI safety moment" from Quickstart lesson |
| `instructor-or-cohort.jpg` | Real instructor / cohort / family moment (not stock) |
| `project-data-tracker.png` | Student Data Tracker output |
| `project-quiz-game.png` | Quiz Game running |
| `project-mini-game.png` | Mini Game |
| `project-story-generator.png` | Story Generator |
| `project-ai-helper.png` | AI Helper exercise |
| `project-capstone.png` | Capstone presentation or final project |

## How to wire

In `HomeStory.tsx` / page components:

```tsx
<LessonCanvasPreview screenshotSrc="/images/product/lesson-canvas-hero.png" />
<AssetPlaceholder slot="..." guidance="..." src="/images/product/lesson-canvas-full.png" />
```

Until files exist, labeled placeholders render automatically.
