import { moveFaster, moveFast, move, moveSlow, moveSlower, moveSlowerer } from './springVariation';

export const initialState = () => ({
  motion: {
    year: {
      x: 0
    },
    background: {
      scale: 1,
      rotateZ: 0,
      shadow: {
        y: 0,
        blur: 0
      }
    },
    line: {
      rotateZ: 0,
      y: 0,
      x: 0,
    }
  }
});

export const mouseOverState = () => ({
  motion: {
    year: {
      rotateZ: moveFaster(0),
      y: moveFaster(40),
      x: moveFaster(30)
    },
    tags: {
      x: moveFaster(-100),
    },
    background: {
      scale: moveFaster(1.1),
      rotateZ: moveFaster(-5),
      shadow: {
        y: moveFaster(20),
        blur: moveFaster(32)
      }
    },
    title: {
      x: moveFaster(30)
    },
    smallTitle: {
      x: moveFaster(60)
    },
    line: {
      x: moveFaster(-60),
      y: moveFaster(-40),
      rotateZ: moveFaster(45)
    }
  }
});

export const mouseLeaveState = () => ({
  motion: {
    year: {
      x: move(0)
    },
    background: {
      scale: move(1),
      rotateZ: move(0),
      shadow: {
        y: move(0),
        blur: move(0)
      }
    },
    title: {
      x: move(0)
    },
    smallTitle: {
      x: move(0)
    },
    line: {
      x: move(0),
      y: move(0),
      rotateZ: move(0),
    }
  }
});

export const onRenderMotion = ({ hide, reverseDirection }, { motion }) => {
  if (hide) {
    return {
      card: {
        skewX: moveSlower(reverseDirection ? -20 : 20),
        skewY: moveSlower(reverseDirection ? -1 : 1),
        x: moveSlower(reverseDirection ? -400 : 400),
        y: moveSlower(200),
        opacity: moveSlower(0)
      },
      year: {
        rotateZ: moveSlower(-90),
        y: moveSlower(200),
        x: 0
      },
      title: {
        x: moveSlow(reverseDirection ? -200 : 200)
      },
      smallTitle: {
        x: moveSlower(reverseDirection ? -170 : 170)
      },
      line: {
        x: moveSlowerer(reverseDirection ? -200 : 200),
        ...motion.line
      },
      tags: {
        x: move(-500)
      },
      background: { ...motion.background }
    };
  }

  return {
    card: {
      skewX: move(0),
      skewY: move(0),
      x: move(0),
      y: move(0),
      opacity: move(1)
    },
    year: {
      rotateZ: moveSlow(-90),
      y: moveSlow(0),
      x: 0,
      ...motion.year
    },
    title: {
      x: move(0),
      ...motion.title
    },
    smallTitle: {
      x: moveSlow(0),
      ...motion.smallTitle
    },
    line: {
      x: moveSlower(0),
      ...motion.line
    },
    tags: {
      x: moveFast(0),
      ...motion.tags
    },
    background: { ...motion.background }
  };
}