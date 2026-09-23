// 📁 File: components/proposal-card.tsx
import React from "react";
import { Sparkles, Copy, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalCardProps {
  content: string;
  matchScore?: string;
  generationTime?: string;
}

export default function ProposalCard({ content, matchScore = "98.4%", generationTime = "2.1s" }: ProposalCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-card/90 border border-primary/20 rounded-2xl shadow-xl shadow-primary/5 overflow-hidden backdrop-blur-md transition-all">
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-muted/40 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-foreground">GigThink Elite Proposal</h4>
            <span className="text-[10px] text-muted-foreground font-mono">Optimized for high conversion</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            Match: {matchScore}
          </span>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground hidden sm:inline-block">
             {generationTime}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="h-7 px-2.5 text-xs gap-1.5 border-border/60 hover:bg-primary/5 hover:text-primary transition-colors"
            onClick={handleCopy}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </Button>
        </div>
      </div>

      {/* Card Body / Proposal Content */}
      <div className="p-5 sm:p-6 text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap font-sans">
        {content}
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between px-5 py-3 bg-muted/20 border-t border-border/40 text-xs text-muted-foreground">
        <span>Ready to close the deal? Send directly or tweak as needed.</span>
        <Button 
          size="sm" 
          className="h-8 gap-1.5 px-4 font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          onClick={handleCopy}
        >
          <Send className="w-3.5 h-3.5" />
          Use Proposal
        </Button>
      </div>
    </div>
  );
}
