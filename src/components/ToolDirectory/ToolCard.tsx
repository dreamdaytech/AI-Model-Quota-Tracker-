import React, { useState } from 'react';
import { ExternalLink, Edit2, Trash2, Tag, ChevronDown, ChevronUp, Key, DollarSign, Info } from 'lucide-react';
import { ResourceTool } from '../../types';

interface ToolCardProps {
  tool: ResourceTool;
  onEdit: (tool: ResourceTool) => void;
  onDelete: (id: string) => void;
}

export function ToolCard({ tool, onEdit, onDelete }: ToolCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-blue-900/5 group">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
              {tool.name}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
              {tool.category}
            </span>
          </div>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {tool.description}
          </p>

          {(tool.tags && tool.tags.length > 0) && (
            <div className="flex items-center gap-1.5 flex-wrap mb-4">
              <Tag className="w-3.5 h-3.5 text-zinc-400" />
              {tool.tags.map(tag => (
                <span key={tag} className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button 
            onClick={() => onEdit(tool)}
            className="p-1.5 text-zinc-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onDelete(tool.id)}
            className="p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-2 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-700/50"
        >
          <ExternalLink className="w-4 h-4" />
          Visit Site
        </a>
        
        {(tool.details || tool.pricingModel || tool.loginNotes) && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center gap-1 py-2 px-3 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 text-sm font-medium rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            {expanded ? 'Less Info' : 'More Info'}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {expanded && (
        <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-xl border border-zinc-100 dark:border-zinc-700/50 text-sm space-y-3 animate-slide-in">
          {tool.pricingModel && (
            <div className="flex gap-2 text-zinc-700 dark:text-zinc-300">
              <DollarSign className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">Pricing</span>
                {tool.pricingModel}
              </div>
            </div>
          )}
          
          {tool.loginNotes && (
            <div className="flex gap-2 text-zinc-700 dark:text-zinc-300">
              <Key className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">Login Notes</span>
                {tool.loginNotes}
              </div>
            </div>
          )}

          {tool.details && (
            <div className="flex gap-2 text-zinc-700 dark:text-zinc-300">
              <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">Details</span>
                <p className="whitespace-pre-wrap">{tool.details}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
