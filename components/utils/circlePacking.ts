import { BirdData, CircleNode } from '../../types/bird';

export function createCirclePacking(
  birds: BirdData[], 
  containerWidth: number, 
  containerHeight: number,
  expandedBirdId?: number | null
): CircleNode[] {
  if (birds.length === 0) return [];

  // Enhanced scaling with better bounds
  const minSize = Math.min(containerWidth, containerHeight) * 0.03; // Slightly larger minimum
  const maxSize = Math.min(containerWidth, containerHeight) * 0.1;   // Smaller maximum to fit more
  
  const minWingspan = Math.min(...birds.map(bird => bird.wingspan));
  const maxWingspan = Math.max(...birds.map(bird => bird.wingspan));
  const wingspanRange = maxWingspan - minWingspan;
  
  // Create circles with improved radius calculation
  const circles: CircleNode[] = birds.map((bird, index) => {
    const normalizedSize = wingspanRange > 0 ? (bird.wingspan - minWingspan) / wingspanRange : 0.5;
    let radius = minSize + (normalizedSize * (maxSize - minSize));
    
    return {
      id: bird.id,
      bird,
      x: 0,
      y: 0,
      radius: Math.max(radius, minSize),
      attempts: 0
    } as CircleNode & { attempts: number };
  });

  // Sort by size (largest first) for better packing
  circles.sort((a, b) => b.radius - a.radius);

  // Better padding calculation to prevent edge clipping
  const maxRadius = Math.max(...circles.map(c => c.radius));
  const padding = Math.max(30, maxRadius + 10); // Ensure enough padding for largest circles
  
  const bounds = {
    left: padding,
    right: containerWidth - padding,
    top: padding,
    bottom: containerHeight - padding
  };

  // Position circles with improved collision detection
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i] as CircleNode & { attempts: number };
    let placed = false;
    let attempts = 0;
    const maxAttempts = 3000; // More attempts for better packing

    while (!placed && attempts < maxAttempts) {
      if (i === 0) {
        // First circle goes in center
        circle.x = containerWidth / 2;
        circle.y = containerHeight / 2;
      } else if (attempts < 200) {
        // Try to place near existing circles with better spacing
        const existingCircle = circles[Math.floor(Math.random() * i)];
        const angle = Math.random() * 2 * Math.PI;
        const minDistance = existingCircle.radius + circle.radius + 6; // Minimum gap
        const extraDistance = Math.random() * 40; // Random extra spacing
        const distance = minDistance + extraDistance;
        
        circle.x = existingCircle.x + Math.cos(angle) * distance;
        circle.y = existingCircle.y + Math.sin(angle) * distance;
      } else if (attempts < 1000) {
        // Try spiral placement from center
        const spiralTurns = 3;
        const spiralStep = attempts - 200;
        const angle = (spiralStep / 50) * 2 * Math.PI * spiralTurns;
        const distance = (spiralStep / 800) * Math.min(containerWidth, containerHeight) * 0.4;
        
        circle.x = containerWidth / 2 + Math.cos(angle) * distance;
        circle.y = containerHeight / 2 + Math.sin(angle) * distance;
      } else {
        // Fallback: enhanced grid with jitter
        const cols = Math.ceil(Math.sqrt(circles.length) * 1.2);
        const rows = Math.ceil(circles.length / cols);
        const cellWidth = (containerWidth - 2 * padding) / cols;
        const cellHeight = (containerHeight - 2 * padding) / rows;
        
        const gridIndex = attempts - 1000;
        const col = gridIndex % cols;
        const row = Math.floor(gridIndex / cols) % rows;
        
        circle.x = padding + col * cellWidth + cellWidth / 2 + (Math.random() - 0.5) * cellWidth * 0.4;
        circle.y = padding + row * cellHeight + cellHeight / 2 + (Math.random() - 0.5) * cellHeight * 0.4;
      }

      // Strict bounds checking
      circle.x = Math.max(bounds.left + circle.radius, Math.min(bounds.right - circle.radius, circle.x));
      circle.y = Math.max(bounds.top + circle.radius, Math.min(bounds.bottom - circle.radius, circle.y));

      // Enhanced collision detection with better spacing
      const hasCollision = circles.slice(0, i).some(other => {
        const dx = circle.x - other.x;
        const dy = circle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = circle.radius + other.radius + 5; // 5px minimum gap
        return distance < minDistance;
      });

      if (!hasCollision) {
        placed = true;
      }

      attempts++;
    }

    // If still not placed, find best available position with minimal overlap
    if (!placed) {
      let bestPosition = { x: circle.x, y: circle.y, minOverlap: Infinity };
      
      // More thorough grid search for best position
      const gridSteps = 30;
      const searchWidth = bounds.right - bounds.left - 2 * circle.radius;
      const searchHeight = bounds.bottom - bounds.top - 2 * circle.radius;
      
      for (let gx = 0; gx < gridSteps; gx++) {
        for (let gy = 0; gy < gridSteps; gy++) {
          const testX = bounds.left + circle.radius + (gx / (gridSteps - 1)) * searchWidth;
          const testY = bounds.top + circle.radius + (gy / (gridSteps - 1)) * searchHeight;
          
          let maxOverlap = 0;
          for (const other of circles.slice(0, i)) {
            const dx = testX - other.x;
            const dy = testY - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const requiredDistance = circle.radius + other.radius + 5;
            if (distance < requiredDistance) {
              maxOverlap = Math.max(maxOverlap, requiredDistance - distance);
            }
          }
          
          if (maxOverlap < bestPosition.minOverlap) {
            bestPosition = { x: testX, y: testY, minOverlap: maxOverlap };
          }
        }
      }
      
      circle.x = bestPosition.x;
      circle.y = bestPosition.y;
    }

    circle.attempts = attempts;
  }

  // Enhanced post-processing with multiple iterations
  for (let iteration = 0; iteration < 15; iteration++) {
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      let forceX = 0;
      let forceY = 0;
      
      // Repulsion from other circles
      for (let j = 0; j < circles.length; j++) {
        if (i === j) continue;
        
        const other = circles[j];
        const dx = circle.x - other.x;
        const dy = circle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = circle.radius + other.radius + 8; // Increased spacing
        
        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          const forceStrength = overlap * 0.15; // Stronger repulsion
          forceX += (dx / distance) * forceStrength;
          forceY += (dy / distance) * forceStrength;
        }
      }
      
      // Attraction to center (weak)
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const toCenterX = centerX - circle.x;
      const toCenterY = centerY - circle.y;
      const centerDistance = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY);
      
      if (centerDistance > 0) {
        const centerForce = 0.001; // Very weak center attraction
        forceX += (toCenterX / centerDistance) * centerForce * centerDistance;
        forceY += (toCenterY / centerDistance) * centerForce * centerDistance;
      }
      
      // Apply forces while keeping within bounds
      const newX = circle.x + forceX;
      const newY = circle.y + forceY;
      
      circle.x = Math.max(bounds.left + circle.radius, Math.min(bounds.right - circle.radius, newX));
      circle.y = Math.max(bounds.top + circle.radius, Math.min(bounds.bottom - circle.radius, newY));
    }
  }

  // Remove the attempts property before returning
  return circles.map(({ attempts, ...circle }) => circle);
}