import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Camera, 
  FileText, 
  HelpCircle, 
  X
} from 'lucide-react';
import { CONTENT_CHECKLIST } from '../data/siteContent';

interface ContentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentChecklistModal: React.FC<ContentChecklistModalProps> = ({ isOpen, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleItem = (itemKey: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white max-w-2xl w-full rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <span className="p-3 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
            <HelpCircle className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-sans flex items-center gap-2">
              Content Production Checklist for Uttam Foundries Team
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Visuals to capture & internal data to collect to replace placeholders
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {CONTENT_CHECKLIST.map((group: { category: string; items: string[] }, groupIdx: number) => (
            <div key={groupIdx} className="space-y-3">
              <h4 className="text-sm font-bold text-amber-800 font-mono flex items-center gap-2">
                {groupIdx === 0 ? <Camera className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                {group.category}
              </h4>

              <div className="space-y-2">
                {group.items.map((item: string, itemIdx: number) => {
                  const itemKey = `${groupIdx}-${itemIdx}`;
                  const isDone = checkedItems[itemKey] || false;
                  return (
                    <div
                      key={itemIdx}
                      onClick={() => toggleItem(itemKey)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <span className="mt-0.5 text-amber-600">
                        {isDone ? <CheckSquare className="w-4 h-4 text-emerald-600" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </span>
                      <span className={isDone ? 'line-through opacity-80' : ''}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
          <span className="font-semibold text-amber-800 block font-mono">
            Implementation Tip:
          </span>
          <p>
            Once you capture the 4K video clips or studio photos, simply place the media files into <code className="font-mono text-amber-700 font-bold">src/assets/</code> and update the paths in <code className="font-mono text-amber-700 font-bold">src/data/siteContent.ts</code>.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-xs"
          >
            Got It, Close Checklist
          </button>
        </div>

      </div>
    </div>
  );
};
