import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageViewer = ({ src, alt, isOpen, onClose }: ImageViewerProps) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleClose = () => {
    setScale(1);
    setRotation(0);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={handleClose}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <ZoomOut className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <ZoomIn className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            handleRotate();
          }}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <RotateCw className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleClose}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Scale indicator */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
        {Math.round(scale * 100)}%
      </div>

      {/* Image */}
      <div 
        className="max-w-[90vw] max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
};
