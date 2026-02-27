import { Star } from "lucide-react";

interface ReviewCardProps {
  imagem: string;
  nome: string;
  texto: string;
  estrelas: number;
}

/** Card de review com foto, estrelas e texto */
export default function ReviewCard({ imagem, nome, texto, estrelas }: ReviewCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--glow-red)/0.1)]">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imagem}
          alt={nome}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/40"
        />
        <div>
          <h4 className="font-display font-semibold text-foreground">{nome}</h4>
          <div className="flex gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < estrelas ? "fill-primary text-primary" : "text-muted-foreground"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{texto}</p>
    </div>
  );
}
