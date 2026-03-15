"use client"
export default function LoadingScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // width: "200vh",
      }}
    >
      <video width="400" height="900" autoPlay loop muted playsInline>
        <source
          src="https://cdn.dribbble.com/userupload/44119068/file/original-1af23a98d3537688bec07bd87239b7e2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
