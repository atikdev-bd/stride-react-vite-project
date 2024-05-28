import backgroundImage from "../../assets/backgraundImg/leaves-6975462_1280.png";
export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
