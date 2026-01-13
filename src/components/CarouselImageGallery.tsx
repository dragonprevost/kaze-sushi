import Image from "next/image";

interface CarouselImageGallery {
  images: { src: string; caption: string }[];
}

const CarouselImageGallery: React.FC<CarouselImageGallery> = ({images}) => {
  return (
    <section id="images" className="py-10">
      <h2 className="text-3xl font-bold text-primary mb-4">Our Work</h2>
      
      {/* Horizontal Scrolling Gallery */}
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {images.map(({src, caption}, idx) => (
          <div key={idx} className="flex-shrink-0 w-80 relative group">
            <Image
              src={src}
              alt={caption}
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-200 ease-in-out group-hover:scale-105"
            />
            {/* Optional Caption */}
            <div className="absolute inset-0 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex items-center justify-center">
              <p className="text-surface text-lg">Project {idx + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


