export const maxDimensions = (width = 0, height = 0, fixAspectRatio = false) =>
  Object.assign(
    {
      maxWidth: width > 0 ? `min(100%, ${width}px)` : "100%",
      maxHeight: height > 0 ? `min(100%, ${height}px)` : "100%",
    },
    fixAspectRatio
      ? {
          aspectRatio:
            width > 0 && height > 0 ? `${width} / ${height}` : "1 / 1",
        }
      : {}
  );
