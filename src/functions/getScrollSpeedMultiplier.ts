interface getScrollSpeedMultiplierProps {
  screenWidth : number;
  minSpeed    ?: number;
  maxSpeed    ?: number;
}

const getScrollSpeedMultiplier = ({
  screenWidth,
  minSpeed = 0.65,
  maxSpeed = 1,
}: getScrollSpeedMultiplierProps) => {
  const rawMultiplier = screenWidth / 1000;
  const ret = Math.max(minSpeed, Math.min(rawMultiplier, maxSpeed));

  return ret;
};

export default getScrollSpeedMultiplier;
