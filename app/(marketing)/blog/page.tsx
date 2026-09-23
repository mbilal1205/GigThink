import { getAllPosts, getFeaturedPost, getAllCategories, searchPosts, getPostsByCategory } from "@/data/blog-content";
import FeaturedArticle from "@/components/blog-sections/FeaturedArticle";
import BlogCard from "@/components/blog-sections/BlogCard";
import CategoryPills from "@/components/blog-sections/CategoryPills";
import SearchBar from "@/components/blog-sections/SearchBar";
import BlogCTA from "@/components/blog-sections/BlogCTA";

export const metadata = {
  title: "GigThink Blog | Insights for Client Acquisition, Lead Gen & AI Automation",
  description:
    "Actionable insights on client acquisition, lead generation, freelancing, agency growth, AI automation, and more. Learn how to win more clients with smarter systems.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const query = params.q;
  const category = params.category;

  const categories = getAllCategories();
  const featured = getFeaturedPost();

  let displayedPosts = getAllPosts();

  if (query) {
    displayedPosts = searchPosts(query);
  } else if (category) {
    displayedPosts = getPostsByCategory(category);
  }

  // Remove featured from displayed list if it's there (so we don't duplicate)
  const latestPosts = displayedPosts.filter((post) => post.slug !== featured?.slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-headings">
              <span className="heading-gradient">GigThink Blog</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights for finding and winning more clients with smarter systems.
            </p>
            <div className="mt-8">
              <SearchBar />
            </div>
          </div>

          {/* Category Pills */}
          <div className="mb-10">
            <CategoryPills categories={categories} activeSlug={category} />
          </div>

          {/* Featured Article */}
          {featured && !query && !category && (
            <FeaturedArticle post={featured} />
          )}

          {/* Articles Grid */}
          {query || category ? (
            <div className="mb-8 text-center text-muted-foreground">
              {query ? `Search results for "${query}"` : `Category: ${category}`}
            </div>
          ) : (
            <h2 className="text-2xl font-heading font-bold text-headings mb-6">Latest Articles</h2>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => <BlogCard key={post.slug} post={post} />)
            ) : (
              <div className="col-span-full text-center text-muted-foreground py-12">
                No articles found. Try a different search or category.
              </div>
            )}
          </div>
        </div>
      </section>

      <BlogCTA />
    </main>
  );
}