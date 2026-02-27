import { useEffect } from "react";
import { X } from "lucide-react";

interface Product {
  id: number;
  nome: string;
  categoria: string;
  src: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

/** Modal de produto com animação suave, fecha com ESC ou click fora */
export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-card border border-border rounded-2xl max-w-lg w-full overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <img
          src={product.src}
          alt={product.nome}
          className="w-full aspect-square object-cover"
        />

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {product.nome}
          </h3>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-display uppercase tracking-wider">
            {product.categoria}
          </span>
        </div>
      </div>
    </div>
  );
}
