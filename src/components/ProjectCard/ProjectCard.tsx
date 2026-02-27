import { Eye } from "lucide-react";

interface ProjectCardProps {
  nome: string;
  src: string;
  onClick?: () => void;
}

/** Card de produto com hover sofisticado (zoom + overlay + ícone) */
export default function ProjectCard({ nome, src, onClick }: ProjectCardProps) {
  return (
    <div className="product-card group" onClick={onClick}>
      <div className="aspect-square overflow-hidden">
        <img
          src={src}
          alt={nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3">
        <Eye className="text-primary" size={28} />
        <span className="font-display text-sm uppercase tracking-wider text-foreground">
          {nome}
        </span>
      </div>
    </div>
  );
}
