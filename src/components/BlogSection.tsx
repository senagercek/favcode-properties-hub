import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

const posts = [
  {
    image: blog1,
    title: "Ev Alırken Dikkat Edilmesi Gereken 10 Şey",
    excerpt: "Emlak yatırımı yapmadan önce bilmeniz gereken önemli detaylar ve uzman tavsiyeleri.",
    date: "15 Mart 2026",
    category: "Satın Alma",
  },
  {
    image: blog2,
    title: "2026 Mutfak Tasarım Trendleri",
    excerpt: "Modern evlerde mutfak tasarımında öne çıkan trendler ve ilham veren fikirler.",
    date: "10 Mart 2026",
    category: "Dekorasyon",
  },
  {
    image: blog3,
    title: "Yatırım İçin En İyi Bölgeler",
    excerpt: "Türkiye'de emlak yatırımı için en kazançlı ve gelecek vadeden lokasyonlar.",
    date: "5 Mart 2026",
    category: "Yatırım",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emlak <span className="text-gradient-primary">İpuçları</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Uzmanlarımızdan güncel emlak haberleri ve faydalı bilgiler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Devamını Oku
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
