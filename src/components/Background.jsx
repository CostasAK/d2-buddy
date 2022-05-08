import "./Background.scss";

export default function Background() {
  return (
    <div
      className="main-background"
      style={{
        backgroundImage: `radial-gradient(circle farthest-side at ${Math.round(
          Math.random() * 100
        )}% ${Math.round(
          Math.random() * 50
        )}%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
      }}
    />
  );
}
