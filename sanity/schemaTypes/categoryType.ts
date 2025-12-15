import { TagIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

/**
 * Category Document Schema
 *
 * Represents a product category used for organizing and filtering products.
 * Categories help customers navigate the product catalog and find items by type.
 *
 * @field title - Category name (required)
 * @field slug - URL-friendly identifier auto-generated from title (required, max 96 chars)
 * @field image - Category thumbnail/hero image with hotspot cropping support
 *
 * @preview Displays category title with thumbnail image
 *
 * @example
 * {
 *   title: "Living Room",
 *   slug: { current: "living-room" },
 *   image: { asset: { _ref: "image-xyz" } }
 * }
 */
export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The display name of the category (e.g., 'Living Room', 'Bedroom', 'Dining')",
      validation: (rule) => [
        rule.required().error("Category title is required")
      ]
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      description:
        "URL-friendly identifier for the category. Auto-generated from title. Used in product filtering and navigation.",
      validation: (rule) => [
        rule.required().error("Slug is required for URL generation")
      ]
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      description:
        "Category thumbnail or hero image. Hotspot allows precise focal point for responsive cropping."
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
})
