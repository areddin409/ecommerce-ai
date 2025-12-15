import { sanityFetch } from "@/sanity/lib/live"
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories"

export default async function Home() {
  //fetch categories for filter sidebar
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY
  })
  return (
    <div className="">
      {/* Feature Products Carousel */}

      {/* Page Banner */}
      {/* Category Tiles */}
      {/* Products Section */}
    </div>
  )
}
