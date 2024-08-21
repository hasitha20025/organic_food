export default function AboutUs() {
    return (
      <>
        <h2 className="text-center text-2xl font-bold mb-4 text-primary">Learn More About Us</h2>
        <div className="flex justify-center items-center mt-4">
          <div className="relative w-full max-w-4xl h-60 md:h-80 lg:h-96 aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/gUyez3KFarY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
  