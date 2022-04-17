const known_activities = {
  0: {
    known_shields: { Void: 0, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 0, Unstoppable: 0 },
  },
  480864726: {
    known_shields: { Void: 0, Solar: 1, Arc: 2 },
    known_champions: { Barrier: 3, Overload: 0, Unstoppable: 1 },
  },
  480864721: {
    known_shields: { Void: 0, Solar: 0, Arc: 1 },
    known_champions: { Barrier: 5, Overload: 0, Unstoppable: 2 },
  },
  145221019: {
    known_shields: { Void: 5, Solar: 0, Arc: 7 },
    known_champions: { Barrier: 0, Overload: 1, Unstoppable: 2 },
  },
  145221020: {
    known_shields: { Void: 5, Solar: 0, Arc: 4 },
    known_champions: { Barrier: 0, Overload: 4, Unstoppable: 2 },
  },
  3094493720: {
    known_shields: { Void: 0, Solar: 2, Arc: 4 },
    known_champions: { Barrier: 3, Overload: 0, Unstoppable: 1 },
  },
  3094493727: {
    known_shields: { Void: 0, Solar: 2, Arc: 2 },
    known_champions: { Barrier: 3, Overload: 0, Unstoppable: 4 },
  },
  2936791996: {
    known_shields: { Void: 4, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 2, Overload: 2, Unstoppable: 0 },
  },
  2936791995: {
    known_shields: { Void: 3, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 5, Overload: 4, Unstoppable: 0 },
  },
  1898610132: {
    known_shields: { Void: 9, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 2, Unstoppable: 2 },
  },
  1898610131: {
    known_shields: { Void: 10, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 4, Unstoppable: 3 },
  },
  660710127: {
    known_shields: { Void: 1, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 2, Unstoppable: 3 },
  },
  660710120: {
    known_shields: { Void: 1, Solar: 0, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 3, Unstoppable: 4 },
  },
  4206916275: {
    known_shields: { Void: 17, Solar: 2, Arc: 0 },
    known_champions: { Barrier: 0, Overload: 1, Unstoppable: 3 },
  },
  4206916276: {
    known_shields: { Void: 29, Solar: 2, Arc: 1 },
    known_champions: { Barrier: 0, Overload: 3, Unstoppable: 5 },
  },
  3911969233: {
    known_shields: { Void: 0, Solar: 0, Arc: 4 },
    known_champions: { Barrier: 4, Overload: 0, Unstoppable: 3 },
  },
  3911969238: {
    known_shields: { Void: 0, Solar: 0, Arc: 1 },
    known_champions: { Barrier: 7, Overload: 0, Unstoppable: 3 },
  },
  184186581: {
    known_shields: { Void: 0, Solar: 10, Arc: 0 },
    known_champions: { Barrier: 3, Overload: 2, Unstoppable: 0 },
  },
  184186578: {
    known_shields: { Void: 0, Solar: 10, Arc: 0 },
    known_champions: { Barrier: 4, Overload: 6, Unstoppable: 0 },
  },
  567131512: {
    known_shields: { Void: 0, Solar: 8, Arc: 3 },
    known_champions: { Barrier: 3, Overload: 2, Unstoppable: 0 },
  },
  567131519: {
    known_shields: { Void: 0, Solar: 8, Arc: 3 },
    known_champions: { Barrier: 4, Overload: 6, Unstoppable: 0 },
  },
  3678847129: {
    known_shields: { Void: 0, Solar: 1, Arc: 2 },
    known_champions: { Barrier: 0, Overload: 3, Unstoppable: 2 },
  },
  3678847134: {
    known_shields: { Void: 0, Solar: 1, Arc: 2 },
    known_champions: { Barrier: 0, Overload: 3, Unstoppable: 4 },
  },
};

function getKnownActivityAmounts(id) {
  try {
    return known_activities[id];
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export default getKnownActivityAmounts;
