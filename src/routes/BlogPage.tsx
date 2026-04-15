import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How Digital Health Records Are Transforming Patient Care",
      excerpt: "Discover how electronic health records are revolutionizing the way doctors and patients interact, improving outcomes and reducing medical errors.",
      category: "Healthcare Innovation",
      author: "Dr. Priya Sharma",
      date: "April 10, 2026",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f477?w=600&h=400&fit=crop",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Telemedicine: What Patients Need to Know",
      excerpt: "Telemedicine is reshaping how healthcare is delivered. Learn about the benefits, challenges, and what the future holds for remote healthcare.",
      category: "Telemedicine",
      author: "Dr. Rajesh Kumar",
      date: "April 8, 2026",
      image: "https://images.unsplash.com/photo-1631217b5f58-dba405e3d033?w=600&h=400&fit=crop",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Data Privacy in Healthcare: A Comprehensive Guide",
      excerpt: "Understanding HIPAA, data encryption, and why your medical information security matters more than ever.",
      category: "Security",
      author: "Aisha Patel",
      date: "April 5, 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "QR Codes in Healthcare: More Than Just Contact Tracing",
      excerpt: "Explore how QR technology is streamlining patient access, appointment booking, and medical record sharing.",
      category: "Technology",
      author: "Dr. Arjun Singh",
      date: "April 1, 2026",
      image: "https://images.unsplash.com/photo-1551534881-eb4d0dabe06b?w=600&h=400&fit=crop",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Hospital Digitalization: Success Stories from India",
      excerpt: "Five leading hospitals share their journey towards complete digital transformation and the improvements they've achieved.",
      category: "Case Study",
      author: "Healthcare Today",
      date: "March 28, 2026",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=400&fit=crop",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Artificial Intelligence in Diagnostics: The Next Frontier",
      excerpt: "How AI and machine learning are assisting doctors in accurate diagnosis and personalized treatment plans.",
      category: "AI & Healthcare",
      author: "Dr. Meera Desai",
      date: "March 25, 2026",
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=600&h=400&fit=crop",
      readTime: "9 min read",
      featured: false,
    },
  ]

  const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-border overflow-hidden bg-card hover:shadow-xl transition-shadow"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-80 md:h-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
            {post.category}
          </span>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-muted-foreground mb-6 text-lg">{post.excerpt}</p>
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <span className="ml-auto text-primary">{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold group">
            Read Full Article
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const PostCard = ({ post, delay }: { post: typeof blogPosts[0]; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg transition-all hover:scale-105"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
          {post.category}
        </span>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold text-sm group cursor-pointer">
          Read More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Health & Tech Blog</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Latest Insights in{" "}
              <span className="text-gradient-brand">Digital Healthcare</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Expert articles, case studies, and insights on the future of healthcare technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            {blogPosts.filter(p => p.featured).map((post, i) => (
              <div key={post.id} className={i > 0 ? "mt-12" : ""}>
                <FeaturedPost post={post} />
              </div>
            ))}
          </div>

          <SectionHeading badge="Latest Articles" title="More from Our Blog" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.filter(p => !p.featured).map((post, i) => (
              <PostCard key={post.id} post={post} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest healthcare technology insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              <button className="rounded-xl gradient-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
