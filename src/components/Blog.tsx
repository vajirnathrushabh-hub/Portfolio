import React, { useState, useEffect } from 'react';
import { initialBlogPosts } from '../data';
import { BlogPost } from '../types';
import { Search, BookOpen, ThumbsUp, Calendar, Clock, Plus, Trash2, X, FileText, MessageSquare } from 'lucide-react';

interface BlogProps {
  adminMode: boolean;
}

export default function Blog({ adminMode }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Administrative Drafting states
  const [draftTitle, setDraftTitle] = useState('');
  const [draftCategory, setDraftCategory] = useState('Social Media');
  const [draftSummary, setDraftSummary] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftImage, setDraftImage] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);

  // Comment state inside reader
  const [readerComment, setReaderComment] = useState('');

  // Load posts from localStorage or default list
  useEffect(() => {
    const savedPosts = localStorage.getItem('rushabh_blog_posts');
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch (err) {
        setPosts(initialBlogPosts);
      }
    } else {
      setPosts(initialBlogPosts);
    }
  }, []);

  // Save posts to localStorage when altered
  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('rushabh_blog_posts', JSON.stringify(newPosts));
  };

  // Like a blog post
  const handleLikePost = (postId: string) => {
    const updated = posts.map((post) => {
      if (post.id === postId) {
        const incremented = { ...post, likes: post.likes + 1 };
        if (readingPost && readingPost.id === postId) {
          setReadingPost(incremented);
        }
        return incremented;
      }
      return post;
    });
    savePosts(updated);
  };

  // Add Comment on article reader
  const handleAddBlogComment = (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    if (!readerComment.trim()) return;

    const freshComment = {
      user: 'Anonymous_Reader',
      text: readerComment.trim(),
      time: 'Just now',
    };

    const updated = posts.map((post) => {
      if (post.id === postId) {
        const currentComments = post.comments || [];
        const updatedPost = {
          ...post,
          comments: [freshComment, ...currentComments],
        };
        setReadingPost(updatedPost);
        return updatedPost;
      }
      return post;
    });

    savePosts(updated);
    setReaderComment('');
  };

  // Administrative: Create New Post
  const handlePublishPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftTitle.trim() || !draftSummary.trim() || !draftContent.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    const defaultImage = draftImage.trim() || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
    const cleanCategory = draftCategory;

    const newPost: BlogPost = {
      id: `custom_blog_${Date.now()}`,
      title: draftTitle.trim(),
      category: cleanCategory,
      summary: draftSummary.trim(),
      content: draftContent.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      author: 'Rushabh Vajirnath',
      readTime: `${Math.max(1, Math.ceil(draftContent.split(' ').length / 150))} min read`,
      coverImage: defaultImage,
      likes: 0,
      comments: [],
    };

    const updated = [newPost, ...posts];
    savePosts(updated);

    // Reset Drafting States
    setDraftTitle('');
    setDraftSummary('');
    setDraftContent('');
    setDraftImage('');
    setEditorOpen(false);
  };

  // Administrative: Delete post
  const handleDeletePost = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this blog post? This cannot be undone.')) {
      const updated = posts.filter((p) => p.id !== postId);
      savePosts(updated);
    }
  };

  // Filter & Search Logic
  const categories = ['All', 'Social Media', 'Website Design', 'Digital Marketing'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
            CREATOR DIARY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-1 mb-4 uppercase italic tracking-tighter leading-[0.95]">
            Insights, Strategies, & Industry Secrets
          </h2>
          <p className="font-sans text-base text-gray-400">
            I write detailed articles breaking down active marketing algorithms, layout design guidelines, and business branding tactics that you can implement today.
          </p>
        </div>

        {/* Sandbox Admin Drafting Console - Only shown in adminMode */}
        {adminMode && (
          <div className="glass-card border border-brand-pink/30 rounded-3xl p-6 mb-12 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-pink/10 blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-pink animate-bounce" />
                <h3 className="font-display font-bold text-lg text-white">Rushabh's Sandbox Drafting Studio</h3>
              </div>
              <button
                onClick={() => setEditorOpen(!editorOpen)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-pink text-black hover:bg-white font-sans text-xs font-black uppercase tracking-wider transition-colors"
              >
                <Plus className={`h-4 w-4 transition-transform ${editorOpen ? 'rotate-45' : ''}`} />
                <span>{editorOpen ? 'Collapse Editor' : 'Draft New Article'}</span>
              </button>
            </div>

            {editorOpen && (
              <form onSubmit={handlePublishPost} className="space-y-4 pt-4 border-t border-white/5 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Post Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 10 Best Hooks For Video Content"
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-gray-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Category *
                    </label>
                    <select
                      value={draftCategory}
                      onChange={(e) => setDraftCategory(e.target.value)}
                      className="w-full bg-brand-card border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-2.5 font-sans text-sm text-white focus:outline-none"
                    >
                      <option value="Social Media">Social Media</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Post Summary (Short Intro Card text) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="A short snippet explaining what the article is about..."
                      value={draftSummary}
                      onChange={(e) => setDraftSummary(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-gray-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Cover Image Unsplash URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="e.g. https://images.unsplash.com/photo-..."
                      value={draftImage}
                      onChange={(e) => setDraftImage(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                    Article Full Body (Use markdown, markdown elements look great!) *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="## Introduction \nWrite your paragraphs and tips here. You can use markdown headers like ## to structure your content..."
                    value={draftContent}
                    onChange={(e) => setDraftContent(e.target.value)}
                    className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditorOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-gray-300 transition-all"
                  >
                    Cancel Draft
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Publish Article</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filters and Search Hub */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Quick Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? 'bg-brand-pink text-black border-brand-pink font-black shadow-md shadow-brand-pink/15'
                    : 'bg-white/5 text-gray-400 hover:text-white border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl pl-10 pr-4 py-2.5 font-sans text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-gray-500 hover:text-white focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setReadingPost(post)}
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-brand-pink/30 transition-all flex flex-col justify-between"
              >
                {/* Cover Image */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-brand-card">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-80" />

                  {/* Category tag on image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-white bg-brand-pink/85 backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  {/* Sandbox Delete Button (only in adminMode) */}
                  {adminMode && (
                    <button
                      onClick={(e) => handleDeletePost(post.id, e)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-brand-dark/80 hover:bg-red-500 text-gray-400 hover:text-white transition-colors"
                      title="Delete This Post"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Info and content summary */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    {/* Timestamp line */}
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read More dynamic bottom footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-brand-pink group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5 font-sans uppercase tracking-wider text-[11px] font-black">
                      <BookOpen className="h-4 w-4" />
                      Read Full Article
                    </span>
                    <div className="flex items-center gap-3 text-gray-500 text-[10px] font-mono">
                      <span className="flex items-center gap-0.5">
                        <ThumbsUp className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <MessageSquare className="h-3 w-3" />
                        {post.comments ? post.comments.length : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-gray-400 text-sm">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs text-brand-pink font-semibold mt-3 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Immersive Article Reader Overlay */}
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md">
            <div
              className="relative w-full max-w-3xl bg-brand-card rounded-3xl border border-white/10 shadow-2xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button sticky top right */}
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-pink text-white border border-white/10 transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Banner */}
              <div className="relative aspect-[16/9] w-full bg-brand-dark">
                <img
                  src={readingPost.coverImage}
                  alt={readingPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-dark/30 to-transparent" />

                {/* Categories & Stats */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="px-2.5 py-1 rounded bg-brand-pink text-[9px] font-bold uppercase text-white tracking-widest">
                    {readingPost.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 leading-tight">
                    {readingPost.title}
                  </h1>
                </div>
              </div>

              {/* Blog Article Core Text & Interactive Section */}
              <div className="p-6 sm:p-10 text-left">
                {/* Author Info header line */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-8 text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-brand-pink/20 flex items-center justify-center font-display font-semibold text-brand-pink">
                      RV
                    </div>
                    <div>
                      <p className="font-semibold text-white leading-none">{readingPost.author}</p>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{readingPost.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-[10px] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                      {readingPost.readTime}
                    </span>
                    <button
                      onClick={() => handleLikePost(readingPost.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-pink/10 hover:bg-brand-pink text-gray-400 hover:text-white transition-all focus:outline-none"
                    >
                      <ThumbsUp className="h-3.5 w-3.5 text-brand-pink group-hover:text-white" />
                      <span>{readingPost.likes} Likes</span>
                    </button>
                  </div>
                </div>

                {/* Article Content - Formatted as neat markdown readable blocks */}
                <div className="prose prose-invert max-w-none text-gray-300 font-sans text-sm sm:text-base leading-relaxed space-y-6">
                  {readingPost.content.split('\n\n').map((block, idx) => {
                    const trimmed = block.trim();
                    if (trimmed.startsWith('## ')) {
                      return (
                        <h2 key={idx} className="font-display font-bold text-lg sm:text-xl text-white pt-4 pb-1 border-b border-white/5 tracking-tight">
                          {trimmed.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="font-display font-semibold text-base text-brand-cyan pt-2">
                          {trimmed.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith('- ')) {
                      return (
                        <ul key={idx} className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
                          {trimmed.split('\n').map((li, i) => (
                            <li key={i}>{li.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="text-gray-300 text-xs sm:text-sm">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>

                <hr className="border-white/5 my-10" />

                {/* Article Comments Thread */}
                <div className="space-y-6">
                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="h-4.5 w-4.5 text-brand-purple" />
                    Reader Discussion ({readingPost.comments ? readingPost.comments.length : 0})
                  </h3>

                  {/* Add blog comment form */}
                  <form onSubmit={(e) => handleAddBlogComment(e, readingPost.id)} className="flex flex-col sm:flex-row items-end gap-3 bg-white/3 p-4 rounded-2xl border border-white/5">
                    <div className="w-full">
                      <label className="block text-[9px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">
                        Join the conversation
                      </label>
                      <input
                        type="text"
                        placeholder="Write your thoughts about this strategy..."
                        value={readerComment}
                        onChange={(e) => setReaderComment(e.target.value)}
                        className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-2 font-sans text-xs text-white placeholder-gray-500 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!readerComment.trim()}
                      className="px-5 py-2.5 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-wider shadow-md transition-all shrink-0 cursor-pointer"
                    >
                      Comment
                    </button>
                  </form>

                  {/* Scrollable list of comments */}
                  <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2">
                    {readingPost.comments && readingPost.comments.length > 0 ? (
                      readingPost.comments.map((c, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-white/2 border border-white/5 text-left animate-fade-in"
                        >
                          <div className="flex items-center justify-between mb-1 text-xs">
                            <span className="font-semibold text-brand-cyan">{c.user}</span>
                            <span className="text-[10px] font-mono text-gray-500">{c.time}</span>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed">{c.text}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-500 italic py-6 text-center">No comments written yet. Be the first to start the talk!</p>
                    )}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-10 flex justify-end gap-3">
                  <button
                    onClick={() => setReadingPost(null)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-gray-400 transition-all"
                  >
                    Close Article
                  </button>
                  <a
                    href="https://wa.me/918767344352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-wider shadow-md transition-all"
                  >
                    Discuss With Rushabh
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
