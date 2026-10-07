# Blender Setup for Premium Birthday Balloons

## Overview
This guide will walk you through creating professional, photorealistic 3D balloon models in Blender that can be exported and integrated into the web experience.

## System Requirements
- Blender 3.6+ (latest stable version)
- 16GB RAM ✓ (you have this)
- 4GB VRAM ✓ (you have this)
- High-performance GPU recommended

## Part 1: Blender Scene Setup

### 1.1 Create New Project
```
File → New → General
Set Units:
  - Scale: 1 unit = 1 meter
  - Display Unit: Metric
```

### 1.2 Scene Settings
```
World Properties:
  - Background: Light pink (R: 247, G: 223, B: 231) #f7dfe7
  - Ambient Occlusion: Enabled
  
Render Settings (Cycles):
  - Samples: 256 (for quality)
  - Use GPU Compute: CUDA (your RTX/NVIDIA)
  - Denoising: OptiX (fast & quality)
  - Resolution: 1920 x 1080
  - Format: PNG Sequence + MP4
```

## Part 2: Create Realistic Balloons

### 2.1 Balloon Base Geometry
```
1. Delete default cube
2. Add UV Sphere (Shift+A → Mesh → UV Sphere)
   - Radius: 0.5m
   - Vertices: 128
   - Rings: 64
3. Scale Z-axis: 1.35 (to elongate balloon shape)
4. Smooth Shade (right-click → Shade Smooth)
5. Add Subdivision Surface modifier
   - Levels Viewport: 3
   - Levels Render: 4
   - Type: Catmull-Clark
```

### 2.2 Balloon Material (Photorealistic)
**For RED balloon:**
```
Material Properties:
  Base Color: #ff5f7f (Hex) or RGB(255, 95, 127)
  
  Subsurface:
    - Subsurface: 0.15
    - Subsurface Radius: (1.5, 1.0, 0.8)
    - Subsurface IOR: 1.4
    - Subsurface Anisotropy: 0.5
  
  Coat Weight: 0.8
  Coat Weight Map: Noise Texture (scale 50)
  
  Roughness: 0.08
  Metalness: 0.02
  
  Emission: Enabled
    - Emission Color: #ff7f8f
    - Strength: 0.15
  
  IOR: 1.55
  Transmission: 0.2
  Thickness: 1.0
  
  Normal Map:
    - Noise Texture (scale 25, detail 4)
    - Strength: 0.3
```

**For BLUE balloon:**
```
  Base Color: #3b82f6
  Emission Color: #5b9dff
  (Same subsurface and coating settings)
```

**For YELLOW balloon:**
```
  Base Color: #fbbf24
  Emission Color: #ffd966
  (Same subsurface and coating settings)
```

**For PURPLE balloon:**
```
  Base Color: #c084fc
  Emission Color: #d8a5ff
  (Same subsurface and coating settings)
```

### 2.3 Add Highlight/Shine
```
1. Add another material slot to balloon
2. Create highlight sphere (slightly offset)
3. Material: White with high roughness (0.4)
4. Opacity: 0.3
5. Scale: 0.3x original balloon
6. Position: Top-left of balloon
```

## Part 3: Create Strings

### 3.1 String Geometry
```
1. Add Bezier Curve (Shift+A → Curve → Bezier)
2. Edit Points:
   - Point 1 (Top): (0, 0, 0) - attached to balloon
   - Point 2 (Middle): (0.05, -0.3, 0.02)
   - Point 3 (Bottom): (0, -3.5, 0) - LONGER STRING
   
3. Curve Properties:
   - Resolution: 12
   - Depth: 0.01m
   - Bevel Depth: 0.005
   - Curve Type: Catmull-Rom
```

### 3.2 String Material
```
Base Color: #8b6f7f (brownish-gray)
Roughness: 0.7
Subsurface: 0.08
Emission: Enabled (0.1 strength)
```

### 3.3 Parent String to Balloon
```
1. Select String (curve)
2. Shift+Click Balloon (mesh)
3. Ctrl+P → Object (parent to balloon)
4. Offset string so it hangs from balloon bottom
```

## Part 4: Professional Lighting

### 4.1 Three-Point Lighting Setup

**Key Light (Main):**
```
Type: Sun Light
Energy: 2.5
Color: #ffc0cb (soft pink)
Angle: 45° from top-left
Shadow: Enabled (resolution: 4096)
Position: (8, 12, 8)
```

**Fill Light:**
```
Type: Area Light
Size: 5m x 5m
Energy: 1.2
Color: #e9d5ff (lavender)
Position: (-10, -4, 10)
```

**Rim/Back Light:**
```
Type: Area Light
Size: 3m x 3m
Energy: 1.5
Color: #ff69b4 (hot pink)
Position: (0, 8, -15)
```

**Ambient Bounce Light:**
```
Type: Area Light
Size: 10m x 10m
Energy: 0.8
Color: White
Position: Above scene
Samples: 32
```

## Part 5: Camera Setup

### 5.1 Camera Positioning
```
Position: (0, 2, 14)
Rotation: (0, 0, 0) - looking straight ahead
Focal Length: 50mm

Depth of Field:
  - Enabled: Yes
  - F-Stop: 5.6
  - Focus Distance: 2.5m
  - Aperture Blades: 7
```

### 5.2 Camera Framing
```
Scene Layout (looking at camera view):
  ┌─────────────────────────┐
  │                         │
  │      BALLOON CLUSTER    │
  │      (CENTER)           │
  │                         │
  └─────────────────────────┘
  
Leave 20% margin on all sides for text overlay
```

## Part 6: Balloon Positioning & Clustering

### 6.1 Cluster Arrangement
```
Create 8 balloons with these positions:

Balloon 1 (RED): (0, 0, 0) - CENTER
Balloon 2 (BLUE): (2.3, 1.4, -1.1) - Upper right
Balloon 3 (YELLOW): (-2.1, 1.0, -0.9) - Upper left
Balloon 4 (PURPLE): (1.4, -1.6, 0.7) - Lower right
Balloon 5 (RED): (-1.6, -1.3, 0.5) - Lower left
Balloon 6 (BLUE): (0.6, 2.4, -1.3) - Top center
Balloon 7 (EMERALD): (-0.9, 2.0, -1.0) - Top left
Balloon 8 (ORANGE): (2.6, -0.6, 0.6) - Right lower

Scale variation:
  - Center balloons: 1.0-1.15
  - Outer balloons: 0.85-1.0
```

### 6.2 Rotation (Add Natural Tilt)
```
Each balloon:
  Rotation X: (Random -0.3 to 0.3)
  Rotation Y: (Random -0.3 to 0.3)
  Rotation Z: (Random -0.2 to 0.2)
```

## Part 7: Animation (Timeline Setup)

### 7.1 Idle Animation (Floating)
```
Timeline: Frame 1-120 (4 seconds at 30fps)

For each balloon:
  Frame 1:
    - Position: Base position
    - Rotation: Initial rotation
  
  Frame 60:
    - Position Y: +0.1 (slight bob)
    - Rotation: Original + 15° on Z-axis
  
  Frame 120:
    - Position: Back to base
    - Rotation: Back to initial

Interpolation: Smooth (Bézier)
```

### 7.2 Release Animation (Flight)
```
Timeline: Frame 121-360 (8 seconds for release)

For EACH balloon (staggered start):

RED Balloon (Frame 121):
  Frame 121: Position (0, 0, 0), Rotation (0, 0, 0)
  Frame 150: Position (0, 0.5, 0), Rotation (0, 0, 10°)
  Frame 360: Position (-2, 12, 1), Rotation (180°, 90°, 45°)

BLUE Balloon (Frame 125 - offset):
  Frame 125: Position (2.3, 1.4, -1.1)
  Frame 155: Position (2.8, 2.2, -1.5)
  Frame 360: Position (4, 14, -1), Rotation (200°, -80°, -45°)

(Continue for all balloons with unique trajectories)

Easing: Ease Out Cubic
```

### 7.3 String Extension (As Balloons Rise)
```
For each string curve:
  Frame 1-120: Length = 3.5m (idle)
  Frame 121-360: Gradually stretch
    - Frame 121: Scale Y = 1.0
    - Frame 200: Scale Y = 1.3
    - Frame 360: Scale Y = 1.8
```

## Part 8: Final Render Settings

### 8.1 Cycles Render (High Quality)
```
Sampling:
  - Samples: 256
  - Preview: 64
  - Denoiser: OptiX
  
Light Paths:
  - Bounces (Diffuse): 3
  - Bounces (Glossy): 4
  - Bounces (Transmission): 8
  
Noise Threshold: 0.01
Max Samples: Enabled
```

### 8.2 Output Settings
```
Format: PNG Sequence
Directory: /render/balloons_idle/
Resolution: 1920 x 1080
Frame Range: 1-120

Then separately:
Format: MP4
Codec: H.264
Bitrate: 8000 kbps
Frame Range: 121-360
```

## Part 9: Export for Web

### 9.1 Export as GLTF/GLB
```
File → Export → glTF 2.0 (.glb/.gltf)

Export Settings:
  - Format: GLB (binary, single file)
  - Include Animations: Enabled
  - Include All Bone Influences: Enabled
  - Export Image Formats: Auto
  - Optimize Animation Size: Enabled
  - Quality: High (16-bit)
  
Output: balloons.glb (~15-40 MB)
```

### 9.2 Optimize for Web
```
Use THREE.js after export:
- Use GLTFLoader
- Compress textures (TinyPNG)
- Use LOD (Level of Detail) for distant balloons
- Cache animations
```

## Part 10: Pre-Render Sequences (Backup Method)

### 10.1 Render Idle Loop
```
Scene Setup: Balloons in floating idle state
Render Settings:
  - Samples: 256
  - Denoiser: ON
  - Output: PNG Sequence (001-120)
  - Resolution: 1920 x 1080

Export to: /videos/idle.webm (using FFmpeg)
```

### 10.2 Render Release Sequence
```
Scene Setup: Balloons in release/flight animation
Render Settings: Same as above
Output: PNG Sequence (001-240)

Composite in Adobe After Effects or DaVinci Resolve:
- Idle loop (4s) → Release sequence (8s)
- Add fade transitions
- Export: MP4 + WebM for web
```

## Part 11: Troubleshooting

### Issue: Balloons look flat
```
Solution:
  - Increase subsurface scattering
  - Add more emission
  - Add normal map detail
  - Check lighting setup
```

### Issue: Strings look too thin
```
Solution:
  - Increase bevel depth on curve (0.01 → 0.015)
  - Add subsurface to string material
  - Adjust curve resolution
```

### Issue: Rendering too slow
```
Solution:
  - Reduce samples (256 → 128)
  - Enable noise threshold
  - Use denoiser (OptiX/OpenImageDenoise)
  - Reduce shadow resolution (4096 → 2048)
  - Use Eevee for preview render
```

### Issue: Animation not smooth
```
Solution:
  - Increase keyframe count
  - Use Catmull-Rom interpolation
  - Add keyframe handles (Bezier)
  - Bake animation in Dope Sheet
```

## Estimated Render Times
- **Idle animation (120 frames)**: 2-4 hours at 256 samples
- **Release animation (240 frames)**: 4-8 hours at 256 samples
- **Total project**: 6-12 hours
- **With GPU acceleration**: Divide by 3-4

---

## Next Steps
1. Follow this guide step-by-step
2. Create the base balloon models
3. Set up lighting
4. Create animation
5. Render high-quality sequences
6. Export as GLB or pre-rendered video
7. Integrate into web page using Three.js

For questions or issues, refer to Blender documentation:
https://docs.blender.org/
