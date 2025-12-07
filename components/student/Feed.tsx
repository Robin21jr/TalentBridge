import React, { useState } from 'react';
import { FEED_POSTS } from '../../constants';
import { Heart, MessageCircle, Bookmark, Send, Plus, CheckCircle, MoreHorizontal } from 'lucide-react';

export const Feed: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Employers'>('All');

  const filteredPosts = filter === 'All' 
    ? FEED_POSTS 
    : FEED_POSTS.filter(p => p.isEmployer);

  return (
    <div className="pb-20">
      <div className="bg-black sticky top-0 z-10 p-4 border-b border-slate-800 flex items-center gap-3">
         <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold">M</div>
         <h1 className="text-xl font-bold text-white">Inicio</h1>
      </div>

      <div className="px-4 py-3">
        <div className="flex gap-2 mb-4">
           <button 
             onClick={() => setFilter('All')}
             className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'All' ? 'bg-white text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
           >
             Todo
           </button>
           <button 
             onClick={() => setFilter('Employers')}
             className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === 'Employers' ? 'bg-white text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
           >
             <CheckCircle size={14} /> Empleadores
           </button>
        </div>

        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-black text-white rounded-lg">
               <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                     {post.authorAvatar ? (
                        <img src={post.authorAvatar} alt="" className="w-10 h-10 rounded-full bg-slate-800" />
                     ) : (
                        <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-bold">
                           {post.author[0]}
                        </div>
                     )}
                     <div>
                        <div className="flex items-center gap-2">
                           <span className="font-bold text-sm">{post.author}</span>
                           <span className="text-slate-500 text-xs">{post.timeAgo}</span>
                        </div>
                        <div className="text-xs text-slate-400 truncate w-48">{post.authorRole}</div>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="text-xs font-bold border border-slate-600 rounded-full px-3 py-1 hover:bg-slate-800">Seguir</button>
                     <MoreHorizontal className="text-slate-400" size={20} />
                  </div>
               </div>

               <div className="mb-3 text-sm whitespace-pre-wrap leading-relaxed">
                  {post.content.length > 150 ? (
                     <>
                        {post.content.substring(0, 150)}... <span className="text-blue-400">Más</span>
                     </>
                  ) : post.content}
               </div>

               {post.image && (
                  <div className="rounded-xl overflow-hidden mb-4 border border-slate-800">
                     <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-64" />
                     {/* Mock link overlay for employer posts */}
                     {post.isEmployer && (
                        <div className="bg-slate-900 p-3 flex items-center gap-2">
                           <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-black text-xs">
                              {post.author[0]}
                           </div>
                           <div className="flex-1 overflow-hidden">
                              <div className="text-xs font-bold truncate">{post.content.split('\n')[0]}</div>
                              <div className="text-[10px] text-slate-500 truncate">link.talentbridge.com</div>
                           </div>
                        </div>
                     )}
                  </div>
               )}

               <div className="flex items-center justify-between text-slate-400">
                  <div className="flex gap-6">
                     <button className="hover:text-red-500 transition-colors"><Heart size={22} /></button>
                     <button className="hover:text-blue-400 transition-colors"><MessageCircle size={22} /></button>
                     <button className="hover:text-green-400 transition-colors"><Send size={22} /></button>
                  </div>
                  <button className="hover:text-white transition-colors"><Bookmark size={22} /></button>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:scale-105 transition-transform">
         <Plus size={28} />
      </button>
    </div>
  );
};
