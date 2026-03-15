"use client";
export default function LoadingScreen() {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     // backgroundColor: "#010001",
    //     background: "linear-gradient(135deg, #010001, #021a1a, #000000)",

    //     // width: "200vh",
    //   }}
    // >
    //   <video width="400" height="900" autoPlay loop muted playsInline>
    //     <source
    //       src="https://cdn.dribbble.com/userupload/44119068/file/original-1af23a98d3537688bec07bd87239b7e2.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #010001, #021a1a, #000000)",
      }}
    >
      <div className="w-[40%]">
        <p className="typewriter">
          FoxTrade provides clear and simple charts that help traders quickly
          understand market trends without complexity. Our platform uses AI to
          support smarter decisions while identifying potential risks. FoxTrade
          also analyzes AI vulnerabilities and LLM-driven risks to improve
          safety, helping users trade with better awareness and confidence.
        </p>
      </div>
      <div
        style={{
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 80px rgba(0,255,170,0.3)",
        }}
      >
        {/* <img src="/cat.png" style={{ width: "300px" }} /> */}
        <video width="400" height="100" autoPlay loop muted playsInline>
          <source
            src="https://cdn.dribbble.com/userupload/44119068/file/original-1af23a98d3537688bec07bd87239b7e2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
